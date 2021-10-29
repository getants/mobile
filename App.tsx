import 'react-native-gesture-handler'; // This one must be on top
import React, { useState, useEffect } from 'react';
import { Provider as JotaiProvider } from 'jotai';
import * as Sentry from 'sentry-expo';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox, Platform } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import { NhostAuthProvider } from '@nhost/react-auth';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import type { NavigationState } from '@react-navigation/native';

import { RootStack } from '@/stacks';
import { Flex, Text } from '@/components';
import {
  NAVIGATION_STATE,
  SENTRY_DSN,
  customTheme,
} from '@/utils/constants';
import { globalState, initialState as initialJotaiState } from '@/utils/states';
// import { nhost } from '@/utils/nhost'; // TODO: Wait for the fix in @nhost/hasura-auth-js

// There are warnings that we can't have resource to fix, ignore now
LogBox.ignoreLogs(['Warning:', 'Constants.deviceYearClass']);

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true,
});

enableScreens();

// console.log('### nhost: ', nhost);
console.log('### NhostAuthProvider: ', NhostAuthProvider);
console.log('### NhostApolloProvider: ', NhostApolloProvider);

const App = () => {
  const colorScheme = useColorScheme();

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  // Warming the browser to speed up the login
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(NAVIGATION_STATE);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  const handleOnStateChange = (state: NavigationState | undefined) => {
    AsyncStorage.setItem(NAVIGATION_STATE, JSON.stringify(state ?? {}));
  };

  if (!isReady) {
    return (
      <Flex align="center" justify="center" height="100%">
        <Text>Loading...</Text>
      </Flex>
    );
  }

  return (
    <JotaiProvider initialValues={[[globalState, initialJotaiState]]}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={handleOnStateChange}
      >
        <ThemeProvider
          useDark={colorScheme === 'dark'}
          theme={customTheme}
        >
          <RootStack />
        </ThemeProvider>
      </NavigationContainer>
    </JotaiProvider>
  );
};

export default App;

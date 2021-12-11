import 'react-native-gesture-handler'; // NOTE: This one must be on top

import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sentry from 'sentry-expo';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Provider as JotaiProvider } from 'jotai';
import { LogBox, Platform, Text } from 'react-native';
import { NhostAuthProvider } from '@nhost/react-auth';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IconRegistry } from '@ui-kitten/components';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import type { NavigationState } from '@react-navigation/native';

import { RootStack } from './stacks';
import { Flex, ThemeProvider } from './components';
import { NAVIGATION_STATE, SENTRY_DSN } from './utils/constants';
import { globalState, initialState } from './utils/states';
import { nhost } from './utils/nhost';

// global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

// There are warnings that we can't have resource to fix, ignore now
LogBox.ignoreLogs(['Warning:', 'Constants.deviceYearClass']);

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true,
});

enableScreens();

const App = () => {
  const [isReady, setReady] = useState(false);
  const [navigationState, setNavigationState] = useState();

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

        // Only restore state if there's no deep link and we're not on web
        if (Platform.OS !== 'web' && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(NAVIGATION_STATE);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setNavigationState(state);
          }
        }
      } finally {
        setReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  const handleNavigationStateChange = (state: NavigationState | undefined) => {
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
    <JotaiProvider initialValues={[[globalState, initialState]]}>
      <NhostAuthProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <NavigationContainer
            initialState={navigationState}
            onStateChange={handleNavigationStateChange}
          >
            <IconRegistry icons={EvaIconsPack} />
            <ThemeProvider>
              <RootStack />
            </ThemeProvider>
          </NavigationContainer>
        </NhostApolloProvider>
      </NhostAuthProvider>
    </JotaiProvider>
  );
};

export default App;

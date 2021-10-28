import 'react-native-gesture-handler'; // This one must be on top
import React, { useState, useEffect } from 'react';
import * as Sentry from 'sentry-expo';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
// import { NhostAuthProvider } from '@nhost/react-auth';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import type { NavigationState } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { NAVIGATION_STATE, SENTRY_DSN } from '@/utils';

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: true,
});

enableScreens();

const customTheme = {};

const App = () => {
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
      <View style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
      >
        <Text style={{ paddingBottom: 10 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={handleOnStateChange}
    >
      <ThemeProvider theme={customTheme}>
        <Text>Blank app</Text>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;

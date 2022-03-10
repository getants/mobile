import 'react-native-gesture-handler'; // NOTE: This one must be on top

import React, { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import * as Sentry from 'sentry-expo';
// import * as WebBrowser from 'expo-web-browser';
import {
  setNotificationHandler,
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import { Provider as JotaiProvider } from 'jotai';
import { LogBox, Platform, StyleSheet, Text } from 'react-native';
import { NhostAuthProvider } from '@nhost/react-auth';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IconRegistry } from '@ui-kitten/components';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './stacks';
import { View, ThemeProvider } from './components';
import { NAVIGATION_STATE, SENTRY_DSN } from './utils/constants';
import { globalState, initialState } from './utils/states';
import { registerForPushNotificationsAsync } from './utils/notification';
import { useNotifications } from './utils/hooks';
import { nhost } from './utils/nhost';
import type { NavigationState, Subscription } from './utils/types';

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// There are warnings that we can't fix, ignore now
LogBox.ignoreLogs([
  'Warning:',
  'Constants.deviceYearClass',
  'Setting a timer for a long period of time',
]);

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: __DEV__,
});

enableScreens();

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  const [isReady, setReady] = useState(false);
  const [navigationState, setNavigationState] = useState();

  const { setNotificationStates } = useNotifications();

  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  // console.log({ expoPushToken, notification });
  // Warming the browser to speed up the login
  // useEffect(() => {
  //   WebBrowser.warmUpAsync();
  //   return () => {
  //     WebBrowser.coolDownAsync();
  //   };
  // }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        setNotificationStates((prev) => ({ ...prev, hasRegistered: true }));
        if (__DEV__) {
          console.info('> Registered Push Notifications successfully!', token);
        }
      }
    });

    notificationListener.current = addNotificationReceivedListener(
      (response) => {
        setNotificationStates((prev) => ({
          ...prev,
          hasNotification: response,
          hasResponded: undefined,
        }));
      },
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = addNotificationResponseReceivedListener(
      (response) => {
        setNotificationStates((prev) => ({
          ...prev,
          hasNotification: undefined,
          hasResponded: response,
        }));
      },
    );

    return () => {
      if (notificationListener.current && responseListener.current) {
        removeNotificationSubscription(notificationListener.current);
        removeNotificationSubscription(responseListener.current);
      }
    };
  }, [setNotificationStates]);

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
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
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
            <StatusBar style="auto" />
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

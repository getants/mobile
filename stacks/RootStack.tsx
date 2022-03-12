import React, { useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from 'expo-notifications';
import { useAuth, useNotifications } from '../hooks';
import { registerForPushNotificationsAsync } from '../utils/notification';

import { AuthStack } from './AuthStack';
import { InitialStack } from './InitialStack';
import { MainStack } from './MainStack';
import { RootStackEnum } from '../utils/enums';
import type { RootStackParams, Subscription } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  const { isAuthenticated } = useAuth();

  const { setNotificationStates } = useNotifications();

  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {
    if (isAuthenticated) {
      registerForPushNotificationsAsync().then((token) => {
        if (token) {
          setNotificationStates((prev) => ({ ...prev, hasRegistered: true }));
          if (__DEV__) {
            console.info('> Registered Push Notifications!', token);
          }
        }
      });
    }

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
  }, [setNotificationStates, isAuthenticated]);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={RootStackEnum.InitialStack} component={InitialStack} />

      {isAuthenticated ? (
        <Screen name={RootStackEnum.MainStack} component={MainStack} />
      ) : (
        <Screen name={RootStackEnum.AuthStack} component={AuthStack} />
      )}
    </Navigator>
  );
};

import React, { useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from 'expo-notifications';
import { useAuth, useAppStates, useNotifications } from '../hooks';

import { AuthStack } from './AuthStack';
import { InitialStack } from './InitialStack';
import { MainStack } from './MainStack';
import { RootStackEnum } from '../utils/enums';
import type { RootStackParams, Subscription } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  const { isAuthenticated } = useAuth();
  const { appStates } = useAppStates();
  const { setNotificationStates } = useNotifications();

  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {
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

  const screensSwitcher = () => {
    if (!isAuthenticated) {
      return <Screen name={RootStackEnum.AuthStack} component={AuthStack} />;
    }
    if (!appStates.isReady) {
      return (
        <Screen name={RootStackEnum.InitialStack} component={InitialStack} />
      );
    }
    return <Screen name={RootStackEnum.MainStack} component={MainStack} />;
  };

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {screensSwitcher()}
    </Navigator>
  );
};

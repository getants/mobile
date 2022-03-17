import React, { useEffect, useRef } from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from 'expo-notifications';
import {
  useAuth,
  useAppStates,
  useColorScheme,
  useNotifications,
} from '../hooks';

import { AuthStack } from './AuthStack';
import { InitialStack } from './InitialStack';
import { MainStack } from './MainStack';
import { SingleJobScreen } from '../screens/jobs';
import { RootStackEnum } from '../utils/enums';
import type { RootStackParams, Subscription } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  const { isAuthenticated } = useAuth();
  const { appStates } = useAppStates();
  const { setNotificationStates } = useNotifications();
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#111111' : '#FFFFFF';

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
      return (
        <Screen
          options={{ headerShown: false }}
          name={RootStackEnum.AuthStack}
          component={AuthStack}
        />
      );
    }
    if (!appStates.isReady) {
      return (
        <Screen
          options={{ headerShown: false }}
          name={RootStackEnum.InitialStack}
          component={InitialStack}
        />
      );
    }
    return (
      <>
        <Screen
          options={{ headerShown: false }}
          name={RootStackEnum.MainStack}
          component={MainStack}
        />
        <Screen
          name={RootStackEnum.SingleJobScreen}
          component={SingleJobScreen}
          options={() => ({
            header: () => (
              <View
                style={{ height: Constants.statusBarHeight, backgroundColor }}
              />
            ),
          })}
        />
      </>
    );
  };

  return <Navigator>{screensSwitcher()}</Navigator>;
};

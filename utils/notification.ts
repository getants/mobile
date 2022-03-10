import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { isDevice } from 'expo-device';
import {
  AndroidImportance,
  getExpoPushTokenAsync,
  getPermissionsAsync,
  setNotificationChannelAsync,
  requestPermissionsAsync,
} from 'expo-notifications';
import {
  NotificationChannel,
  ASYNC_STORAGE_NOTIFICATIONS_KEY,
  OUR_COLORS,
} from './constants';
import { handleError } from './tokens';
import { ExpoPushToken } from './types';

// Try to get the ExpoPushToken and store it for future
export const issueToken = async () => {
  try {
    const token = await getExpoPushTokenAsync();

    await AsyncStorage.setItem(
      ASYNC_STORAGE_NOTIFICATIONS_KEY,
      JSON.stringify(token),
    );

    return token;
  } catch (err) {
    return handleError(err);
  }
};

// Retrieve the token when we need
export const retrieveToken = async () => {
  try {
    const tokenString = await AsyncStorage.getItem(
      ASYNC_STORAGE_NOTIFICATIONS_KEY,
    );
    if (tokenString) {
      return JSON.parse(tokenString) as ExpoPushToken;
    }
    return null;
  } catch (err) {
    return handleError(err);
  }
};

export const registerForPushNotificationsAsync = async () => {
  let token = null;

  if (isDevice) {
    const { status: existingStatus } = await getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      handleError('Failed to get push token!');
      return null;
    }
    token = await issueToken();
  } else {
    console.info('! Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    await setNotificationChannelAsync(NotificationChannel.Default, {
      vibrationPattern: [0, 250, 250, 250],
      name: 'Notifications',
      importance: AndroidImportance.MAX,
      lightColor: OUR_COLORS.primaryColor,
    });
  }

  return token;
};

import { atom, useAtom } from 'jotai';
import type { Notification, NotificationResponse } from '../types';

type NotificationState = {
  hasRegistered?: boolean;
  hasNotification?: Notification;
  hasResponded?: NotificationResponse;
};

export const notificationAtom = atom<NotificationState>({});

export const useNotifications = () => {
  const [notificationStates, setNotificationStates] = useAtom(notificationAtom);

  return { notificationStates, setNotificationStates };
};

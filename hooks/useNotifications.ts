import { atom, useAtom } from 'jotai';
import type {
  ExpoPushToken,
  Notification,
  NotificationResponse,
} from '../utils/types';

type NotificationState = {
  token: ExpoPushToken | null;
  hasRegistered?: boolean;
  hasNotification?: Notification;
  hasResponded?: NotificationResponse;
};

export const notificationAtom = atom<NotificationState>({
  token: null,
});

export const useNotifications = () => {
  const [notificationStates, setNotificationStates] = useAtom(notificationAtom);

  return { notificationStates, setNotificationStates };
};

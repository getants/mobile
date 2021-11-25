import {
  IMessage as ChatMessage,
  User as ChatUser,
} from 'react-native-gifted-chat';
import type { Message, UserType } from '../../utils/types';

export const convertUser = (u: UserType): ChatUser => ({
  ...u,
  _id: u.id,
  name: u.full_name ?? 'No Name',
  avatar: u.avatar_url ?? '',
});

export const convertMessage = (m: Message): ChatMessage => ({
  ...m,
  _id: m.id,
  text: m.content,
  createdAt: m.created_at,
  user: {
    _id: m.user.id,
    name: m.user.full_name,
    avatar: m.user.avatar_url,
  },
  image: m.image,
  video: m.video,
  audio: m.audio,
  system: m.system,
  sent: true, // do it later
  received: true,
  pending: false,
  // quickReplies: QuickReplies
});

export const isCloseToTop = (nativeEvent: any) => {
  const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
  const remained = contentSize.height - layoutMeasurement.height - 100;
  return remained <= contentOffset.y;
};

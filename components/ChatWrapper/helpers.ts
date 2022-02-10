import { parseISO } from 'date-fns';
import type {
  IMessage as ChatMessage,
  User as ChatUser,
} from 'react-native-gifted-chat';
import type { Messages, NhostUser } from '../../utils/types';

export const convertUser = (u: NhostUser): ChatUser => ({
  ...u,
  _id: u?.id ?? 'no-id',
  name: u?.displayName ?? 'No Name',
  avatar: u?.avatarUrl ?? '',
});

export const convertMessage = (m: Messages): ChatMessage => ({
  ...m,
  _id: m.id,
  text: m.content ?? '',
  createdAt: parseISO(m.created_at),
  user: {
    _id: m.user?.id ?? '',
    name: m.user?.displayName,
    avatar: m.user?.avatarUrl,
  },
  image: m.image ?? undefined,
  video: m.video ?? undefined,
  audio: m.audio ?? undefined,
  system: m.is_bot,
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

import React from 'react';
import type { UIEvent } from 'react';
import { SafeAreaView } from 'react-native';
import { GiftedChat, IMessage as ChatMessage } from 'react-native-gifted-chat';
import { convertUser, isCloseToTop } from './helpers';
import type { UserType } from '../../utils/types';

type Props = {
  isLoading: boolean;
  loadEarlier: () => Promise<void>;
  messages: ChatMessage[];
  onSend: (m: ChatMessage[]) => Promise<void>;
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  user: UserType;
};

export const ChatWrapper: React.FC<Props> = ({
  isLoading,
  loadEarlier,
  messages,
  setMessages,
  user,
  onSend,
}) => {
  const currentUser = convertUser(user);

  const handleOnSend = async (m: ChatMessage[]) => {
    setMessages((prevState) => GiftedChat.append(prevState, m));
    await onSend(m);
  };

  const handleOnScrollTooFast = async ({ nativeEvent }: UIEvent) => {
    if (isCloseToTop(nativeEvent) && !isLoading) {
      await loadEarlier();
    }
  };

  // {isLoading && (
  //   <LoaderScreen
  //     overlay
  //     message="Loading..."
  //     // color={Colors.black}
  //   />
  // )}
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <GiftedChat
        loadEarlier
        infiniteScroll
        isLoadingEarlier={isLoading}
        messages={messages}
        onSend={handleOnSend}
        renderLoadEarlier={() => null}
        user={currentUser}
        listViewProps={{
          removeClippedSubviews: true,
          scrollEventThrottle: 400,
          onScroll: handleOnScrollTooFast,
        }}
      />
    </SafeAreaView>
  );
};

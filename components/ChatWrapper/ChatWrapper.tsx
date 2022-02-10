import React from 'react';
import type { UIEvent } from 'react';
import { SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import type { IMessage as ChatMessage } from 'react-native-gifted-chat';
import { convertUser, isCloseToTop } from './helpers';
import type { NhostUser } from '../../utils/types';

type ChatWrapperProps = {
  isLoading: boolean;
  loadEarlier: () => Promise<void>;
  messages: ChatMessage[];
  onSend: (m: ChatMessage[]) => Promise<void>;
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  user: NhostUser;
};

export const ChatWrapper = ({
  isLoading,
  loadEarlier,
  messages,
  setMessages,
  user,
  onSend,
}: ChatWrapperProps) => {
  const handleOnSend = async (m: ChatMessage[]) => {
    setMessages((prevState) => GiftedChat.append(prevState, m));
    await onSend(m);
  };

  const handleOnScrollTooFast = async ({ nativeEvent }: UIEvent) => {
    if (isCloseToTop(nativeEvent) && !isLoading) {
      await loadEarlier();
    }
  };

  if (!user) {
    return null;
  }

  // {isLoading && (
  //   <LoaderScreen
  //     overlay
  //     message="Loading..."
  //     // color={Colors.black}
  //   />
  // )}

  const currentUser = convertUser(user);

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

import React from 'react';
import { SafeAreaView } from 'react-native';
import type { UIEvent } from 'react';
import { GiftedChat, IMessage as ChatMessage } from 'react-native-gifted-chat';
// import { LoaderScreen } from 'react-native-ui-lib';
import type { UserType } from '../../utils/types';
import { convertUser, isCloseToTop } from './helpers';

type Props = {
  isLoading: boolean;
  loadEarlier: () => Promise<void>;
  messages: ChatMessage[];
  onSend: (m: ChatMessage[]) => Promise<void>;
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  user: UserType;
};

export const ChatWrapper = (props: Props) => {
  const {
    isLoading,
    loadEarlier,
    messages,
    setMessages,
    user,
    onSend,
  } = props;

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* isLoading && (
        <LoaderScreen
          overlay
          color={Colors.black}
          message="Loading..."
        />
      ) */}

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

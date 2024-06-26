import React, {
  useCallback,
  useEffect,
  // useLayoutEffect,
  useMemo,
  useState,
} from 'react';
// import { CommonActions } from '@react-navigation/native';
// import * as Localization from 'expo-localization';
import {
  // GiftedChat,
  IMessage as ChatMessage,
} from 'react-native-gifted-chat';
import {
  ConversationsByPkDocument,
  InsertMessagesOneDocument,
  MessagesAggregateDocument,
  MessagesSubscriptionDocument,
} from '@getants/graphqls';
import { ChatWrapper } from '../../components';
import type {
  ConversationsByPkQuery,
  ConversationsByPkQueryVariables,
  InsertMessagesOneMutation,
  InsertMessagesOneMutationVariables,
  // Messages,
  MessagesAggregateQuery,
  MessagesAggregateQueryVariables,
  MessagesSubscriptionSubscription,
  MessagesSubscriptionSubscriptionVariables,
  SingleConversationScreenNavigationProp,
  SingleConversationScreenRouteProp,
} from '../../utils/types';
import { BOT_KEYWORDS, MESSAGE_QUERY_LIMIT } from '../../utils/constants';
import { OrderBy } from '../../utils/enums';
import {
  useAuth,
  useFocusEffect,
  useIsFocused,
  useMutation,
  useQuery,
  useSubscription,
  useTimeoutFn,
} from '../../hooks';

// const convertMessage = (m: Messages) => ({
//   ...m,
//   _id: m.id,
//   text: m.content,
//   createdAt: m.created_at,
//   user: {
//     _id: m.user?.id,
//     name: m.user?.displayName,
//     avatar: m.user?.avatarUrl,
//   },
//   image: m.image,
//   video: m.video,
//   audio: m.audio,
//   // system: m.is_bot,
//   sent: true, // do it later
//   received: true,
//   pending: false,
//   // quickReplies: QuickReplies
// });

export type Props = {
  route: SingleConversationScreenRouteProp;
  navigation: SingleConversationScreenNavigationProp;
};

export const ConversationScreen: React.FC<Props> = ({ route }) => {
  const {
    conversationId,
    userId,
    // jobId
  } = route?.params ?? {};

  const { user } = useAuth();
  const isFocused = useIsFocused();

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const {
    loading: conversationLoading,
    // data: conversationData,
  } = useQuery<ConversationsByPkQuery, ConversationsByPkQueryVariables>(
    ConversationsByPkDocument,
    {
      variables: { id: conversationId },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  );

  // const handleGoBack = useCallback(() => {
  //   if (jobId) {
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         routes: [
  //           { name: 'MainStack', params: { conversationId: undefined } },
  //         ],
  //       }),
  //     );
  //   } else {
  //     navigation.dispatch(CommonActions.goBack());
  //   }
  // }, [jobId, navigation]);

  // This is used for getting the last message
  const {
    loading: subscriptionLoading,
    data: subscriptionData,
    // error: subscriptionError,
  } = useSubscription<
    MessagesSubscriptionSubscription,
    MessagesSubscriptionSubscriptionVariables
  >(MessagesSubscriptionDocument, {
    variables: {
      limit: 1,
      order_by: [{ created_at: OrderBy.Desc }],
      where: {
        conversation_id: { _eq: conversationId },
      },
    },
  });

  const lastMessage = subscriptionData?.messages_aggregate.nodes[0];

  // the lastMessage given wrong data thus making the oldMessages wrong.
  // We need to find a better wwwway to detect the last message first
  const {
    loading: aggregateLoading,
    data: aggregateData,
    // error: aggregateError,
    fetchMore,
  } = useQuery<MessagesAggregateQuery, MessagesAggregateQueryVariables>(
    MessagesAggregateDocument,
    {
      variables: {
        limit: 20,
        offset: 0,
        order_by: [{ created_at: OrderBy.Desc }],
        where: {
          conversation_id: { _eq: conversationId },
        },
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  );

  const olderMessages = useMemo(
    () => aggregateData?.messages_aggregate.nodes ?? [],
    [aggregateData],
  );

  const handleLoadEarlier = async () => {
    await fetchMore({
      variables: {
        offset: olderMessages?.length,
        limit: MESSAGE_QUERY_LIMIT,
      },
    });
  };

  const isLoading =
    conversationLoading || subscriptionLoading || aggregateLoading;

  const [insertMessage, { data: insertData }] = useMutation<
    InsertMessagesOneMutation,
    InsertMessagesOneMutationVariables
  >(InsertMessagesOneDocument, {
    notifyOnNetworkStatusChange: true,
  });

  const initiateChatbot = async () => {
    const shouldStartFirst = messages.length === 0 && !isLoading;
    const lastInput = (lastMessage?.content ?? '').toLowerCase();
    const isBotMentioned = BOT_KEYWORDS.some((s) => lastInput.includes(s));

    if (shouldStartFirst || isBotMentioned) {
      // const botResponse = await chatbot({
      //   content: isBotMentioned ? lastInput : 'Initial from mobile',
      //   conversation: conversationData.conversation_by_pk,
      //   locale: Localization.locale,
      //   jobId,
      //   user,
      // });
      // if (botResponse?.fulfillmentText.length > 0) {
      //   console.log('### botResponse:', botResponse.fulfillmentText); // eslint-disable-line
      //   setMessages((prevState) => GiftedChat.append(prevState, [{
      //     text: botResponse.fulfillmentText,
      //     _id: `this-is-bot-message-1${Date.now()}`,
      //     createdAt: new Date(),
      //     user: {
      //       _id: 'this-is-bot',
      //     },
      //   }]));
      // }
    }
  };

  const [, cancelInitiateChatbot, resetInitiateChatbot] = useTimeoutFn(
    initiateChatbot,
    1000,
  );

  const updateMessages = useCallback(() => {
    // setMessages(olderMessages.map(convertMessage));
  }, []);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: conversationData?.conversation_by_pk?.name ?? '...',
  //     header: () => (
  //       <CustomHeader
  //         goBack={handleGoBack}
  //         title={conversationData?.conversation_by_pk?.name ?? '...'}
  //       />
  //     ),
  //   });
  // }, [conversationData, navigation, handleGoBack]);

  useEffect(() => {
    if (isFocused && !isLoading) {
      updateMessages();
    }
  }, [isFocused, isLoading, updateMessages]);

  // Update the recent messages status.
  // TODO: make proper checking with the other person status / bot
  useEffect(() => {
    if (insertData && messages.length > 0 && !messages[0].sent) {
      setMessages((prevState) => {
        const [last, ...rest] = prevState;
        return [{ ...last, sent: true, received: true }, ...rest];
      });
    }
  }, [insertData, messages]);

  useFocusEffect(
    useCallback(() => {
      resetInitiateChatbot();
      return () => {
        cancelInitiateChatbot(); // Cancel immediately on leaving
        setMessages([]);
      };
    }, [cancelInitiateChatbot, resetInitiateChatbot]),
  );

  const handleOnSend = async (m: ChatMessage[]) => {
    resetInitiateChatbot();

    await insertMessage({
      variables: {
        object: {
          content: m[0].text,
          conversation_id: conversationId,
          user_id: userId,
        },
      },
    });
  };

  return (
    <ChatWrapper
      isLoading={isLoading}
      user={user}
      messages={messages}
      setMessages={setMessages}
      loadEarlier={handleLoadEarlier}
      onSend={handleOnSend}
    />
  );
};

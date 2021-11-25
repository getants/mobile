import React, { useState } from 'react';
import { useAuth, useQuery } from '../../utils/hooks';
import { CONVERSATION_AGGREGATE } from '../../graphqls/inbox';
import { Conversations } from '../../components';
import { InboxStackEnum } from '../../utils/enums';
import type {
  Conversation,
  InboxScreenRouteProp,
  InboxScreenNavigationProp,
} from '../../utils/types';

export type Props = {
  route: InboxScreenRouteProp;
  navigation: InboxScreenNavigationProp;
};

export const InboxScreen = (props: Props) => {
  const { navigation } = props;

  const [offset, setOffset] = useState<number>(0);

  const { user } = useAuth();

  const {
    data: aggregateData,
    // error: aggregateError,
    loading: aggregateLoading,
    // fetchMore: aggregateMore,
    // refetch,
  } = useQuery(CONVERSATION_AGGREGATE, {
    variables: {
      limit: 10,
      offset,
      order_by: {
        updated_at: 'asc',
      },
      where: {
        users: {
          user_id: { _eq: user?.id ?? '' },
        },
      },
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const conversations = aggregateData?.conversation_aggregate.nodes ?? [];

  const onPressSingle = (conversation: Conversation) => {
    navigation.navigate(InboxStackEnum.ConversationScreen, {
      conversationId: conversation.id,
      userId: user?.id ?? '',
    });
  };

  const handleRefetch = () => console.log('Refresh'); // eslint-disable-line

  const handleLoadMore = () => {
    if (conversations.length >= 10) { // prevent loadmore at 1 item
      setOffset(() => offset + 10);
      console.log('Load more...'); // eslint-disable-line
    }
  };

  return (
    <Conversations
      data={conversations}
      isLoading={aggregateLoading}
      onPressSingle={onPressSingle}
      onRefresh={handleRefetch}
      onLoadMore={handleLoadMore}
    />
  );
};

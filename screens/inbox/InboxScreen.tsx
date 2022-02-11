import React, { useState } from 'react';
import { useAuth, useQuery } from '../../utils/hooks';
import { ConversationsAggregateDocument } from '../../graphqls';
import { ConversationList } from '../../components';
import { InboxStackEnum, OrderBy } from '../../utils/enums';
import type {
  ConversationsAggregateQuery,
  ConversationsAggregateQueryVariables,
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
  } = useQuery<
    ConversationsAggregateQuery,
    ConversationsAggregateQueryVariables
  >(ConversationsAggregateDocument, {
    variables: {
      limit: 10,
      offset,
      order_by: [
        {
          updated_at: OrderBy.Asc,
        },
      ],
      where: {
        users: {
          user_id: { _eq: user?.id ?? '' },
        },
      },
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const conversations = aggregateData?.conversations_aggregate.nodes ?? [];

  const onPressSingle = ({ id }: { id: string }) => {
    if (id) {
      navigation.navigate(InboxStackEnum.ConversationScreen, {
        conversationId: id ?? '',
        userId: user?.id ?? '',
      });
    }
  };

  const handleRefetch = () => console.log('Refresh'); // eslint-disable-line

  const handleLoadMore = () => {
    if (conversations && conversations.length >= 10) {
      // prevent loadmore at 1 item
      setOffset(() => offset + 10);
      console.log('Load more...'); // eslint-disable-line
    }
  };

  return (
    <ConversationList
      data={conversations}
      isLoading={aggregateLoading}
      onPressSingle={onPressSingle}
      onRefresh={handleRefetch}
      onLoadMore={handleLoadMore}
    />
  );
};

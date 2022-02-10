import React, { useState } from 'react';
import { useAuth, useQuery } from '../../utils/hooks';
import { ConversationsAggregateDocument } from '../../graphqls';
import {
  FlatList,
  Pressable,
  ConversationItem,
  Placeholder,
} from '../../components';
import { InboxStackEnum, OrderBy } from '../../utils/enums';
import type {
  Conversations,
  ConversationsAggregateQuery,
  ConversationsAggregateQueryVariables,
  InboxScreenRouteProp,
  InboxScreenNavigationProp,
} from '../../utils/types';

export type Props = {
  route: InboxScreenRouteProp;
  navigation: InboxScreenNavigationProp;
};

const PlaceholderItems = () => (
  <Placeholder
    repeat={5}
    component={<Placeholder.ConversationItem randomWidth />}
  />
);

export const InboxScreen = (props: Props) => {
  const { navigation } = props;

  const [offset, setOffset] = useState(0);

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

  const onPressSingle = (conversation: Partial<Conversations>) => {
    navigation.navigate(InboxStackEnum.ConversationScreen, {
      conversationId: conversation.id ?? '',
      userId: user?.id ?? '',
    });
  };

  const handleRefetch = () => console.log('Refresh'); // eslint-disable-line

  const handleLoadMore = () => {
    if (conversations && conversations.length >= 10) {
      // prevent loadmore at 1 item
      setOffset(() => offset + 10);
      console.log('Load more...'); // eslint-disable-line
    }
  };

  const renderItem = ({
    item,
  }: {
    // TODO: I don't know why the fuck Partial<Conversations> does not work here
    item: Pick<
      Conversations,
      'name' | 'updated_at' | 'id' | 'created_at' | 'status'
    >;
  }) => (
    <Pressable onPress={() => onPressSingle && onPressSingle(item)}>
      <ConversationItem data={item} />
    </Pressable>
  );

  return (
    <FlatList
      data={conversations}
      keyExtractor={({ id }) => id ?? ''}
      onRefresh={handleRefetch}
      refreshing={aggregateLoading}
      initialNumToRender={10}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={1}
      renderItem={renderItem}
      ListEmptyComponent={PlaceholderItems}
    />
  );
};

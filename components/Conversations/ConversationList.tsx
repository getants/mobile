import React from 'react';
import { Pressable, SafeAreaView, FlatList } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Placeholder } from '../Placeholder';
import { ConversationItem } from './ConversationItem';
import type { Conversations } from '../../utils/types';

export type Props = {
  data?: Partial<Conversations>[];
  onPressSingle?: (c: Partial<Conversations>) => void;
  onLoadMore?: () => void;
  onRefresh?: () => void;
  isLoading?: boolean;
};

const PlaceholderItems = () => (
  <Placeholder
    repeat={5}
    component={<Placeholder.ConversationItem randomWidth />}
  />
);

export const ConversationList = (props: Props) => {
  const { data, isLoading, onLoadMore, onPressSingle, onRefresh } = props;

  const renderItem = ({ item }: { item: Partial<Conversations> }) => (
    <Pressable onPress={() => onPressSingle && onPressSingle(item)}>
      <ConversationItem data={item} />
    </Pressable>
  );

  if (!data) {
    return <Text>Start a conversation here</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id ?? ''}
        onRefresh={onRefresh}
        refreshing={isLoading}
        initialNumToRender={10}
        onEndReached={onLoadMore}
        onEndReachedThreshold={1}
        renderItem={renderItem}
        ListEmptyComponent={PlaceholderItems}
      />
    </SafeAreaView>
  );
};

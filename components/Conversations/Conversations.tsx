import React from 'react';
import { Pressable, SafeAreaView, FlatList } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { Placeholder } from '../Placeholder';
import { ConversationItem } from './ConversationItem';
import type { Conversation } from '../../utils/types';

export type Props = {
  data: Conversation[];
  onPressSingle?: (c: Conversation) => void;
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

export const Conversations = (props: Props) => {
  const { data, isLoading, onLoadMore, onPressSingle, onRefresh } = props;

  const renderItem: ListRenderItem<Conversation> = ({ item }) => (
    <Pressable onPress={() => onPressSingle && onPressSingle(item)}>
      <ConversationItem data={item} />
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
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

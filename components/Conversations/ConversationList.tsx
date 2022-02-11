import React from 'react';
import { Pressable, SafeAreaView, FlatList } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Placeholder } from '../Placeholder';
import { ConversationItem } from './ConversationItem';

export type Props<TItem extends { id: string }> = {
  data?: TItem[];
  onPressSingle?: (c: Pick<TItem, 'id'>) => void;
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

export const ConversationList = <TItem extends { id: string }>(
  props: Props<TItem>,
) => {
  const { data, isLoading, onLoadMore, onPressSingle, onRefresh } = props;

  const handlePressItem = (id: string) => {
    if (typeof onPressSingle === 'function') {
      onPressSingle({ id });
    }
  };

  const renderItem = React.memo(({ item }: { item: TItem }) => (
    <Pressable onPress={() => handlePressItem(item.id)}>
      <ConversationItem data={item} />
    </Pressable>
  ));

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

import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import type { Conversations } from '../../utils/types';

type ConversationItemProps = {
  data: Partial<Conversations>;
};

export const ConversationItem = (props: ConversationItemProps) => {
  const { data } = props;

  const conversationTitle = <Text>{data.name}</Text>;

  return (
    <Card>
      <Text>{conversationTitle}</Text>
      <Text>{data?.updated_at}</Text>
    </Card>
  );
};

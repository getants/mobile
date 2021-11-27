import React from 'react';
import { Card, Text } from 'react-native-ui-lib';
import type { Conversation } from '../../utils/types';

type Props = {
  data: Conversation;
};

export const ConversationItem = (props: Props) => {
  const { data } = props;

  const conversationTitle = <Text>{data.name}</Text>;

  return (
    <Card>
      <Text>{conversationTitle}</Text>
      <Text>
        {data?.updated_at}
      </Text>
    </Card>
  );
};

import React from 'react';
// import styled from 'styled-components/native';
import { Card, Button, Pressable } from '../../components';

// import type { Jobs } from '../../utils/types';

type BaseItem = {
  id?: string;
};
type JobItemProps<TItem extends BaseItem> = {
  job: TItem;
  onPress: (c: BaseItem) => void;
  onApply: (c?: BaseItem) => void;
  onSave: (c?: BaseItem) => void;
};

export const JobItem = <TItem extends BaseItem>(props: JobItemProps<TItem>) => {
  const { onApply, onSave, job, onPress } = props;

  return (
    <Card>
      <Pressable onPress={() => onPress(job)}>
        {/* <Image */}
        {/*   source={{ uri: job?.image ?? 'https://via.placeholder.com/90x60' }} */}
        {/* /> */}
        {/* <Text category="h3">{job?.title}</Text> */}
        {/* <Text>{job?.address?.unstructured_value ?? ''}</Text> */}
      </Pressable>
      <Card>
        <Button onPress={() => onApply(job)}>Apply now</Button>
        <Button onPress={() => onSave(job)}>Save for later</Button>
      </Card>
    </Card>
  );
};

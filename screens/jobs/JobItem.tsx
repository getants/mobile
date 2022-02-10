import React from 'react';
// import styled from 'styled-components/native';
import { Card, Button, Image, Text, Pressable } from '../../components';

import type { Jobs } from '../../utils/types';

type JobItemProps = {
  job: Partial<Jobs>;
  onPress: (job: Partial<Jobs>) => void;
  onApply: (job: Partial<Jobs>) => void;
  onSave: (job: Partial<Jobs>) => void;
};

export const JobItem = (props: JobItemProps) => {
  const { onApply, onSave, job, onPress } = props;

  return (
    <Card>
      <Pressable onPress={() => onPress(job)}>
        <Image
          source={{ uri: job?.image ?? 'https://via.placeholder.com/90x60' }}
        />
        <Text category="h3">{job.title}</Text>
        <Text>{job?.address?.unstructured_value ?? ''}</Text>
      </Pressable>
      <Card>
        <Button onPress={() => onApply(job)}>Apply now</Button>
        <Button onPress={() => onSave(job)}>Save for later</Button>
      </Card>
    </Card>
  );
};

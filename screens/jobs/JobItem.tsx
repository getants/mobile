import React from 'react';
// import styled from 'styled-components/native';
import { Card, Button, Image, Text, Pressable } from '../../components';

import type { Jobs } from '../../utils/types';

type Props = {
  job: Jobs;
  onPress: (job: Jobs) => void;
  onApply: (job: Jobs) => void;
  onSave: (job: Jobs) => void;
};

export const JobItem = (props: Props) => {
  const { onApply, onSave, job, onPress } = props;

  return (
    <Card>
      <Pressable onPress={() => onPress(job)}>
        <Image
          source={{ uri: job?.image ?? 'https://via.placeholder.com/90x60' }}
        />
        <Text size="lg">{job.title}</Text>
        <Text>{job?.address?.unstructured_value ?? ''}</Text>
      </Pressable>
      <Card>
        <Button onPress={() => onApply(job)}>Apply now</Button>
        <Button onPress={() => onSave(job)}>Save for later</Button>
      </Card>
    </Card>
  );
};

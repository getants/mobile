import React from 'react';
// import styled from 'styled-components/native';
import {
  Card,
  Button,
  Flex,
  Text,
  Pressable,
} from '../../components';

import type { Job } from '../../utils/types';

type Props = {
  job: Job;
  onPress: (job: Job) => void;
  onApply: (job: Job) => void;
  onSave: (job: Job) => void;
};

export const JobItem = (props: Props) => {
  const {
    onApply,
    onSave,
    job,
    onPress,
  } = props;

  const jobTitle = <Text h4>{job.title}</Text>;

  return (
    <Card>
      <Pressable onPress={() => onPress(job)}>
        <Card.Image
          source={{ uri: job?.image ?? 'https://via.placeholder.com/90x60' }}
        />
        <Card.Title>
          {jobTitle}
        </Card.Title>
        <Text>
          {job?.address?.unstructured_value}
        </Text>

      </Pressable>
      <Flex>
        <Button
          title="Apply now"
          onPress={() => onApply(job)}
        />
        <Button
          title="Save now"
          onPress={() => onSave(job)}
        />
      </Flex>
    </Card>
  );
};

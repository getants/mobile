import React from 'react';
import styled from 'styled-components/native';
import {
  Card,
  Paragraph,
  Button,
  IconButton,
  Pressable,
} from '@components';

import type { Job } from './types';

type Props = {
  job: Job | null;
  onPress: (job: Job) => void;
  onApply: (job: Job) => void;
  onSave: (job: Job) => void;
};

const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 0;
`;

const CardActions = styled(Card.Actions)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 17px;
`;

const JobItem = (props: Props) => {
  const {
    onApply,
    onSave,
    job,
    onPress,
  } = props;

  const jobTitle = <Title>{job.title}</Title>;

  return (
    <StyledCard testID="JobItem-Card">
      <Pressable onPress={() => onPress(job)}>
        <Card.Cover
          source={{ uri: job?.image ?? 'https://via.placeholder.com/90x60' }}
        />
        <Card.Title
          title={jobTitle}
          subtitle={job.description}
        />
        <Card.Content>
          <Paragraph>
            {job?.address?.unstructured_value}
          </Paragraph>

        </Card.Content>
      </Pressable>
      <CardActions>
        <Button onPress={() => onApply(job)}>
          Apply
        </Button>
        <IconButton
          icon="bookmark-outline"
          testID="JobItem-Button"
          size={20}
          onPress={() => onSave(job)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default JobItem;

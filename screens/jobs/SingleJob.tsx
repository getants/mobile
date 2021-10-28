import React, {
  useLayoutEffect,
  useMemo,
} from 'react';
import {
  FloatingButton,
  SafeAreaView,
  ScrollView,
  Caption,
  Card,
  Paragraph,
  ProgressBar,
  Title,
} from '@components';
import {
  useAuth,
  useLazyQuery,
  useQuery,
  useMutation,
  useTimeoutFn,
  useTranslate,
} from '@hooks';
import {
  CONVERSATION_AGGREGATE,
  INSERT_CONVERSATION,
} from '@graphqls/inbox';
import styled from 'styled-components/native';
import { SINGLE_JOB } from '@graphqls/jobs';
import { defaultImage } from '@lib/constants';
import { MainStackEnum, InboxStackEnum } from '@stacks/Types';
import type {
  SingleJobScreenRouteProp,
  SingleJobScreenNavigationProp,
} from '@stacks/Types';
import type {
  Conversation,
  ConversationAggregateData,
} from '@components/Conversations';
import type { Job } from './types';

export const ActionSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export type Props = {
  route: SingleJobScreenRouteProp;
  navigation: SingleJobScreenNavigationProp;
};

const SingleJob = (props: Props) => {
  const { navigation, route } = props;
  const { t } = useTranslate();
  const { session } = useAuth();
  const userId = session?.user?.id ?? '';

  const { jobId, jobTitle, companyName } = route.params;

  const {
    loading,
    data,
  } = useQuery(SINGLE_JOB, {
    variables: { id: jobId },
    notifyOnNetworkStatusChange: true,
  });

  const job = useMemo<Job>(() => data?.job_by_pk || {}, [data]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: companyName ?? jobTitle ?? '',
    });
  }, [navigation, companyName, jobTitle]);

  // One customer can have only ONE conversation with ONE company only.
  // For different jobs, we notify with another signal over time.
  const findConversationVars = useMemo(() => ({
    limit: 1,
    offset: 0,
    where: {
      _and: {
        company_id: { _eq: job?.company?.id ?? '' },
        users: { user_id: { _eq: userId } },
      },
    },
  }), [userId, job]);

  const [findConversation, {
    data: aggregateData,
    // error: aggregateError,
    // loading: aggregateLoading,
    // fetchMore: aggregateMore,
    // refetch,
  }] = useLazyQuery<ConversationAggregateData>(CONVERSATION_AGGREGATE, {
    variables: findConversationVars,
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const [, , reset] = useTimeoutFn(() => findConversation(), 100);

  const conversation = useMemo<Conversation>(
    () => aggregateData?.conversation_aggregate?.nodes[0],
    [aggregateData],
  );

  const [addConversation, {
    data: newConversation,
  }] = useMutation(INSERT_CONVERSATION);

  const navigateToConversation = (id: string) => {
    navigation.navigate(MainStackEnum.InboxStack, {
      screen: InboxStackEnum.SingleConversation,
      params: {
        conversationId: id,
        userId,
        jobId,
      },
    });
  };

  const handleApply = async () => {
    if (conversation) {
      navigateToConversation(conversation?.id);
    } else {
      await addConversation({
        variables: {
          object: {
            name: job?.company?.name,
            description: job?.title,
            status: 'STARTED',
            company_id: job?.company?.id,
            users: {
              data: { user_id: userId },
            },
          },
        },
      });

      if (newConversation) {
        navigateToConversation(newConversation?.id);
      }
    }
    reset();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {(loading || !data) && <ProgressBar />}

      <ScrollView>
        <Card>
          <Title style={{ padding: 20 }}>{job.title || ''}</Title>

          <Card.Cover source={{ uri: job.image || defaultImage }} />

          <Card.Content>
            <Paragraph>{job.address?.unstructured_value ?? ''}</Paragraph>

            <Caption>{t('description')}</Caption>
            <Paragraph>{job.description} / Company: {job?.company?.name}</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>

      <FloatingButton
        label="Apply"
        onPress={handleApply}
        width="80%"
      />
    </SafeAreaView>
  );
};

export default SingleJob;

import React, { useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components/native';
import { MainStackEnum, InboxStackEnum } from '../../utils/enums';
import type {
  Job,
  // Conversation,
  ConversationAggregateData,
  SingleJobScreenRouteProp,
  SingleJobScreenNavigationProp,
} from '../../utils/types';
import {
  useAuth,
  useLazyQuery,
  useQuery,
  useMutation,
  useTimeoutFn,
} from '../../utils/hooks';
import {
  ConversationsAggregateDocument,
  InsertConversationsDocument,
  JobsByPkDocument,
  // InsertConversationsMutation,
} from '../../graphqls';
import {
  FAB,
  SafeAreaView,
  ScrollView,
  Card,
  LinearProgress,
  Text,
} from '../../components';

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

export const SingleJobScreen = (props: Props) => {
  const { navigation, route } = props;
  const { user } = useAuth();
  const userId = user?.id ?? '';

  const { jobId, jobTitle, companyName } = route.params;

  const { loading, data } = useQuery(JobsByPkDocument, {
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
  const findConversationVars = useMemo(
    () => ({
      limit: 1,
      offset: 0,
      where: {
        _and: {
          company_id: { _eq: job?.company?.id ?? '' },
          users: { user_id: { _eq: userId } },
        },
      },
    }),
    [userId, job],
  );

  const [
    findConversation,
    {
      data: aggregateData,
      // error: aggregateError,
      // loading: aggregateLoading,
      // fetchMore: aggregateMore,
      // refetch,
    },
  ] = useLazyQuery<ConversationAggregateData>(ConversationsAggregateDocument, {
    variables: findConversationVars,
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const [, , reset] = useTimeoutFn(() => findConversation(), 100);

  const conversation = useMemo(
    () => aggregateData?.conversations_aggregate?.nodes[0],
    [aggregateData],
  );

  const [addConversation, { data: newConversation }] = useMutation(
    InsertConversationsDocument,
  );

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
      {(loading || !data) && <LinearProgress />}

      <ScrollView>
        <Card>
          <Text h2 style={{ padding: 20 }}>
            {job.title || ''}
          </Text>

          <Card.Image source={{ uri: job.image }} />
          <Text>{job.address?.unstructured_value ?? ''}</Text>

          <Text>Description</Text>
          <Text>
            {job.description} / Company: {job?.company?.name}
          </Text>
        </Card>
      </ScrollView>

      <FAB
        title="Apply"
        onPress={handleApply}
        // width="80%"
      />
    </SafeAreaView>
  );
};

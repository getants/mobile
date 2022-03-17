import React, { useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components/native';
import {
  ConversationsAggregateDocument,
  JobsByPkDocument,
  InsertConversationsOneDocument,
} from '@getants/graphqls';
import { MainStackEnum, InboxStackEnum } from '../../utils/enums';
import type {
  JobsByPkQuery,
  ConversationsAggregateQuery,
  SingleJobScreenRouteProp,
  SingleJobScreenNavigationProp,
} from '../../utils/types';
import {
  useAuth,
  useLazyQuery,
  useQuery,
  useMutation,
  useTimeoutFn,
} from '../../hooks';
import {
  Button,
  Card,
  Image,
  SafeAreaView,
  ScrollView,
  Spinner,
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

  const { loading, data: singleJobData } = useQuery<JobsByPkQuery>(
    JobsByPkDocument,
    {
      variables: { id: jobId },
      notifyOnNetworkStatusChange: true,
    },
  );

  const job = singleJobData?.jobs_by_pk;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: companyName ?? jobTitle ?? '',
    });
  }, [navigation, companyName, jobTitle]);

  // One customer can have only ONE conversation with ONE company only.
  // For different jobs, we notify with another signal over time.
  const findConversationVars = {
    limit: 1,
    offset: 0,
    where: {
      _and: {
        company_id: { _eq: job?.company?.id ?? '' },
        users: { user_id: { _eq: userId } },
      },
    },
  };

  const [
    findConversation,
    {
      data: aggregateData,
      // error: aggregateError,
      // loading: aggregateLoading,
      // fetchMore: aggregateMore,
      // refetch,
    },
  ] = useLazyQuery<ConversationsAggregateQuery>(
    ConversationsAggregateDocument,
    {
      variables: findConversationVars,
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  );

  const [, , reset] = useTimeoutFn(() => findConversation(), 100);

  const conversation = useMemo(
    () => aggregateData?.conversations_aggregate?.nodes[0],
    [aggregateData],
  );

  const [addConversation, { data: newConversation }] = useMutation(
    InsertConversationsOneDocument,
  );

  const navigateToConversation = (id: string) => {
    navigation.navigate(MainStackEnum.InboxStack, {
      screen: InboxStackEnum.ConversationScreen,
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
      {loading && !singleJobData && <Spinner />}

      <ScrollView>
        <Card>
          <Text category="h2">{job?.title ?? ''}</Text>

          <Image source={{ uri: job?.image ?? 'no name' }} />
          <Text>{job?.address?.unstructured_value ?? ''}</Text>

          <Text>Description</Text>
          <Text>
            {job?.description ?? ''} / Company: {job?.company?.name ?? ''}
          </Text>
        </Card>
      </ScrollView>

      <Button onPress={handleApply}>Apply</Button>
    </SafeAreaView>
  );
};

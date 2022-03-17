import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { JobsByPkDocument } from '@getants/graphqls';
import type {
  JobsByPkQuery,
  SingleJobScreenRouteProp,
  SingleJobScreenNavigationProp,
} from '../../utils/types';
import { useQuery } from '../../hooks';
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

  const handleApply = async () => {};

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

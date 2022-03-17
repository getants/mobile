import React, { useLayoutEffect } from 'react';
import { JobsByPkDocument } from '@getants/graphqls';
import type {
  JobsByPkQuery,
  SingleJobScreenRouteProp,
  SingleJobScreenNavigationProp,
} from '../../utils/types';
import { BASE_SPACING, OUR_COLORS } from '../../utils/constants';
import { useAssets, useQuery } from '../../hooks';
import {
  Button,
  Card,
  CardHeader,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Spinner,
  Text,
} from '../../components';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  titleStack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: BASE_SPACING * 4,
  },
  compoundHeader: {
    width: '94%',
  },
  title: {
    color: OUR_COLORS.primaryColor,
    fontWeight: 'bold',
  },
  subtitle: {},
  nextIcon: {},
  companyInfo: {
    backgroundColor: 'green',
    borderRadius: BASE_SPACING * 3,
  },
});

export type Props = {
  route: SingleJobScreenRouteProp;
  navigation: SingleJobScreenNavigationProp;
};

export const SingleJobScreen = (props: Props) => {
  /* eslint-disable-next-line global-require */
  const [assets] = useAssets([require('../../assets/blank.svg')]);
  const fallbackImage = { uri: assets?.[0]?.uri ?? 'fallback-uri' };

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

  // console.log('jobId', job, jobId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: companyName ?? jobTitle ?? '',
    });
  }, [navigation, companyName, jobTitle]);

  const handleApply = async () => {};

  return (
    <SafeAreaView style={styles.wrapper}>
      {loading && !singleJobData && <Spinner />}

      <ScrollView>
        <Card
          style={styles.companyInfo}
          // onPress={() => onPress(job)}
          header={
            <CardHeader
              showName={!job?.company?.image}
              image={job?.company?.image ?? fallbackImage.uri}
              name={job?.company?.name ?? ''}
              description={job?.company?.size ?? ''}
            />
          }
        >
          <Text numberOfLines={4} ellipsizeMode="tail">
            {job?.company?.summary ?? ''}
          </Text>
        </Card>
        <Card style={{ backgroundColor: 'gray', height: 1900 }}>
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

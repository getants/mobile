import React, { useLayoutEffect } from 'react';
import { JobsByPkDocument } from '@getants/graphqls';
import type {
  JobsByPkQuery,
  SingleJobScreenRouteProp,
  SingleJobScreenNavigationProp,
} from '../../utils/types';
import { BASE_SPACING, OUR_COLORS } from '../../utils/constants';
import { useQuery } from '../../hooks';
import {
  Button,
  Card,
  ImageBackground,
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
  imageCover: {
    height: 240,
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
  jobInfo: {
    paddingTop: BASE_SPACING * 4,
  },
  companyInfo: {
    borderRadius: BASE_SPACING * 3,
  },
  jobTitle: {
    fontWeight: 'bold',
  },
  jobDescription: {
    marginTop: BASE_SPACING * 4,
  },
});

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
        <ImageBackground
          resizeMode="cover"
          source={{ uri: job?.company?.image as string }}
          style={styles.imageCover}
        >
          {/* <View> */}
          {/* </View> */}
        </ImageBackground>

        <Card style={styles.jobInfo}>
          <Text category="h5" style={styles.jobTitle}>
            {job?.title ?? ''}
          </Text>
          <Text category="s1">{job?.address?.unstructured_value ?? ''}</Text>

          <Text style={styles.jobDescription}>{job?.description ?? ''} </Text>
        </Card>
      </ScrollView>

      <Button onPress={handleApply}>Apply</Button>
    </SafeAreaView>
  );
};

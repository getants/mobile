import React, { useLayoutEffect } from 'react';
import {
  JobsByPkDocument,
  InsertApplicationsOneDocument,
} from '@getants/graphqls';
import type {
  InsertApplicationsOneMutation,
  InsertApplicationsOneMutationVariables,
  JobsByPkQuery,
  SingleJobScreenRouteProp,
  SingleJobScreenNavigationProp,
} from '../../utils/types';
import { BASE_SPACING, OUR_COLORS } from '../../utils/constants';
import { useAuth, useQuery, useMutation } from '../../hooks';
import {
  Button,
  IconWrapper,
  ImageBackground,
  LoadingIndicator,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Spinner,
  Text,
  View,
} from '../../components';
import { BackButton } from './BackButton';
import { Section } from './Section';
import { OverviewRow } from './OverviewRow';

const commonSpaces = {
  paddingVertical: BASE_SPACING * 4,
  paddingHorizontal: BASE_SPACING * 6,
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imageCover: {
    height: 240,
  },
  buttons: {
    position: 'absolute',
    top: BASE_SPACING * 6,
    left: BASE_SPACING * 6,
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
    ...commonSpaces,
  },
  jobTitle: {
    fontWeight: 'bold',
    marginTop: BASE_SPACING * 4,
  },
  address: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  overview: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0.6,
    borderColor: '#CACACA',
    borderRadius: BASE_SPACING * 2,
  },
  jobDescription: {},
  companyInfo: {
    ...commonSpaces,
  },
  applyWrapper: {
    borderTopWidth: 0.6,
    borderTopColor: '#CACACA',
    padding: BASE_SPACING * 6,
  },
  applyButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
});

export type Props = {
  route: SingleJobScreenRouteProp;
  navigation: SingleJobScreenNavigationProp;
};

export const SingleJobScreen = (props: Props) => {
  const { navigation, route } = props;

  const { jobId, jobTitle, companyName } = route.params;

  const { profile, refetchProfile } = useAuth();

  const [insertApplication, { loading: applicationLoading }] = useMutation<
    InsertApplicationsOneMutation,
    InsertApplicationsOneMutationVariables
  >(InsertApplicationsOneDocument);

  const { loading, data: singleJobData } = useQuery<JobsByPkQuery>(
    JobsByPkDocument,
    {
      variables: { id: jobId },
      notifyOnNetworkStatusChange: true,
    },
  );

  const job = singleJobData?.jobs_by_pk;

  const hasApplied = !!profile?.applications.find(
    ({ job_id }) => job && job_id && job_id === job.id,
  );

  const handleApply = async () => {
    if (job) {
      await insertApplication({
        variables: {
          object: {
            resume_id: profile?.resumes[0].id,
            job_id: job.id,
          },
        },
      });
      await refetchProfile();
    }
  };

  const ButtonIcon = () => {
    if (applicationLoading) {
      return (
        <LoadingIndicator isLoading={applicationLoading} status="primary" />
      );
    }
    if (hasApplied) {
      return (
        <IconWrapper
          name="checkmark-circle-outline"
          size={18}
          color="#60AF20"
        />
      );
    }
    return null;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: companyName ?? jobTitle ?? '',
    });
  }, [navigation, companyName, jobTitle]);

  return (
    <SafeAreaView style={styles.wrapper}>
      {loading && !singleJobData && <Spinner />}

      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          source={{ uri: job?.company?.image as string }}
          style={styles.imageCover}
        >
          <View style={styles.buttons}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
        </ImageBackground>

        <View style={styles.jobInfo}>
          <Text category="h5" style={styles.jobTitle}>
            {job?.title ?? ''}
          </Text>

          <View style={styles.address}>
            <IconWrapper name="pin-outline" size={14} />
            <Text category="s2" numberOfLines={1}>
              {job?.address?.unstructured_value ?? ''}
            </Text>
          </View>

          <Section>
            <Text style={styles.jobDescription}>{job?.description ?? ''} </Text>
          </Section>

          <Section caption="Overview">
            <View style={styles.overview}>
              <OverviewRow
                rowKey="qualifications"
                label={job?.qualifications}
              />
              <OverviewRow rowKey="level" label={job?.level} />
              <OverviewRow
                border={false}
                rowKey="compensations"
                label={job?.compensations}
              />
            </View>
          </Section>
          <Section caption="Responsibilities">
            <Text>{job?.responsibilities ?? ''}</Text>
          </Section>
        </View>
      </ScrollView>

      <View style={styles.applyWrapper}>
        <Button
          style={styles.applyButton}
          appearance="outline"
          size="large"
          disabled={hasApplied}
          status={hasApplied ? 'success' : 'primary'}
          accessoryLeft={() => <ButtonIcon />}
          onPress={handleApply}
        >
          {hasApplied ? 'Applied' : 'Apply now!'}
        </Button>
      </View>
    </SafeAreaView>
  );
};

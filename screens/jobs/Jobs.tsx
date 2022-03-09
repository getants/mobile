import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import {
  Animated,
  Button,
  Card,
  Image,
  JobItem as JobItemPlaceholder,
  Placeholder,
  Pressable,
  SafeAreaView,
  Spinner,
  Text,
  View,
} from '../../components';
import {
  useAuth,
  useQuery,
  useMutation,
  useTimeoutFn,
  useCollapsibleHeader,
} from '../../utils/hooks';
import { JobStackEnum } from '../../utils/enums';
import {
  JobsNearbyAggregateDocument,
  InsertApplicationsOneDocument,
} from '../../graphqls';
import type {
  InsertApplicationsOneMutation,
  InsertApplicationsOneMutationVariables,
  JobListScreenNavigationProp,
  JobListScreenRouteProp,
  JobsNearbyAggregateQuery,
  JobsNearbyAggregateQueryVariables,
} from '../../utils/types';

const NumberJobsBatch = 10;
const MaxRadiusSearch = 9999999; // For dev
const StepRadiusSearch = 10; // For dev
const StickyHeaderHeight = 60;

export type Props = {
  route: JobListScreenRouteProp;
  navigation: JobListScreenNavigationProp;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const JobListScreen = (props: Props) => {
  const { navigation } = props;
  const { user, profile, isLoading: profileLoading } = useAuth();

  const [retry, setRetry] = useState<number>(0);
  const [distance, setDistance] = useState<number>(10);

  const [insertApplicationMutation] = useMutation<
    InsertApplicationsOneMutation,
    InsertApplicationsOneMutationVariables
  >(InsertApplicationsOneDocument);

  const {
    data: jobsData,
    error: jobsError,
    loading: jobLoading,
    fetchMore,
    refetch: jobsRefetch,
  } = useQuery<JobsNearbyAggregateQuery, JobsNearbyAggregateQueryVariables>(
    JobsNearbyAggregateDocument,
    {
      variables: {
        args: {
          distance: 20,
          user_id: user?.id ?? '',
        },
        limit: 20,
        offset: 0,
        where: {
          // For now, search all jobs, filter per tenants later
          //   company: {
          //     tenant_id: { _eq: tenantId },
          //   },
        },
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  );

  if (jobsError) {
    console.log('### Jobs nearby aggregate: ', jobsError); // eslint-disable-line
  }

  const jobs = useMemo(() => {
    if (jobsData) {
      return jobsData.jobs_nearby_aggregate.nodes;
    }
    return [];
  }, [jobsData]);

  // const jobs = useMemo<Jobs[]>(() => {
  //   if (aggregateJobs?.jobs_nearby_aggregate?.nodes) {
  //     return aggregateJobs.jobs_nearby_aggregate.nodes.map((job: Jobs) => {
  //       // const reducedAddress = job?.address?.unstructured_value?.trim();
  //       return {
  //         ...job,
  //         address: {
  //           ...job.address,
  //           // unstructured_value: reducedAddress,
  //         },
  //       };
  //     });
  //   }
  //   return [];
  // }, [aggregateJobs]);

  const increaseSearchRange = useCallback(() => {
    setRetry((prevRetry) => prevRetry + 1);
    setDistance((prevDistance) => prevDistance + StepRadiusSearch);
  }, [setRetry, setDistance]);

  const handleLoadMore = useCallback(() => {
    fetchMore({
      variables: {
        args: {
          distance,
          user_id: user?.id ?? '',
        },
        offset: jobs.length,
        limit: NumberJobsBatch,
      },
      // TODO: Will be deprecated, change to new way
      updateQuery: (prevResult, { fetchMoreResult }) => {
        increaseSearchRange();
        const target = [...(prevResult?.jobs_nearby_aggregate.nodes ?? [])];
        const nextItems = fetchMoreResult?.jobs_nearby_aggregate.nodes ?? [];

        for (let i = 0, j = nextItems.length; i < j; i++) {
          const newItem = nextItems[i];
          const isDuplicated = target.some((o) => o.id === newItem.id);
          if (!isDuplicated) {
            target.push(newItem);
          }
        }

        return {
          jobs_nearby_aggregate: {
            __typename: 'jobs_aggregate',
            nodes: target,
          },
        };
      },
    });
  }, [distance, fetchMore, jobs.length, user, increaseSearchRange]);

  const [isReady, cancelTimer, resetTimer] = useTimeoutFn(() => {
    handleLoadMore();
  }, 1000);

  useEffect(() => {
    if (jobs.length === 0 && distance < MaxRadiusSearch && retry <= 100) {
      resetTimer();
    } else {
      cancelTimer();
    }
  }, [cancelTimer, resetTimer, distance, jobs, retry]);

  // Making the useApply() which expose the need methods better
  // so in the future we can go to chat faster from any where
  // const [findConversation, {
  //   data: conversationData,
  //   // error: aggregateError,
  //   // loading: aggregateLoading,
  //   // fetchMore: aggregateMore,
  //   // refetch,
  // }] = useLazyQuery<ConversationAggregateData>(CONVERSATION_AGGREGATE, {
  //   variables: findConversationVars,
  //   fetchPolicy: 'cache-and-network',
  //   notifyOnNetworkStatusChange: true,
  // });

  // Pull to refresh, we should reset the timer
  const handleRefetch = useCallback(() => {
    jobsRefetch();
    resetTimer();
  }, [jobsRefetch, resetTimer]);

  const handleOnPressSingle = (id: string) => {
    const foundJob = jobs.find((job) => job.id === id);
    if (foundJob) {
      navigation.navigate(JobStackEnum.SingleJobScreen, {
        jobId: foundJob.id,
        jobTitle: foundJob.title,
        // companyName: foundJob.quantity,
      });
    }
  };

  const [currentResume] = profile?.resumes ?? [];

  const shouldDisableApply = (item: typeof jobs[0]) => {
    const [currentApplication] = currentResume.applications;

    const found = item?.applications.find(
      (o) => o.id === currentApplication.id,
    );

    return !!found;
  };

  const handleOnApply = async (id: string) => {
    if (currentResume) {
      await insertApplicationMutation({
        variables: {
          object: {
            job_id: id,
            resume_id: currentResume.id,
          },
        },
      });

      jobsRefetch();
    }
  };

  // const renderItem = <TItem extends { id: string }>({ item }: TItem) => (
  //   <JobItem
  //     job={item}
  //     onPress={onPressSingle}
  //     onApply={handleOnApply}
  //     onSave={() => console.log('Saved job!')} // eslint-disable-line
  //   />
  // );

  const options = useMemo(
    () => ({
      navigationOptions: {
        // header: () => <Text>test</Text>,
        headerStyle: {
          // backgroundColor: 'green',
        },
      },
      config: {
        // collapsedColor: 'black',
        useNativeDriver: true,
      },
    }),
    [],
  );

  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop, translateY } =
    useCollapsibleHeader(options);

  const paddingTop = containerPaddingTop + StickyHeaderHeight;
  const top = scrollIndicatorInsetTop + StickyHeaderHeight;

  // Prevent go back to initial stack
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }),
    [navigation],
  );

  const isLoading = jobLoading || profileLoading || isReady() !== null;

  return (
    <SafeAreaView style={styles.wrapper}>
      <>
        <Animated.FlatList
          data={jobs}
          keyExtractor={({ id }, index) => id ?? index}
          onRefresh={handleRefetch}
          refreshing={isLoading || jobs.length < 10}
          initialNumToRender={NumberJobsBatch}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          ListEmptyComponent={
            <Placeholder component={<JobItemPlaceholder />} />
          }
          renderItem={({ item }) => (
            <Card key={item.id}>
              <Pressable onPress={() => handleOnPressSingle(item.id)}>
                <Image
                  source={{
                    uri: item?.image ?? 'https://via.placeholder.com/90x60',
                  }}
                />
                <Text category="h3">{item?.title}</Text>
              </Pressable>
              <Card>
                <Button
                  disabled={shouldDisableApply(item)}
                  onPress={() => handleOnApply(item.id)}
                >
                  Apply now
                </Button>
              </Card>
            </Card>
          )}
          scrollEventThrottle={8}
          onScroll={onScroll}
          contentContainerStyle={{ paddingTop }}
          scrollIndicatorInsets={{ top }}
        />

        <Animated.View
          style={{
            transform: [{ translateY }],
            top: containerPaddingTop,
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            height: StickyHeaderHeight,
            width: '100%',
          }}
        >
          <View style={styles.inner}>
            {isLoading ? (
              <>
                <Spinner />
                <Text category="h5">Loading...</Text>
              </>
            ) : (
              <>
                <Text category="h5">Done!</Text>
                <Button onPress={() => jobsRefetch()}>Refetch</Button>
              </>
            )}
          </View>
        </Animated.View>
      </>
    </SafeAreaView>
  );
};

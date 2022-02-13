import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import {
  JobsNearbyAggregateDocument,
  // JobsAggregateDocument,
} from '../../graphqls';
import { JobStackEnum } from '../../utils/enums';
import type {
  // Jobs,
  JobListScreenNavigationProp,
  JobListScreenRouteProp,
  JobsNearbyAggregateQuery,
  JobsNearbyAggregateQueryVariables,
  // JobsAggregateQuery,
  // JobsAggregateQueryVariables,
} from '../../utils/types';
import {
  Animated,
  Button,
  Card,
  Image,
  SafeAreaView,
  Placeholder,
  Pressable,
  JobItem as JobItemPlaceholder,
  Text,
  View,
} from '../../components';
import {
  useAuth,
  useQuery,
  useTimeoutFn,
  useCollapsibleHeader,
} from '../../utils/hooks';
// import { getEnvironment } from '../../utils/tokens';
// import { JobItem } from './JobItem';

// const { tenantId } = getEnvironment();

const NumberJobsBatch = 10;
const MaxRadiusSearch = 9999999; // For dev
const StepRadiusSearch = 1000; // For dev
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
  const { user } = useAuth();

  const [retry, setRetry] = useState<number>(0);
  const [distance, setDistance] = useState<number>(1000);

  const {
    data: jobsData,
    error: aggregateError,
    loading,
    fetchMore,
    refetch,
  } = useQuery<JobsNearbyAggregateQuery, JobsNearbyAggregateQueryVariables>(
    JobsNearbyAggregateDocument,
    {
      variables: {
        args: {
          distance,
          user_id: user?.id ?? '',
        },
        limit: 10,
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

  if (aggregateError) {
    console.log('### Jobs aggregateError: ', aggregateError); // eslint-disable-line
    // nhost.auth.signOut();
  }

  const jobs = useMemo(() => {
    if (jobsData) {
      return jobsData.jobs_nearby_aggregate.nodes;
    }
    return [];
  }, [jobsData]);

  console.log({ jobs, distance, userId: user?.id });

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

  const [, cancelTimer, resetTimer] = useTimeoutFn(() => {
    console.log('increased search range: ', retry);
    increaseSearchRange();
  }, 1000);

  useEffect(() => {
    if (jobs.length === 0 && distance < MaxRadiusSearch && retry <= 1000) {
      resetTimer();
    } else {
      cancelTimer();
    }
  }, [cancelTimer, resetTimer, distance, jobs, retry]);

  const handleLoadMore = useCallback(() => {
    fetchMore({
      variables: {
        args: {
          distance,
        },
        offset: jobs.length,
        limit: NumberJobsBatch,
      },
    }).then(() => {
      // increaseSearchRange();
      resetTimer();
    });
  }, [distance, fetchMore, jobs.length, resetTimer]);

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
    refetch();
    resetTimer();
  }, [refetch, resetTimer]);

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

  const handleOnApply = (id: string) => {
    console.log('### apply on jobId: ', id); // eslint-disable-line
    // navigation.navigate(MainStackEnum.InboxStack, {
    //   screen: InboxStackEnum.SingleConversation,
    //   params: {
    //     conversationId: id,
    //     userId,
    //     jobId: job.id,
    //   },
    // });
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

  const paddingTop =
    containerPaddingTop + StickyHeaderHeight - Constants.statusBarHeight;
  const top = scrollIndicatorInsetTop + StickyHeaderHeight;

  return (
    <SafeAreaView style={styles.wrapper}>
      <>
        <Animated.FlatList
          data={jobs}
          keyExtractor={({ id }) => id ?? ''}
          onRefresh={handleRefetch}
          refreshing={loading || jobs.length < 10}
          initialNumToRender={NumberJobsBatch}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          ListEmptyComponent={
            <Placeholder component={<JobItemPlaceholder />} />
          }
          renderItem={({ item }) => (
            <Card>
              <Pressable onPress={() => handleOnPressSingle(item.id)}>
                <Image
                  source={{
                    uri: item?.image ?? 'https://via.placeholder.com/90x60',
                  }}
                />
                <Text category="h3">{item?.title}</Text>
              </Pressable>
              <Card>
                <Button onPress={() => handleOnApply(item.id)}>
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
            <Text category="h5">Sticky</Text>
            <Button onPress={() => cancelTimer()}>Stop searching</Button>
          </View>
        </Animated.View>
      </>
    </SafeAreaView>
  );
};

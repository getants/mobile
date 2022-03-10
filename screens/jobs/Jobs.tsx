import React, { useCallback, useEffect, useMemo } from 'react';
import Constants from 'expo-constants';
import {
  Animated,
  Avatar,
  Button,
  Card,
  Image,
  JobItem as JobItemPlaceholder,
  Placeholder,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from '../../components';
import {
  useAuth,
  useQuery,
  useMutation,
  useCollapsibleHeader,
  useColorScheme,
} from '../../utils/hooks';
import { makeBoolExp } from '../../utils/tokens';
import {
  JobStackEnum,
  MainStackEnum,
  ProfileStackEnum,
} from '../../utils/enums';
import {
  OrderBy,
  JobsAggregateDocument,
  // JobsNearbyAggregateDocument,
  InsertApplicationsOneDocument,
} from '../../graphqls';
import type {
  InsertApplicationsOneMutation,
  InsertApplicationsOneMutationVariables,
  JobsAggregateQuery,
  JobsAggregateQueryVariables,
  JobListScreenNavigationProp,
  JobListScreenRouteProp,
  // JobsNearbyAggregateQuery,
  // JobsNearbyAggregateQueryVariables,
} from '../../utils/types';

const NumberJobsBatch = 10;
// const MaxRadiusSearch = 9999999; // For dev
// const StepRadiusSearch = 10; // For dev
const StickyHeaderHeight = Constants.statusBarHeight;

export type Props = {
  route: JobListScreenRouteProp;
  navigation: JobListScreenNavigationProp;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  subHeader: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
  },
  avatar: {
    margin: 4,
  },
  notification: {
    width: 22,
    height: 22,
  },
});

export const JobListScreen = ({ navigation }: Props) => {
  const { isAuthenticated, profile, isLoading: profileLoading } = useAuth();

  // const [retry, setRetry] = useState<number>(0);
  // const [distance, setDistance] = useState<number>(10);

  const [insertApplicationMutation] = useMutation<
    InsertApplicationsOneMutation,
    InsertApplicationsOneMutationVariables
  >(InsertApplicationsOneDocument);

  const initialVariables = {
    limit: 100,
    offset: 0,
    order_by: { title: OrderBy.Asc },
  };

  const jobsAggregateOptions = {
    skip: !isAuthenticated,
    variables: {
      ...initialVariables,
      where: {
        company: {
          tenant_id: makeBoolExp('_in', [profile?.tenant_id ?? '']),
        },
      },
    },
  };

  const {
    data: jobsData,
    refetch: jobsRefetch,
    loading: jobsLoading,
  } = useQuery<JobsAggregateQuery, JobsAggregateQueryVariables>(
    JobsAggregateDocument,
    {
      ...jobsAggregateOptions,
      fetchPolicy: 'cache-and-network',
    },
  );

  const jobs = jobsData?.jobs_aggregate.nodes ?? [];
  // const {
  //   data: jobsData,
  //   error: jobsError,
  //   loading: jobsLoading,
  //   fetchMore,
  //   refetch: jobsRefetch,
  // } = useQuery<JobsNearbyAggregateQuery, JobsNearbyAggregateQueryVariables>(
  //   JobsNearbyAggregateDocument,
  //   {
  //     variables: {
  //       args: {
  //         distance: 20,
  //         user_id: user?.id ?? '',
  //       },
  //       limit: 20,
  //       offset: 0,
  //       where: {
  //         // For now, search all jobs, filter per tenants later
  //         //   company: {
  //         //     tenant_id: { _eq: tenantId },
  //         //   },
  //       },
  //     },
  //     fetchPolicy: 'cache-and-network',
  //     notifyOnNetworkStatusChange: true,
  //   },
  // );

  // if (jobsError) {
  //   console.log('### Jobs nearby aggregate: ', jobsError); // eslint-disable-line
  // }

  // const jobs = useMemo(() => {
  //   if (jobsData) {
  //     return jobsData.jobs_nearby_aggregate.nodes;
  //   }
  //   return [];
  // }, [jobsData]);

  // console.log({ jobs, profile });
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

  // const increaseSearchRange = useCallback(() => {
  //   setRetry((prevRetry) => prevRetry + 1);
  //   setDistance((prevDistance) => prevDistance + StepRadiusSearch);
  // }, [setRetry, setDistance]);

  // const handleLoadMore = useCallback(() => {
  //   fetchMore({
  //     variables: {
  //       args: {
  //         distance,
  //         user_id: user?.id ?? '',
  //       },
  //       offset: jobs.length,
  //       limit: NumberJobsBatch,
  //     },
  //     // TODO: Will be deprecated, change to new way
  //     updateQuery: (prevResult, { fetchMoreResult }) => {
  //       increaseSearchRange();
  //       const target = [...(prevResult?.jobs_nearby_aggregate.nodes ?? [])];
  //       const nextItems = fetchMoreResult?.jobs_nearby_aggregate.nodes ?? [];

  //       for (let i = 0, j = nextItems.length; i < j; i++) {
  //         const newItem = nextItems[i];
  //         const isDuplicated = target.some((o) => o.id === newItem.id);
  //         if (!isDuplicated) {
  //           target.push(newItem);
  //         }
  //       }

  //       return {
  //         jobs_nearby_aggregate: {
  //           __typename: 'jobs_aggregate',
  //           nodes: target,
  //         },
  //       };
  //     },
  //   });
  // }, [distance, fetchMore, jobs.length, user, increaseSearchRange]);

  // const [isReady, cancelTimer, resetTimer] = useTimeoutFn(() => {
  //   handleLoadMore();
  // }, 1000);

  // useEffect(() => {
  //   if (jobs.length === 0 && distance < MaxRadiusSearch && retry <= 3) {
  //     resetTimer();
  //   } else {
  //     cancelTimer();
  //   }
  // }, [cancelTimer, resetTimer, distance, jobs, retry]);

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
    if (jobsRefetch) {
      jobsRefetch();
    }
  }, [jobsRefetch]);

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

  // const shouldDisableApply = (item: typeof jobs[0]) => {
  // const [currentApplication] = currentResume?.applications ?? [];

  // const found = item?.applications.find(
  //   (o) => o.id === currentApplication.id,
  // );

  // return !!found;
  //   return false;
  // };

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

  const handleOpenProfile = useCallback(() => {
    navigation.navigate(MainStackEnum.ProfileStack, {
      screen: ProfileStackEnum.Profile,
    });
  }, [navigation]);

  // const renderItem = <TItem extends { id: string }>({ item }: TItem) => (
  //   <JobItem
  //     job={item}
  //     onPress={onPressSingle}
  //     onApply={handleOnApply}
  //     onSave={() => console.log('Saved job!')} // eslint-disable-line
  //   />
  // );

  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#111111' : '#FFFFFF';

  const headerOptions = useMemo(
    () => ({
      navigationOptions: {
        header: () => (
          <View
            style={{ height: Constants.statusBarHeight, backgroundColor }}
          />
        ),
      },
      tabBarHideOnKeyboard: true,
      config: {
        collapsedColor: backgroundColor,
        useNativeDriver: true,
      },
    }),
    [backgroundColor],
  );

  const { onScroll, containerPaddingTop, headerHeight, translateY } =
    useCollapsibleHeader(headerOptions);

  const paddingTop = containerPaddingTop;
  const top = headerHeight + StickyHeaderHeight;

  // Prevent go back to initial stack
  useEffect(
    () => navigation.addListener('beforeRemove', (e) => e.preventDefault()),
    [navigation],
  );

  const isLoading = jobsLoading || profileLoading;

  if (!isAuthenticated) {
    return null;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <>
        <Animated.FlatList
          data={jobs}
          keyExtractor={({ id }, index) => id ?? index}
          onRefresh={handleRefetch}
          refreshing={isLoading}
          initialNumToRender={NumberJobsBatch}
          // onEndReached={handleLoadMore}
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
                  // disabled={shouldDisableApply(item)}
                  onPress={() => handleOnApply(item.id)}
                >
                  Apply now
                </Button>
              </Card>
            </Card>
          )}
          scrollEventThrottle={8}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          contentContainerStyle={{ paddingTop }}
          scrollIndicatorInsets={{ top }}
        />

        <Animated.View
          style={{
            transform: [{ translateY }],
            top: Constants.statusBarHeight,
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            height: StickyHeaderHeight,
            width: '100%',
            zIndex: 0,
          }}
        >
          <View style={styles.subHeader}>
            <Text category="h6" style={styles.logo}>
              GETANTS
            </Text>
            <Pressable onPress={handleOpenProfile}>
              <Avatar size="tiny" source={{ uri: profile?.user.avatarUrl }} />
            </Pressable>
          </View>
        </Animated.View>
      </>
    </SafeAreaView>
  );
};

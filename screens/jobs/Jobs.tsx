import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import Constants from 'expo-constants';
import type { ListRenderItem } from 'react-native';
import type {
  JobListScreenRouteProp,
  JobListScreenNavigationProp,
  Job,
  JobsNearbyAggregateData,
} from '../../utils/types';
import { JOBS_NEARBY_AGGREGATE } from '../../graphqls/jobs';
import { JobStackEnum } from '../../utils/enums';
import {
  Animated,
  SafeAreaView,
  Placeholder,
  Text,
  View,
} from '../../components';
import {
  useQuery,
  useTimeoutFn,
  useCollapsibleHeader,
  useTheme,
} from '../../utils/hooks';
import { getEnvironment } from '../../utils/tokens';
import { JobItem } from './JobItem';

const { tenantId } = getEnvironment();

const NumberJobsBatch = 10;
const MaxRadiusSearch = 9000; // For dev
const StepRadiusSearch = 9000; // For dev
const StickyHeaderHeight = 60;

export type Props = {
  route: JobListScreenRouteProp;
  navigation: JobListScreenNavigationProp;
};

export const JobListScreen = (props: Props) => {
  const { navigation } = props;
  const { theme } = useTheme();

  const [retry, setRetry] = useState<number>(0);
  const [distance, setDistance] = useState<number>(10);
  // const { session } = useAuth();
  // const userId = session?.user?.id ?? '';

  const aggregateJobsVars = useMemo(() => ({
    args: {
      distance,
      lat: 60.333,
      long: 25.023,
    },
    limit: NumberJobsBatch,
    offset: 0,
    where: {
      tenant_id: { _eq: tenantId },
      location: { _is_null: false },
    },
  }), [distance]);

  const {
    data: aggregateJobs,
    error: aggregateError,
    loading,
    fetchMore,
    refetch,
  } = useQuery<JobsNearbyAggregateData>(JOBS_NEARBY_AGGREGATE, {
    variables: aggregateJobsVars,
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  if (aggregateError) {
    console.log('### Jobs aggregateError: ', aggregateError); // eslint-disable-line
  }

  const jobs = useMemo<Job[]>(() => {
    if (aggregateJobs?.jobs_nearby_aggregate?.nodes) {
      return aggregateJobs.jobs_nearby_aggregate.nodes.map((job: Job) => {
        const reducedAddress = job?.address?.unstructured_value?.trim();
        return {
          ...job,
          address: {
            ...job.address,
            unstructured_value: reducedAddress,
          },
        };
      });
    }
    return [];
  }, [aggregateJobs]);

  const increaseSearchRange = useCallback(() => {
    setRetry(() => retry + 1);
    setDistance(() => distance + StepRadiusSearch);
  }, [setRetry, setDistance, retry, distance]);

  const [, cancelTimer, resetTimer] = useTimeoutFn(() => {
    if (jobs.length < 10 && distance < MaxRadiusSearch) {
      increaseSearchRange();
      resetTimer();
    } else {
      cancelTimer();
    }
  }, 1100);

  const handleLoadMore = useCallback(() => {
    fetchMore({
      variables: {
        args: {
          distance,
          lat: 60.333,
          long: 25.023,
        },
        offset: jobs.length,
        limit: NumberJobsBatch,
      },
    }).then(() => {
      increaseSearchRange();
      resetTimer();
    });
  }, [
    distance,
    fetchMore,
    increaseSearchRange,
    jobs.length,
    resetTimer,
  ]);

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

  const onPressSingle = (job: Job) => {
    navigation.navigate(JobStackEnum.SingleJob, {
      jobId: job.id,
      jobTitle: job.title,
      companyName: job.company?.name,
    });
  };

  const handleOnApply = (job: Job) => {
    console.log('### job: ', job); // eslint-disable-line
    // navigation.navigate(MainStackEnum.InboxStack, {
    //   screen: InboxStackEnum.SingleConversation,
    //   params: {
    //     conversationId: id,
    //     userId,
    //     jobId: job.id,
    //   },
    // });
  };

  const renderItem: ListRenderItem<Job> = ({ item }) => (
    <JobItem
      job={item}
      onPress={onPressSingle}
      onApply={handleOnApply}
      onSave={() => console.log('Saved job!')} // eslint-disable-line
    />
  );

  const options = useMemo(() => ({
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
  }), []);

  const {
    onScroll,
    containerPaddingTop,
    scrollIndicatorInsetTop,
    translateY,
  } = useCollapsibleHeader(options);

  const paddingTop = containerPaddingTop + StickyHeaderHeight - Constants.statusBarHeight;
  const top = scrollIndicatorInsetTop + StickyHeaderHeight;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        <Animated.FlatList
          data={jobs}
          keyExtractor={({ id }) => id}
          onRefresh={handleRefetch}
          refreshing={loading || jobs.length < 10}
          initialNumToRender={NumberJobsBatch}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          ListEmptyComponent={<Placeholder component={<Placeholder.JobItem />} />}
          renderItem={renderItem}
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
            backgroundColor: theme.colors?.white ?? '#FFF',
            height: StickyHeaderHeight,
            width: '100%',
          }}
        >
          <View
            style={{
              flex: 1,
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 14, color: theme.colors?.grey0 }}>Sticky</Text>
          </View>
        </Animated.View>
      </>
    </SafeAreaView>
  );
};

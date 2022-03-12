import React, { useCallback, useEffect, useMemo } from 'react';
import Constants from 'expo-constants';
import {
  Animated,
  Avatar,
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
  // useMutation,
  useCollapsibleHeader,
  useColorScheme,
} from '../../hooks';
import { makeBoolExp } from '../../utils/tokens';
import {
  JobStackEnum,
  MainStackEnum,
  ProfileStackEnum,
} from '../../utils/enums';
import {
  OrderBy,
  JobsAggregateDocument,
  // InsertApplicationsOneDocument,
} from '../../graphqls';
import type {
  // InsertApplicationsOneMutation,
  // InsertApplicationsOneMutationVariables,
  Jobs,
  JobsAggregate,
  JobsAggregateQueryVariables,
  JobListScreenNavigationProp,
  JobListScreenRouteProp,
} from '../../utils/types';
import { JobItem } from './JobItem';

const StickyHeaderHeight = Constants.statusBarHeight;

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
  logo: {},
  left: {},
  right: {
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

export type Props = {
  route: JobListScreenRouteProp;
  navigation: JobListScreenNavigationProp;
};

export const JobListScreen = ({ navigation }: Props) => {
  const { isAuthenticated, profile, isLoading: profileLoading } = useAuth();

  // const [insertApplicationMutation] = useMutation<
  //   InsertApplicationsOneMutation,
  //   InsertApplicationsOneMutationVariables
  // >(InsertApplicationsOneDocument);

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
  } = useQuery<{ jobs_aggregate: JobsAggregate }, JobsAggregateQueryVariables>(
    JobsAggregateDocument,
    {
      ...jobsAggregateOptions,
      fetchPolicy: 'cache-and-network',
    },
  );

  const jobs = jobsData?.jobs_aggregate.nodes;

  // Pull to refresh, we should reset the timer
  const handleRefetch = useCallback(() => {
    if (jobsRefetch) {
      jobsRefetch();
    }
  }, [jobsRefetch]);

  const handleOnPressSingle = ({ id, title }: Jobs) => {
    navigation.navigate(JobStackEnum.SingleJobScreen, {
      jobId: id,
      jobTitle: title,
      // companyName: foundJob.quantity,
    });
  };

  // const [currentResume] = profile?.resumes ?? [];

  // const handleOnApply = async (id: string) => {
  //   if (currentResume) {
  //     await insertApplicationMutation({
  //       variables: {
  //         object: {
  //           job_id: id,
  //           resume_id: currentResume.id,
  //         },
  //       },
  //     });

  //     jobsRefetch();
  //   }
  // };

  const handleOpenProfile = useCallback(() => {
    navigation.navigate(MainStackEnum.ProfileStack, {
      screen: ProfileStackEnum.Profile,
    });
  }, [navigation]);

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

  const paddingTop = containerPaddingTop + 10;
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
          initialNumToRender={1}
          // onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          ListEmptyComponent={
            <Placeholder component={<JobItemPlaceholder />} />
          }
          renderItem={({ item }) => (
            <JobItem key={item.id} job={item} onPress={handleOnPressSingle} />
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
            <Text style={styles.logo}>
              <Text category="h6" style={styles.left}>
                GET
              </Text>
              <Text category="h6" style={styles.right}>
                ANTS
              </Text>
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

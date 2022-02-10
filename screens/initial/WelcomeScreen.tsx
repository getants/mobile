/* eslint-disable global-require */
// I already paid 1000euro to use this line, jk, I don't know how to fix this
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ProgressBar, Text, Layout, View } from '../../components';
import {
  InsertResumesOneDocument,
  ResumesDocument,
  // JobsNearbyAggregateDocument,
} from '../../graphqls';
import {
  useAuth,
  useFocusEffect,
  useQuery,
  useMutation,
  useTimeoutFn,
} from '../../utils/hooks';
import { space } from '../../utils/tokens';
import {
  OrderBy,
  RootStackEnum,
  // MainStackEnum,
  // InitialStackEnum,
} from '../../utils/enums';
import type {
  InsertResumesOneMutation,
  InsertResumesOneMutationVariables,
  // JobsNearbyAggregateQuery,
  // JobsNearbyAggregateQueryVariables,
  ResumesQuery,
  ResumesQueryVariables,
  WelcomeScreenNavigationProp,
} from '../../utils/types';

const StyledBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
const TinyMessage = styled(Text)`
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  line-height: ${space(4)};
  margin-top: ${space(2)};
`;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { user, isAuthenticated } = useAuth();
  const [retries, setRetries] = useState(0);
  const [message, setMessage] = useState<string>('Setup, please wait...');

  const { data: aggregateResume } = useQuery<
    ResumesQuery,
    ResumesQueryVariables
  >(ResumesDocument, {
    variables: {
      limit: 1,
      offset: 0,
      order_by: [{ created_at: OrderBy.Desc }],
      where: {
        user_id: { _eq: user?.id },
      },
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
    errorPolicy: 'all',
  });

  // const { data } = useQuery<
  //   JobsNearbyAggregateQuery,
  //   JobsNearbyAggregateQueryVariables
  // >(JobsNearbyAggregateDocument, {
  //   variables: {
  //     args: {
  //       distance: 9999,
  //       user_id: user?.id ?? '',
  //     },
  //     limit: 10,
  //     offset: 0,
  //     where: {
  //       company: {
  //         tenant_id: { _eq: '29fd709e-1b05-4f26-8510-e91d62acc3df' },
  //       },
  //     },
  //   },
  //   fetchPolicy: 'network-only',
  //   // errorPolicy: 'all',
  // });

  // console.log('WelcomeScreen', {
  //   isAuthenticated,
  //   data,
  //   error,
  // });

  const [createResume] = useMutation<
    InsertResumesOneMutation,
    InsertResumesOneMutationVariables
  >(InsertResumesOneDocument);

  const [, cancelTimer, resetTimer] = useTimeoutFn(async () => {
    if (isAuthenticated) {
      // Can not find profile, will try again
      if (aggregateResume === undefined && retries < 2) {
        setMessage(`New profile setup... (${retries + 1}/2)`);
        setRetries((t) => t + 1);
        resetTimer();
      } else if (user && aggregateResume?.resumes.length === 0) {
        setMessage('Creating nessesary data...');
        await createResume({
          variables: {
            object: {
              user_id: user.id,
              summary: `Auto-generated: ${Date.now()}`,
            },
          },
        });
        setMessage('Redirect...');
        navigation.navigate({ key: RootStackEnum.MainStack });
        // TODO: Create setup screen and let user confirm before moving next
        // } else {
        //   navigation.navigate(InitialStackEnum.SetupScreen);
      }
    }
  }, 1000);

  useFocusEffect(
    useCallback(() => {
      resetTimer();
      return () => cancelTimer();
    }, [resetTimer, cancelTimer]),
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate(RootStackEnum.AuthStack);
    }
  }, [isAuthenticated, navigation]);

  return (
    <StyledBackground source={require('../../assets/splash.png')}>
      <Layout direction="column" justify="space-between" height="100%" gap={20}>
        <View />

        <View>
          <ProgressBar />
          <TinyMessage>{message}</TinyMessage>
        </View>
      </Layout>
    </StyledBackground>
  );
};

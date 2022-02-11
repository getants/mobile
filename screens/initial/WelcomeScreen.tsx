/* eslint-disable global-require */
// I already paid 1000euro to use this line, jk, I don't know how to fix this
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Button, ProgressBar, StyleSheet, Text, View } from '../../components';
import {
  useAuth,
  useFocusEffect,
  useQuery,
  useMutation,
  useTimeoutFn,
} from '../../utils/hooks';
import { nhost } from '../../utils/nhost';
import {
  OrderBy,
  RootStackEnum,
  // MainStackEnum,
  // InitialStackEnum,
} from '../../utils/enums';
import {
  InsertResumesOneDocument,
  ResumesDocument,
  // JobsNearbyAggregateDocument,
} from '../../graphqls';
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
  font-weight: 300;
  margin-top: 3%;
`;

const StyledView = styled(View)`
  align-items: center;
`;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    height: '100%',
    justifyContent: 'space-between',
  },
});

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
      <View style={styles.wrapper}>
        <View />

        <StyledView>
          <ProgressBar />

          <TinyMessage>{message}</TinyMessage>

          {__DEV__ && (
            <Button onPress={() => nhost.auth.signOut()}>Signout</Button>
          )}
        </StyledView>
      </View>
    </StyledBackground>
  );
};

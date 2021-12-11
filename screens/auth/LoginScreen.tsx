import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import * as ErrorRecovery from 'expo-error-recovery';
import { nhost } from '../../utils/nhost';
import { LoginForm } from './LoginForm';
import { AuthStackEnum, MainStackEnum, RootStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';
import { AuthScreensWrapper } from './AuthScreensWrapper';

export const SITES_AGGREGATE = gql`
  query SITES_AGGREGATE($user_id: uuid!) {
    sites_aggregate(limit: 10, offset: 0, where: { user: { id: { _eq: $user_id } } }) {
      nodes {
        description
        id
        name
        slug
        status
        user {
          id
        }
        collections(where: {status: {_eq: "PUBLIC"}}) {
          id
          name
        }
      }
    }
  }
`;
type SubmitCallback = React.ComponentProps<typeof LoginForm>['onSubmit'];

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen = (props: Props) => {
  const { navigation } = props;

  const {
    loading: queryLoading,
    data: queryData,
    error: queryError,
    refetch: queryRefetch,
  } = useQuery(
    SITES_AGGREGATE,
    {
      variables: {
        user_id: '93c93692-f636-4dbd-94bd-27ee916abf26',
      },
      context: {
        headers: {
          'x-hasura-role': 'me',
        },
      },
    },
  );

  const handleLogin: SubmitCallback = async (input) => {
    try {
      await nhost.auth.signIn(input);
      navigation.navigate(RootStackEnum.MainStack, {
        screen: MainStackEnum.JobStack,
      });
    } catch (err) {
      ErrorRecovery.setRecoveryProps({
        currentScreen: AuthStackEnum.SignupScreen,
        error: err,
      });
    }
  };

  const goToSignup = () => {
    navigation.navigate(AuthStackEnum.SignupScreen);
  };

  return (
    <AuthScreensWrapper>
      <LoginForm onSubmit={handleLogin} onSwitchView={goToSignup} />
    </AuthScreensWrapper>
  );
};

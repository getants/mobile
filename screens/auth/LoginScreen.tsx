import React, { useEffect } from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { nhost } from '../../utils/nhost';
import { LoginForm } from './LoginForm';
import {
  AuthStackEnum,
  // MainStackEnum,
  // RootStackEnum
} from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';
import { AuthScreensWrapper } from './AuthScreensWrapper';

type SubmitCallback = React.ComponentProps<typeof LoginForm>['onSubmit'];

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen = (props: Props) => {
  const { navigation } = props;

  const handleLogin: SubmitCallback = async (input) => {
    try {
      await nhost.auth.signIn(input);
      // console.log({ res });

      // navigation.navigate(RootStackEnum.MainStack, {
      //   screen: MainStackEnum.JobStack,
      // });
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

  // Prevent go back to initial stack
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }),
    [navigation],
  );

  return (
    <AuthScreensWrapper>
      <LoginForm onSubmit={handleLogin} onSwitchView={goToSignup} />
    </AuthScreensWrapper>
  );
};

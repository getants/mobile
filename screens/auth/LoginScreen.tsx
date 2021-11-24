import React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { nhost } from '../../utils/nhost';
import { LoginForm } from '../../components';
import { AuthStackEnum } from '../../utils/enums';
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
      navigation?.navigate('AppScreen');
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

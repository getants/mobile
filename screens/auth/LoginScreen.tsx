import React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { LoginForm } from '../../components';
import { AuthStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';
import { AuthScreensWrapper } from './AuthScreensWrapper';
import { nhost } from '../../utils/nhost';

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen = (props: Props) => {
  const { navigation } = props;

  const handleLogin = async (input) => {
    try {
      const response = await nhost.auth.signIn(input);
      console.log(JSON.stringify(response));
      // props?.navigation?.navigate('AppScreen')
    } catch (err) {
      console.log(JSON.stringify(err));
      ErrorRecovery.setRecoveryProps({
        currentScreen: AuthStackEnum.Signup,
        error: err,
      });
    }
  };

  const goToSignup = () => {
    navigation.navigate(AuthStackEnum.Signup);
  };

  return (
    <AuthScreensWrapper>
      <LoginForm onSubmit={handleLogin} onSwitchView={goToSignup} />
    </AuthScreensWrapper>
  );
};

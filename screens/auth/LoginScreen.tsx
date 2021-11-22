import React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { LoginForm } from '../../components';
import { AuthStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';
import { AuthScreensWrapper } from './AuthScreensWrapper';

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen = (props: Props) => {
  const { navigation } = props;

  const handleLogin = async () => {
    try {
      // props?.navigation?.navigate('AppScreen')
    } catch (err) {
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

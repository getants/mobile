import React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { SignupForm, SignupFormInput } from '../../components';
import { AuthStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';
import { AuthScreensWrapper } from './AuthScreensWrapper';

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const SignupScreen = (props: Props) => {
  const { navigation } = props;

  const handleSignup = async (data: SignupFormInput) => {
    try {
      // const test = await auth.login({ email, password });
      // props?.navigation?.navigate('AppScreen')
    } catch (e) {
      ErrorRecovery.setRecoveryProps({ currentScreen: AuthStackEnum.Signup });
    }
  };

  const goToLogin = () => {
    navigation.navigate(AuthStackEnum.Login);
  };

  return (
    <AuthScreensWrapper>
      <SignupForm onSubmit={handleSignup} onSwitchView={goToLogin} />
    </AuthScreensWrapper>
  );
};

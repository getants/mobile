import React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { LoginForm } from '@/components';
import { AuthStackEnum } from '@/utils/enums';
import type { LoginScreenNavigationProp } from '@/utils/types';
import Wrapper from './Wrapper';

export type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = (props: Props) => {
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
    <Wrapper>
      <LoginForm
        onSubmit={handleLogin}
        onSwitchView={goToSignup}
      />
    </Wrapper>
  );
};

export default LoginScreen;

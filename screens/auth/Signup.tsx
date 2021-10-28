import React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { SignupForm, SignupFormInput } from '@/components';
import { AuthStackEnum } from '@/utils/enums';
import type { LoginScreenNavigationProp } from '@/utils/types';
import Wrapper from './Wrapper';

export type Props = {
  navigation: LoginScreenNavigationProp;
};

const SignupScreen = (props: Props) => {
  const { navigation } = props;

  const handleSignup = async (data: SignupFormInput) => {
    try {
      console.log('### data: ', data);
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
    <Wrapper>
      <SignupForm
        onSubmit={handleSignup}
        onSwitchView={goToLogin}
      />
    </Wrapper>
  );
};

export default SignupScreen;

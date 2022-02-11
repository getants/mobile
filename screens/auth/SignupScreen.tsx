import React from 'react';
import * as ErrorRecovery from 'expo-error-recovery';
import { Keyboard } from 'react-native';
import { nhost } from '../../utils/nhost';
import { AuthStackEnum } from '../../utils/enums';
import type { LoginScreenNavigationProp } from '../../utils/types';
import { AuthScreensWrapper } from './AuthScreensWrapper';
import { SignupForm } from './SignupForm';

type SubmitCallback = React.ComponentProps<typeof SignupForm>['onSubmit'];

export type Props = {
  navigation: LoginScreenNavigationProp;
};

export const SignupScreen = (props: Props) => {
  const { navigation } = props;

  const handleSignup: SubmitCallback = async (input) => {
    try {
      await nhost.auth.signUp(input);
    } catch (e) {
      ErrorRecovery.setRecoveryProps({
        currentScreen: AuthStackEnum.SignupScreen,
      });
    }
  };

  const goToLogin = () => {
    Keyboard.dismiss();
    navigation.navigate(AuthStackEnum.LoginScreen);
  };

  return (
    <AuthScreensWrapper>
      <SignupForm onSubmit={handleSignup} onSwitchView={goToLogin} />
    </AuthScreensWrapper>
  );
};

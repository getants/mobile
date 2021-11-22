import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen } from '../screens';
import { AuthStackEnum } from '../utils/enums';
import { makeNavigationOptions } from '../utils/navigations';
import type { AuthStackParams } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<AuthStackParams>();

const customOptions = makeNavigationOptions({ effectStyle: 'fade' });

const AuthStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen
      name={AuthStackEnum.Login}
      component={LoginScreen}
      options={customOptions}
    />
    <Screen
      name={AuthStackEnum.Signup}
      component={SignupScreen}
      options={customOptions}
    />
  </Navigator>
);

export default AuthStack;

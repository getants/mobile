import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen } from '../screens';
import { AuthStackEnum } from '../utils/enums';
import { createOptions } from '../utils/navigations';
import type { AuthStackParams } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<AuthStackParams>();

const customOptions = createOptions({ effectStyle: 'fade' });

export const AuthStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen
      name={AuthStackEnum.LoginScreen}
      component={LoginScreen}
      options={customOptions}
    />
    <Screen
      name={AuthStackEnum.SignupScreen}
      component={SignupScreen}
      options={customOptions}
    />
  </Navigator>
);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '@/screens';
import { AuthStackEnum } from '@/utils/enums';
import { makeNavigationOptions } from '@/utils/navigations';
import type { AuthStackParams } from '@/utils/types';

const { Navigator, Screen } = createStackNavigator<AuthStackParams>();

const customOptions = makeNavigationOptions({ effectStyle: 'fade' });

const AuthStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen
      name={AuthStackEnum.Login}
      component={Login}
      options={customOptions}
    />
    <Screen
      name={AuthStackEnum.Signup}
      component={Signup}
      options={customOptions}
    />
  </Navigator>
);

export default AuthStack;

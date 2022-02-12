import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens';
import { createOptions } from '../utils/navigations';
import { InitialStackEnum } from '../utils/enums';
import type { InitialStackParams } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<InitialStackParams>();

const customOptions = createOptions();

export const InitialStack = () => (
  <Navigator screenOptions={customOptions}>
    <Screen
      name={InitialStackEnum.WelcomeScreen}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

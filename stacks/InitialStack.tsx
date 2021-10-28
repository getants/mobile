import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen, SetupScreen } from '@screens/initial';
import defaultOptions from './helpers/navigations';
import { InitialStackEnum } from './Types';
import type { InitialStackParams } from './Types';

const { Navigator, Screen } = createStackNavigator<InitialStackParams>();

const InitialStack = () => (
  <Navigator screenOptions={defaultOptions}>
    <Screen
      name={InitialStackEnum.WelcomeScreen}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name={InitialStackEnum.SetupScreen}
      component={SetupScreen}
      options={{
        title: 'Setup your profile',
        headerShown: true,
        headerLeft: () => null,
      }}
    />
  </Navigator>
);

export default InitialStack;

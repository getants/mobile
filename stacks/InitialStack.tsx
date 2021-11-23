import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen } from '../screens';
import { makeNavigationOptions } from '../utils/navigations';
import { InitialStackEnum } from '../utils/enums';
import type { InitialStackParams } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<InitialStackParams>();

const customOptions = makeNavigationOptions({});

const InitialStack = () => (
  <Navigator screenOptions={customOptions}>
    <Screen
      name={InitialStackEnum.WelcomeScreen}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    {/* <Screen */}
    {/*   name={InitialStackEnum.SetupScreen} */}
    {/*   component={SetupScreen} */}
    {/*   options={{ */}
    {/*     title: 'Setup your profile', */}
    {/*     headerShown: true, */}
    {/*     headerLeft: () => null, */}
    {/*   }} */}
    {/* /> */}
  </Navigator>
);

export default InitialStack;

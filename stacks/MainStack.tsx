import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Icon } from '../components';

import { JobStack } from './JobStack';
import { MainStackEnum } from '../utils/enums';
import type { MainStackParams } from '../utils/types';

const tabBarOptions = {
  // tabBarActiveTintColor: Colors.primary,
  keyboardHidesTabBar: true,
  tabBarstyle: {
    paddingTop: 15,
    paddingBottom: 15,
    height: 60,
  },
};

type IconProps = {
  focused: boolean;
  color?: string;
  size?: number;
  horizontal?: boolean | undefined;
  tintColor?: string | undefined;
};

const makeIcon = (focused: boolean, name: string) => {
  const resetStyle = {
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 10,
    width: 32,
    height: 32,
  };

  return (
    <Icon
      type="material"
      name={focused ? name : `${name}-outline`}
      fill="#cccccc"
      style={resetStyle}
    />
  );
};

const baseOptions = {
  // headerStyle: MainStackStyles.screenOptions,
  // headerTintColor: Colors.white,
};

const { Navigator, Screen } = createBottomTabNavigator<MainStackParams>();

export const MainStack = () => (
  <Navigator initialRouteName={MainStackEnum.JobStack} backBehavior="history">
    <Screen
      name={MainStackEnum.JobStack}
      component={JobStack}
      options={() => ({
        ...baseOptions,
        ...tabBarOptions,
        tabBarLabel: 'jobs',
        tabBarIcon: ({ focused }: IconProps) => makeIcon(focused, 'briefcase'),
        tabBarVisible: true,
        headerShown: false,
      })}
    />
  </Navigator>
);

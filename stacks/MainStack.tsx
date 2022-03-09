import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Icon } from '../components';

import { JobStack } from './JobStack';
import { MainStackEnum } from '../utils/enums';
import { useTheme } from '../utils/hooks';
import type { MainStackParams, Colors } from '../utils/types';

const tabBarScreensOptions = {
  keyboardHidesTabBar: true,
  tabBarStyle: {
    height: 65,
    paddingTop: 0,
    paddingBottom: 10,
  },
};

type MakeIconOptions = {
  focused: boolean;
  icon: string;
  colors: Colors;
};

const makeIcon = ({ focused, icon, colors }: MakeIconOptions) => {
  const activeColor = colors.grey700;
  const inactiveColor = colors.grey600;

  const resetStyle = {
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 1,
    width: 32,
    height: 32,
  };

  return (
    <Icon
      type="material"
      name={focused ? icon : `${icon}-outline`}
      fill={focused ? activeColor : inactiveColor}
      style={resetStyle}
    />
  );
};

const { Navigator, Screen } = createBottomTabNavigator<MainStackParams>();

export const MainStack = () => {
  const { colors } = useTheme();

  return (
    <Navigator initialRouteName={MainStackEnum.JobStack} backBehavior="history">
      <Screen
        name={MainStackEnum.JobStack}
        component={JobStack}
        options={() => ({
          ...tabBarScreensOptions,
          tabBarActiveTintColor: colors.grey700,
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ focused }) =>
            makeIcon({ focused, colors, icon: 'briefcase' }),
          headerShown: false,
        })}
      />
    </Navigator>
  );
};

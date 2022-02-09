import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import { Icon } from '../components';

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

// type IconProps = {
//   focused: boolean;
//   color?: string;
//   size?: number;
//   horizontal?: boolean | undefined;
//   tintColor?: string | undefined;
// };

// type ScreenItemType = {
//   icon: string;
//   focusedIcon: string;
//   labelId: string;
//   component: ReactNode;
// };

const screens = [
  {
    name: MainStackEnum.JobStack,
    icon: 'work-outline',
    focusedIcon: 'work',
    labelId: 'jobs',
    component: JobStack,
  },
  // InboxStack: {
  //   icon: 'inbox-outline',
  //   focusedIcon: 'inbox',
  //   labelId: 'inbox',
  //   // component: InboxStack,
  // },
  // CalendarStack: {
  //   icon: 'calendar-check-outline',
  //   focusedIcon: 'calendar',
  //   labelId: 'calendar',
  //   // component: CalendarStack,
  // },
  // ProfileStack: {
  //   icon: 'account-circle-outline',
  //   focusedIcon: 'account-circle',
  //   labelId: 'account',
  //   // component: ProfileStack,
  // },
];

// const makeIcon = (focused: boolean, screen: ScreenItemType) => {
//   const { icon, focusedIcon } = screen;
//   const resetStyle = {
//     marginTop: 0,
//     marginBottom: 0,
//     paddingBottom: 10,
//   };

//   return (
//     <Icon
//       type="material"
//       name={focused ? focusedIcon : icon}
//       // color={focused ? Colors.primary : Colors.grey10}
//       // style={resetStyle}
//       // size={25}
//     />
//   );
// };

const baseOptions = {
  // headerStyle: MainStackStyles.screenOptions,
  // headerTintColor: Colors.white,
};

const { Navigator, Screen } = createBottomTabNavigator<MainStackParams>();

const shouldShowTabBar = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';

  switch (routeName) {
    case 'SingleJob':
    case 'SingleConversation':
      return false;
    default:
      return true;
  }
};

export const MainStack = () => (
  <Navigator initialRouteName={MainStackEnum.JobStack} backBehavior="history">
    {screens.map((screen) => (
      <Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={({ route }) => ({
          ...baseOptions,
          ...tabBarOptions,
          tabBarLabel: screen.labelId,
          // tabBarIcon: ({ focused }: IconProps) => makeIcon(focused, screen),
          tabBarVisible: shouldShowTabBar(route),
          headerShown: false,
        })}
      />
    ))}
  </Navigator>
);

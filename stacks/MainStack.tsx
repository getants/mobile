import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Icon } from '@/components';
// import { i18n } from '@hooks/useTranslate';
// import { MainStackStyles } from '@styles/global';
// import Colors from '@styles/colors';

import {
  // JobStack,
  // InboxStack,
  // CalendarStack,
  // ProfileStack,
} from '@/stacks';
import { MainStackEnum } from '@/utils/enums';
import type { MainStackParams } from '@/utils/types';

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

type ScreenItemType = {
  icon: string;
  focusedIcon: string;
  labelId: string;
  component: ReactNode;
};

const screens = {
  JobStack: {
    icon: 'briefcase-outline',
    focusedIcon: 'briefcase-search',
    labelId: 'jobs',
    // component: JobStack,
  },
  InboxStack: {
    icon: 'inbox-outline',
    focusedIcon: 'inbox',
    labelId: 'inbox',
    // component: InboxStack,
  },
  CalendarStack: {
    icon: 'calendar-check-outline',
    focusedIcon: 'calendar',
    labelId: 'calendar',
    // component: CalendarStack,
  },
  ProfileStack: {
    icon: 'account-circle-outline',
    focusedIcon: 'account-circle',
    labelId: 'account',
    // component: ProfileStack,
  },
};

const makeIcon = (focused: boolean, screen: ScreenItemType) => {
  const { icon, focusedIcon } = screen;
  const resetStyle = {
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 10,
  };

  return (
    <Icon
      name={focused ? focusedIcon : icon}
      // color={focused ? Colors.primary : Colors.grey10}
      style={resetStyle}
      size={25}
    />
  );
};

const baseOptions = {
  // headerStyle: MainStackStyles.screenOptions,
  // headerTintColor: Colors.white,
};

const { Navigator, Screen } = createBottomTabNavigator<
  MainStackParams
>();

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

const MainStack = () => (
  <Navigator
    initialRouteName={MainStackEnum.JobStack}
    backBehavior="history"
  >
    {/* {Object.keys(screens).map((k: keyof MainStackParams) => ( */}
    {/*   <Screen */}
    {/*     key={k} */}
    {/*     name={k} */}
    {/*     component={screens[k].component} */}
    {/*     options={({ route }) => ({ */}
    {/*       ...baseOptions, */}
    {/*       ...tabBarOptions, */}
    {/*       tabBarLabel: i18n.t(screens[k].labelId), */}
    {/*       tabBarIcon: ({ focused }: IconProps) => makeIcon(focused, screens[k]), */}
    {/*       tabBarVisible: shouldShowTabBar(route), */}
    {/*       headerShown: false, */}
    {/*     })} */}
    {/*   /> */}
    {/* ))} */}
  </Navigator>
);
export default MainStack;

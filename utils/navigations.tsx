import React from 'react';
import deepmerge from 'deepmerge';
import { HeaderBackButton } from '@react-navigation/elements';
import type {
  StackNavigationOptions,
  NavigationOptionParams,
  StackScreens,
} from './types';

const defaultOptions: StackNavigationOptions = {
  // headerStyle: globalStyles.defaultHeaderStyle,
  // headerTitleStyle: globalStyles.defaultHeaderTitleStyle,
  // headerTintColor: Colors.white,
  headerTitleAlign: 'center',
  headerTitleContainerStyle: {
    justifyContent: 'center',
  },
};

const forFade = ({ current }: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const createOptions = (params?: NavigationOptionParams) => {
  const { options = {}, effectStyle = 'slide' } = params ?? {};
  const tempOptions: Partial<StackNavigationOptions> = { ...options };

  if (effectStyle === 'fade') {
    tempOptions.cardStyleInterpolator = forFade;
  }

  return deepmerge(defaultOptions, tempOptions);
};

export const renderHeaderLeft = <T extends { name: StackScreens }>(
  route: T,
  props: React.ComponentProps<typeof HeaderBackButton>,
) => {
  const routeName = route?.name ?? '';

  switch (routeName) {
    case 'JobListScreen':
    case 'InboxScreen':
    case 'Calendar':
    case 'Profile':
      return null;
    default:
      return <HeaderBackButton {...props} />;
  }
};

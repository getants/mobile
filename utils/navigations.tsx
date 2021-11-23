import React from 'react';
import deepmerge from 'deepmerge';
import { HeaderBackButton } from '@react-navigation/elements';
import type { StackNavigationOptions } from '@react-navigation/stack';

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

export const makeNavigationOptions = ({
  effectStyle = 'slide',
  options = {},
}: {
  effectStyle?: 'slide' | 'fade';
  options?: StackNavigationOptions;
}): StackNavigationOptions => {
  const tempOptions = { ...options };

  if (effectStyle === 'fade') {
    tempOptions.cardStyleInterpolator = forFade;
  }

  return deepmerge(defaultOptions, tempOptions);
};

export const renderHeaderLeft = <T extends { name: string }>(
  route: T,
  props: React.ComponentProps<typeof HeaderBackButton>,
) => {
  const routeName = route?.name ?? '';

  switch (routeName) {
  case 'JobList':
  case 'Inbox':
  case 'Calendar':
  case 'Profile':
    return null;
  default:
    return <HeaderBackButton {...props} />;
  }
};

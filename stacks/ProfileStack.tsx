import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from '../screens';
import { createOptions, renderHeaderLeft } from '../utils/navigations';
import { ProfileStackEnum } from '../utils/enums';
import type { ProfileStackParams } from '../utils/types';

const { Navigator, Screen } = createStackNavigator<ProfileStackParams>();

const customOptions = createOptions({});

const ProfileStack = () => (
  <Navigator screenOptions={customOptions}>
    <Screen
      name={ProfileStackEnum.Profile}
      component={ProfileScreen}
      options={({ route }) => ({
        headerLeft: (props) => renderHeaderLeft(route, props),
      })}
    />
  </Navigator>
);

export default ProfileStack;

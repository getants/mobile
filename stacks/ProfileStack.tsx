import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileView from '@screens/profile';
import CameraRollView from '@screens/camera-roll';
import defaultOptions from './helpers/navigations';
import type { ProfileStackParams } from './Types';
import { renderHeaderLeft } from './helpers/customComponents';

const screens = {
  Profile: ProfileView,
  CameraRoll: CameraRollView,
};

const { Navigator, Screen } = createStackNavigator<ProfileStackParams>();

const ProfileStack = () => (
  <Navigator screenOptions={defaultOptions}>
    {Object.keys(screens).map((k: keyof ProfileStackParams) => (
      <Screen
        key={k}
        name={k}
        component={screens[k]}
        options={({ route }) => ({
          headerLeft: (props) => renderHeaderLeft(route, props),
        })}
      />
    ))}
  </Navigator>
);

export default ProfileStack;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SingleJobScreen, JobListScreen } from '../screens/jobs';
import { createOptions, renderHeaderLeft } from '../utils/navigations';
import { JobStackEnum } from '../utils/enums';
import type { JobStackParams } from '../utils/types';

const defaultOptions = createOptions();

const { Navigator, Screen } = createStackNavigator<JobStackParams>();

export const JobStack = () => (
  <Navigator screenOptions={defaultOptions}>
    <Screen
      name={JobStackEnum.JobListScreen}
      component={JobListScreen}
      options={({ route }) => ({
        headerLeft: (props) => renderHeaderLeft(route, props),
      })}
    />
    <Screen
      name={JobStackEnum.SingleJobScreen}
      component={SingleJobScreen}
      options={({ route }) => ({
        headerLeft: (props) => renderHeaderLeft(route, props),
      })}
    />
  </Navigator>
);

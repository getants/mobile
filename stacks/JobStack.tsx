import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { JobListScreen } from '../screens/jobs';
import { createOptions } from '../utils/navigations';
import { JobStackEnum } from '../utils/enums';
import type { JobStackParams } from '../utils/types';

const defaultOptions = createOptions();

const { Navigator, Screen } = createStackNavigator<JobStackParams>();

export const JobStack = () => {
  return (
    <Navigator screenOptions={defaultOptions}>
      <Screen name={JobStackEnum.JobListScreen} component={JobListScreen} />
    </Navigator>
  );
};

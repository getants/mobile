import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SingleJob as SingleJobView,
  JobList as JobListView,
} from '../screens/jobs';
import { makeNavigationOptions, renderHeaderLeft } from '../utils/navigations';
import { JobStackEnum } from '../utils/enums';
import type { JobStackParams } from '../utils/types';

const defaultOptions = makeNavigationOptions({});

const screens = [
  {
    name: JobStackEnum.JobList,
    component: JobListView,
  },
  {
    name: JobStackEnum.SingleJob,
    component: SingleJobView,
  },
];

const { Navigator, Screen } = createStackNavigator<JobStackParams>();

export const JobStack = () => (
  <Navigator screenOptions={defaultOptions}>
    {screens.map((screen) => (
      <Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={({ route }) => ({
          headerLeft: (props) => renderHeaderLeft(route, props),
        })}
      />
    ))}
  </Navigator>
);

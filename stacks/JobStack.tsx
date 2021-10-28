import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SingleJob as SingleJobView,
  JobList as JobListView,
} from '../screens/jobs';
import defaultOptions from './helpers/navigations';
import { renderHeaderLeft } from './helpers/customComponents';
import type { JobStackParams } from './Types';

const screens = {
  JobList: JobListView,
  SingleJob: SingleJobView,
};

const { Navigator, Screen } = createStackNavigator<JobStackParams>();

const JobStack = () => (
  <Navigator screenOptions={defaultOptions}>
    {Object.keys(screens).map((k: keyof JobStackParams) => (
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

export default JobStack;

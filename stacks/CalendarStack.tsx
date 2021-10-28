import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CalendarView from '../screens/calendar';
import defaultOptions from './helpers/navigations';
import { renderHeaderLeft } from './helpers/customComponents';
import type { CalendarStackParams } from './Types';

const screens = {
  Calendar: CalendarView,
};

const { Navigator, Screen } = createStackNavigator<CalendarStackParams>();

const CalendarStack = () => (
  <Navigator screenOptions={defaultOptions}>
    {Object.keys(screens).map((k: keyof CalendarStackParams) => (
      <Screen
        name={k}
        component={screens[k]}
        options={({ route }) => ({
          headerLeft: (props) => renderHeaderLeft(route, props),
        })}
      />
    ))}
  </Navigator>
);

export default CalendarStack;

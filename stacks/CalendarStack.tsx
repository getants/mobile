import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CalendarScreen } from '../screens';
import { renderHeaderLeft, createOptions } from '../utils/navigations';
import { CalendarStackEnum } from '../utils/enums';
import type { CalendarStackParams } from '../utils/types';

const customOptions = createOptions();

const { Navigator, Screen } = createStackNavigator<CalendarStackParams>();

export const CalendarStack = () => (
  <Navigator>
    <Screen
      name={CalendarStackEnum.Calendar}
      component={CalendarScreen}
      options={({ route }) => ({
        ...customOptions,
        headerLeft: (props) => renderHeaderLeft(route, props),
      })}
    />
  </Navigator>
);

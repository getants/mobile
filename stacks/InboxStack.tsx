import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { InboxScreen, ConversationScreen } from '../screens';
import { createOptions, renderHeaderLeft } from '../utils/navigations';
import { InboxStackEnum } from '../utils/enums';
import type { InboxStackParams } from '../utils/types';

const customOptions = createOptions({ options: { headerMode: 'screen' } });

const { Navigator, Screen } = createStackNavigator<InboxStackParams>();

export const InboxStack = () => (
  <Navigator
    initialRouteName={InboxStackEnum.InboxScreen}
    screenOptions={customOptions}
  >
    <Screen
      name={InboxStackEnum.InboxScreen}
      component={InboxScreen}
      options={({ route }) => ({
        headerLeft: (props) => renderHeaderLeft(route, props),
      })}
    />
    <Screen
      name={InboxStackEnum.ConversationScreen}
      component={ConversationScreen}
      options={({ route }) => ({
        headerLeft: (props) => renderHeaderLeft(route, props),
      })}
    />
  </Navigator>
);

export default InboxStack;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inbox, { SingleConversation } from '../screens/inbox';
import defaultOptions from './helpers/navigations';
import { renderHeaderLeft } from './helpers/customComponents';
import { InboxStackEnum } from './Types';
import type { InboxStackParams } from './Types';

const screens = {
  [InboxStackEnum.Inbox]: Inbox,
  [InboxStackEnum.SingleConversation]: SingleConversation,
};

const { Navigator, Screen } = createStackNavigator<InboxStackParams>();

const InboxStack = () => (
  <Navigator
    initialRouteName={InboxStackEnum.Inbox}
    screenOptions={{ ...defaultOptions, headerMode: 'screen' }}
  >
    {Object.keys(screens).map((k: keyof InboxStackParams) => (
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

export default InboxStack;

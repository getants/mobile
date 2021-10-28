import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
// import { useAuth } from '@hooks';

import AuthStack from './AuthStack';
// import InitialStack from './InitialStack';
// import MainStack from './MainStack';
import { RootStackEnum } from '@/utils/enums';
import type { RootStackParams } from '@/utils/types';

LogBox.ignoreLogs(['Warning:']);

export type IconProps = {
  focused: boolean;
  horizontal?: boolean | undefined;
  tintColor?: string | undefined;
};

const { Navigator, Screen } = createStackNavigator<
  RootStackParams
>();

export const RootStack = () => {
  // const { session } = useAuth();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={RootStackEnum.AuthStack} component={AuthStack} />

      {/* {session?.jwt && session?.initial && ( */}
      {/*   <Screen */}
      {/*     name={RootStackEnum.InitialStack} */}
      {/*     component={InitialStack} */}
      {/*   /> */}
      {/* )} */}

      {/* {session?.jwt && session?.user ? ( */}
      {/*   <Screen */}
      {/*     name={RootStackEnum.MainStack} */}
      {/*     component={MainStack} */}
      {/*   /> */}
      {/* ) : ( */}
      {/*   <Screen name={RootStackEnum.AuthStack} component={AuthStack} /> */}
      {/* )} */}
    </Navigator>
  );
};

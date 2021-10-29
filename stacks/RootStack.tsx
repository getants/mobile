import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '@/utils/states';

import AuthStack from './AuthStack';
import InitialStack from './InitialStack';
// import MainStack from './MainStack';
import { RootStackEnum } from '@/utils/enums';
import type { RootStackParams } from '@/utils/types';

export type IconProps = {
  focused: boolean;
  horizontal?: boolean | undefined;
  tintColor?: string | undefined;
};

const { Navigator, Screen } = createStackNavigator<
  RootStackParams
>();

export const RootStack = () => {
  const { isLoggedIn } = useAuth();
  console.log('### isLoggedIn: ', isLoggedIn);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn && (
        <Screen
          name={RootStackEnum.AuthStack}
          component={AuthStack}
        />
      )}

      {isLoggedIn && (
        <Screen
          name={RootStackEnum.InitialStack}
          component={InitialStack}
        />
      )}

      {/* {isLoggedIn ? ( */}
      {/*   <Screen */}
      {/*     name={RootStackEnum.MainStack} */}
      {/*     component={MainStack} */}
      {/*   /> */}
      {/* ) : ( */}
      {/*   <Screen */}
      {/*     name={RootStackEnum.AuthStack} */}
      {/*     component={AuthStack} */}
      {/*   /> */}
      {/* )} */}
    </Navigator>
  );
};

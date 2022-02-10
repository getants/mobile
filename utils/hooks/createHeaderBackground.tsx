import * as React from 'react';
import { Animated, View } from 'react-native';
import type { ColorValue } from 'react-native';
// import { getElevationStyle } from './utils';

export type Params = {
  translateY: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
  backgroundColor?: ColorValue;
  collapsedColor: string | null;
  headerBackground?: React.ReactNode;
};

const createHeaderBackground =
  ({
    translateY,
    opacity,
    backgroundColor,
    collapsedColor,
    headerBackground,
  }: Params) =>
  () =>
    (
      <Animated.View style={{ flex: 1, transform: [{ translateY }] }}>
        <View
          style={[
            {
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: collapsedColor ?? backgroundColor,
            },
          ]}
        />
        <Animated.View
          style={{
            backgroundColor,
            flex: 1,
            opacity,
          }}
        >
          {headerBackground}
        </Animated.View>
      </Animated.View>
    );

export { createHeaderBackground };

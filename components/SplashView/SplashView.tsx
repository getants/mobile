/* eslint-disable global-require */
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import type { ViewProps } from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
});

export const SplashView: React.FC<ViewProps> = ({ children, ...restProps }) => {
  return (
    // I already paid 1000$ to use this line, jk, I don't know how to fix this
    <ImageBackground
      style={styles.wrapper}
      source={require('../../assets/splash.png')}
    >
      <View style={styles.inner} {...restProps}>
        <View />
        {children}
      </View>
    </ImageBackground>
  );
};

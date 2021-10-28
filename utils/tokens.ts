import Constants from 'expo-constants';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { ENV_VARS } from './constants';
import { EnvironmentType } from './types';

export const propertyMap: Record<string, string> = {
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  w: 'width',
  h: 'height',
};

// TODO: How to check mt-10 type?
export const style = (input: string) => {
  if (input.length < 4) {
    throw new Error('Wrong token shape');
  }

  const tokens = input.split(' ');

  return tokens.map((token) => {
    const [property, value] = token.split('-');
    if (!propertyMap[property]) {
      throw new Error('Wrong property name');
    }
    const styles = StyleSheet.create({
      [token]: {
        [propertyMap[property]]: parseInt(value, 10),
      },
    });
    return styles[token];
  });
};

export const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return isIphoneX() ? 44 : 20;
  } if (Platform.OS === 'android') {
    return StatusBar.currentHeight;
  }
  return 0;
};

// Release Channel must has this form: env-country
// E.g: dev-finland, prod-finland, stage-thailand
export const getEnvironment = (): EnvironmentType => {
  const { manifest } = Constants;
  const { releaseChannel = 'dev-finland' } = manifest ?? {};
  const [env, country] = releaseChannel.split('-');
  return ENV_VARS[env][country];
};

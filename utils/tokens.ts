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

export const makeProperty = (key: string, value: number) => {
  switch (key) {
    case 'mt':
      return {
        marginTop: value,
      };
    case 'mr':
      return {
        marginRight: value,
      };
    case 'mb':
      return {
        marginBottom: value,
      };
    case 'ml':
      return {
        marginLeft: value,
      };
    case 'mx':
      return {
        marginLeft: value,
        marginRight: value,
      };
    case 'my':
      return {
        marginTop: value,
        marginBottom: value,
      };
    case 'pt':
      return {
        paddingTop: value,
      };
    case 'pr':
      return {
        paddingRight: value,
      };
    case 'pb':
      return {
        paddingBottom: value,
      };
    case 'pl':
      return {
        paddingLeft: value,
      };
    case 'px':
      return {
        paddingLeft: value,
        paddingRight: value,
      };
    case 'py':
      return {
        paddingTop: value,
        paddingBottom: value,
      };
    case 'w':
      return {
        width: value,
      };
    case 'h':
      return {
        height: value,
      };
    default:
      throw new Error('Wrong property name for style tokens');
  }
};

// TODO: How to check mt-10 type?
export const style = (input: string) => {
  if (input.length < 4) {
    throw new Error('Wrong token shape');
  }

  const tokens = input.split(' ');

  const tokensMap = tokens.reduce<Record<string, any>>((acc, token) => {
    const [property, value] = token.split('-');
    acc[token] = makeProperty(property, parseInt(value, 10));
    return acc;
  }, {});

  const styles = StyleSheet.create(tokensMap);

  return StyleSheet.flatten(Object.values(styles));
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

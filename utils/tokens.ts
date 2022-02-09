import Constants from 'expo-constants';
import { Colors, Typography, Spacings } from 'react-native-ui-lib';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { ENV_VARS, SPACE_MULTIPLIER, OUR_COLORS } from './constants';
import type { EnvironmentType, Spacing } from './types';

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

export const makeProperty = (key: string, value: number | string) => {
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
  if (input.length < 3 || input.indexOf('-') === -1) {
    throw new Error('Wrong token shape, did you forget the dash "-"?');
  }

  const tokens = input.split(' ');

  const tokensMap = tokens.reduce<Record<string, any>>((acc, token) => {
    const [property, value] = token.split('-');
    const parsedValue = parseInt(value, 10);
    acc[token] = makeProperty(
      property,
      Number.isNaN(parsedValue) ? value : parsedValue,
    );
    return acc;
  }, {});

  const styles = StyleSheet.create(tokensMap);

  return StyleSheet.flatten(Object.values(styles));
};

export const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return isIphoneX() ? 44 : 20;
  }
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight ?? 0;
  }
  return 0;
};

// Release Channel must has this form: environment-country
// E.g: dev-finland, prod-finland, stage-thailand
export const getEnvironment = (): EnvironmentType => {
  const { manifest } = Constants;
  console.log({ manifest });
  const { releaseChannel = 'dev-finland' } = manifest ?? {};
  const [env, country] = releaseChannel.split('-');
  return ENV_VARS[env][country];
};

export const space = (multiplier: number): Spacing => {
  if ((Number.isInteger(multiplier) && multiplier >= 0) || multiplier === 0.5) {
    return `${multiplier * SPACE_MULTIPLIER}px` as Spacing;
  }
  throw new Error('Multiplier needs to be a positive integer');
};

export const loadFoundationConfigs = () => {
  Colors.loadColors(OUR_COLORS);

  Typography.loadTypographies({
    heading: { fontSize: 36, fontWeight: '600' },
    subheading: { fontSize: 28, fontWeight: '500' },
    body: { fontSize: 14, fontWeight: '400' },
  });

  Spacings.loadSpacings({
    page: 20,
    card: 12,
    gridGutter: 16,
  });
};

export const halfValue = (input?: number | string | null) => {
  if (typeof input === 'number') {
    return Math.floor(input / 2);
  }
  if (typeof input === 'string' && input.includes('%')) {
    const value = parseFloat(input);
    if (!Number.isNaN(value) || value < 0 || value > 100) {
      return `${Math.floor(value / 2)}%`;
    }
  }
  return undefined;
};

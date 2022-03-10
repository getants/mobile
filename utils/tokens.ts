import Constants from 'expo-constants';
import * as Sentry from 'sentry-expo';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { ENV_VARS, SPACE_MULTIPLIER } from './constants';
import type { EnvironmentKey, EnvironmentType, Spacing } from './types';

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

// Release Channel must has this form: EnvironmentKey
export const getEnvironment = (): EnvironmentType => {
  const { manifest } = Constants;
  const { releaseChannel = 'development' } = manifest ?? {};
  return ENV_VARS[releaseChannel as EnvironmentKey];
};

export const space = (multiplier: number): Spacing => {
  if ((Number.isInteger(multiplier) && multiplier >= 0) || multiplier === 0.5) {
    return `${multiplier * SPACE_MULTIPLIER}px` as Spacing;
  }
  throw new Error('Multiplier needs to be a positive integer');
};

/**
 * Received a string or number then return a half of its value
 * String value accept percentage only.
 *
 * @example
 * ```tsx
 * halfValue(20)    // return 10;
 * halfValue("20%") // return "10%";
 * ```
 */
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

export const removeDuplicated = <TItem extends { id: string }>(
  prevData: TItem[],
  nextData: TItem[],
) => {
  const seen = new Set();
  const allEntries = [...prevData, ...nextData];

  const filtered = allEntries.filter((item) => {
    const isDuplicate: boolean = seen.has(item.id);
    seen.add(item.id);
    return !isDuplicate;
  });

  return filtered;
};

export const makeBoolExp = (key: string, ids?: string[]) => {
  if (!ids || ids.length === 0) {
    return {};
  }
  return { [key]: ids };
};

export const handleError = (reason: unknown | string) => {
  if (reason instanceof Error) {
    Sentry.Native.captureException(reason);
  }
  if (typeof reason === 'string') {
    Sentry.Native.captureMessage(reason);
  }
};

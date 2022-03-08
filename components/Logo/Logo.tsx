import React from 'react';
import { useAssets } from 'expo-asset';
import { Image, StyleSheet } from 'react-native';
import { Placeholder } from '../Placeholder';
import type { Size, ImageProps } from '../../utils/types';

const getNumberFromSize = (size?: Size) => {
  switch (size) {
    case 'xs':
      return 20;
    case 'sm':
      return 40;
    case 'md':
      return 80;
    case 'lg':
      return 160;
    default:
      return 80;
  }
};

const makeStyles = (length: number) =>
  StyleSheet.create({
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      width: length,
      height: length,
    },
  });

export type LogoProps = {
  size?: Size;
} & Partial<ImageProps>;

export const Logo = ({ size, ...restProps }: LogoProps) => {
  /* eslint-disable-next-line global-require */
  const [assets, error] = useAssets([require('../../assets/logo.png')]);

  const length = getNumberFromSize(size);
  const styles = makeStyles(length);

  if (!assets || error) {
    return <Placeholder.Rect width={length} height={length} />;
  }

  const imageUri = { uri: assets[0]?.uri ?? 'fallback-uri' };

  return <Image {...restProps} source={imageUri} style={styles.image} />;
};

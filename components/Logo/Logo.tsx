import React from 'react';
import { useAssets } from 'expo-asset';
import styled from 'styled-components/native';
import { Image, StyleSheet } from 'react-native';
import { Placeholder } from '../Placeholder';
import type { Size } from '../../utils/types';

export type LogoProps = {
  width?: number | string;
  size?: Size;
};

const StyledWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
// background-color: gray;

const getNumberFromSize = (size?: Size) => {
  switch (size) {
    case 'xs':
      return 40;
    case 'sm':
      return 60;
    case 'md':
      return 80;
    case 'lg':
      return 140;
    default:
      return 80;
  }
};

const makeStyles = (length: number) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      width: length,
      height: length,
    },
  });

export const Logo = ({ size }: LogoProps) => {
  /* eslint-disable-next-line global-require */
  const [assets, error] = useAssets([require('../../assets/logo.png')]);

  const length = getNumberFromSize(size);
  const styles = makeStyles(length);

  if (!assets || error) {
    return <Placeholder.Rect width={length} height={length} />;
  }

  const imageUri = { uri: assets[0]?.uri ?? 'fallback-uri' };

  return (
    <StyledWrapper>
      <Image source={imageUri} style={styles.image} />
    </StyledWrapper>
  );
};

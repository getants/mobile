import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import type { ViewProps } from '../../utils/types';

const styles = StyleSheet.create({
  subtitle: {},
  nextIcon: {},
  imageCover: {},
  headerName: {
    fontWeight: 'bold',
  },
});

type CardHeaderProps = {
  showName?: boolean;
  name: string;
  description?: string;
  image?: string;
};

export const CardHeader = ({
  showName = true,
  image,
  name,
  description,
  ...restProps
}: CardHeaderProps & ViewProps) => (
  <ImageBackground
    resizeMode="cover"
    source={{ uri: image as string }}
    style={[{ minHeight: showName ? 60 : 120 }, styles.imageCover]}
  >
    <View {...restProps}>
      <Text category="h6" style={styles.headerName}>
        {showName ? name : ''}
      </Text>
      {showName && <Text category="s2">{description ?? ''}</Text>}
    </View>
  </ImageBackground>
);

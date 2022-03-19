import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';
import type { CSSProperties } from '../../utils/types';

type IconWrapperProps = {
  name?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
};

const makeStyles = ({ size }: IconWrapperProps) =>
  StyleSheet.create({
    icon: {
      width: size,
      height: size,
    },
  });

export const IconWrapper = ({
  name,
  color = '#8F9BB3',
  size = 16,
  style,
}: IconWrapperProps) => {
  const styles = makeStyles({ size });
  return <Icon style={[styles.icon, style]} fill={color} name={name} />;
};

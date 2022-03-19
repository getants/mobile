import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
// import { Text } from '@ui-kitten/components';
import { IconWrapper } from '../../components/Icon';

const styles = StyleSheet.create({
  wrapper: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
  },
});

type BackButtonProps = {
  onPress?: () => void;
};

export const BackButton = ({ onPress }: BackButtonProps) => {
  const handleOnPress = () => {
    if (typeof onPress === 'function') {
      onPress();
    }
  };

  return (
    <Pressable style={styles.wrapper} onPress={handleOnPress}>
      <IconWrapper name="arrow-ios-back-outline" size={20} />
    </Pressable>
  );
};

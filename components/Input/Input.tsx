import React from 'react';
import {
  Input as KittenInput,
  InputProps as KittenInputProps,
} from '@ui-kitten/components';

export type InputProps = {
  leftIcon?: KittenInputProps['accessoryLeft'];
  rightIcon?: KittenInputProps['accessoryRight'];
} & KittenInputProps;

export const Input: React.FC<InputProps> = ({
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  const mappedProps = {
    size: 'large',
    accessoryLeft: leftIcon,
    accessoryRight: rightIcon,
  };

  return <KittenInput {...restProps} {...mappedProps} />;
};

import React from 'react';
import {
  Button as KittenButton,
  ButtonProps as KittenButtonProps,
} from '@ui-kitten/components';

export type ButtonProps = {
  outline?: boolean;
  ghost?: boolean;
  leftIcon?: KittenButtonProps['accessoryLeft'];
  rightIcon?: KittenButtonProps['accessoryRight'];
} & KittenButtonProps;

export const Button: React.FC<ButtonProps> = ({
  outline,
  ghost,
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  const mappedProps = {
    ...(outline && { appearance: 'outline' }),
    ...(ghost && { appearance: 'ghost' }),
    size: 'large',
    accessoryLeft: leftIcon,
    accessoryRight: rightIcon,
  };

  return <KittenButton {...restProps} {...mappedProps} />;
};

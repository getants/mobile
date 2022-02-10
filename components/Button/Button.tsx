import React from 'react';
import { Button as KittenButton } from '@ui-kitten/components';
import type { ButtonProps as KittenButtonProps } from '@ui-kitten/components';

export type ButtonProps = {
  variant?: KittenButtonProps['appearance'];
  leftIcon?: KittenButtonProps['accessoryLeft'];
  rightIcon?: KittenButtonProps['accessoryRight'];
} & KittenButtonProps;

export const Button: React.FC<ButtonProps> = ({
  variant,
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  const mappedProps = {
    size: 'large',
    appearance: variant,
    accessoryLeft: leftIcon,
    accessoryRight: rightIcon,
  };

  return <KittenButton {...restProps} {...mappedProps} />;
};

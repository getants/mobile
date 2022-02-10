import React from 'react';
import { Text as KittenText } from '@ui-kitten/components';
import type { TextProps as KittenTextProps } from '@ui-kitten/components';
import type { Size } from '../../utils/types';

export type TextProps = {
  ellipsis?: boolean | number | null;
  size?: Size | string;
  variant?: KittenTextProps['appearance'];
} & KittenTextProps;

const sizeToHeading = (size?: Size | string) => {
  switch (size) {
    case 'lg':
    case 'large':
      return 'h3';
    case 'sm':
    case 'small':
      return 'h6';
    default:
      return 'p1';
  }
};
const getNumberOfLines = (ellipsis?: boolean | number | null) => {
  if (typeof ellipsis === 'boolean') {
    return 1;
  }
  if (typeof ellipsis === 'number') {
    return ellipsis;
  }
  return 0;
};

export const Text: React.FC<TextProps> = ({
  ellipsis,
  size = 'md',
  variant,
  ...restProps
}) => {
  const mappedProps: Partial<KittenTextProps> = {
    category: sizeToHeading(size),
    appearance: variant,
    ellipsizeMode: 'tail',
    numberOfLines: getNumberOfLines(ellipsis),
  };

  return <KittenText {...restProps} {...mappedProps} />;
};

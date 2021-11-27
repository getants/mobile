import React from 'react';
import {
  Text as KittenText,
  TextProps as KittenTextProps,
} from '@ui-kitten/components';

export type TextProps = {
  ellipsis?: number;
} & KittenTextProps;

export const Text: React.FC<TextProps> = ({
  ...restProps
}) => {
  const mappedProps = {};
  // TODO: Make ellipsis
  return <KittenText {...restProps} {...mappedProps} />;
};

export const TitleLarge: React.FC<TextProps> = (props) => <Text {...props} category="h3" />;
export const TitleSmall: React.FC<TextProps> = (props) => <Text {...props} category="h6" />;
export const BodyText: React.FC<TextProps> = (props) => <Text {...props} />;
export const Description: React.FC<TextProps> = (props) => <Text {...props} appearance="hint" />;

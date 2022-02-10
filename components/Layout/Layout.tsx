import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Layout as KittenLayout,
  LayoutProps as KittenLayoutProps,
} from '@ui-kitten/components';
import { Direction, JustifyContent, AlignItems } from '../../utils/types';
import { halfValue } from '../../utils/tokens';

export type LayoutProps = {
  height?: number | string;
  backgroundColor?: string;
  gap?: number | string;
  direction?: Direction;
  justify?: JustifyContent;
  align?: AlignItems;
} & KittenLayoutProps;

export const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  height,
  backgroundColor,
  gap = 8,
  align = 'stretch',
  direction = 'column',
  justify = 'flex-start',
  ...restProps
}) => {
  const flexStyles = {
    height,
    backgroundColor,
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
  };

  const styles = StyleSheet.create({ child: { margin: halfValue(gap) } });
  const wrapperStyles = StyleSheet.flatten([flexStyles, style]);

  const mappedProps = {};

  return (
    <KittenLayout {...restProps} {...mappedProps} style={wrapperStyles}>
      {Children.map(children, (child, index) => {
        const key = React.isValidElement(child) ? child.key : index;
        return (
          <View key={key} style={styles.child}>
            {child}
          </View>
        );
      })}
    </KittenLayout>
  );
};

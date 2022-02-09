import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Layout as KittenLayout,
  LayoutProps as KittenLayoutProps,
} from '@ui-kitten/components';
import { Direction, JustifyContent, AlignItems } from '../../utils/enums';
import { halfValue } from '../../utils/tokens';

export type LayoutProps = {
  gap?: number | string;
  direction?: Direction;
  justify?: JustifyContent;
  align?: AlignItems;
} & KittenLayoutProps;

export const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  gap = 8,
  align = AlignItems.Stretch,
  direction = Direction.Column,
  justify = JustifyContent.FlexStart,
  ...restProps
}) => {
  const flexStyles = {
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

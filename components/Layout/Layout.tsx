/*
 * This component still cant not work correctly.
 * Let find a time to do it later.
 * For now, use normal View with custom StyleSheet
 * Idea of this Layout is make it works like the FlexBox in Chakra
 */
import React, { Children, isValidElement, cloneElement } from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout as KittenLayout,
  LayoutProps as KittenLayoutProps,
} from '@ui-kitten/components';
import { Direction, JustifyContent, AlignItems } from '../../utils/types';
import { halfValue } from '../../utils/tokens';

export type LayoutProps = {
  transparent?: boolean;
  height?: number | string;
  width?: number | string;
  gap?: number | string;
  flexDirection?: Direction;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
} & KittenLayoutProps;

export const Layout: React.FC<LayoutProps> = ({
  transparent,
  children,
  style,
  gap = 8,
  width = '100%',
  height = '100%',
  alignItems = 'stretch',
  flexDirection = 'column',
  justifyContent = 'flex-start',
  ...restProps
}) => {
  const gapSpace = halfValue(gap);

  const wrapperMappedStyles = {
    width,
    height,
    flexDirection,
    justifyContent,
    alignItems,
    padding: gapSpace,
    ...(transparent && { backgroundColor: 'transparent' }),
  };

  const overrideStyles = StyleSheet.create({
    child: {
      margin: gapSpace,
    },
  });

  const wrapperStyles = StyleSheet.flatten([wrapperMappedStyles, style]);

  return (
    <KittenLayout {...restProps} style={wrapperStyles}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            key: child.key,
            style: [child.props.style, overrideStyles.child],
          });
        }
        return null;
      })}
    </KittenLayout>
  );
};

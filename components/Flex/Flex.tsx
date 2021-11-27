import React from 'react';
import styled from 'styled-components/native';
import type { SystemProps, FlexboxProps } from '../../utils/types';

export type FlexAliasOptions = {
  align?: SystemProps['alignItems'];
  justify?: SystemProps['justifyContent'];
  wrap?: SystemProps['flexWrap'];
  direction?: SystemProps['flexDirection'];
  basis?: SystemProps['flexBasis'];
  grow?: SystemProps['flexGrow'];
  shrink?: SystemProps['flexShrink'];
};

const StyledView = styled.View<{ options: FlexboxProps }>`
  ${(p) => ({ ...p.options })}
`;

export type FlexProps = React.ComponentProps<typeof StyledView> &
FlexAliasOptions;

export const Flex: React.FC<FlexProps> = ({
  direction,
  align,
  justify,
  wrap,
  basis,
  grow,
  shrink,
  ...rest
}) => {
  const styles = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
  };

  return <StyledView options={styles} {...rest} />;
};

if (__DEV__) {
  Flex.displayName = 'Flex';
}

import React from 'react';
import styled from 'styled-components/native';
import { SystemProps, FlexboxProps } from '@/utils/types';

export type FlexOptions = {
  align?: SystemProps['alignItems']
  justify?: SystemProps['justifyContent']
  wrap?: SystemProps['flexWrap']
  direction?: SystemProps['flexDirection']
  basis?: SystemProps['flexBasis']
  grow?: SystemProps['flexGrow']
  shrink?: SystemProps['flexShrink']
}

const StyledView = styled.View<{ options: FlexboxProps }>`
  ${(p) => ({ ...p.options })}
`;

export type FlexProps = React.ComponentProps<typeof StyledView> & FlexOptions;

export const Flex = (props: FlexProps) => {
  const {
    direction,
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    ...rest
  } = props;

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
  Flex.displayName = 'FlexBox';
}

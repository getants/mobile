import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useComputedWidth, useTheme } from '../../utils/hooks';

type Props = {
  speed?: number;
  width?: number | string;
  height?: number | string;
};

export const ProgressBar = (props: Props) => {
  const { speed = 0.8, width = '80%', height = 2, ...restProps } = props;
  const { colors } = useTheme();

  const computedWidth = useComputedWidth(width);

  return (
    <ContentLoader
      speed={speed}
      width={computedWidth}
      height={height}
      viewBox={`0 0 ${computedWidth} ${height}`}
      backgroundColor={colors.basic300}
      foregroundColor={colors.primary500}
      {...restProps}
    >
      <Rect x="0" y="0" rx="0" ry="0" width={computedWidth} height={height} />
    </ContentLoader>
  );
};

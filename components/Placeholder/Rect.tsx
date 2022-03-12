import React from 'react';
import ContentLoader, { Rect as RCLRect } from 'react-content-loader/native';
import { useTheme } from '../../hooks';

export type RectProps = {
  borderRadius?: number;
  height: number;
  speed?: number;
  width: number;
};

export const Rect: React.FC<RectProps> = ({
  borderRadius = 2,
  speed = 1,
  width,
  height,
}) => {
  const { colors } = useTheme();
  return (
    <ContentLoader
      backgroundColor={colors.basic400}
      foregroundColor={colors.basic500}
      speed={speed}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <RCLRect
        x="0"
        y="0"
        rx={borderRadius}
        ry={borderRadius}
        width={width}
        height={height}
      />
    </ContentLoader>
  );
};

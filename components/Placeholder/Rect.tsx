import React from 'react';
import ContentLoader, { Rect as RCLRect } from 'react-content-loader/native';
// import { useTheme } from '../../utils/hooks';

export type RectProps = {
  borderRadius?: number;
  height: number;
  speed?: number;
  width: number;
};

//   const { theme } = useTheme();
const Rect: React.FC<RectProps> = ({
  borderRadius = 2,
  speed = 1,
  width,
  height,
}) => (
  <ContentLoader
    // backgroundColor={theme.colors?.grey4}
    // foregroundColor={theme.colors?.grey5}
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
export default Rect;

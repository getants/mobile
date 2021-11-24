import React from 'react';
import ContentLoader, { Circle as RCLCircle } from 'react-content-loader/native';
import { useTheme } from '../../utils/hooks';

export type CircleProps = {
  radius: number;
  speed?: number;
};

const Circle: React.FC<CircleProps> = ({ radius, speed = 1 }) => {
  const size = radius * 2;
  const { theme } = useTheme();

  return (
    <ContentLoader
      speed={speed}
      backgroundColor={theme.colors?.grey4}
      foregroundColor={theme.colors?.grey5}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <RCLCircle cx={radius} cy={radius} r={radius} />
    </ContentLoader>
  );
};

export default Circle;

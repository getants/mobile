import React from 'react';
import ContentLoader, { Circle as RCLCircle } from 'react-content-loader/native';
import { useTheme } from '../../utils/hooks';
import { colorKey } from './helpers';

export type CircleProps = {
  radius: number;
  speed?: number;
};

export const Circle: React.FC<CircleProps> = ({ radius, speed = 1 }) => {
  const size = radius * 2;
  const theme = useTheme();

  return (
    <ContentLoader
      speed={speed}
      backgroundColor={theme[colorKey.basic200]}
      foregroundColor={theme[colorKey.basic400]}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <RCLCircle cx={radius} cy={radius} r={radius} />
    </ContentLoader>
  );
};

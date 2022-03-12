import React from 'react';
import ContentLoader, {
  Circle as RCLCircle,
} from 'react-content-loader/native';
import { useTheme } from '../../hooks';

export type CircleProps = {
  radius: number;
  speed?: number;
};

export const Circle: React.FC<CircleProps> = ({ radius, speed = 1 }) => {
  const size = radius * 2;
  const { colors } = useTheme();

  return (
    <ContentLoader
      speed={speed}
      backgroundColor={colors.basic400}
      foregroundColor={colors.basic500}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <RCLCircle cx={radius} cy={radius} r={radius} />
    </ContentLoader>
  );
};

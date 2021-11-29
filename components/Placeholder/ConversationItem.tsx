import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useWindowDimensions, useTheme } from '../../utils/hooks';
import { getRandom } from './helpers';

type Props = {
  randomWidth?: boolean;
  speed?: number;
};

const padding = 20;
const titleHeight = 20;
const titleY = 20;
const itemHeight = 120;

export const ConversationItem: React.FC<Props> = ({
  randomWidth = false,
  speed = 1,
}) => {
  const { colors } = useTheme();
  const { width: deviceWidth } = useWindowDimensions();

  const titleMin = randomWidth ? getRandom(6) : 8;
  const titleWidth = Math.floor(deviceWidth * ((titleMin * 10) / 100));

  const smallerMin = randomWidth ? getRandom(5) : 6;
  const smallerHeight = 10;
  const smallerWidth = Math.floor(deviceWidth * ((smallerMin * 10) / 100));
  const smallerY = titleY + smallerHeight;

  return (
    <ContentLoader
      speed={speed}
      backgroundColor={colors.basic400}
      foregroundColor={colors.basic500}
      width={deviceWidth}
      height={itemHeight}
      viewBox={`0 0 ${deviceWidth} ${itemHeight}`}
    >
      <Rect
        x={padding}
        y={titleY}
        rx="6"
        ry="6"
        width={titleWidth}
        height={titleHeight}
      />
      <Rect
        x={padding}
        y={smallerY + (padding * 1)}
        rx="4"
        ry="4"
        width={smallerWidth}
        height={smallerHeight}
      />
    </ContentLoader>
  );
};

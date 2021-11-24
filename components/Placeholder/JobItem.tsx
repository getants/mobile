import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useWindowDimensions, useTheme } from '../../utils/hooks';
import { JOB_IMAGE_FRAME_RATIO } from '../../utils/constants';

type Props = {
  speed?: number;
};

const padding = 20;
const itemHeight = 280;
const titleHeight = 20;

const JobItem: React.FC<Props> = ({ speed = 1 }) => {
  const { theme } = useTheme();
  const { width: deviceWidth } = useWindowDimensions();
  const imageHeight = deviceWidth / JOB_IMAGE_FRAME_RATIO;

  const titleWidth = deviceWidth * (60 / 100);
  const titleY = imageHeight + padding;

  const smallerHeight = 10;
  const smallerWidth = deviceWidth * (50 / 100);
  const smallerY = titleY + smallerHeight;

  return (
    <ContentLoader
      speed={speed}
      backgroundColor={theme.colors?.grey4}
      foregroundColor={theme.colors?.grey5}
      width={deviceWidth}
      height={itemHeight}
      viewBox={`0 0 ${deviceWidth} ${itemHeight}`}
    >
      <Rect
        x="0"
        y="0"
        rx="0"
        ry="0"
        width={deviceWidth}
        height={imageHeight}
      />
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
      <Rect
        x={padding}
        y={smallerY + (padding * 2)}
        rx="4"
        ry="4"
        width={smallerWidth}
        height={smallerHeight}
      />
    </ContentLoader>
  );
};

export default JobItem;

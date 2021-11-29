import React from 'react';
import { Circle } from './Circle';
import { ConversationItem } from './ConversationItem';
import { JobItem } from './JobItem';
import { Rect } from './Rect';

type Props = {
  repeat?: number;
  component: React.ReactNode;
};

type PlaceholderType = React.FC<Props> & {
  Circle: typeof Circle;
  ConversationItem: typeof ConversationItem;
  JobItem: typeof JobItem;
  Rect: typeof Rect;
};

const Placeholder: PlaceholderType = ({
  repeat = 3,
  component,
}: Props) => (
  <>
    {Array.from(
      { length: repeat },
      () => component,
    )}
  </>
);

Placeholder.ConversationItem = ConversationItem;
Placeholder.Circle = Circle;
Placeholder.JobItem = JobItem;
Placeholder.Rect = Rect;

export {
  Placeholder,
  Circle,
  Rect,
  ConversationItem,
  JobItem,
};

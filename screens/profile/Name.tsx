import React from 'react';
import { Placeholder, Text } from '../../components';

type Props = {
  isLoading?: boolean;
  children?: React.ReactNode;
};

const Name = (props: Props) => {
  const { isLoading, children = '' } = props;

  if (isLoading) {
    return <Placeholder.Rect width={160} height={40} />;
  }

  return <Text h2>{children}</Text>;
};

export default Name;

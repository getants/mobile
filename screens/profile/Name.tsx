import React from 'react';
import { Placeholder, Text } from '../../components';
import type { TextProps } from '../../components/Text';

type NameProps = {
  isLoading?: boolean;
} & TextProps;

const Name: React.FC<NameProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return <Placeholder.Rect width={160} height={40} />;
  }

  return <Text category="h2">{children}</Text>;
};

export default Name;

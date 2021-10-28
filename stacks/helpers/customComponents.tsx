/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { HeaderBackButton } from '@react-navigation/elements';

export const renderHeaderLeft = <T extends { name: string }>(
  route: T,
  props: React.ComponentProps<typeof HeaderBackButton>,
) => {
  const routeName = route?.name ?? '';
  switch (routeName) {
  case 'JobList':
  case 'Inbox':
  case 'Calendar':
  case 'Profile':
    return null;
  default:
    return <HeaderBackButton {...props} />;
  }
};

export default renderHeaderLeft;

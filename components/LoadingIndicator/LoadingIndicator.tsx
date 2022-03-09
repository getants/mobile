import React from 'react';
import areEqual from 'react-fast-compare';
import { StyleSheet, View } from 'react-native';
import { Spinner } from '@ui-kitten/components';
import type { SpinnerProps } from '@ui-kitten/components';
import type { ViewProps } from 'react-native';

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type LoadingIndicatorProps = ViewProps &
  Pick<SpinnerProps, 'size' | 'status'> & {
    isLoading: boolean;
  };

export const LoadingIndicator = React.memo(
  ({
    isLoading,
    size = 'tiny',
    status = 'control',
    style,
    ...restProps
  }: LoadingIndicatorProps) =>
    isLoading ? (
      <View {...restProps} style={[style, styles.indicator]}>
        <Spinner size={size} status={status} />
      </View>
    ) : null,
  areEqual,
);

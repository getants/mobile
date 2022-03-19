import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { IconWrapper } from '../../components/Icon';
import { BASE_SPACING } from '../../utils/constants';
import type { Jobs } from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: BASE_SPACING * 4,
  },
  icon: {
    padding: BASE_SPACING * 2,
  },
  label: {
    fontWeight: 'bold',
    padding: BASE_SPACING * 2,
  },
});

type RowKey = keyof Jobs;
type OverviewRowProps = {
  border?: boolean;
  rowKey: RowKey;
  label?: string | null;
};

const getIconName = (key: RowKey) => {
  switch (key) {
    case 'qualifications':
      return 'person-outline';
    case 'level':
      return 'clipboard-outline';
    case 'compensations':
      return 'credit-card-outline';
    default:
      return undefined;
  }
};

export const OverviewRow = ({
  border = true,
  label,
  rowKey,
}: OverviewRowProps) => {
  const iconName = getIconName(rowKey);
  const borderStyles = border
    ? {
        borderBottomWidth: 0.6,
        borderBottomColor: '#CACACA',
      }
    : undefined;

  return (
    <View style={[styles.wrapper, borderStyles]}>
      {iconName && (
        <View style={styles.icon}>
          <IconWrapper name={iconName} size={24} />
        </View>
      )}
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

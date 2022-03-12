import React from 'react';
import { Icon, Pressable, StyleSheet, Text, View } from '../../components';
import { OUR_COLORS, BASE_SPACING } from '../../utils/constants';
import type { Jobs } from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 200,
    paddingVertical: BASE_SPACING * 5,
    paddingHorizontal: BASE_SPACING * 2,
    marginBottom: BASE_SPACING * 2,
    backgroundColor: '#FFFFFF',
  },
  titleStack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  compoundHeader: {
    width: '94%',
  },
  title: {
    color: OUR_COLORS.primaryColor,
    fontWeight: 'bold',
  },
  subtitle: {},
  nextIcon: {},
});

type JobItemProps = {
  job: Jobs;
  onPress: (job: Jobs) => void;
};

export const JobItem = ({ job, onPress }: JobItemProps) => {
  const title = job.title.trim();
  const address = (job.address?.unstructured_value ?? '').trim();
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.titleStack} onPress={() => onPress(job)}>
        <View style={styles.compoundHeader}>
          <Text category="h6" style={styles.title}>
            {title}
          </Text>
          <Text category="s1" style={styles.subtitle}>
            {address}
          </Text>
        </View>
        <Icon
          name="arrow-ios-forward"
          fill="#AAAAAA"
          width={20}
          height={20}
          style={styles.nextIcon}
        />
      </Pressable>
    </View>
  );
};

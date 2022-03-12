import React from 'react';
import {
  Card,
  Icon,
  Pressable,
  StyleSheet,
  Text,
  View,
} from '../../components';
import type { Jobs } from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
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
    fontWeight: 'bold',
  },
  subtitle: {
    paddingLeft: 5,
  },
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
    <Card style={styles.wrapper}>
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
    </Card>
  );
};

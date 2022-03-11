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
  onPress: (c: Jobs) => void;
};

export const JobItem = ({ job, onPress }: JobItemProps) => {
  return (
    <Card style={styles.wrapper}>
      <Pressable style={styles.titleStack} onPress={() => onPress(job)}>
        <View style={styles.compoundHeader}>
          <Text category="h6" style={styles.title}>
            {job?.title}
          </Text>
          <Text category="s1" style={styles.subtitle}>
            {job.address?.unstructured_value ??
              'test something kinda long here'}
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

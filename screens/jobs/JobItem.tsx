import React from 'react';
import { useAssets } from 'expo-asset';
import {
  Card,
  CardHeader,
  Icon,
  Pressable,
  StyleSheet,
  Text,
  View,
} from '../../components';
import { OUR_COLORS, BASE_SPACING } from '../../utils/constants';
import type { Jobs } from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 200,
    paddingVertical: BASE_SPACING * 8,
    paddingHorizontal: BASE_SPACING * 6,
    marginBottom: BASE_SPACING * 2,
    backgroundColor: '#FFFFFF',
  },
  titleStack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: BASE_SPACING * 4,
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
  companyInfo: {
    borderRadius: BASE_SPACING * 3,
  },
  imageCover: {},
  headerName: {
    fontWeight: 'bold',
  },
});

type JobItemProps = {
  job: Jobs;
  onPress: (job: Jobs) => void;
};

export const JobItem = ({ job, onPress }: JobItemProps) => {
  /* eslint-disable-next-line global-require */
  const [assets] = useAssets([require('../../assets/blank.svg')]);
  const fallbackImage = { uri: assets?.[0]?.uri ?? 'fallback-uri' };

  const title = job.title.trim();
  const companyName = job.company?.name ?? 'Private';

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.titleStack} onPress={() => onPress(job)}>
        <View style={styles.compoundHeader}>
          <Text category="h6" style={styles.title}>
            {title}
          </Text>
          <Text category="s1" style={styles.subtitle}>
            {companyName}
          </Text>
        </View>
        <Icon
          name="arrow-ios-forward"
          fill="#AAAAAA"
          width={30}
          height={30}
          style={styles.nextIcon}
        />
      </Pressable>

      <Card
        style={styles.companyInfo}
        onPress={() => onPress(job)}
        header={
          <CardHeader
            showName={!job.company?.image}
            image={job.company?.image ?? fallbackImage.uri}
            name={job.company?.name ?? ''}
            description={job.company?.size ?? ''}
          />
        }
      >
        <Text numberOfLines={4} ellipsizeMode="tail">
          {job.company?.summary ?? ''}
        </Text>
      </Card>
    </View>
  );
};

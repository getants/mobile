import React from 'react';
import { useAssets } from 'expo-asset';
import {
  Card,
  Icon,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from '../../components';
import { OUR_COLORS, BASE_SPACING } from '../../utils/constants';
import type { Companies, Jobs, ViewProps } from '../../utils/types';

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

const Header = ({
  showName = true,
  image,
  name,
  size,
  ...restProps
}: { showName?: boolean } & Pick<Companies, 'image' | 'name' | 'size'> &
  ViewProps) => (
  <ImageBackground
    resizeMode="cover"
    source={{ uri: image as string }}
    style={[{ minHeight: showName ? 60 : 120 }, styles.imageCover]}
  >
    <View {...restProps}>
      <Text category="h6" style={styles.headerName}>
        {showName ? name : ''}
      </Text>
      {showName && <Text category="s2">{size ?? '0–10'} employees</Text>}
    </View>
  </ImageBackground>
);

export const JobItem = ({ job, onPress }: JobItemProps) => {
  /* eslint-disable-next-line global-require */
  const [assets] = useAssets([require('../../assets/blank.svg')]);

  const title = job.title.trim();
  const companyName = job.company?.name ?? 'Private';
  const fallbackImage = { uri: assets?.[0]?.uri ?? 'fallback-uri' };

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
          <Header
            showName={!job.company?.image}
            image={job.company?.image ?? fallbackImage.uri}
            name={job.company?.name ?? ''}
            size={job.company?.size}
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

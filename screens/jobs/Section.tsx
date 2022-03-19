import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { BASE_SPACING } from '../../utils/constants';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: BASE_SPACING * 2,
  },
  caption: {
    fontWeight: 'bold',
    paddingTop: BASE_SPACING * 2,
  },
  content: {
    paddingTop: BASE_SPACING * 2,
  },
});

type SectionProps = {
  caption?: string;
};

export const Section: React.FC<SectionProps> = ({ caption, children }) => {
  return (
    <View style={styles.wrapper}>
      {caption && (
        <Text category="h6" style={styles.caption}>
          {caption}
        </Text>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

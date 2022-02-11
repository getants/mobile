import React from 'react';
import {
  KeyboardAvoidingView,
  Layout,
  Logo,
  View,
  StyleSheet,
} from '../../components';

const styles = StyleSheet.create({
  logo: {
    flex: 4,
    justifyContent: 'space-around',
  },
  forms: {
    flex: 3,
  },
});

export const AuthScreensWrapper: React.FC = ({ children }) => {
  return (
    <KeyboardAvoidingView>
      <Layout gap={16}>
        <View style={styles.logo}>
          <View />
          <Logo size="lg" />
        </View>

        <View style={styles.forms}>{children}</View>
      </Layout>
    </KeyboardAvoidingView>
  );
};

import React, { useLayoutEffect } from 'react';
import {
  Avatar,
  Button,
  Divider,
  Placeholder,
  Layout,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from '../../components';
import { useAuth, useNavigation, useAppStates } from '../../hooks';
import { nhost } from '../../utils/nhost';
import type { ProfileScreenNavigationProp } from '../../utils/types';

const styles = StyleSheet.create({
  scroll: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  name: {
    display: 'flex',
  },
});

export type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { setAppStates } = useAppStates();

  const handleSignOut = async () => {
    await nhost.auth.signOut();
    setAppStates((prev) => ({ ...prev, isReady: false }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Profile',
    });
  }, [navigation]);

  const { user, isLoading, isAuthenticated } = useAuth();

  const imageUrl = user?.avatarUrl ?? '';
  const fullName = user?.displayName ?? '';

  if (!isAuthenticated) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Layout gap={40} width="100%">
          <View style={styles.heading}>
            <Avatar
              size="giant"
              accessibilityLabel={fullName}
              source={{ uri: imageUrl }}
            />
            <View style={styles.name}>
              {isLoading ? (
                <Placeholder.Rect width={160} height={40} />
              ) : (
                <Text category="h2">{fullName}</Text>
              )}
              <Text category="s1">{user?.email}</Text>
            </View>
          </View>

          <Divider />

          <Text appearance="hint">More settings comming soon</Text>

          <Button onPress={handleSignOut}>Sign Out</Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

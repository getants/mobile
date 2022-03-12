import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import {
  Avatar,
  Button,
  Divider,
  Placeholder,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from '../../components';
import { space } from '../../utils/tokens';
import { useAuth, useNavigation, useAppStates } from '../../hooks';
import { nhost } from '../../utils/nhost';
import type { ProfileScreenNavigationProp } from '../../utils/types';

const ScrollView = styled.ScrollView`
  background-color: #ffffff;
`;
const NameSection = styled.View`
  display: flex;
  padding: ${space(5)};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;
const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 80%;
`;

const styles = StyleSheet.create({
  scroll: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  new: {
    margin: 40,
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
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <NameSection>
          <Avatar
            size="giant"
            accessibilityLabel={fullName}
            source={{ uri: imageUrl }}
          />
          <View>
            <TitleWrapper>
              {isLoading ? (
                <Placeholder.Rect width={160} height={40} />
              ) : (
                <Text category="h2">{fullName}</Text>
              )}
            </TitleWrapper>
            <Text>{user?.email}</Text>
          </View>
        </NameSection>

        <Divider />

        <Text style={styles.new} appearance="hint">
          Comming soon
        </Text>

        <Button onPress={handleSignOut}>Sign Out</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

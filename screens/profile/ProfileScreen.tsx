import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import {
  Avatar,
  Button,
  Divider,
  Placeholder,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from '../../components';
import { space } from '../../utils/tokens';
import { useAuth, useNavigation } from '../../utils/hooks';
import type { ProfileScreenNavigationProp } from '../../utils/types';

const ScrollView = styled.ScrollView`
  background-color: #ffffff;
`;
const NameSection = styled.View`
  display: flex;
  padding: ${space(5)};
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
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
});

export type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Profile',
    });
  }, [navigation]);

  const { user, isLoading } = useAuth();

  const imageUrl = user?.avatarUrl ?? '';
  const fullName = user?.displayName ?? '';

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <NameSection>
          <Avatar
            size="medium"
            accessibilityLabel={fullName}
            source={{ uri: imageUrl }}
          />
          <TitleWrapper>
            {isLoading ? (
              <Placeholder.Rect width={160} height={40} />
            ) : (
              <Text category="h2">{fullName}</Text>
            )}
          </TitleWrapper>
        </NameSection>

        <Divider />

        <View paddingH-20 paddingV-10>
          <Text category="h2">Personal Information</Text>

          <Pressable>
            <View>
              <Text>{user?.email}</Text>
            </View>
          </Pressable>
        </View>

        <Divider />

        <Button>Logout</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

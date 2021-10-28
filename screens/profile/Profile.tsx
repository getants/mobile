import React, {
  useState,
  useLayoutEffect,
} from 'react';
import styled from 'styled-components/native';
import {
  Avatar,
  Button,
  Divider,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from '@components';
import { useAuth, useNavigation } from '@hooks';
import type { ProfileScreenNavigationProp } from '@stacks/Types';
import { space, Colors } from '@styles/helpers';

import Name from './Name';

const ScrollView = styled.ScrollView`
  background-color: ${Colors.white};
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

const Profile = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Profile',
    });
  }, [navigation]);

  const { loading, session, logout } = useAuth();
  const [visible, setVisible] = useState(false);

  const imageUrl = session?.user?.picture ?? '';
  const fullName = session?.user?.full_name ?? '';

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <NameSection>
          <Avatar
            isLoading={loading}
            name={fullName}
            source={{ uri: imageUrl }}
          />
          <TitleWrapper>
            <Name isLoading={loading}>{fullName}</Name>
          </TitleWrapper>
        </NameSection>

        <Divider />

        <View width="100%" paddingH-20 paddingV-10>
          <Text text65>Personal Information</Text>

          <Pressable onPress={() => setVisible(true)}>
            <View height={32}><Text>{session?.user?.email}</Text></View>
          </Pressable>
        </View>

        <Divider />

        <Button width="80%" onPress={logout}>
          Logout
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

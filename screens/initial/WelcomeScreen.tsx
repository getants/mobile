/* eslint-disable global-require */
// I already paid 1000$ to use this line, jk, I don't know how to fix this
import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { Layout, ProgressBar, StyleSheet, Text, View } from '../../components';
import {
  useAuth,
  useFocusEffect,
  useQuery,
  useMutation,
} from '../../utils/hooks';
import { MainStackEnum, RootStackEnum } from '../../utils/enums';
import { InsertResumesOneDocument, ProfilesByPkDocument } from '../../graphqls';
import type {
  InsertResumesOneMutation,
  InsertResumesOneMutationVariables,
  ProfilesByPkQuery,
  ProfilesByPkQueryVariables,
  WelcomeScreenNavigationProp,
} from '../../utils/types';

const StyledBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const TinyMessage = styled(Text)`
  text-align: center;
  font-weight: 300;
  margin-top: 3%;
`;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 120,
  },
});

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { user, isAuthenticated } = useAuth();
  const [message, setMessage] = useState<string>('Setup, please wait...');

  const {
    data: profileData,
    loading: profileLoading,
    // error: resumeError,
  } = useQuery<ProfilesByPkQuery, ProfilesByPkQueryVariables>(
    ProfilesByPkDocument,
    {
      variables: {
        id: user?.id ?? '',
      },
    },
  );

  const [insertResumeMutation] = useMutation<
    InsertResumesOneMutation,
    InsertResumesOneMutationVariables
  >(InsertResumesOneDocument);

  const hasResume =
    !!profileData &&
    profileData.profiles_by_pk &&
    profileData.profiles_by_pk?.resumes.length === 0;

  useFocusEffect(
    useCallback(() => {
      if (isAuthenticated && user) {
        if (!profileLoading && !hasResume) {
          setMessage('New profile setup...');

          insertResumeMutation({
            variables: {
              object: {
                summary: `Auto-generated: ${Date.now()}`,
                // profile_id: userId, // auto get from session
                // user_id: userId,
              },
            },
          });
        } else {
          navigation.navigate(RootStackEnum.MainStack, {
            screen: MainStackEnum.JobStack,
          });
        }
      } else {
        navigation.navigate(RootStackEnum.AuthStack);
      }
    }, [
      hasResume,
      insertResumeMutation,
      isAuthenticated,
      navigation,
      profileLoading,
      user,
    ]),
  );

  return (
    <StyledBackground source={require('../../assets/splash.png')}>
      <Layout
        transparent
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
      >
        <View />

        <View style={styles.loading}>
          <ProgressBar />

          <TinyMessage>{message}</TinyMessage>
        </View>
      </Layout>
    </StyledBackground>
  );
};

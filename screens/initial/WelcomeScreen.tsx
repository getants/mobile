/* eslint-disable global-require */
// I already paid 1000euro to use this line, jk, I don't know how to fix this
import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import {
  // Button,
  Layout,
  ProgressBar,
  StyleSheet,
  Text,
  View,
} from '../../components';
import {
  useAuth,
  useFocusEffect,
  useQuery,
  useMutation,
  // useTimeoutFn,
} from '../../utils/hooks';
// import { nhost } from '../../utils/nhost';
import {
  MainStackEnum,
  OrderBy,
  RootStackEnum,
  // MainStackEnum,
  // InitialStackEnum,
} from '../../utils/enums';
import {
  InsertResumesOneDocument,
  ResumesDocument,
  // JobsNearbyAggregateDocument,
} from '../../graphqls';
import type {
  InsertResumesOneMutation,
  InsertResumesOneMutationVariables,
  // JobsNearbyAggregateQuery,
  // JobsNearbyAggregateQueryVariables,
  ResumesQuery,
  ResumesQueryVariables,
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
    data: resumeData,
    loading: resumeLoading,
    // error: resumeError,
  } = useQuery<ResumesQuery, ResumesQueryVariables>(ResumesDocument, {
    variables: {
      limit: 1,
      offset: 0,
      order_by: [{ created_at: OrderBy.Desc }],
      where: {
        user_id: { _eq: user?.id },
      },
    },
  });

  const [insertResumeMutation] = useMutation<
    InsertResumesOneMutation,
    InsertResumesOneMutationVariables
  >(InsertResumesOneDocument);

  // const [isReady, cancelTimer, resetTimer] = useTimeoutFn(async () => {
  //   if (isAuthenticated) {
  //   }
  // }, 1000);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const createResume = async () => {
        try {
          await insertResumeMutation({
            variables: {
              object: {
                summary: `Auto-generated: ${Date.now()}`,
                // profile_id: userId, // auto get from session
                // user_id: userId,
              },
            },
          });

          if (isActive) {
            // console.log({ response });
          }
        } catch (e) {
          // TODO: Handle error
        }
      };

      if (isAuthenticated && user) {
        // try to detect resume here
        if (
          resumeData === undefined ||
          (!resumeLoading && resumeData.resumes.length === 0)
        ) {
          setMessage('New profile setup...');
          createResume();
          // resetTimer();
          // TODO: Create setup screen and let user confirm before moving next
          // navigation.navigate(InitialStackEnum.SetupScreen);
        } else {
          navigation.navigate(RootStackEnum.MainStack, {
            screen: MainStackEnum.JobStack,
          });
        }
      } else {
        // Redirect to signin
        navigation.navigate(RootStackEnum.AuthStack);
      }

      // Cancel the timer when leaving this view
      return () => {
        isActive = false;
        // cancelTimer();
      };
    }, [
      insertResumeMutation,
      isAuthenticated,
      navigation,
      resumeData,
      resumeLoading,
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

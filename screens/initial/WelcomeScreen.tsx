/* eslint-disable global-require */
import React, { useCallback, useState } from 'react';
import { InsertResumesOneDocument } from '@getants/graphqls';
import {
  ProgressBar,
  StyleSheet,
  SplashView,
  Text,
  View,
} from '../../components';
import {
  useAuth,
  useAppStates,
  useFocusEffect,
  useMutation,
  useTimeoutFn,
} from '../../hooks';
import type {
  InsertResumesOneMutation,
  InsertResumesOneMutationVariables,
  WelcomeScreenNavigationProp,
} from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  loading: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 120,
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
  },
});

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export const WelcomeScreen: React.FC<Props> = () => {
  const { isAuthenticated, isLoading, profile } = useAuth();
  const { appStates, setAppStates } = useAppStates();

  const [message, setMessage] = useState<string>('Setup, please wait...');

  const [insertResumeMutation] = useMutation<
    InsertResumesOneMutation,
    InsertResumesOneMutationVariables
  >(InsertResumesOneDocument);

  const hasResume = !!profile && profile?.resumes.length === 0;

  useTimeoutFn(() => {
    if (!isLoading && !appStates.isReady && isAuthenticated) {
      setAppStates((prev) => ({ ...prev, isReady: true }));
    }
  }, 1200);

  useFocusEffect(
    useCallback(() => {
      if (isAuthenticated) {
        if (!isLoading && !hasResume) {
          setMessage('Loading...');

          insertResumeMutation({
            variables: {
              object: {
                summary: `Auto-generated: ${Date.now()}`,
              },
            },
          });
        }
      }
    }, [hasResume, insertResumeMutation, isAuthenticated, isLoading]),
  );

  return (
    <SplashView>
      <View style={styles.loading}>
        <ProgressBar />

        <Text style={styles.message}>{message}</Text>
      </View>
    </SplashView>
  );
};

import { NhostClient } from '@nhost/nhost-js';
import { useNhostAuth } from '@nhost/react-auth';
import * as SecureStore from 'expo-secure-store';
import { useQuery } from '@apollo/client';
import { getEnvironment } from './tokens';
import { ProfilesByPkDocument } from '../graphqls';
import type { ProfilesByPkQuery, ProfilesByPkQueryVariables } from './types';

const { baseUrl } = getEnvironment();

export const nhost = new NhostClient({
  backendUrl: baseUrl,
  clientStorage: SecureStore,
  clientStorageType: 'expo-secure-storage',
});

export const useAuth = () => {
  const { isAuthenticated, isLoading } = useNhostAuth();
  const user = nhost.auth.getUser();

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useQuery<ProfilesByPkQuery, ProfilesByPkQueryVariables>(
    ProfilesByPkDocument,
    {
      variables: {
        id: user?.id ?? '',
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  );

  const profile = profileData?.profiles_by_pk;

  return {
    user,
    profile,
    isAuthenticated,
    isLoading: isLoading || profileLoading,
    error: profileError,
  };
};

// state: ReturnType<typeof useCopyToClipboard>[0];
export type NhostUser = ReturnType<typeof useAuth>['user'];

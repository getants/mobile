import { NhostClient } from '@nhost/nhost-js';
import { useNhostAuth } from '@nhost/react-auth';
import * as SecureStore from 'expo-secure-store';
import { useQuery } from '@apollo/client';
import { getEnvironment } from './tokens';
import { ProfilesByPkDocument } from '../graphqls';
import type { ProfilesByPkQuery, ProfilesByPkQueryVariables } from './types';

const { BACKEND_URL } = getEnvironment();

export const nhost = new NhostClient({
  backendUrl: BACKEND_URL,
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
    refetch: refetchProfile,
  } = useQuery<ProfilesByPkQuery, ProfilesByPkQueryVariables>(
    ProfilesByPkDocument,
    {
      skip: !user || !isAuthenticated,
      variables: { id: user?.id ?? '' },
      fetchPolicy: 'cache-and-network',
      // notifyOnNetworkStatusChange: true,
    },
  );

  const profile = profileData?.profiles_by_pk;

  return {
    error: profileError,
    isAuthenticated,
    isLoading: isLoading || profileLoading,
    profile,
    refetchProfile,
    user,
  };
};

// state: ReturnType<typeof useCopyToClipboard>[0];
export type NhostUser = ReturnType<typeof useAuth>['user'];

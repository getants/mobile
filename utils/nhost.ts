import { useMemo } from 'react';
import { NhostClient } from '@nhost/nhost-js';
import { useNhostAuth } from '@nhost/react-auth';
import * as SecureStore from 'expo-secure-store';
import { getEnvironment } from './tokens';

const { baseUrl } = getEnvironment();

export const nhost = new NhostClient({
  backendUrl: baseUrl,
  clientStorage: SecureStore,
  clientStorageType: 'expo-secure-storage',
});

export const useAuth = () => {
  const { isAuthenticated, isLoading } = useNhostAuth();
  const user = nhost.auth.getUser();

  return useMemo(() => ({
    user,
    isAuthenticated,
    isLoading,
  }), [isAuthenticated, isLoading, user]);
};

import { NhostClient } from '@nhost/nhost-js';
import * as SecureStore from 'expo-secure-store';
import { getEnvironment } from '@/utils/tokens';

const { baseUrl } = getEnvironment();

export const nhost = new NhostClient({
  backendUrl: baseUrl,
  clientStorage: SecureStore,
  clientStorageType: 'expo-secure-storage',
});

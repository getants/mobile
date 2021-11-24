import { Platform } from 'react-native';
import type { EnvironmentType } from './types';

export const APP_NAME = 'GetAnts';
// export const AUTH_ENDPOINT = __DEV__ ? 'http://localhost:1337' : 'https://auth.getants.com';
export const FACEBOOK_PROFILE_URL = 'https://graph.facebook.com/me?fields=email,name,picture';
export const SENTRY_DSN = 'https://b1aebc40dd134a2985d322a95cf0fed6@o333769.ingest.sentry.io/5568983';
// export const defaultImage = 'https://template-api.s3-ap-southeast-1.amazonaws.com/image/default.png';

export const ENV_VARS: Record<string, Record<string, EnvironmentType>> = {
  dev: {
    finland: {
      tenantId: '12cd2a35-541a-4020-b2b4-5fd3c5f19a93',
      apiUrl: 'http://localhost:8080',
      baseUrl: 'http://localhost:1337',
      wsUrl: 'wss://localhost:8080',
      chatUrl: 'http://localhost:8080',
    },
    thailand: {
      tenantId: '14e694d2-84e1-4531-bc10-fd3b11c62882',
      apiUrl: 'http://localhost:8080',
      baseUrl: 'http://localhost:1337',
      wsUrl: 'wss://localhost:8080',
      chatUrl: 'http://localhost:8080',
    },
  },
  stage: {
    finland: {
      tenantId: '12cd2a35-541a-4020-b2b4-5fd3c5f19a93',
      apiUrl: 'https://ants-dev.hasura.app',
      baseUrl: 'https://ants-dev.hasura.app',
      wsUrl: 'wss://ants-dev.hasura.app',
      chatUrl: 'https://us-central1-getants.cloudfunctions.net/chatbot',
    },
    thailand: {
      tenantId: '14e694d2-84e1-4531-bc10-fd3b11c62882',
      apiUrl: 'https://ants-dev.hasura.app',
      baseUrl: 'https://ants-dev.hasura.app',
      wsUrl: 'wss://ants-dev.hasura.app',
      chatUrl: 'https://us-central1-getants.cloudfunctions.net/chatbot',
    },
  },
  prod: {
    finland: {
      tenantId: '87726cee-e54c-4b49-8947-1be04faceda9',
      apiUrl: 'https://hasura-123d85d5.nhost.app',
      baseUrl: 'https://backend-123d85d5.nhost.app',
      wsUrl: 'wss://ants-prod.hasura.app',
      chatUrl: 'https://us-central1-getants.cloudfunctions.net/chatbot',
    },
    thailand: {
      tenantId: '450bb906-7885-4dbc-a77a-db1ac48d9be9',
      apiUrl: 'https://hasura-123d85d5.nhost.app',
      baseUrl: 'https://backend-123d85d5.nhost.app',
      wsUrl: 'wss://ants-prod.hasura.app',
      chatUrl: 'https://us-central1-getants.cloudfunctions.net/chatbot',
    },
  },
};
export const BOT_KEYWORDS = ['bot', 'hello bot', 'chatbot', 'robot'];
export const SAFE_BOUNCE_HEIGHT = Platform.select({
  ios: 150,
  android: 100,
}) ?? 100;

export const FB_APP_ID = '358217902274990';
export const AUTH_KEY = '__ANTS_AUTH_STATE__';
export const NAVIGATION_STATE = 'NAVIGATION_STATE';
export const DISTANCE_TO_TOP = 80;
export const HEADER_HEIGHT = 91;
export const SPACE_MULTIPLIER = 4;
export const JOB_IMAGE_FRAME_RATIO = 8 / 3;
export const MESSAGE_QUERY_LIMIT = 20;
export const OUR_THEME = {
  colors: {
    primary: '#D97B1E',
    secondary: '#1e7bd9',
    black: '#111111',
    grayOutline: '#CCCCCC',
    // grey0;
    // grey1;
    // grey2;
    // grey3;
    // grey4;
    // grey5;
  },
};

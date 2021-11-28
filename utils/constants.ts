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
export const OUR_COLORS = {
  primaryColor: '#D97B1E',
  secondaryColor: '#1e7bd9',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
};
// NOTE: Disable spacing issue for easier modifications :D
/* eslint-disable key-spacing */
export const ColorMap = {
  Primary     : 'color-primary-500', // Special
  Primary100  : 'color-primary-100',
  Primary200  : 'color-primary-200',
  Primary300  : 'color-primary-300',
  Primary400  : 'color-primary-400',
  Primary500  : 'color-primary-500',
  Primary600  : 'color-primary-600',
  Primary700  : 'color-primary-700',
  Primary800  : 'color-primary-800',
  Primary900  : 'color-primary-900',
  Success100  : 'color-success-100',
  Success200  : 'color-success-200',
  Success300  : 'color-success-300',
  Success400  : 'color-success-400',
  Success500  : 'color-success-500',
  Success600  : 'color-success-600',
  Success700  : 'color-success-700',
  Success800  : 'color-success-800',
  Success900  : 'color-success-900',
  Green100    : 'color-success-100',
  Green200    : 'color-success-200',
  Green300    : 'color-success-300',
  Green400    : 'color-success-400',
  Green500    : 'color-success-500',
  Green600    : 'color-success-600',
  Green700    : 'color-success-700',
  Green800    : 'color-success-800',
  Green900    : 'color-success-900',
  Info100     : 'color-info-100',
  Info200     : 'color-info-200',
  Info300     : 'color-info-300',
  Info400     : 'color-info-400',
  Info500     : 'color-info-500',
  Info600     : 'color-info-600',
  Info700     : 'color-info-700',
  Info800     : 'color-info-800',
  Info900     : 'color-info-900',
  Blue100     : 'color-info-100',
  Blue200     : 'color-info-200',
  Blue300     : 'color-info-300',
  Blue400     : 'color-info-400',
  Blue500     : 'color-info-500',
  Blue600     : 'color-info-600',
  Blue700     : 'color-info-700',
  Blue800     : 'color-info-800',
  Blue900     : 'color-info-900',
  Warning100  : 'color-warning-100',
  Warning200  : 'color-warning-200',
  Warning300  : 'color-warning-300',
  Warning400  : 'color-warning-400',
  Warning500  : 'color-warning-500',
  Warning600  : 'color-warning-600',
  Warning700  : 'color-warning-700',
  Warning800  : 'color-warning-800',
  Warning900  : 'color-warning-900',
  Yellow100   : 'color-warning-100',
  Yellow200   : 'color-warning-200',
  Yellow300   : 'color-warning-300',
  Yellow400   : 'color-warning-400',
  Yellow500   : 'color-warning-500',
  Yellow600   : 'color-warning-600',
  Yellow700   : 'color-warning-700',
  Yellow800   : 'color-warning-800',
  Yellow900   : 'color-warning-900',
  Danger100   : 'color-danger-100',
  Danger200   : 'color-danger-200',
  Danger300   : 'color-danger-300',
  Danger400   : 'color-danger-400',
  Danger500   : 'color-danger-500',
  Danger600   : 'color-danger-600',
  Danger700   : 'color-danger-700',
  Danger800   : 'color-danger-800',
  Danger900   : 'color-danger-900',
  Red100      : 'color-danger-100',
  Red200      : 'color-danger-200',
  Red300      : 'color-danger-300',
  Red400      : 'color-danger-400',
  Red500      : 'color-danger-500',
  Red600      : 'color-danger-600',
  Red700      : 'color-danger-700',
  Red800      : 'color-danger-800',
  Red900      : 'color-danger-900',
  Basic100    : 'color-basic-100',
  Basic200    : 'color-basic-200',
  Basic300    : 'color-basic-300',
  Basic400    : 'color-basic-400',
  Basic500    : 'color-basic-500',
  Basic600    : 'color-basic-600',
  Basic700    : 'color-basic-700',
  Basic800    : 'color-basic-800',
  Basic900    : 'color-basic-900',
  Basic1000   : 'color-basic-1000',
  Basic1100   : 'color-basic-1100',
  Grey100     : 'color-basic-100',
  Grey200     : 'color-basic-200',
  Grey300     : 'color-basic-300',
  Grey400     : 'color-basic-400',
  Grey500     : 'color-basic-500',
  Grey600     : 'color-basic-600',
  Grey700     : 'color-basic-700',
  Grey800     : 'color-basic-800',
  Grey900     : 'color-basic-900',
  Grey1000    : 'color-basic-1000',
  Grey1100    : 'color-basic-1100',
  Background1 : 'background-basic-color-1',
  Background2 : 'background-basic-color-2',
  Background3 : 'background-basic-color-3',
  Background4 : 'background-basic-color-4',
  Border1     : 'border-basic-color-1',
  Border2     : 'border-basic-color-2',
  Border3     : 'border-basic-color-3',
  Border4     : 'border-basic-color-4',
  Border5     : 'border-basic-color-5',
};

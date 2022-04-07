import { Platform } from 'react-native';
import type { EnvironmentKey, EnvironmentType } from './types';

export const APP_NAME = 'GetAnts';
// export const AUTH_ENDPOINT = __DEV__ ? 'http://localhost:1337' : 'https://auth.getants.com';
export const FACEBOOK_PROFILE_URL =
  'https://graph.facebook.com/me?fields=email,name,picture';
export const SENTRY_DSN =
  'https://b1aebc40dd134a2985d322a95cf0fed6@o333769.ingest.sentry.io/5568983';
// export const defaultImage = 'https://template-api.s3-ap-southeast-1.amazonaws.com/image/default.png';

// NOTE: The machine's IP will be changed time to time, remember to run the script
// in folder ./scripts/dev.sh to get the new IP. Suggest open the wifi because most of the time
// the phone will use wifi, with this way we can connect using LAN option in metro.
export const ENV_VARS: Record<EnvironmentKey, EnvironmentType> = {
  development: {
    BACKEND_URL: 'http://ants-backend.ngrok.io',
    CHATBOT_URL: 'http://ants-backend.ngrok.io/v1/functions/chatbot',
    HOST_URL: 'http://ants-console.ngrok.io',
  },
  staging: {
    BACKEND_URL: 'https://xrnhxphfuvaerdpimjwz.nhost.run',
    CHATBOT_URL: `https://xrnhxphfuvaerdpimjwz.nhost.run/v1/functions/chatbot`,
    HOST_URL: `https://console-stage.getants.com`,
  },
  production: {
    BACKEND_URL: 'https://xrnhxphfuvaerdpimjwz.nhost.run',
    CHATBOT_URL: `https://xrnhxphfuvaerdpimjwz.nhost.run/v1/functions/chatbot`,
    HOST_URL: `https://console.getants.com`,
  },
};

export const BOT_KEYWORDS = ['bot', 'hello bot', 'chatbot', 'robot'];
export const SAFE_BOUNCE_HEIGHT =
  Platform.select({
    ios: 150,
    android: 100,
  }) ?? 100;

export const FB_APP_ID = '358217902274990';
export const AUTH_KEY = '__ANTS_AUTH_STATE__';
export const NAVIGATION_STATE = 'NAVIGATION_STATE';
export const DISTANCE_TO_TOP = 80;
export const HEADER_HEIGHT = 91;
export const JOB_IMAGE_FRAME_RATIO = 8 / 3;
export const MESSAGE_QUERY_LIMIT = 20;
export const BASE_SPACING = 4;
export const SPACE_MULTIPLIER = BASE_SPACING;
export const OUR_COLORS = {
  primaryColor: '#D97B1E',
  secondaryColor: '#1e7bd9',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
};
export const NotificationChannel = {
  Default: 'DEFAULT',
  NewJobs: 'NEW_JOBS',
};
export const ASYNC_STORAGE_NOTIFICATIONS_KEY = '@GETANTS_MOBILE_NOTIFICATIONS';

// There are warnings that we can't fix, ignore now
export const IGNORE_MESSAGES = [
  'Warning:',
  'Constants.deviceYearClass',
  'Setting a timer for a long period of time',
  'Overwriting fontFamily style attribute preprocessor',
];

// NOTE: Disable spacing issue for easier modifications :D
/* eslint-disable key-spacing */
export const ColorMap = {
  primary: 'color-primary-500', // Special
  primary100: 'color-primary-100',
  primary200: 'color-primary-200',
  primary300: 'color-primary-300',
  primary400: 'color-primary-400',
  primary500: 'color-primary-500',
  primary600: 'color-primary-600',
  primary700: 'color-primary-700',
  primary800: 'color-primary-800',
  primary900: 'color-primary-900',
  success100: 'color-success-100',
  success200: 'color-success-200',
  success300: 'color-success-300',
  success400: 'color-success-400',
  success500: 'color-success-500',
  success600: 'color-success-600',
  success700: 'color-success-700',
  success800: 'color-success-800',
  success900: 'color-success-900',
  green100: 'color-success-100',
  green200: 'color-success-200',
  green300: 'color-success-300',
  green400: 'color-success-400',
  green500: 'color-success-500',
  green600: 'color-success-600',
  green700: 'color-success-700',
  green800: 'color-success-800',
  green900: 'color-success-900',
  info100: 'color-info-100',
  info200: 'color-info-200',
  info300: 'color-info-300',
  info400: 'color-info-400',
  info500: 'color-info-500',
  info600: 'color-info-600',
  info700: 'color-info-700',
  info800: 'color-info-800',
  info900: 'color-info-900',
  blue100: 'color-info-100',
  blue200: 'color-info-200',
  blue300: 'color-info-300',
  blue400: 'color-info-400',
  blue500: 'color-info-500',
  blue600: 'color-info-600',
  blue700: 'color-info-700',
  blue800: 'color-info-800',
  blue900: 'color-info-900',
  warning100: 'color-warning-100',
  warning200: 'color-warning-200',
  warning300: 'color-warning-300',
  warning400: 'color-warning-400',
  warning500: 'color-warning-500',
  warning600: 'color-warning-600',
  warning700: 'color-warning-700',
  warning800: 'color-warning-800',
  warning900: 'color-warning-900',
  yellow100: 'color-warning-100',
  yellow200: 'color-warning-200',
  yellow300: 'color-warning-300',
  yellow400: 'color-warning-400',
  yellow500: 'color-warning-500',
  yellow600: 'color-warning-600',
  yellow700: 'color-warning-700',
  yellow800: 'color-warning-800',
  yellow900: 'color-warning-900',
  danger100: 'color-danger-100',
  danger200: 'color-danger-200',
  danger300: 'color-danger-300',
  danger400: 'color-danger-400',
  danger500: 'color-danger-500',
  danger600: 'color-danger-600',
  danger700: 'color-danger-700',
  danger800: 'color-danger-800',
  danger900: 'color-danger-900',
  red100: 'color-danger-100',
  red200: 'color-danger-200',
  red300: 'color-danger-300',
  red400: 'color-danger-400',
  red500: 'color-danger-500',
  red600: 'color-danger-600',
  red700: 'color-danger-700',
  red800: 'color-danger-800',
  red900: 'color-danger-900',
  basic100: 'color-basic-100',
  basic200: 'color-basic-200',
  basic300: 'color-basic-300',
  basic400: 'color-basic-400',
  basic500: 'color-basic-500',
  basic600: 'color-basic-600',
  basic700: 'color-basic-700',
  basic800: 'color-basic-800',
  basic900: 'color-basic-900',
  basic1000: 'color-basic-1000',
  basic1100: 'color-basic-1100',
  grey100: 'color-basic-100',
  grey200: 'color-basic-200',
  grey300: 'color-basic-300',
  grey400: 'color-basic-400',
  grey500: 'color-basic-500',
  grey600: 'color-basic-600',
  grey700: 'color-basic-700',
  grey800: 'color-basic-800',
  grey900: 'color-basic-900',
  grey1000: 'color-basic-1000',
  grey1100: 'color-basic-1100',
  background1: 'background-basic-color-1',
  background2: 'background-basic-color-2',
  background3: 'background-basic-color-3',
  background4: 'background-basic-color-4',
  border1: 'border-basic-color-1',
  border2: 'border-basic-color-2',
  border3: 'border-basic-color-3',
  border4: 'border-basic-color-4',
  border5: 'border-basic-color-5',
};

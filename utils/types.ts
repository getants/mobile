// import type { SetStateAction, WritableAtom } from 'jotai';
import type { PrimitiveAtom } from 'jotai';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type {
  StackNavigationProp,
  StackNavigationOptions,
} from '@react-navigation/stack';
import type {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type {
  CalendarStackEnum,
  // EntityKey,
  InboxStackEnum,
  InitialStackEnum,
  JobStackEnum,
  MainStackEnum,
  ProfileStackEnum,
  RootStackEnum,
  AuthStackEnum,
  JustifyContentEnum,
  AlignItemsEnum,
  DirectionEnum,
} from './enums';

// Import for using in Chat
import type { Conversations, Messages } from '../graphqls';

export type { NhostUser } from './nhost';

export * from '../graphqls';

export type Size = 'lg' | 'md' | 'sm' | 'xs';

export type JustifyContent =
  | JustifyContentEnum
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItems =
  | AlignItemsEnum
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

export type Direction = DirectionEnum | 'row' | 'column';

// Re-export some of the imports
export type { StackNavigationProp, StackNavigationOptions };

// Only stacks have screens, not composite stack
export type StackScreens =
  | InitialStackEnum
  | AuthStackEnum
  | JobStackEnum
  | InboxStackEnum
  | CalendarStackEnum
  | ProfileStackEnum;
// These are composite stacks, so it does not have real screens
export type RootStackParams = {
  [RootStackEnum.AuthStack]: NavigatorScreenParams<AuthStackParams>;
  [RootStackEnum.InitialStack]: NavigatorScreenParams<InitialStackParams>;
  [RootStackEnum.MainStack]: NavigatorScreenParams<MainStackParams> & {
    name?: string;
  };
};
export type InitialStackParams = {
  [InitialStackEnum.WelcomeScreen]?: undefined;
  [InitialStackEnum.SetupScreen]?: undefined;
};
export type AuthStackParams = {
  [AuthStackEnum.LoginScreen]?: undefined;
  [AuthStackEnum.SignupScreen]?: undefined;
};
export type MainStackParams = {
  [MainStackEnum.JobStack]?: NavigatorScreenParams<JobStackParams>;
  [MainStackEnum.InboxStack]?: NavigatorScreenParams<InboxStackParams>;
  [MainStackEnum.CalendarStack]?: NavigatorScreenParams<CalendarStackParams>;
  [MainStackEnum.ProfileStack]?: NavigatorScreenParams<ProfileStackParams>;
};
export type JobStackParams = {
  // These stacks live inside the Bottom Navigation
  [JobStackEnum.JobListScreen]: undefined;
  [JobStackEnum.SingleJobScreen]: {
    jobId: string;
    jobTitle?: string;
    companyName?: string;
  };
};
export type InboxStackParams = {
  [InboxStackEnum.InboxScreen]: undefined;
  [InboxStackEnum.ConversationScreen]: {
    conversationId: string;
    userId: string;
    jobId?: string | undefined;
  };
};
export type CalendarStackParams = {
  [CalendarStackEnum.Calendar]: undefined;
};
export type ProfileStackParams = {
  [ProfileStackEnum.Profile]: undefined;
  [ProfileStackEnum.CameraRoll]: undefined;
};
// We don't use the Abstract because it's not nested in BottomBar
export type WelcomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<InitialStackParams, InitialStackEnum.WelcomeScreen>,
  StackNavigationProp<RootStackParams>
>;
export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParams, AuthStackEnum.LoginScreen>,
  StackNavigationProp<RootStackParams>
>;
// Abstract for root and main stacks
export type AbstractCompositeNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainStackParams>,
  StackNavigationProp<RootStackParams>
>;
// Job screens props
export type JobListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<JobStackParams, JobStackEnum.JobListScreen>,
  AbstractCompositeNavigationProps
>;
export type SingleJobScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<JobStackParams, JobStackEnum.SingleJobScreen>,
  AbstractCompositeNavigationProps
>;
// Inbox and conversation props
export type InboxScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<InboxStackParams, InboxStackEnum.InboxScreen>,
  AbstractCompositeNavigationProps
>;
export type SingleConversationScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<InboxStackParams, InboxStackEnum.ConversationScreen>,
  AbstractCompositeNavigationProps
>;

// Calendar, SingleEvent props
export type CalendarScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CalendarStackParams, CalendarStackEnum.Calendar>,
  AbstractCompositeNavigationProps
>;
// Profile and settings props
export type ProfileScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ProfileStackParams, ProfileStackEnum.Profile>,
  AbstractCompositeNavigationProps
>;
export type CameraRollScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ProfileStackParams, ProfileStackEnum.CameraRoll>,
  AbstractCompositeNavigationProps
>;
// Job route props
export type JobListScreenRouteProp = RouteProp<
  JobStackParams,
  JobStackEnum.JobListScreen
>;
export type SingleJobScreenRouteProp = RouteProp<
  JobStackParams,
  JobStackEnum.SingleJobScreen
>;
// Inbox route props
export type SingleConversationScreenRouteProp = RouteProp<
  InboxStackParams,
  InboxStackEnum.ConversationScreen
>;
export type InboxScreenRouteProp = RouteProp<
  InboxStackParams,
  InboxStackEnum.InboxScreen
>;

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends Record<string, unknown>
    ? RecursivePartial<T[P]>
    : T[P];
};

/* Address is the place company registered, it might
 * be different from the real working place. We use the Address
 * only for company entity, and location to track with the job.
 */
export type Crs = {
  type: string;
  properties: {
    name: string;
  };
};
export type Geography = {
  type: string;
  crs: Crs;
  coordinates: [number, number]; // [long, lat]
};
export type Address = {
  id?: string;
  data_usage?: string;
  unstructured_value?: string;
  structured_value?: string;
  location?: Geography;
  created_at?: Date | string;
  updated_at?: Date | string;
};
export type Company = {
  id: string;
  created_at: Date | string;
  updated_at?: Date | string;
  establish_date?: Date | string;
  image?: string;
  name?: string;
  summary?: string;
};
export type FacebookProfilePicture = {
  data?: {
    height?: number;
    is_silhouette?: Boolean;
    url?: string;
    width?: number;
  };
};
export type FacebookProfile = {
  email: string;
  name?: string;
  picture?: FacebookProfilePicture;
  id: string; // this is Facebook ID, not our UUID
  access_token?: string;
};
export type Spacing =
  | '0'
  | '4px'
  | '8px'
  | '12px'
  | '16px'
  | '20px'
  | '24px'
  | '32px';
export type ShortProperty =  // TODO: Make use of this
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
  | 'w'
  | 'h';
export type RichProperty = `${ShortProperty}-${number}`;
export type StyleObject = Record<string, string | number>;
export type EnvironmentType = {
  tenantId: string;
  baseUrl: string;
  wsUrl: string;
  chatUrl: string;
};
export type EnvType = 'dev' | 'stage' | 'prod';
export type UserType = {
  id: string;
  created_at: Date;
  updated_at: Date;
  email: string;
  is_available: boolean;
  is_hirable: boolean;
  full_name: string;
  source?: string;
  tenant_id?: string;
  last_seen?: Date;
  education_level?: string;
  location: Geography | null;
  settings?: string | null;
  user_role: string;
  avatar_url?: string;
};
export type Resume = {
  id: string;
  name?: string;
  user_id: string;
  summary?: string;
  created_at: Date;
  updated_at: Date;
};
export type AppState = {
  currentScreen: PrimitiveAtom<StackScreens | null>;
  isLoggedIn: PrimitiveAtom<boolean>;
  me: PrimitiveAtom<Partial<UserType> | null>;
};
export type FocusAtomInput<T> = {
  source: PrimitiveAtom<T>;
  key: string | (keyof T)[];
};

export type ChatRequest = {
  conversation: Partial<Conversations>;
  user: Partial<UserType>;
  content: string;
  message?: Partial<Messages>;
  locale?: string;
  jobId?: string;
};

export type ChatResponse = {
  message: Partial<Messages>;
};

export type NavigationOptionParams = {
  effectStyle?: 'slide' | 'fade';
  options?: StackNavigationOptions;
};

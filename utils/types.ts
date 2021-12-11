import * as CSS from 'csstype';
// import type { SetStateAction, WritableAtom } from 'jotai';
import type { PrimitiveAtom } from 'jotai';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp, StackNavigationOptions } from '@react-navigation/stack';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {
  CalendarStackEnum,
  Entity,
  InboxStackEnum,
  InitialStackEnum,
  JobStackEnum,
  MainStackEnum,
  ProfileStackEnum,
  RootStackEnum,
  AuthStackEnum,
} from './enums';

// Re-export just in case
export type {
  StackNavigationProp,
  StackNavigationOptions,
};

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
  [RootStackEnum.MainStack]: NavigatorScreenParams<MainStackParams> & { name?: string };
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
// export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends Record<string, unknown>
      ? RecursivePartial<T[P]>
      : T[P];
}; // TODO: Which one is correct?
export type Location = {
  coordinates: [number, number];
  type: string;
};
/* Address is the place company registered, it might
 * be different from the real working place. We use the Address
 * only for company entity, and Location to track with the job.
 */
export type Address = {
  id?: string;
  data_usage?: string;
  unstructured_value?: string;
  structured_value?: string;
  location?: Location;
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
export type Job = {
  id: string;
  address: Address; // Address registerd with company
  company: Company;
  created_at: string;
  updated_at?: string;
  description: string;
  end?: string;
  title: string;
  image?: string;
  quantity: number;
  slug?: string;
  start?: Date;
  location?: Location; // Actually location of the job
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
export type ShortProperty = // TODO: Make use of this
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
  apiUrl: string;
  baseUrl: string;
  wsUrl: string;
  chatUrl: string;
  // syncUrl: string;
};
export type EnvType = 'dev' | 'stage' | 'prod';
export interface LayoutProps {
  display?: CSS.Property.Display;
  d?: CSS.Property.Display;
  width?: CSS.Property.Width | number;
  w?: CSS.Property.Width | number;
  inlineSize?: CSS.Property.InlineSize | number;
  boxSize?: CSS.Property.Width | number;
  maxWidth?: CSS.Property.MaxWidth | number;
  maxW?: CSS.Property.MaxWidth | number;
  maxInlineSize?: CSS.Property.MaxInlineSize | number;
  minWidth?: CSS.Property.MinWidth | number;
  minW?: CSS.Property.MinWidth | number;
  minInlineSize?: CSS.Property.MinInlineSize | number;
  height?: CSS.Property.Height | number;
  h?: CSS.Property.Height | number;
  blockSize?: CSS.Property.BlockSize | number;
  maxHeight?: CSS.Property.MaxHeight | number;
  maxH?: CSS.Property.MaxHeight | number;
  maxBlockSize?: CSS.Property.MaxBlockSize | number;
  minHeight?: CSS.Property.MinHeight | number;
  minH?: CSS.Property.MinHeight | number;
  minBlockSize?: CSS.Property.MinBlockSize | number;
  verticalAlign?: CSS.Property.VerticalAlign<any>;
  overflow?: CSS.Property.Overflow;
  overflowX?: CSS.Property.OverflowX;
  overflowY?: CSS.Property.OverflowY;
  boxSizing?: CSS.Property.BoxSizing;
  boxDecorationBreak?: CSS.Property.BoxDecorationBreak;
  float?: CSS.Property.Float;
  objectFit?: CSS.Property.ObjectFit;
  objectPosition?: CSS.Property.ObjectPosition<any>;
  overscrollBehavior?: CSS.Property.OverscrollBehavior;
  overscroll?: CSS.Property.OverscrollBehavior;
  overscrollBehaviorX?: CSS.Property.OverscrollBehaviorX;
  overscrollX?: CSS.Property.OverscrollBehaviorX;
  overscrollBehaviorY?: CSS.Property.OverscrollBehaviorY;
  overscrollY?: CSS.Property.OverscrollBehaviorY;
  visibility?: CSS.Property.Visibility;
  isolation?: CSS.Property.Isolation;
}
export interface FlexboxProps {
  alignItems?: CSS.Property.AlignItems;
  alignContent?: CSS.Property.AlignContent;
  justifyItems?: CSS.Property.JustifyItems;
  justifyContent?: CSS.Property.JustifyContent;
  flexWrap?: CSS.Property.FlexWrap;
  flexFlow?: CSS.Property.FlexFlow;
  flexBasis?: CSS.Property.FlexBasis<any>;
  flexDirection?: CSS.Property.FlexDirection;
  flexDir?: CSS.Property.FlexDirection;
  flex?: CSS.Property.Flex<any>;
  justifySelf?: CSS.Property.JustifySelf;
  alignSelf?: CSS.Property.AlignSelf;
  order?: CSS.Property.Order;
  flexGrow?: CSS.Property.FlexGrow | (string & number);
  flexShrink?: CSS.Property.FlexShrink | (string & number);
  placeItems?: CSS.Property.PlaceItems;
  placeContent?: CSS.Property.PlaceContent;
  placeSelf?: CSS.Property.PlaceSelf;
}
export interface StyleProps extends FlexboxProps, LayoutProps {}
export interface SystemProps extends StyleProps {}
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
  location: Location | null;
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
export type ReturningValue<T> = { returning: T[] };
export type AggregateValue<T> = { nodes: T[]; aggregate: { count: number } };
export type QueryData<T, K extends Entity> = Record<`${Lowercase<K>}`, T[]>;
export type AggregateData<T, K extends Entity> = Record<
  `${Lowercase<K>}_aggregate`,
  AggregateValue<T>
>;
export type SingleData<T, K extends Entity> = Record<
  `${Lowercase<K>}_by_pk`,
  T
>;
export type InsertedOneData<T, K extends Entity> = Record<
  `insert_${Lowercase<K>}_one`,
  T
>;
export type InsertedData<T, K extends Entity> = Record<
  `insert_${Lowercase<K>}`,
  ReturningValue<T>
>;
export type DeletedData<T, K extends Entity> = Record<
  `delete_${Lowercase<K>}_by_pk`,
  T
>;
export type UpdatedData<T, K extends Entity> = Record<
  `update_${Lowercase<K>}`,
  ReturningValue<T>
>;
export type PaginatedData<T, K extends Entity> = AggregateData<T, K> &
QueryData<T, K>;
// Specified type for each entity below
export type ResumeAggregateData = AggregateData<Resume, Entity.Resume>;
export type Conversation = {
  id: string;
  company_id: string;
  created_at?: Date | number;
  updated_at?: Date | number;
  name?: string;
  description?: string;
  status?: string;
};

export type Message = {
  id: string;
  created_at: Date | number;
  updated_at?: Date | number;
  conversation_id: string;
  user_id: string;
  user: UserType;
  content: string;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
};

export type MessageAggregateData = AggregateData<Message, Entity.Message>;
export type ConversationAggregateData = AggregateData<
  Conversation,
  Entity.Conversation
>;
export type SingleConversationData = SingleData<
  Conversation,
  Entity.Conversation
>;
export type SingleJobData = SingleData<Job, Entity.Job>;
export type JobAggregateData = AggregateData<Job, Entity.Job>;
export type JobsNearbyAggregateData = {
  jobs_nearby_aggregate: {
    nodes: Job[];
  };
};

export type ChatRequest = {
  conversation: Partial<Conversation>;
  user: Partial<UserType>;
  content: string;
  message?: Partial<Message>;
  locale?: string;
  jobId?: string;
};

export type ChatResponse = {
  message: Partial<Message>;
};

export type NavigationOptionParams = {
  effectStyle?: 'slide' | 'fade';
  options?: StackNavigationOptions;
};

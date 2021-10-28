import * as CSS from 'csstype';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {
  CalendarStackEnum,
  InboxStackEnum,
  InitialStackEnum,
  JobStackEnum,
  MainStackEnum,
  ProfileStackEnum,
  RootStackEnum,
  AuthStackEnum,
} from './enums';

// NOTE: These are composite stacks, so it does not have real screens
export type RootStackParams = {
  [RootStackEnum.AuthStack]: NavigatorScreenParams<AuthStackParams>;
  [RootStackEnum.InitialStack]: NavigatorScreenParams<InitialStackParams>;
  [RootStackEnum.MainStack]: NavigatorScreenParams<MainStackParams>;
};
export type InitialStackParams = {
  [InitialStackEnum.WelcomeScreen]: undefined;
  [InitialStackEnum.SetupScreen]: undefined;
};
export type AuthStackParams = {
  [AuthStackEnum.Login]: undefined;
  [AuthStackEnum.Signup]: undefined;
};
export type MainStackParams = {
  [MainStackEnum.JobStack]: NavigatorScreenParams<JobStackParams>;
  [MainStackEnum.InboxStack]: NavigatorScreenParams<InboxStackParams>;
  [MainStackEnum.CalendarStack]: NavigatorScreenParams<CalendarStackParams>;
  [MainStackEnum.ProfileStack]: NavigatorScreenParams<ProfileStackParams>;
};

// These stacks live inside the Bottom Navigation
export type JobStackParams = {
  [JobStackEnum.JobList]: undefined;
  [JobStackEnum.SingleJob]: {
    jobId: string,
    jobTitle?: string,
    companyName?: string,
  };
};
export type InboxStackParams = {
  [InboxStackEnum.Inbox]: undefined;
  [InboxStackEnum.Conversations]: undefined;
  [InboxStackEnum.SingleConversation]: {
    conversationId: string,
    userId: string,
    jobId?: string | undefined,
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
  StackNavigationProp<AuthStackParams, AuthStackEnum.Login>,
  StackNavigationProp<RootStackParams>
>;

// Abstract for root and main stacks
export type AbstractCompositeNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainStackParams>,
  StackNavigationProp<RootStackParams>
>;

// Job screens props
export type JobListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<JobStackParams, JobStackEnum.JobList>,
  AbstractCompositeNavigationProps
>;
export type SingleJobScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<JobStackParams, JobStackEnum.SingleJob>,
  AbstractCompositeNavigationProps
>;

// Inbox and conversation props
export type InboxScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<InboxStackParams, InboxStackEnum.Inbox>,
  AbstractCompositeNavigationProps
>;
export type SingleConversationScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<InboxStackParams, InboxStackEnum.SingleConversation>,
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
  JobStackEnum.JobList
>;
export type SingleJobScreenRouteProp = RouteProp<
  JobStackParams,
  JobStackEnum.SingleJob
>;

// Inbox route props
export type SingleConversationScreenRouteProp = RouteProp<
  InboxStackParams,
  InboxStackEnum.SingleConversation
>;
export type InboxScreenRouteProp = RouteProp<
  InboxStackParams,
  InboxStackEnum.Inbox
>;

// TODO: Make use of this
export type ShortProperty = 'mt' | 'mr' | 'mb' | 'ml' | 'pt' | 'pr' | 'pb' | 'pl' | 'w' | 'h';
export type RichProperty = `${ShortProperty}-${number}`;

export type EnvironmentType = {
  tenantId: string;
  env: string;
  apiUrl: string;
  baseUrl: string;
  wsUrl: string;
  syncUrl: string;
  chatUrl: string;
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

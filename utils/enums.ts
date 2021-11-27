export enum RootStackEnum {
  AuthStack = 'AuthStack',
  InitialStack = 'InitialStack',
  MainStack = 'MainStack',
}
export enum InitialStackEnum {
  WelcomeScreen = 'WelcomeScreen',
  SetupScreen = 'SetupScreen',
}
export enum AuthStackEnum {
  LoginScreen = 'LoginScreen',
  SignupScreen = 'SignupScreen',
}
export enum MainStackEnum {
  JobStack = 'JobStack',
  InboxStack = 'InboxStack',
  CalendarStack = 'CalendarStack',
  ProfileStack = 'ProfileStack',
}
export enum JobStackEnum {
  JobListScreen = 'JobListScreen',
  SingleJobScreen = 'SingleJobScreen',
}
export enum InboxStackEnum {
  InboxScreen = 'InboxScreen',
  ConversationScreen = 'ConversationScreen',
}
export enum CalendarStackEnum {
  Calendar = 'Calendar',
}
export enum ProfileStackEnum {
  Profile = 'Profile',
  CameraRoll = 'CameraRoll',
}
// TODO: Bring this to shared-common package
// Entity value should match with the Postgres table name
export enum Entity {
  Address = 'Addresses',
  Company = 'Companies',
  Conversation = 'Conversations',
  Job = 'Jobs',
  Message = 'Messages',
  Resume = 'Resumes',
  Tenant = 'Tenants',
}
export enum Direction {
  Column = 'column', // Default
  Row = 'row',
}
export enum JustifyContent {
  FlexStart = 'flex-start', // Default
  FlexEnd = 'flex-end',
  Center = 'center',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
  SpaceEvenly = 'space-evenly',
}
export enum AlignItems {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Baseline = 'baseline',
  Stretch = 'stretch', // Default
}

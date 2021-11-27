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
export enum Appearance {
  Dark = 'dark',
  Light = 'light',
}
export enum ColorMap {
  Primary = 'color-primary-500', // Special
  Primary100 = 'color-primary-100',
  Primary200 = 'color-primary-200',
  Primary300 = 'color-primary-300',
  Primary400 = 'color-primary-400',
  Primary500 = 'color-primary-500',
  Primary600 = 'color-primary-600',
  Primary700 = 'color-primary-700',
  Primary800 = 'color-primary-800',
  Primary900 = 'color-primary-900',
  Success100 = 'color-success-100',
  Success200 = 'color-success-200',
  Success300 = 'color-success-300',
  Success400 = 'color-success-400',
  Success500 = 'color-success-500',
  Success600 = 'color-success-600',
  Success700 = 'color-success-700',
  Success800 = 'color-success-800',
  Success900 = 'color-success-900',
  Green100 = 'color-success-100',
  Green200 = 'color-success-200',
  Green300 = 'color-success-300',
  Green400 = 'color-success-400',
  Green500 = 'color-success-500',
  Green600 = 'color-success-600',
  Green700 = 'color-success-700',
  Green800 = 'color-success-800',
  Green900 = 'color-success-900',
  Info100 = 'color-info-100',
  Info200 = 'color-info-200',
  Info300 = 'color-info-300',
  Info400 = 'color-info-400',
  Info500 = 'color-info-500',
  Info600 = 'color-info-600',
  Info700 = 'color-info-700',
  Info800 = 'color-info-800',
  Info900 = 'color-info-900',
  Blue100 = 'color-info-100',
  Blue200 = 'color-info-200',
  Blue300 = 'color-info-300',
  Blue400 = 'color-info-400',
  Blue500 = 'color-info-500',
  Blue600 = 'color-info-600',
  Blue700 = 'color-info-700',
  Blue800 = 'color-info-800',
  Blue900 = 'color-info-900',
  Warning100 = 'color-warning-100',
  Warning200 = 'color-warning-200',
  Warning300 = 'color-warning-300',
  Warning400 = 'color-warning-400',
  Warning500 = 'color-warning-500',
  Warning600 = 'color-warning-600',
  Warning700 = 'color-warning-700',
  Warning800 = 'color-warning-800',
  Warning900 = 'color-warning-900',
  Yellow100 = 'color-warning-100',
  Yellow200 = 'color-warning-200',
  Yellow300 = 'color-warning-300',
  Yellow400 = 'color-warning-400',
  Yellow500 = 'color-warning-500',
  Yellow600 = 'color-warning-600',
  Yellow700 = 'color-warning-700',
  Yellow800 = 'color-warning-800',
  Yellow900 = 'color-warning-900',
  Danger100 = 'color-danger-100',
  Danger200 = 'color-danger-200',
  Danger300 = 'color-danger-300',
  Danger400 = 'color-danger-400',
  Danger500 = 'color-danger-500',
  Danger600 = 'color-danger-600',
  Danger700 = 'color-danger-700',
  Danger800 = 'color-danger-800',
  Danger900 = 'color-danger-900',
  Red100 = 'color-danger-100',
  Red200 = 'color-danger-200',
  Red300 = 'color-danger-300',
  Red400 = 'color-danger-400',
  Red500 = 'color-danger-500',
  Red600 = 'color-danger-600',
  Red700 = 'color-danger-700',
  Red800 = 'color-danger-800',
  Red900 = 'color-danger-900',
  Basic100 = 'color-basic-100',
  Basic200 = 'color-basic-200',
  Basic300 = 'color-basic-300',
  Basic400 = 'color-basic-400',
  Basic500 = 'color-basic-500',
  Basic600 = 'color-basic-600',
  Basic700 = 'color-basic-700',
  Basic800 = 'color-basic-800',
  Basic900 = 'color-basic-900',
  Basic1000 = 'color-basic-1000',
  Basic1100 = 'color-basic-1100',
  Grey100 = 'color-basic-100',
  Grey200 = 'color-basic-200',
  Grey300 = 'color-basic-300',
  Grey400 = 'color-basic-400',
  Grey500 = 'color-basic-500',
  Grey600 = 'color-basic-600',
  Grey700 = 'color-basic-700',
  Grey800 = 'color-basic-800',
  Grey900 = 'color-basic-900',
  Grey1000 = 'color-basic-1000',
  Grey1100 = 'color-basic-1100',
}

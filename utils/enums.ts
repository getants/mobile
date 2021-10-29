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
  Login = 'Login',
  Signup = 'Signup',
}
export enum MainStackEnum {
  JobStack = 'JobStack',
  InboxStack = 'InboxStack',
  CalendarStack = 'CalendarStack',
  ProfileStack = 'ProfileStack',
}
export enum JobStackEnum {
  JobList = 'JobList',
  SingleJob = 'SingleJob',
}
export enum InboxStackEnum {
  Inbox = 'Inbox',
  Conversations = 'Conversations',
  SingleConversation = 'SingleConversation',
}
export enum CalendarStackEnum {
  Calendar = 'Calendar',
}
export enum ProfileStackEnum {
  Profile = 'Profile',
  CameraRoll = 'CameraRoll',
}
export enum Entity {
  Address = 'Addresses',
  Company = 'Companies',
  Conversation = 'Conversations',
  Job = 'Jobs',
  Message = 'Messages',
  Resume = 'Resumes',
  Tenant = 'Tenants',
}

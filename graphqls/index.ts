import type { Geography } from 'utils/types';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  float8: any;
  geography: Geography;
  geometry: any;
  jsonb: any;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: 'addresses';
  /** An array relationship */
  address_companies: Array<CompanyAddress>;
  /** An aggregate relationship */
  address_companies_aggregate: CompanyAddressAggregate;
  created_at: Scalars['timestamptz'];
  data_usage: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  jobs: Array<Jobs>;
  /** An aggregate relationship */
  jobs_aggregate: JobsAggregate;
  location?: Maybe<Scalars['geography']>;
  status: Scalars['String'];
  structured_value?: Maybe<Scalars['String']>;
  /** An object relationship */
  tenant?: Maybe<Tenants>;
  tenant_id?: Maybe<Scalars['uuid']>;
  unstructured_value?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "addresses" */
export type AddressesAddressCompaniesArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

/** columns and relationships of "addresses" */
export type AddressesAddressCompaniesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

/** columns and relationships of "addresses" */
export type AddressesJobsArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

/** columns and relationships of "addresses" */
export type AddressesJobsAggregateArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

/** aggregated selection of "addresses" */
export type AddressesAggregate = {
  __typename?: 'addresses_aggregate';
  aggregate?: Maybe<AddressesAggregateFields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "addresses" */
export type AddressesAggregateFields = {
  __typename?: 'addresses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AddressesMaxFields>;
  min?: Maybe<AddressesMinFields>;
};

/** aggregate fields of "addresses" */
export type AddressesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AddressesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "addresses" */
export type AddressesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AddressesMaxOrderBy>;
  min?: InputMaybe<AddressesMinOrderBy>;
};

/** input type for inserting array relation for remote table "addresses" */
export type AddressesArrRelInsertInput = {
  data: Array<AddressesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AddressesOnConflict>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type AddressesBoolExp = {
  _and?: InputMaybe<Array<AddressesBoolExp>>;
  _not?: InputMaybe<AddressesBoolExp>;
  _or?: InputMaybe<Array<AddressesBoolExp>>;
  address_companies?: InputMaybe<CompanyAddressBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  data_usage?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  jobs?: InputMaybe<JobsBoolExp>;
  location?: InputMaybe<GeographyComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  structured_value?: InputMaybe<StringComparisonExp>;
  tenant?: InputMaybe<TenantsBoolExp>;
  tenant_id?: InputMaybe<UuidComparisonExp>;
  unstructured_value?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "addresses" */
export enum AddressesConstraint {
  /** unique or primary key constraint */
  AddressesPkey = 'addresses_pkey',
}

/** input type for inserting data into table "addresses" */
export type AddressesInsertInput = {
  address_companies?: InputMaybe<CompanyAddressArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data_usage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  jobs?: InputMaybe<JobsArrRelInsertInput>;
  location?: InputMaybe<Scalars['geography']>;
  status?: InputMaybe<Scalars['String']>;
  structured_value?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<TenantsObjRelInsertInput>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  unstructured_value?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type AddressesMaxFields = {
  __typename?: 'addresses_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_usage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  structured_value?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  unstructured_value?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "addresses" */
export type AddressesMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  data_usage?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  structured_value?: InputMaybe<OrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  unstructured_value?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AddressesMinFields = {
  __typename?: 'addresses_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_usage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  structured_value?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  unstructured_value?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "addresses" */
export type AddressesMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  data_usage?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  structured_value?: InputMaybe<OrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  unstructured_value?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "addresses" */
export type AddressesMutationResponse = {
  __typename?: 'addresses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** input type for inserting object relation for remote table "addresses" */
export type AddressesObjRelInsertInput = {
  data: AddressesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AddressesOnConflict>;
};

/** on_conflict condition type for table "addresses" */
export type AddressesOnConflict = {
  constraint: AddressesConstraint;
  update_columns?: Array<AddressesUpdateColumn>;
  where?: InputMaybe<AddressesBoolExp>;
};

/** Ordering options when selecting data from "addresses". */
export type AddressesOrderBy = {
  address_companies_aggregate?: InputMaybe<CompanyAddressAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  data_usage?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  jobs_aggregate?: InputMaybe<JobsAggregateOrderBy>;
  location?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  structured_value?: InputMaybe<OrderBy>;
  tenant?: InputMaybe<TenantsOrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  unstructured_value?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: addresses */
export type AddressesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "addresses" */
export enum AddressesSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataUsage = 'data_usage',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Status = 'status',
  /** column name */
  StructuredValue = 'structured_value',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UnstructuredValue = 'unstructured_value',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "addresses" */
export type AddressesSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data_usage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  status?: InputMaybe<Scalars['String']>;
  structured_value?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  unstructured_value?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "addresses" */
export enum AddressesUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataUsage = 'data_usage',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Status = 'status',
  /** column name */
  StructuredValue = 'structured_value',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UnstructuredValue = 'unstructured_value',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "applications" */
export type Applications = {
  __typename?: 'applications';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  job?: Maybe<Jobs>;
  job_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid'];
  /** An object relationship */
  resume?: Maybe<Resumes>;
  resume_id?: Maybe<Scalars['uuid']>;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "applications" */
export type ApplicationsAggregate = {
  __typename?: 'applications_aggregate';
  aggregate?: Maybe<ApplicationsAggregateFields>;
  nodes: Array<Applications>;
};

/** aggregate fields of "applications" */
export type ApplicationsAggregateFields = {
  __typename?: 'applications_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ApplicationsMaxFields>;
  min?: Maybe<ApplicationsMinFields>;
};

/** aggregate fields of "applications" */
export type ApplicationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ApplicationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "applications" */
export type ApplicationsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ApplicationsMaxOrderBy>;
  min?: InputMaybe<ApplicationsMinOrderBy>;
};

/** input type for inserting array relation for remote table "applications" */
export type ApplicationsArrRelInsertInput = {
  data: Array<ApplicationsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ApplicationsOnConflict>;
};

/** Boolean expression to filter rows from the table "applications". All fields are combined with a logical 'AND'. */
export type ApplicationsBoolExp = {
  _and?: InputMaybe<Array<ApplicationsBoolExp>>;
  _not?: InputMaybe<ApplicationsBoolExp>;
  _or?: InputMaybe<Array<ApplicationsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  job?: InputMaybe<JobsBoolExp>;
  job_id?: InputMaybe<UuidComparisonExp>;
  profile?: InputMaybe<ProfilesBoolExp>;
  profile_id?: InputMaybe<UuidComparisonExp>;
  resume?: InputMaybe<ResumesBoolExp>;
  resume_id?: InputMaybe<UuidComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "applications" */
export enum ApplicationsConstraint {
  /** unique or primary key constraint */
  ApplicationsPkey = 'applications_pkey',
}

/** input type for inserting data into table "applications" */
export type ApplicationsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  job?: InputMaybe<JobsObjRelInsertInput>;
  job_id?: InputMaybe<Scalars['uuid']>;
  profile?: InputMaybe<ProfilesObjRelInsertInput>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  resume?: InputMaybe<ResumesObjRelInsertInput>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ApplicationsMaxFields = {
  __typename?: 'applications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "applications" */
export type ApplicationsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  job_id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ApplicationsMinFields = {
  __typename?: 'applications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "applications" */
export type ApplicationsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  job_id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "applications" */
export type ApplicationsMutationResponse = {
  __typename?: 'applications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Applications>;
};

/** on_conflict condition type for table "applications" */
export type ApplicationsOnConflict = {
  constraint: ApplicationsConstraint;
  update_columns?: Array<ApplicationsUpdateColumn>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** Ordering options when selecting data from "applications". */
export type ApplicationsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  job?: InputMaybe<JobsOrderBy>;
  job_id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfilesOrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumesOrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: applications */
export type ApplicationsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "applications" */
export enum ApplicationsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  JobId = 'job_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "applications" */
export type ApplicationsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  job_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "applications" */
export enum ApplicationsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  JobId = 'job_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  redirectUrl: Scalars['String'];
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequestsAggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequestsAggregateFields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequestsMaxFields>;
  min?: Maybe<AuthProviderRequestsMinFields>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequestsBoolExp = {
  _and?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  _not?: InputMaybe<AuthProviderRequestsBoolExp>;
  _or?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  redirectUrl?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequestsConstraint {
  /** unique or primary key constraint */
  ProviderRequestsPkey = 'provider_requests_pkey',
}

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequestsInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthProviderRequestsMaxFields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviderRequestsMinFields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequestsMutationResponse = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequestsOnConflict = {
  constraint: AuthProviderRequestsConstraint;
  update_columns?: Array<AuthProviderRequestsUpdateColumn>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequestsOrderBy = {
  id?: InputMaybe<OrderBy>;
  redirectUrl?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequestsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  RedirectUrl = 'redirectUrl',
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequestsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequestsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  RedirectUrl = 'redirectUrl',
}

/** columns and relationships of "auth.providers" */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProvidersAggregate;
};

/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProvidersAggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProvidersAggregateFields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProvidersMaxFields>;
  min?: Maybe<AuthProvidersMinFields>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthProvidersBoolExp>>;
  _not?: InputMaybe<AuthProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthProvidersBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProvidersConstraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey',
}

/** input type for inserting data into table "auth.providers" */
export type AuthProvidersInsertInput = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthProvidersMaxFields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProvidersMinFields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProvidersMutationResponse = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProvidersObjRelInsertInput = {
  data: AuthProvidersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProvidersOnConflict = {
  constraint: AuthProvidersConstraint;
  update_columns?: Array<AuthProvidersUpdateColumn>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProvidersOrderBy = {
  id?: InputMaybe<OrderBy>;
  userProviders_aggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: authProviders */
export type AuthProvidersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProvidersSelectColumn {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "auth.providers" */
export type AuthProvidersSetInput = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProvidersUpdateColumn {
  /** column name */
  Id = 'id',
}

/** columns and relationships of "auth.refresh_tokens" */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokensAggregateFields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokensMaxFields>;
  min?: Maybe<AuthRefreshTokensMinFields>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthRefreshTokensMaxOrderBy>;
  min?: InputMaybe<AuthRefreshTokensMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokensArrRelInsertInput = {
  data: Array<AuthRefreshTokensInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokensBoolExp = {
  _and?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  _not?: InputMaybe<AuthRefreshTokensBoolExp>;
  _or?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  refreshToken?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokensConstraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey',
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokensInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokensMaxFields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthRefreshTokensMinFields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokensMutationResponse = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokensOnConflict = {
  constraint: AuthRefreshTokensConstraint;
  update_columns?: Array<AuthRefreshTokensUpdateColumn>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokensOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokensPkColumnsInput = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokensSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId',
}

/** columns and relationships of "auth.roles" */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRolesAggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: UsersAggregate;
};

/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRolesAggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRolesAggregateFields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRolesMaxFields>;
  min?: Maybe<AuthRolesMinFields>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRolesBoolExp = {
  _and?: InputMaybe<Array<AuthRolesBoolExp>>;
  _not?: InputMaybe<AuthRolesBoolExp>;
  _or?: InputMaybe<Array<AuthRolesBoolExp>>;
  role?: InputMaybe<StringComparisonExp>;
  userRoles?: InputMaybe<AuthUserRolesBoolExp>;
  usersByDefaultRole?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRolesConstraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey',
}

/** input type for inserting data into table "auth.roles" */
export type AuthRolesInsertInput = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  usersByDefaultRole?: InputMaybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthRolesMaxFields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRolesMinFields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRolesMutationResponse = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRolesObjRelInsertInput = {
  data: AuthRolesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRolesOnConflict = {
  constraint: AuthRolesConstraint;
  update_columns?: Array<AuthRolesUpdateColumn>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRolesOrderBy = {
  role?: InputMaybe<OrderBy>;
  userRoles_aggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  usersByDefaultRole_aggregate?: InputMaybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: authRoles */
export type AuthRolesPkColumnsInput = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRolesSelectColumn {
  /** column name */
  Role = 'role',
}

/** input type for updating data in table "auth.roles" */
export type AuthRolesSetInput = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRolesUpdateColumn {
  /** column name */
  Role = 'role',
}

/** columns and relationships of "auth.user_providers" */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProvidersAggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProvidersAggregateFields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProvidersMaxFields>;
  min?: Maybe<AuthUserProvidersMinFields>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProvidersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserProvidersMaxOrderBy>;
  min?: InputMaybe<AuthUserProvidersMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProvidersArrRelInsertInput = {
  data: Array<AuthUserProvidersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  _not?: InputMaybe<AuthUserProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  provider?: InputMaybe<AuthProvidersBoolExp>;
  providerId?: InputMaybe<StringComparisonExp>;
  providerUserId?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProvidersConstraint {
  /** unique or primary key constraint */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key',
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProvidersInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProvidersObjRelInsertInput>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProvidersMaxFields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProvidersMaxOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserProvidersMinFields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProvidersMinOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProvidersMutationResponse = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProvidersOnConflict = {
  constraint: AuthUserProvidersConstraint;
  update_columns?: Array<AuthUserProvidersUpdateColumn>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProvidersOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  provider?: InputMaybe<AuthProvidersOrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProvidersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProvidersSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProvidersSetInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProvidersUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

/** columns and relationships of "auth.user_roles" */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRolesAggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRolesAggregateFields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRolesMaxFields>;
  min?: Maybe<AuthUserRolesMinFields>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRolesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserRolesMaxOrderBy>;
  min?: InputMaybe<AuthUserRolesMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRolesArrRelInsertInput = {
  data: Array<AuthUserRolesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRolesBoolExp = {
  _and?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  _not?: InputMaybe<AuthUserRolesBoolExp>;
  _or?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  roleByRole?: InputMaybe<AuthRolesBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRolesConstraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key',
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRolesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRolesMaxFields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRolesMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserRolesMinFields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRolesMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRolesMutationResponse = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRolesOnConflict = {
  constraint: AuthUserRolesConstraint;
  update_columns?: Array<AuthUserRolesUpdateColumn>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRolesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  roleByRole?: InputMaybe<AuthRolesOrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRolesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRolesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRolesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRolesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

/** columns and relationships of "benefits" */
export type Benefits = {
  __typename?: 'benefits';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "benefits" */
export type BenefitsAggregate = {
  __typename?: 'benefits_aggregate';
  aggregate?: Maybe<BenefitsAggregateFields>;
  nodes: Array<Benefits>;
};

/** aggregate fields of "benefits" */
export type BenefitsAggregateFields = {
  __typename?: 'benefits_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<BenefitsMaxFields>;
  min?: Maybe<BenefitsMinFields>;
};

/** aggregate fields of "benefits" */
export type BenefitsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BenefitsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "benefits". All fields are combined with a logical 'AND'. */
export type BenefitsBoolExp = {
  _and?: InputMaybe<Array<BenefitsBoolExp>>;
  _not?: InputMaybe<BenefitsBoolExp>;
  _or?: InputMaybe<Array<BenefitsBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "benefits" */
export enum BenefitsConstraint {
  /** unique or primary key constraint */
  BenefitsPkey = 'benefits_pkey',
}

/** input type for inserting data into table "benefits" */
export type BenefitsInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BenefitsMaxFields = {
  __typename?: 'benefits_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type BenefitsMinFields = {
  __typename?: 'benefits_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "benefits" */
export type BenefitsMutationResponse = {
  __typename?: 'benefits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Benefits>;
};

/** on_conflict condition type for table "benefits" */
export type BenefitsOnConflict = {
  constraint: BenefitsConstraint;
  update_columns?: Array<BenefitsUpdateColumn>;
  where?: InputMaybe<BenefitsBoolExp>;
};

/** Ordering options when selecting data from "benefits". */
export type BenefitsOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: benefits */
export type BenefitsPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "benefits" */
export enum BenefitsSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "benefits" */
export type BenefitsSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "benefits" */
export enum BenefitsUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: FilesAggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

/** columns and relationships of "storage.buckets" */
export type BucketsFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

/** aggregated selection of "storage.buckets" */
export type BucketsAggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<BucketsAggregateFields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<BucketsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BucketsMaxFields>;
  min?: Maybe<BucketsMinFields>;
  stddev?: Maybe<BucketsStddevFields>;
  stddev_pop?: Maybe<BucketsStddevPopFields>;
  stddev_samp?: Maybe<BucketsStddevSampFields>;
  sum?: Maybe<BucketsSumFields>;
  var_pop?: Maybe<BucketsVarPopFields>;
  var_samp?: Maybe<BucketsVarSampFields>;
  variance?: Maybe<BucketsVarianceFields>;
};

/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BucketsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type BucketsAvgFields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type BucketsBoolExp = {
  _and?: InputMaybe<Array<BucketsBoolExp>>;
  _not?: InputMaybe<BucketsBoolExp>;
  _or?: InputMaybe<Array<BucketsBoolExp>>;
  cacheControl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  downloadExpiration?: InputMaybe<IntComparisonExp>;
  files?: InputMaybe<FilesBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  maxUploadFileSize?: InputMaybe<IntComparisonExp>;
  minUploadFileSize?: InputMaybe<IntComparisonExp>;
  presignedUrlsEnabled?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum BucketsConstraint {
  /** unique or primary key constraint */
  BucketsPkey = 'buckets_pkey',
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type BucketsIncInput = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type BucketsInsertInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<FilesArrRelInsertInput>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type BucketsMaxFields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type BucketsMinFields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type BucketsMutationResponse = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type BucketsObjRelInsertInput = {
  data: BucketsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<BucketsOnConflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type BucketsOnConflict = {
  constraint: BucketsConstraint;
  update_columns?: Array<BucketsUpdateColumn>;
  where?: InputMaybe<BucketsBoolExp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type BucketsOrderBy = {
  cacheControl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  downloadExpiration?: InputMaybe<OrderBy>;
  files_aggregate?: InputMaybe<FilesAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  maxUploadFileSize?: InputMaybe<OrderBy>;
  minUploadFileSize?: InputMaybe<OrderBy>;
  presignedUrlsEnabled?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: buckets */
export type BucketsPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum BucketsSelectColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "storage.buckets" */
export type BucketsSetInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type BucketsStddevFields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type BucketsStddevPopFields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type BucketsStddevSampFields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type BucketsSumFields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum BucketsUpdateColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type BucketsVarPopFields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type BucketsVarSampFields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type BucketsVarianceFields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "certifications" */
export type Certifications = {
  __typename?: 'certifications';
  created_at: Scalars['timestamptz'];
  credential_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  issue_date?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  organization?: Maybe<Scalars['String']>;
  /** An object relationship */
  resume?: Maybe<Resumes>;
  resume_id?: Maybe<Scalars['uuid']>;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "certifications" */
export type CertificationsAggregate = {
  __typename?: 'certifications_aggregate';
  aggregate?: Maybe<CertificationsAggregateFields>;
  nodes: Array<Certifications>;
};

/** aggregate fields of "certifications" */
export type CertificationsAggregateFields = {
  __typename?: 'certifications_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CertificationsMaxFields>;
  min?: Maybe<CertificationsMinFields>;
};

/** aggregate fields of "certifications" */
export type CertificationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CertificationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "certifications" */
export type CertificationsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CertificationsMaxOrderBy>;
  min?: InputMaybe<CertificationsMinOrderBy>;
};

/** input type for inserting array relation for remote table "certifications" */
export type CertificationsArrRelInsertInput = {
  data: Array<CertificationsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<CertificationsOnConflict>;
};

/** Boolean expression to filter rows from the table "certifications". All fields are combined with a logical 'AND'. */
export type CertificationsBoolExp = {
  _and?: InputMaybe<Array<CertificationsBoolExp>>;
  _not?: InputMaybe<CertificationsBoolExp>;
  _or?: InputMaybe<Array<CertificationsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  credential_url?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  expiration_date?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  issue_date?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  organization?: InputMaybe<StringComparisonExp>;
  resume?: InputMaybe<ResumesBoolExp>;
  resume_id?: InputMaybe<UuidComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "certifications" */
export enum CertificationsConstraint {
  /** unique or primary key constraint */
  CertificationsPkey = 'certifications_pkey',
}

/** input type for inserting data into table "certifications" */
export type CertificationsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  credential_url?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  expiration_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  issue_date?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<ResumesObjRelInsertInput>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CertificationsMaxFields = {
  __typename?: 'certifications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  credential_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  issue_date?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "certifications" */
export type CertificationsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  credential_url?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  expiration_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issue_date?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CertificationsMinFields = {
  __typename?: 'certifications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  credential_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  issue_date?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "certifications" */
export type CertificationsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  credential_url?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  expiration_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issue_date?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "certifications" */
export type CertificationsMutationResponse = {
  __typename?: 'certifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Certifications>;
};

/** on_conflict condition type for table "certifications" */
export type CertificationsOnConflict = {
  constraint: CertificationsConstraint;
  update_columns?: Array<CertificationsUpdateColumn>;
  where?: InputMaybe<CertificationsBoolExp>;
};

/** Ordering options when selecting data from "certifications". */
export type CertificationsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  credential_url?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  expiration_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issue_date?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumesOrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: certifications */
export type CertificationsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "certifications" */
export enum CertificationsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CredentialUrl = 'credential_url',
  /** column name */
  Description = 'description',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  Id = 'id',
  /** column name */
  IssueDate = 'issue_date',
  /** column name */
  Name = 'name',
  /** column name */
  Organization = 'organization',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "certifications" */
export type CertificationsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  credential_url?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  expiration_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  issue_date?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "certifications" */
export enum CertificationsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CredentialUrl = 'credential_url',
  /** column name */
  Description = 'description',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  Id = 'id',
  /** column name */
  IssueDate = 'issue_date',
  /** column name */
  Name = 'name',
  /** column name */
  Organization = 'organization',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type CitextComparisonExp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies';
  /** An array relationship */
  company_addresses: Array<CompanyAddress>;
  /** An aggregate relationship */
  company_addresses_aggregate: CompanyAddressAggregate;
  /** An array relationship */
  company_profiles: Array<ProfileCompany>;
  /** An aggregate relationship */
  company_profiles_aggregate: ProfileCompanyAggregate;
  /** An array relationship */
  conversations: Array<Conversations>;
  /** An aggregate relationship */
  conversations_aggregate: ConversationsAggregate;
  created_at: Scalars['timestamptz'];
  establish_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  /** An array relationship */
  jobs: Array<Jobs>;
  /** An aggregate relationship */
  jobs_aggregate: JobsAggregate;
  name: Scalars['String'];
  size?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  suspended: Scalars['Boolean'];
  /** An object relationship */
  tenant: Tenants;
  tenant_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "companies" */
export type CompaniesCompanyAddressesArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

/** columns and relationships of "companies" */
export type CompaniesCompanyAddressesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

/** columns and relationships of "companies" */
export type CompaniesCompanyProfilesArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

/** columns and relationships of "companies" */
export type CompaniesCompanyProfilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

/** columns and relationships of "companies" */
export type CompaniesConversationsArgs = {
  distinct_on?: InputMaybe<Array<ConversationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConversationsOrderBy>>;
  where?: InputMaybe<ConversationsBoolExp>;
};

/** columns and relationships of "companies" */
export type CompaniesConversationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ConversationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConversationsOrderBy>>;
  where?: InputMaybe<ConversationsBoolExp>;
};

/** columns and relationships of "companies" */
export type CompaniesJobsArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

/** columns and relationships of "companies" */
export type CompaniesJobsAggregateArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

/** aggregated selection of "companies" */
export type CompaniesAggregate = {
  __typename?: 'companies_aggregate';
  aggregate?: Maybe<CompaniesAggregateFields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "companies" */
export type CompaniesAggregateFields = {
  __typename?: 'companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CompaniesMaxFields>;
  min?: Maybe<CompaniesMinFields>;
};

/** aggregate fields of "companies" */
export type CompaniesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CompaniesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "companies" */
export type CompaniesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CompaniesMaxOrderBy>;
  min?: InputMaybe<CompaniesMinOrderBy>;
};

/** input type for inserting array relation for remote table "companies" */
export type CompaniesArrRelInsertInput = {
  data: Array<CompaniesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<CompaniesOnConflict>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type CompaniesBoolExp = {
  _and?: InputMaybe<Array<CompaniesBoolExp>>;
  _not?: InputMaybe<CompaniesBoolExp>;
  _or?: InputMaybe<Array<CompaniesBoolExp>>;
  company_addresses?: InputMaybe<CompanyAddressBoolExp>;
  company_profiles?: InputMaybe<ProfileCompanyBoolExp>;
  conversations?: InputMaybe<ConversationsBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  establish_date?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  jobs?: InputMaybe<JobsBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  size?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  summary?: InputMaybe<StringComparisonExp>;
  suspended?: InputMaybe<BooleanComparisonExp>;
  tenant?: InputMaybe<TenantsBoolExp>;
  tenant_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "companies" */
export enum CompaniesConstraint {
  /** unique or primary key constraint */
  CompaniesPkey = 'companies_pkey',
}

/** input type for inserting data into table "companies" */
export type CompaniesInsertInput = {
  company_addresses?: InputMaybe<CompanyAddressArrRelInsertInput>;
  company_profiles?: InputMaybe<ProfileCompanyArrRelInsertInput>;
  conversations?: InputMaybe<ConversationsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  establish_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  jobs?: InputMaybe<JobsArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  suspended?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<TenantsObjRelInsertInput>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CompaniesMaxFields = {
  __typename?: 'companies_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  establish_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "companies" */
export type CompaniesMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  establish_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CompaniesMinFields = {
  __typename?: 'companies_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  establish_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "companies" */
export type CompaniesMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  establish_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "companies" */
export type CompaniesMutationResponse = {
  __typename?: 'companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type CompaniesObjRelInsertInput = {
  data: CompaniesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<CompaniesOnConflict>;
};

/** on_conflict condition type for table "companies" */
export type CompaniesOnConflict = {
  constraint: CompaniesConstraint;
  update_columns?: Array<CompaniesUpdateColumn>;
  where?: InputMaybe<CompaniesBoolExp>;
};

/** Ordering options when selecting data from "companies". */
export type CompaniesOrderBy = {
  company_addresses_aggregate?: InputMaybe<CompanyAddressAggregateOrderBy>;
  company_profiles_aggregate?: InputMaybe<ProfileCompanyAggregateOrderBy>;
  conversations_aggregate?: InputMaybe<ConversationsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  establish_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  jobs_aggregate?: InputMaybe<JobsAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  suspended?: InputMaybe<OrderBy>;
  tenant?: InputMaybe<TenantsOrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: companies */
export type CompaniesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "companies" */
export enum CompaniesSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EstablishDate = 'establish_date',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Status = 'status',
  /** column name */
  Summary = 'summary',
  /** column name */
  Suspended = 'suspended',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "companies" */
export type CompaniesSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  establish_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  suspended?: InputMaybe<Scalars['Boolean']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "companies" */
export enum CompaniesUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EstablishDate = 'establish_date',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Status = 'status',
  /** column name */
  Summary = 'summary',
  /** column name */
  Suspended = 'suspended',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "company_address" */
export type CompanyAddress = {
  __typename?: 'company_address';
  /** An object relationship */
  address: Addresses;
  address_id: Scalars['uuid'];
  /** An object relationship */
  company: Companies;
  company_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "company_address" */
export type CompanyAddressAggregate = {
  __typename?: 'company_address_aggregate';
  aggregate?: Maybe<CompanyAddressAggregateFields>;
  nodes: Array<CompanyAddress>;
};

/** aggregate fields of "company_address" */
export type CompanyAddressAggregateFields = {
  __typename?: 'company_address_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CompanyAddressMaxFields>;
  min?: Maybe<CompanyAddressMinFields>;
};

/** aggregate fields of "company_address" */
export type CompanyAddressAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company_address" */
export type CompanyAddressAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CompanyAddressMaxOrderBy>;
  min?: InputMaybe<CompanyAddressMinOrderBy>;
};

/** input type for inserting array relation for remote table "company_address" */
export type CompanyAddressArrRelInsertInput = {
  data: Array<CompanyAddressInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<CompanyAddressOnConflict>;
};

/** Boolean expression to filter rows from the table "company_address". All fields are combined with a logical 'AND'. */
export type CompanyAddressBoolExp = {
  _and?: InputMaybe<Array<CompanyAddressBoolExp>>;
  _not?: InputMaybe<CompanyAddressBoolExp>;
  _or?: InputMaybe<Array<CompanyAddressBoolExp>>;
  address?: InputMaybe<AddressesBoolExp>;
  address_id?: InputMaybe<UuidComparisonExp>;
  company?: InputMaybe<CompaniesBoolExp>;
  company_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "company_address" */
export enum CompanyAddressConstraint {
  /** unique or primary key constraint */
  CompanyAddressCompanyIdAddressIdKey = 'company_address_company_id_address_id_key',
  /** unique or primary key constraint */
  CompanyAddressPkey = 'company_address_pkey',
}

/** input type for inserting data into table "company_address" */
export type CompanyAddressInsertInput = {
  address?: InputMaybe<AddressesObjRelInsertInput>;
  address_id?: InputMaybe<Scalars['uuid']>;
  company?: InputMaybe<CompaniesObjRelInsertInput>;
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CompanyAddressMaxFields = {
  __typename?: 'company_address_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "company_address" */
export type CompanyAddressMaxOrderBy = {
  address_id?: InputMaybe<OrderBy>;
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CompanyAddressMinFields = {
  __typename?: 'company_address_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "company_address" */
export type CompanyAddressMinOrderBy = {
  address_id?: InputMaybe<OrderBy>;
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "company_address" */
export type CompanyAddressMutationResponse = {
  __typename?: 'company_address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CompanyAddress>;
};

/** on_conflict condition type for table "company_address" */
export type CompanyAddressOnConflict = {
  constraint: CompanyAddressConstraint;
  update_columns?: Array<CompanyAddressUpdateColumn>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

/** Ordering options when selecting data from "company_address". */
export type CompanyAddressOrderBy = {
  address?: InputMaybe<AddressesOrderBy>;
  address_id?: InputMaybe<OrderBy>;
  company?: InputMaybe<CompaniesOrderBy>;
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: company_address */
export type CompanyAddressPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "company_address" */
export enum CompanyAddressSelectColumn {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "company_address" */
export type CompanyAddressSetInput = {
  address_id?: InputMaybe<Scalars['uuid']>;
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "company_address" */
export enum CompanyAddressUpdateColumn {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "company_sizes" */
export type CompanySizes = {
  __typename?: 'company_sizes';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "company_sizes" */
export type CompanySizesAggregate = {
  __typename?: 'company_sizes_aggregate';
  aggregate?: Maybe<CompanySizesAggregateFields>;
  nodes: Array<CompanySizes>;
};

/** aggregate fields of "company_sizes" */
export type CompanySizesAggregateFields = {
  __typename?: 'company_sizes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CompanySizesMaxFields>;
  min?: Maybe<CompanySizesMinFields>;
};

/** aggregate fields of "company_sizes" */
export type CompanySizesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CompanySizesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "company_sizes". All fields are combined with a logical 'AND'. */
export type CompanySizesBoolExp = {
  _and?: InputMaybe<Array<CompanySizesBoolExp>>;
  _not?: InputMaybe<CompanySizesBoolExp>;
  _or?: InputMaybe<Array<CompanySizesBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "company_sizes" */
export enum CompanySizesConstraint {
  /** unique or primary key constraint */
  CompanySizesPkey = 'company_sizes_pkey',
}

/** input type for inserting data into table "company_sizes" */
export type CompanySizesInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CompanySizesMaxFields = {
  __typename?: 'company_sizes_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CompanySizesMinFields = {
  __typename?: 'company_sizes_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "company_sizes" */
export type CompanySizesMutationResponse = {
  __typename?: 'company_sizes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CompanySizes>;
};

/** on_conflict condition type for table "company_sizes" */
export type CompanySizesOnConflict = {
  constraint: CompanySizesConstraint;
  update_columns?: Array<CompanySizesUpdateColumn>;
  where?: InputMaybe<CompanySizesBoolExp>;
};

/** Ordering options when selecting data from "company_sizes". */
export type CompanySizesOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: company_sizes */
export type CompanySizesPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "company_sizes" */
export enum CompanySizesSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "company_sizes" */
export type CompanySizesSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "company_sizes" */
export enum CompanySizesUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "compensation_units" */
export type CompensationUnits = {
  __typename?: 'compensation_units';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "compensation_units" */
export type CompensationUnitsAggregate = {
  __typename?: 'compensation_units_aggregate';
  aggregate?: Maybe<CompensationUnitsAggregateFields>;
  nodes: Array<CompensationUnits>;
};

/** aggregate fields of "compensation_units" */
export type CompensationUnitsAggregateFields = {
  __typename?: 'compensation_units_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CompensationUnitsMaxFields>;
  min?: Maybe<CompensationUnitsMinFields>;
};

/** aggregate fields of "compensation_units" */
export type CompensationUnitsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CompensationUnitsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "compensation_units". All fields are combined with a logical 'AND'. */
export type CompensationUnitsBoolExp = {
  _and?: InputMaybe<Array<CompensationUnitsBoolExp>>;
  _not?: InputMaybe<CompensationUnitsBoolExp>;
  _or?: InputMaybe<Array<CompensationUnitsBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "compensation_units" */
export enum CompensationUnitsConstraint {
  /** unique or primary key constraint */
  CompensationUnitsPkey = 'compensation_units_pkey',
}

/** input type for inserting data into table "compensation_units" */
export type CompensationUnitsInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CompensationUnitsMaxFields = {
  __typename?: 'compensation_units_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CompensationUnitsMinFields = {
  __typename?: 'compensation_units_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "compensation_units" */
export type CompensationUnitsMutationResponse = {
  __typename?: 'compensation_units_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CompensationUnits>;
};

/** on_conflict condition type for table "compensation_units" */
export type CompensationUnitsOnConflict = {
  constraint: CompensationUnitsConstraint;
  update_columns?: Array<CompensationUnitsUpdateColumn>;
  where?: InputMaybe<CompensationUnitsBoolExp>;
};

/** Ordering options when selecting data from "compensation_units". */
export type CompensationUnitsOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: compensation_units */
export type CompensationUnitsPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "compensation_units" */
export enum CompensationUnitsSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "compensation_units" */
export type CompensationUnitsSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "compensation_units" */
export enum CompensationUnitsUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "conversations" */
export type Conversations = {
  __typename?: 'conversations';
  /** An object relationship */
  company?: Maybe<Companies>;
  company_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: MessagesAggregate;
  name: Scalars['String'];
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: ProfilesAggregate;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "conversations" */
export type ConversationsMessagesArgs = {
  distinct_on?: InputMaybe<Array<MessagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy>>;
  where?: InputMaybe<MessagesBoolExp>;
};

/** columns and relationships of "conversations" */
export type ConversationsMessagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<MessagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy>>;
  where?: InputMaybe<MessagesBoolExp>;
};

/** columns and relationships of "conversations" */
export type ConversationsProfilesArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

/** columns and relationships of "conversations" */
export type ConversationsProfilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

/** aggregated selection of "conversations" */
export type ConversationsAggregate = {
  __typename?: 'conversations_aggregate';
  aggregate?: Maybe<ConversationsAggregateFields>;
  nodes: Array<Conversations>;
};

/** aggregate fields of "conversations" */
export type ConversationsAggregateFields = {
  __typename?: 'conversations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ConversationsMaxFields>;
  min?: Maybe<ConversationsMinFields>;
};

/** aggregate fields of "conversations" */
export type ConversationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ConversationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "conversations" */
export type ConversationsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ConversationsMaxOrderBy>;
  min?: InputMaybe<ConversationsMinOrderBy>;
};

/** input type for inserting array relation for remote table "conversations" */
export type ConversationsArrRelInsertInput = {
  data: Array<ConversationsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ConversationsOnConflict>;
};

/** Boolean expression to filter rows from the table "conversations". All fields are combined with a logical 'AND'. */
export type ConversationsBoolExp = {
  _and?: InputMaybe<Array<ConversationsBoolExp>>;
  _not?: InputMaybe<ConversationsBoolExp>;
  _or?: InputMaybe<Array<ConversationsBoolExp>>;
  company?: InputMaybe<CompaniesBoolExp>;
  company_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  messages?: InputMaybe<MessagesBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  profiles?: InputMaybe<ProfilesBoolExp>;
  status?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "conversations" */
export enum ConversationsConstraint {
  /** unique or primary key constraint */
  ConversationsPkey = 'conversations_pkey',
}

/** input type for inserting data into table "conversations" */
export type ConversationsInsertInput = {
  company?: InputMaybe<CompaniesObjRelInsertInput>;
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  messages?: InputMaybe<MessagesArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']>;
  profiles?: InputMaybe<ProfilesArrRelInsertInput>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ConversationsMaxFields = {
  __typename?: 'conversations_max_fields';
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "conversations" */
export type ConversationsMaxOrderBy = {
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ConversationsMinFields = {
  __typename?: 'conversations_min_fields';
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "conversations" */
export type ConversationsMinOrderBy = {
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "conversations" */
export type ConversationsMutationResponse = {
  __typename?: 'conversations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conversations>;
};

/** input type for inserting object relation for remote table "conversations" */
export type ConversationsObjRelInsertInput = {
  data: ConversationsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ConversationsOnConflict>;
};

/** on_conflict condition type for table "conversations" */
export type ConversationsOnConflict = {
  constraint: ConversationsConstraint;
  update_columns?: Array<ConversationsUpdateColumn>;
  where?: InputMaybe<ConversationsBoolExp>;
};

/** Ordering options when selecting data from "conversations". */
export type ConversationsOrderBy = {
  company?: InputMaybe<CompaniesOrderBy>;
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  messages_aggregate?: InputMaybe<MessagesAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  profiles_aggregate?: InputMaybe<ProfilesAggregateOrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: conversations */
export type ConversationsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "conversations" */
export enum ConversationsSelectColumn {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "conversations" */
export type ConversationsSetInput = {
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "conversations" */
export enum ConversationsUpdateColumn {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "data_usages" */
export type DataUsages = {
  __typename?: 'data_usages';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "data_usages" */
export type DataUsagesAggregate = {
  __typename?: 'data_usages_aggregate';
  aggregate?: Maybe<DataUsagesAggregateFields>;
  nodes: Array<DataUsages>;
};

/** aggregate fields of "data_usages" */
export type DataUsagesAggregateFields = {
  __typename?: 'data_usages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DataUsagesMaxFields>;
  min?: Maybe<DataUsagesMinFields>;
};

/** aggregate fields of "data_usages" */
export type DataUsagesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DataUsagesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "data_usages". All fields are combined with a logical 'AND'. */
export type DataUsagesBoolExp = {
  _and?: InputMaybe<Array<DataUsagesBoolExp>>;
  _not?: InputMaybe<DataUsagesBoolExp>;
  _or?: InputMaybe<Array<DataUsagesBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "data_usages" */
export enum DataUsagesConstraint {
  /** unique or primary key constraint */
  DataUsagesPkey = 'data_usages_pkey',
}

/** input type for inserting data into table "data_usages" */
export type DataUsagesInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DataUsagesMaxFields = {
  __typename?: 'data_usages_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DataUsagesMinFields = {
  __typename?: 'data_usages_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "data_usages" */
export type DataUsagesMutationResponse = {
  __typename?: 'data_usages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DataUsages>;
};

/** on_conflict condition type for table "data_usages" */
export type DataUsagesOnConflict = {
  constraint: DataUsagesConstraint;
  update_columns?: Array<DataUsagesUpdateColumn>;
  where?: InputMaybe<DataUsagesBoolExp>;
};

/** Ordering options when selecting data from "data_usages". */
export type DataUsagesOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: data_usages */
export type DataUsagesPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "data_usages" */
export enum DataUsagesSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "data_usages" */
export type DataUsagesSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "data_usages" */
export enum DataUsagesUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "education_levels" */
export type EducationLevels = {
  __typename?: 'education_levels';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "education_levels" */
export type EducationLevelsAggregate = {
  __typename?: 'education_levels_aggregate';
  aggregate?: Maybe<EducationLevelsAggregateFields>;
  nodes: Array<EducationLevels>;
};

/** aggregate fields of "education_levels" */
export type EducationLevelsAggregateFields = {
  __typename?: 'education_levels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EducationLevelsMaxFields>;
  min?: Maybe<EducationLevelsMinFields>;
};

/** aggregate fields of "education_levels" */
export type EducationLevelsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EducationLevelsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "education_levels". All fields are combined with a logical 'AND'. */
export type EducationLevelsBoolExp = {
  _and?: InputMaybe<Array<EducationLevelsBoolExp>>;
  _not?: InputMaybe<EducationLevelsBoolExp>;
  _or?: InputMaybe<Array<EducationLevelsBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "education_levels" */
export enum EducationLevelsConstraint {
  /** unique or primary key constraint */
  EducationLevelsPkey = 'education_levels_pkey',
}

/** input type for inserting data into table "education_levels" */
export type EducationLevelsInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EducationLevelsMaxFields = {
  __typename?: 'education_levels_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type EducationLevelsMinFields = {
  __typename?: 'education_levels_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "education_levels" */
export type EducationLevelsMutationResponse = {
  __typename?: 'education_levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EducationLevels>;
};

/** on_conflict condition type for table "education_levels" */
export type EducationLevelsOnConflict = {
  constraint: EducationLevelsConstraint;
  update_columns?: Array<EducationLevelsUpdateColumn>;
  where?: InputMaybe<EducationLevelsBoolExp>;
};

/** Ordering options when selecting data from "education_levels". */
export type EducationLevelsOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: education_levels */
export type EducationLevelsPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "education_levels" */
export enum EducationLevelsSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "education_levels" */
export type EducationLevelsSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "education_levels" */
export enum EducationLevelsUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "educations" */
export type Educations = {
  __typename?: 'educations';
  created_at: Scalars['timestamptz'];
  degree: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  resume?: Maybe<Resumes>;
  resume_id?: Maybe<Scalars['uuid']>;
  school_name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "educations" */
export type EducationsAggregate = {
  __typename?: 'educations_aggregate';
  aggregate?: Maybe<EducationsAggregateFields>;
  nodes: Array<Educations>;
};

/** aggregate fields of "educations" */
export type EducationsAggregateFields = {
  __typename?: 'educations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EducationsMaxFields>;
  min?: Maybe<EducationsMinFields>;
};

/** aggregate fields of "educations" */
export type EducationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EducationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "educations" */
export type EducationsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<EducationsMaxOrderBy>;
  min?: InputMaybe<EducationsMinOrderBy>;
};

/** input type for inserting array relation for remote table "educations" */
export type EducationsArrRelInsertInput = {
  data: Array<EducationsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<EducationsOnConflict>;
};

/** Boolean expression to filter rows from the table "educations". All fields are combined with a logical 'AND'. */
export type EducationsBoolExp = {
  _and?: InputMaybe<Array<EducationsBoolExp>>;
  _not?: InputMaybe<EducationsBoolExp>;
  _or?: InputMaybe<Array<EducationsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  degree?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  education_level?: InputMaybe<StringComparisonExp>;
  end_date?: InputMaybe<TimestamptzComparisonExp>;
  field?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  resume?: InputMaybe<ResumesBoolExp>;
  resume_id?: InputMaybe<UuidComparisonExp>;
  school_name?: InputMaybe<StringComparisonExp>;
  start_date?: InputMaybe<TimestamptzComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "educations" */
export enum EducationsConstraint {
  /** unique or primary key constraint */
  EducationsPkey = 'educations_pkey',
}

/** input type for inserting data into table "educations" */
export type EducationsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  degree?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  education_level?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  resume?: InputMaybe<ResumesObjRelInsertInput>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  school_name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type EducationsMaxFields = {
  __typename?: 'educations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  degree?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
  school_name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "educations" */
export type EducationsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  degree?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  education_level?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  field?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  school_name?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type EducationsMinFields = {
  __typename?: 'educations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  degree?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  education_level?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  resume_id?: Maybe<Scalars['uuid']>;
  school_name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "educations" */
export type EducationsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  degree?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  education_level?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  field?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  school_name?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "educations" */
export type EducationsMutationResponse = {
  __typename?: 'educations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Educations>;
};

/** on_conflict condition type for table "educations" */
export type EducationsOnConflict = {
  constraint: EducationsConstraint;
  update_columns?: Array<EducationsUpdateColumn>;
  where?: InputMaybe<EducationsBoolExp>;
};

/** Ordering options when selecting data from "educations". */
export type EducationsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  degree?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  education_level?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  field?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumesOrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  school_name?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: educations */
export type EducationsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "educations" */
export enum EducationsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Degree = 'degree',
  /** column name */
  Description = 'description',
  /** column name */
  EducationLevel = 'education_level',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  SchoolName = 'school_name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "educations" */
export type EducationsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  degree?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  education_level?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  school_name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "educations" */
export enum EducationsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Degree = 'degree',
  /** column name */
  Description = 'description',
  /** column name */
  EducationLevel = 'education_level',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  SchoolName = 'school_name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "employment_types" */
export type EmploymentTypes = {
  __typename?: 'employment_types';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "employment_types" */
export type EmploymentTypesAggregate = {
  __typename?: 'employment_types_aggregate';
  aggregate?: Maybe<EmploymentTypesAggregateFields>;
  nodes: Array<EmploymentTypes>;
};

/** aggregate fields of "employment_types" */
export type EmploymentTypesAggregateFields = {
  __typename?: 'employment_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EmploymentTypesMaxFields>;
  min?: Maybe<EmploymentTypesMinFields>;
};

/** aggregate fields of "employment_types" */
export type EmploymentTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EmploymentTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "employment_types". All fields are combined with a logical 'AND'. */
export type EmploymentTypesBoolExp = {
  _and?: InputMaybe<Array<EmploymentTypesBoolExp>>;
  _not?: InputMaybe<EmploymentTypesBoolExp>;
  _or?: InputMaybe<Array<EmploymentTypesBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "employment_types" */
export enum EmploymentTypesConstraint {
  /** unique or primary key constraint */
  EmploymentTypesPkey = 'employment_types_pkey',
}

/** input type for inserting data into table "employment_types" */
export type EmploymentTypesInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EmploymentTypesMaxFields = {
  __typename?: 'employment_types_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type EmploymentTypesMinFields = {
  __typename?: 'employment_types_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "employment_types" */
export type EmploymentTypesMutationResponse = {
  __typename?: 'employment_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EmploymentTypes>;
};

/** on_conflict condition type for table "employment_types" */
export type EmploymentTypesOnConflict = {
  constraint: EmploymentTypesConstraint;
  update_columns?: Array<EmploymentTypesUpdateColumn>;
  where?: InputMaybe<EmploymentTypesBoolExp>;
};

/** Ordering options when selecting data from "employment_types". */
export type EmploymentTypesOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: employment_types */
export type EmploymentTypesPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "employment_types" */
export enum EmploymentTypesSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "employment_types" */
export type EmploymentTypesSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "employment_types" */
export enum EmploymentTypesUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "experiences" */
export type Experiences = {
  __typename?: 'experiences';
  company_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  employment_type?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  resume?: Maybe<Resumes>;
  resume_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "experiences" */
export type ExperiencesAggregate = {
  __typename?: 'experiences_aggregate';
  aggregate?: Maybe<ExperiencesAggregateFields>;
  nodes: Array<Experiences>;
};

/** aggregate fields of "experiences" */
export type ExperiencesAggregateFields = {
  __typename?: 'experiences_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ExperiencesMaxFields>;
  min?: Maybe<ExperiencesMinFields>;
};

/** aggregate fields of "experiences" */
export type ExperiencesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExperiencesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiences" */
export type ExperiencesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ExperiencesMaxOrderBy>;
  min?: InputMaybe<ExperiencesMinOrderBy>;
};

/** input type for inserting array relation for remote table "experiences" */
export type ExperiencesArrRelInsertInput = {
  data: Array<ExperiencesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ExperiencesOnConflict>;
};

/** Boolean expression to filter rows from the table "experiences". All fields are combined with a logical 'AND'. */
export type ExperiencesBoolExp = {
  _and?: InputMaybe<Array<ExperiencesBoolExp>>;
  _not?: InputMaybe<ExperiencesBoolExp>;
  _or?: InputMaybe<Array<ExperiencesBoolExp>>;
  company_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  employment_type?: InputMaybe<StringComparisonExp>;
  end_date?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  resume?: InputMaybe<ResumesBoolExp>;
  resume_id?: InputMaybe<UuidComparisonExp>;
  start_date?: InputMaybe<TimestamptzComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "experiences" */
export enum ExperiencesConstraint {
  /** unique or primary key constraint */
  ExperiencesPkey = 'experiences_pkey',
}

/** input type for inserting data into table "experiences" */
export type ExperiencesInsertInput = {
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  employment_type?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<ResumesObjRelInsertInput>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ExperiencesMaxFields = {
  __typename?: 'experiences_max_fields';
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  employment_type?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "experiences" */
export type ExperiencesMaxOrderBy = {
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  employment_type?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ExperiencesMinFields = {
  __typename?: 'experiences_min_fields';
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  employment_type?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "experiences" */
export type ExperiencesMinOrderBy = {
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  employment_type?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "experiences" */
export type ExperiencesMutationResponse = {
  __typename?: 'experiences_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiences>;
};

/** on_conflict condition type for table "experiences" */
export type ExperiencesOnConflict = {
  constraint: ExperiencesConstraint;
  update_columns?: Array<ExperiencesUpdateColumn>;
  where?: InputMaybe<ExperiencesBoolExp>;
};

/** Ordering options when selecting data from "experiences". */
export type ExperiencesOrderBy = {
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  employment_type?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumesOrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: experiences */
export type ExperiencesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "experiences" */
export enum ExperiencesSelectColumn {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EmploymentType = 'employment_type',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "experiences" */
export type ExperiencesSetInput = {
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  employment_type?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "experiences" */
export enum ExperiencesUpdateColumn {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EmploymentType = 'employment_type',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type FilesAggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<FilesAggregateFields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type FilesAggregateFields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<FilesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FilesMaxFields>;
  min?: Maybe<FilesMinFields>;
  stddev?: Maybe<FilesStddevFields>;
  stddev_pop?: Maybe<FilesStddevPopFields>;
  stddev_samp?: Maybe<FilesStddevSampFields>;
  sum?: Maybe<FilesSumFields>;
  var_pop?: Maybe<FilesVarPopFields>;
  var_samp?: Maybe<FilesVarSampFields>;
  variance?: Maybe<FilesVarianceFields>;
};

/** aggregate fields of "storage.files" */
export type FilesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FilesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type FilesAggregateOrderBy = {
  avg?: InputMaybe<FilesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FilesMaxOrderBy>;
  min?: InputMaybe<FilesMinOrderBy>;
  stddev?: InputMaybe<FilesStddevOrderBy>;
  stddev_pop?: InputMaybe<FilesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<FilesStddevSampOrderBy>;
  sum?: InputMaybe<FilesSumOrderBy>;
  var_pop?: InputMaybe<FilesVarPopOrderBy>;
  var_samp?: InputMaybe<FilesVarSampOrderBy>;
  variance?: InputMaybe<FilesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type FilesArrRelInsertInput = {
  data: Array<FilesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<FilesOnConflict>;
};

/** aggregate avg on columns */
export type FilesAvgFields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type FilesAvgOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type FilesBoolExp = {
  _and?: InputMaybe<Array<FilesBoolExp>>;
  _not?: InputMaybe<FilesBoolExp>;
  _or?: InputMaybe<Array<FilesBoolExp>>;
  bucket?: InputMaybe<BucketsBoolExp>;
  bucketId?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  etag?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isUploaded?: InputMaybe<BooleanComparisonExp>;
  mimeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  size?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  uploadedByUserId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum FilesConstraint {
  /** unique or primary key constraint */
  FilesPkey = 'files_pkey',
}

/** input type for incrementing numeric columns in table "storage.files" */
export type FilesIncInput = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type FilesInsertInput = {
  bucket?: InputMaybe<BucketsObjRelInsertInput>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FilesMaxFields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type FilesMaxOrderBy = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FilesMinFields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type FilesMinOrderBy = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "storage.files" */
export type FilesMutationResponse = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type FilesOnConflict = {
  constraint: FilesConstraint;
  update_columns?: Array<FilesUpdateColumn>;
  where?: InputMaybe<FilesBoolExp>;
};

/** Ordering options when selecting data from "storage.files". */
export type FilesOrderBy = {
  bucket?: InputMaybe<BucketsOrderBy>;
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isUploaded?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: files */
export type FilesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum FilesSelectColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId',
}

/** input type for updating data in table "storage.files" */
export type FilesSetInput = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type FilesStddevFields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type FilesStddevOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type FilesStddevPopFields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type FilesStddevPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type FilesStddevSampFields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type FilesStddevSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type FilesSumFields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type FilesSumOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** update columns of table "storage.files" */
export enum FilesUpdateColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId',
}

/** aggregate var_pop on columns */
export type FilesVarPopFields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type FilesVarPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type FilesVarSampFields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type FilesVarSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type FilesVarianceFields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type FilesVarianceOrderBy = {
  size?: InputMaybe<OrderBy>;
};

export type GeographyCastExp = {
  geometry?: InputMaybe<GeometryComparisonExp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type GeographyComparisonExp = {
  _cast?: InputMaybe<GeographyCastExp>;
  _eq?: InputMaybe<Scalars['geography']>;
  _gt?: InputMaybe<Scalars['geography']>;
  _gte?: InputMaybe<Scalars['geography']>;
  _in?: InputMaybe<Array<Scalars['geography']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geography']>;
  _lte?: InputMaybe<Scalars['geography']>;
  _neq?: InputMaybe<Scalars['geography']>;
  _nin?: InputMaybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: InputMaybe<StDWithinGeographyInput>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: InputMaybe<Scalars['geography']>;
};

export type GeometryCastExp = {
  geography?: InputMaybe<GeographyComparisonExp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type GeometryComparisonExp = {
  _cast?: InputMaybe<GeometryCastExp>;
  _eq?: InputMaybe<Scalars['geometry']>;
  _gt?: InputMaybe<Scalars['geometry']>;
  _gte?: InputMaybe<Scalars['geometry']>;
  _in?: InputMaybe<Array<Scalars['geometry']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geometry']>;
  _lte?: InputMaybe<Scalars['geometry']>;
  _neq?: InputMaybe<Scalars['geometry']>;
  _nin?: InputMaybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: InputMaybe<StDWithinInput>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: InputMaybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: InputMaybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: InputMaybe<StDWithinInput>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: InputMaybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: InputMaybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: InputMaybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: InputMaybe<Scalars['geometry']>;
};

/** columns and relationships of "info_usages" */
export type InfoUsages = {
  __typename?: 'info_usages';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "info_usages" */
export type InfoUsagesAggregate = {
  __typename?: 'info_usages_aggregate';
  aggregate?: Maybe<InfoUsagesAggregateFields>;
  nodes: Array<InfoUsages>;
};

/** aggregate fields of "info_usages" */
export type InfoUsagesAggregateFields = {
  __typename?: 'info_usages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<InfoUsagesMaxFields>;
  min?: Maybe<InfoUsagesMinFields>;
};

/** aggregate fields of "info_usages" */
export type InfoUsagesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<InfoUsagesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "info_usages". All fields are combined with a logical 'AND'. */
export type InfoUsagesBoolExp = {
  _and?: InputMaybe<Array<InfoUsagesBoolExp>>;
  _not?: InputMaybe<InfoUsagesBoolExp>;
  _or?: InputMaybe<Array<InfoUsagesBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "info_usages" */
export enum InfoUsagesConstraint {
  /** unique or primary key constraint */
  InfoUsagesPkey = 'info_usages_pkey',
}

/** input type for inserting data into table "info_usages" */
export type InfoUsagesInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type InfoUsagesMaxFields = {
  __typename?: 'info_usages_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type InfoUsagesMinFields = {
  __typename?: 'info_usages_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "info_usages" */
export type InfoUsagesMutationResponse = {
  __typename?: 'info_usages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<InfoUsages>;
};

/** on_conflict condition type for table "info_usages" */
export type InfoUsagesOnConflict = {
  constraint: InfoUsagesConstraint;
  update_columns?: Array<InfoUsagesUpdateColumn>;
  where?: InputMaybe<InfoUsagesBoolExp>;
};

/** Ordering options when selecting data from "info_usages". */
export type InfoUsagesOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: info_usages */
export type InfoUsagesPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "info_usages" */
export enum InfoUsagesSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "info_usages" */
export type InfoUsagesSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "info_usages" */
export enum InfoUsagesUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "jobs" */
export type Jobs = {
  __typename?: 'jobs';
  /** An object relationship */
  address?: Maybe<Addresses>;
  address_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: ApplicationsAggregate;
  /** An object relationship */
  company?: Maybe<Companies>;
  company_id?: Maybe<Scalars['uuid']>;
  compensations?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  degree_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  employment_type?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  expiration_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['geography']>;
  qualifications?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  responsibilities?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "jobs" */
export type JobsApplicationsArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** columns and relationships of "jobs" */
export type JobsApplicationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** aggregated selection of "jobs" */
export type JobsAggregate = {
  __typename?: 'jobs_aggregate';
  aggregate?: Maybe<JobsAggregateFields>;
  nodes: Array<Jobs>;
};

/** aggregate fields of "jobs" */
export type JobsAggregateFields = {
  __typename?: 'jobs_aggregate_fields';
  avg?: Maybe<JobsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<JobsMaxFields>;
  min?: Maybe<JobsMinFields>;
  stddev?: Maybe<JobsStddevFields>;
  stddev_pop?: Maybe<JobsStddevPopFields>;
  stddev_samp?: Maybe<JobsStddevSampFields>;
  sum?: Maybe<JobsSumFields>;
  var_pop?: Maybe<JobsVarPopFields>;
  var_samp?: Maybe<JobsVarSampFields>;
  variance?: Maybe<JobsVarianceFields>;
};

/** aggregate fields of "jobs" */
export type JobsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<JobsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "jobs" */
export type JobsAggregateOrderBy = {
  avg?: InputMaybe<JobsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<JobsMaxOrderBy>;
  min?: InputMaybe<JobsMinOrderBy>;
  stddev?: InputMaybe<JobsStddevOrderBy>;
  stddev_pop?: InputMaybe<JobsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<JobsStddevSampOrderBy>;
  sum?: InputMaybe<JobsSumOrderBy>;
  var_pop?: InputMaybe<JobsVarPopOrderBy>;
  var_samp?: InputMaybe<JobsVarSampOrderBy>;
  variance?: InputMaybe<JobsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "jobs" */
export type JobsArrRelInsertInput = {
  data: Array<JobsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<JobsOnConflict>;
};

/** aggregate avg on columns */
export type JobsAvgFields = {
  __typename?: 'jobs_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "jobs" */
export type JobsAvgOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "jobs". All fields are combined with a logical 'AND'. */
export type JobsBoolExp = {
  _and?: InputMaybe<Array<JobsBoolExp>>;
  _not?: InputMaybe<JobsBoolExp>;
  _or?: InputMaybe<Array<JobsBoolExp>>;
  address?: InputMaybe<AddressesBoolExp>;
  address_id?: InputMaybe<UuidComparisonExp>;
  applications?: InputMaybe<ApplicationsBoolExp>;
  company?: InputMaybe<CompaniesBoolExp>;
  company_id?: InputMaybe<UuidComparisonExp>;
  compensations?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  degree_type?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  employment_type?: InputMaybe<StringComparisonExp>;
  end_time?: InputMaybe<TimestamptzComparisonExp>;
  expiration_date?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  level?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<GeographyComparisonExp>;
  qualifications?: InputMaybe<StringComparisonExp>;
  quantity?: InputMaybe<IntComparisonExp>;
  responsibilities?: InputMaybe<StringComparisonExp>;
  start_time?: InputMaybe<TimestamptzComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "jobs" */
export enum JobsConstraint {
  /** unique or primary key constraint */
  JobsPkey = 'jobs_pkey',
}

/** input type for incrementing numeric columns in table "jobs" */
export type JobsIncInput = {
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "jobs" */
export type JobsInsertInput = {
  address?: InputMaybe<AddressesObjRelInsertInput>;
  address_id?: InputMaybe<Scalars['uuid']>;
  applications?: InputMaybe<ApplicationsArrRelInsertInput>;
  company?: InputMaybe<CompaniesObjRelInsertInput>;
  company_id?: InputMaybe<Scalars['uuid']>;
  compensations?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  degree_type?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  employment_type?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['timestamptz']>;
  expiration_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['geography']>;
  qualifications?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  responsibilities?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type JobsMaxFields = {
  __typename?: 'jobs_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  company_id?: Maybe<Scalars['uuid']>;
  compensations?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  degree_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  employment_type?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  expiration_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  responsibilities?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "jobs" */
export type JobsMaxOrderBy = {
  address_id?: InputMaybe<OrderBy>;
  company_id?: InputMaybe<OrderBy>;
  compensations?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  degree_type?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  employment_type?: InputMaybe<OrderBy>;
  end_time?: InputMaybe<OrderBy>;
  expiration_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  qualifications?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  responsibilities?: InputMaybe<OrderBy>;
  start_time?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type JobsMinFields = {
  __typename?: 'jobs_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  company_id?: Maybe<Scalars['uuid']>;
  compensations?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  degree_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  employment_type?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  expiration_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  responsibilities?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "jobs" */
export type JobsMinOrderBy = {
  address_id?: InputMaybe<OrderBy>;
  company_id?: InputMaybe<OrderBy>;
  compensations?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  degree_type?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  employment_type?: InputMaybe<OrderBy>;
  end_time?: InputMaybe<OrderBy>;
  expiration_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  qualifications?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  responsibilities?: InputMaybe<OrderBy>;
  start_time?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "jobs" */
export type JobsMutationResponse = {
  __typename?: 'jobs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jobs>;
};

export type JobsNearbyArgs = {
  distance?: InputMaybe<Scalars['float8']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** input type for inserting object relation for remote table "jobs" */
export type JobsObjRelInsertInput = {
  data: JobsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<JobsOnConflict>;
};

/** on_conflict condition type for table "jobs" */
export type JobsOnConflict = {
  constraint: JobsConstraint;
  update_columns?: Array<JobsUpdateColumn>;
  where?: InputMaybe<JobsBoolExp>;
};

/** Ordering options when selecting data from "jobs". */
export type JobsOrderBy = {
  address?: InputMaybe<AddressesOrderBy>;
  address_id?: InputMaybe<OrderBy>;
  applications_aggregate?: InputMaybe<ApplicationsAggregateOrderBy>;
  company?: InputMaybe<CompaniesOrderBy>;
  company_id?: InputMaybe<OrderBy>;
  compensations?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  degree_type?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  employment_type?: InputMaybe<OrderBy>;
  end_time?: InputMaybe<OrderBy>;
  expiration_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  qualifications?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  responsibilities?: InputMaybe<OrderBy>;
  start_time?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: jobs */
export type JobsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "jobs" */
export enum JobsSelectColumn {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Compensations = 'compensations',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DegreeType = 'degree_type',
  /** column name */
  Description = 'description',
  /** column name */
  EmploymentType = 'employment_type',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Level = 'level',
  /** column name */
  Location = 'location',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Responsibilities = 'responsibilities',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "jobs" */
export type JobsSetInput = {
  address_id?: InputMaybe<Scalars['uuid']>;
  company_id?: InputMaybe<Scalars['uuid']>;
  compensations?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  degree_type?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  employment_type?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['timestamptz']>;
  expiration_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['geography']>;
  qualifications?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  responsibilities?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type JobsStddevFields = {
  __typename?: 'jobs_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "jobs" */
export type JobsStddevOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type JobsStddevPopFields = {
  __typename?: 'jobs_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "jobs" */
export type JobsStddevPopOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type JobsStddevSampFields = {
  __typename?: 'jobs_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "jobs" */
export type JobsStddevSampOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type JobsSumFields = {
  __typename?: 'jobs_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "jobs" */
export type JobsSumOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** update columns of table "jobs" */
export enum JobsUpdateColumn {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Compensations = 'compensations',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DegreeType = 'degree_type',
  /** column name */
  Description = 'description',
  /** column name */
  EmploymentType = 'employment_type',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Level = 'level',
  /** column name */
  Location = 'location',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Responsibilities = 'responsibilities',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type JobsVarPopFields = {
  __typename?: 'jobs_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "jobs" */
export type JobsVarPopOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type JobsVarSampFields = {
  __typename?: 'jobs_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "jobs" */
export type JobsVarSampOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type JobsVarianceFields = {
  __typename?: 'jobs_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "jobs" */
export type JobsVarianceOrderBy = {
  quantity?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  audio?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** An object relationship */
  conversation?: Maybe<Conversations>;
  conversation_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  format?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  is_bot: Scalars['Boolean'];
  status: Scalars['String'];
  tags?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  video?: Maybe<Scalars['String']>;
};

/** columns and relationships of "messages" */
export type MessagesFormatArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "messages" */
export type MessagesTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "messages" */
export type MessagesAggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<MessagesAggregateFields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type MessagesAggregateFields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MessagesMaxFields>;
  min?: Maybe<MessagesMinFields>;
};

/** aggregate fields of "messages" */
export type MessagesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MessagesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type MessagesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<MessagesMaxOrderBy>;
  min?: InputMaybe<MessagesMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type MessagesAppendInput = {
  format?: InputMaybe<Scalars['jsonb']>;
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "messages" */
export type MessagesArrRelInsertInput = {
  data: Array<MessagesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<MessagesOnConflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type MessagesBoolExp = {
  _and?: InputMaybe<Array<MessagesBoolExp>>;
  _not?: InputMaybe<MessagesBoolExp>;
  _or?: InputMaybe<Array<MessagesBoolExp>>;
  audio?: InputMaybe<StringComparisonExp>;
  category?: InputMaybe<StringComparisonExp>;
  content?: InputMaybe<StringComparisonExp>;
  conversation?: InputMaybe<ConversationsBoolExp>;
  conversation_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  format?: InputMaybe<JsonbComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  is_bot?: InputMaybe<BooleanComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  tags?: InputMaybe<JsonbComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
  video?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "messages" */
export enum MessagesConstraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type MessagesDeleteAtPathInput = {
  format?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type MessagesDeleteElemInput = {
  format?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type MessagesDeleteKeyInput = {
  format?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "messages" */
export type MessagesInsertInput = {
  audio?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<ConversationsObjRelInsertInput>;
  conversation_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  format?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  is_bot?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type MessagesMaxFields = {
  __typename?: 'messages_max_fields';
  audio?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  conversation_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  video?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "messages" */
export type MessagesMaxOrderBy = {
  audio?: InputMaybe<OrderBy>;
  category?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  conversation_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  video?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type MessagesMinFields = {
  __typename?: 'messages_min_fields';
  audio?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  conversation_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  video?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "messages" */
export type MessagesMinOrderBy = {
  audio?: InputMaybe<OrderBy>;
  category?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  conversation_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  video?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "messages" */
export type MessagesMutationResponse = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type MessagesOnConflict = {
  constraint: MessagesConstraint;
  update_columns?: Array<MessagesUpdateColumn>;
  where?: InputMaybe<MessagesBoolExp>;
};

/** Ordering options when selecting data from "messages". */
export type MessagesOrderBy = {
  audio?: InputMaybe<OrderBy>;
  category?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  conversation?: InputMaybe<ConversationsOrderBy>;
  conversation_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  format?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  is_bot?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  tags?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
  video?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: messages */
export type MessagesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type MessagesPrependInput = {
  format?: InputMaybe<Scalars['jsonb']>;
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "messages" */
export enum MessagesSelectColumn {
  /** column name */
  Audio = 'audio',
  /** column name */
  Category = 'category',
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsBot = 'is_bot',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Video = 'video',
}

/** input type for updating data in table "messages" */
export type MessagesSetInput = {
  audio?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  conversation_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  format?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  is_bot?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video?: InputMaybe<Scalars['String']>;
};

/** update columns of table "messages" */
export enum MessagesUpdateColumn {
  /** column name */
  Audio = 'audio',
  /** column name */
  Category = 'category',
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsBot = 'is_bot',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Video = 'video',
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<BucketsMutationResponse>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<FilesMutationResponse>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<AddressesMutationResponse>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "applications" */
  delete_applications?: Maybe<ApplicationsMutationResponse>;
  /** delete single row from the table: "applications" */
  delete_applications_by_pk?: Maybe<Applications>;
  /** delete data from the table: "benefits" */
  delete_benefits?: Maybe<BenefitsMutationResponse>;
  /** delete single row from the table: "benefits" */
  delete_benefits_by_pk?: Maybe<Benefits>;
  /** delete data from the table: "certifications" */
  delete_certifications?: Maybe<CertificationsMutationResponse>;
  /** delete single row from the table: "certifications" */
  delete_certifications_by_pk?: Maybe<Certifications>;
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<CompaniesMutationResponse>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "company_address" */
  delete_company_address?: Maybe<CompanyAddressMutationResponse>;
  /** delete single row from the table: "company_address" */
  delete_company_address_by_pk?: Maybe<CompanyAddress>;
  /** delete data from the table: "company_sizes" */
  delete_company_sizes?: Maybe<CompanySizesMutationResponse>;
  /** delete single row from the table: "company_sizes" */
  delete_company_sizes_by_pk?: Maybe<CompanySizes>;
  /** delete data from the table: "compensation_units" */
  delete_compensation_units?: Maybe<CompensationUnitsMutationResponse>;
  /** delete single row from the table: "compensation_units" */
  delete_compensation_units_by_pk?: Maybe<CompensationUnits>;
  /** delete data from the table: "conversations" */
  delete_conversations?: Maybe<ConversationsMutationResponse>;
  /** delete single row from the table: "conversations" */
  delete_conversations_by_pk?: Maybe<Conversations>;
  /** delete data from the table: "data_usages" */
  delete_data_usages?: Maybe<DataUsagesMutationResponse>;
  /** delete single row from the table: "data_usages" */
  delete_data_usages_by_pk?: Maybe<DataUsages>;
  /** delete data from the table: "education_levels" */
  delete_education_levels?: Maybe<EducationLevelsMutationResponse>;
  /** delete single row from the table: "education_levels" */
  delete_education_levels_by_pk?: Maybe<EducationLevels>;
  /** delete data from the table: "educations" */
  delete_educations?: Maybe<EducationsMutationResponse>;
  /** delete single row from the table: "educations" */
  delete_educations_by_pk?: Maybe<Educations>;
  /** delete data from the table: "employment_types" */
  delete_employment_types?: Maybe<EmploymentTypesMutationResponse>;
  /** delete single row from the table: "employment_types" */
  delete_employment_types_by_pk?: Maybe<EmploymentTypes>;
  /** delete data from the table: "experiences" */
  delete_experiences?: Maybe<ExperiencesMutationResponse>;
  /** delete single row from the table: "experiences" */
  delete_experiences_by_pk?: Maybe<Experiences>;
  /** delete data from the table: "info_usages" */
  delete_info_usages?: Maybe<InfoUsagesMutationResponse>;
  /** delete single row from the table: "info_usages" */
  delete_info_usages_by_pk?: Maybe<InfoUsages>;
  /** delete data from the table: "jobs" */
  delete_jobs?: Maybe<JobsMutationResponse>;
  /** delete single row from the table: "jobs" */
  delete_jobs_by_pk?: Maybe<Jobs>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<MessagesMutationResponse>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<NotificationsMutationResponse>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "profile_company" */
  delete_profile_company?: Maybe<ProfileCompanyMutationResponse>;
  /** delete single row from the table: "profile_company" */
  delete_profile_company_by_pk?: Maybe<ProfileCompany>;
  /** delete data from the table: "profile_notification" */
  delete_profile_notification?: Maybe<ProfileNotificationMutationResponse>;
  /** delete single row from the table: "profile_notification" */
  delete_profile_notification_by_pk?: Maybe<ProfileNotification>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<ProfilesMutationResponse>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "resumes" */
  delete_resumes?: Maybe<ResumesMutationResponse>;
  /** delete single row from the table: "resumes" */
  delete_resumes_by_pk?: Maybe<Resumes>;
  /** delete data from the table: "tenants" */
  delete_tenants?: Maybe<TenantsMutationResponse>;
  /** delete single row from the table: "tenants" */
  delete_tenants_by_pk?: Maybe<Tenants>;
  /** delete data from the table: "volunteers" */
  delete_volunteers?: Maybe<VolunteersMutationResponse>;
  /** delete single row from the table: "volunteers" */
  delete_volunteers_by_pk?: Maybe<Volunteers>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<BucketsMutationResponse>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<FilesMutationResponse>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<AddressesMutationResponse>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "applications" */
  insert_applications?: Maybe<ApplicationsMutationResponse>;
  /** insert a single row into the table: "applications" */
  insert_applications_one?: Maybe<Applications>;
  /** insert data into the table: "benefits" */
  insert_benefits?: Maybe<BenefitsMutationResponse>;
  /** insert a single row into the table: "benefits" */
  insert_benefits_one?: Maybe<Benefits>;
  /** insert data into the table: "certifications" */
  insert_certifications?: Maybe<CertificationsMutationResponse>;
  /** insert a single row into the table: "certifications" */
  insert_certifications_one?: Maybe<Certifications>;
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<CompaniesMutationResponse>;
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>;
  /** insert data into the table: "company_address" */
  insert_company_address?: Maybe<CompanyAddressMutationResponse>;
  /** insert a single row into the table: "company_address" */
  insert_company_address_one?: Maybe<CompanyAddress>;
  /** insert data into the table: "company_sizes" */
  insert_company_sizes?: Maybe<CompanySizesMutationResponse>;
  /** insert a single row into the table: "company_sizes" */
  insert_company_sizes_one?: Maybe<CompanySizes>;
  /** insert data into the table: "compensation_units" */
  insert_compensation_units?: Maybe<CompensationUnitsMutationResponse>;
  /** insert a single row into the table: "compensation_units" */
  insert_compensation_units_one?: Maybe<CompensationUnits>;
  /** insert data into the table: "conversations" */
  insert_conversations?: Maybe<ConversationsMutationResponse>;
  /** insert a single row into the table: "conversations" */
  insert_conversations_one?: Maybe<Conversations>;
  /** insert data into the table: "data_usages" */
  insert_data_usages?: Maybe<DataUsagesMutationResponse>;
  /** insert a single row into the table: "data_usages" */
  insert_data_usages_one?: Maybe<DataUsages>;
  /** insert data into the table: "education_levels" */
  insert_education_levels?: Maybe<EducationLevelsMutationResponse>;
  /** insert a single row into the table: "education_levels" */
  insert_education_levels_one?: Maybe<EducationLevels>;
  /** insert data into the table: "educations" */
  insert_educations?: Maybe<EducationsMutationResponse>;
  /** insert a single row into the table: "educations" */
  insert_educations_one?: Maybe<Educations>;
  /** insert data into the table: "employment_types" */
  insert_employment_types?: Maybe<EmploymentTypesMutationResponse>;
  /** insert a single row into the table: "employment_types" */
  insert_employment_types_one?: Maybe<EmploymentTypes>;
  /** insert data into the table: "experiences" */
  insert_experiences?: Maybe<ExperiencesMutationResponse>;
  /** insert a single row into the table: "experiences" */
  insert_experiences_one?: Maybe<Experiences>;
  /** insert data into the table: "info_usages" */
  insert_info_usages?: Maybe<InfoUsagesMutationResponse>;
  /** insert a single row into the table: "info_usages" */
  insert_info_usages_one?: Maybe<InfoUsages>;
  /** insert data into the table: "jobs" */
  insert_jobs?: Maybe<JobsMutationResponse>;
  /** insert a single row into the table: "jobs" */
  insert_jobs_one?: Maybe<Jobs>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<MessagesMutationResponse>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<NotificationsMutationResponse>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "profile_company" */
  insert_profile_company?: Maybe<ProfileCompanyMutationResponse>;
  /** insert a single row into the table: "profile_company" */
  insert_profile_company_one?: Maybe<ProfileCompany>;
  /** insert data into the table: "profile_notification" */
  insert_profile_notification?: Maybe<ProfileNotificationMutationResponse>;
  /** insert a single row into the table: "profile_notification" */
  insert_profile_notification_one?: Maybe<ProfileNotification>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<ProfilesMutationResponse>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "resumes" */
  insert_resumes?: Maybe<ResumesMutationResponse>;
  /** insert a single row into the table: "resumes" */
  insert_resumes_one?: Maybe<Resumes>;
  /** insert data into the table: "tenants" */
  insert_tenants?: Maybe<TenantsMutationResponse>;
  /** insert a single row into the table: "tenants" */
  insert_tenants_one?: Maybe<Tenants>;
  /** insert data into the table: "volunteers" */
  insert_volunteers?: Maybe<VolunteersMutationResponse>;
  /** insert a single row into the table: "volunteers" */
  insert_volunteers_one?: Maybe<Volunteers>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<BucketsMutationResponse>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<FilesMutationResponse>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<AddressesMutationResponse>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update data of the table: "applications" */
  update_applications?: Maybe<ApplicationsMutationResponse>;
  /** update single row of the table: "applications" */
  update_applications_by_pk?: Maybe<Applications>;
  /** update data of the table: "benefits" */
  update_benefits?: Maybe<BenefitsMutationResponse>;
  /** update single row of the table: "benefits" */
  update_benefits_by_pk?: Maybe<Benefits>;
  /** update data of the table: "certifications" */
  update_certifications?: Maybe<CertificationsMutationResponse>;
  /** update single row of the table: "certifications" */
  update_certifications_by_pk?: Maybe<Certifications>;
  /** update data of the table: "companies" */
  update_companies?: Maybe<CompaniesMutationResponse>;
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>;
  /** update data of the table: "company_address" */
  update_company_address?: Maybe<CompanyAddressMutationResponse>;
  /** update single row of the table: "company_address" */
  update_company_address_by_pk?: Maybe<CompanyAddress>;
  /** update data of the table: "company_sizes" */
  update_company_sizes?: Maybe<CompanySizesMutationResponse>;
  /** update single row of the table: "company_sizes" */
  update_company_sizes_by_pk?: Maybe<CompanySizes>;
  /** update data of the table: "compensation_units" */
  update_compensation_units?: Maybe<CompensationUnitsMutationResponse>;
  /** update single row of the table: "compensation_units" */
  update_compensation_units_by_pk?: Maybe<CompensationUnits>;
  /** update data of the table: "conversations" */
  update_conversations?: Maybe<ConversationsMutationResponse>;
  /** update single row of the table: "conversations" */
  update_conversations_by_pk?: Maybe<Conversations>;
  /** update data of the table: "data_usages" */
  update_data_usages?: Maybe<DataUsagesMutationResponse>;
  /** update single row of the table: "data_usages" */
  update_data_usages_by_pk?: Maybe<DataUsages>;
  /** update data of the table: "education_levels" */
  update_education_levels?: Maybe<EducationLevelsMutationResponse>;
  /** update single row of the table: "education_levels" */
  update_education_levels_by_pk?: Maybe<EducationLevels>;
  /** update data of the table: "educations" */
  update_educations?: Maybe<EducationsMutationResponse>;
  /** update single row of the table: "educations" */
  update_educations_by_pk?: Maybe<Educations>;
  /** update data of the table: "employment_types" */
  update_employment_types?: Maybe<EmploymentTypesMutationResponse>;
  /** update single row of the table: "employment_types" */
  update_employment_types_by_pk?: Maybe<EmploymentTypes>;
  /** update data of the table: "experiences" */
  update_experiences?: Maybe<ExperiencesMutationResponse>;
  /** update single row of the table: "experiences" */
  update_experiences_by_pk?: Maybe<Experiences>;
  /** update data of the table: "info_usages" */
  update_info_usages?: Maybe<InfoUsagesMutationResponse>;
  /** update single row of the table: "info_usages" */
  update_info_usages_by_pk?: Maybe<InfoUsages>;
  /** update data of the table: "jobs" */
  update_jobs?: Maybe<JobsMutationResponse>;
  /** update single row of the table: "jobs" */
  update_jobs_by_pk?: Maybe<Jobs>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<MessagesMutationResponse>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<NotificationsMutationResponse>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update data of the table: "profile_company" */
  update_profile_company?: Maybe<ProfileCompanyMutationResponse>;
  /** update single row of the table: "profile_company" */
  update_profile_company_by_pk?: Maybe<ProfileCompany>;
  /** update data of the table: "profile_notification" */
  update_profile_notification?: Maybe<ProfileNotificationMutationResponse>;
  /** update single row of the table: "profile_notification" */
  update_profile_notification_by_pk?: Maybe<ProfileNotification>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<ProfilesMutationResponse>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update data of the table: "resumes" */
  update_resumes?: Maybe<ResumesMutationResponse>;
  /** update single row of the table: "resumes" */
  update_resumes_by_pk?: Maybe<Resumes>;
  /** update data of the table: "tenants" */
  update_tenants?: Maybe<TenantsMutationResponse>;
  /** update single row of the table: "tenants" */
  update_tenants_by_pk?: Maybe<Tenants>;
  /** update data of the table: "volunteers" */
  update_volunteers?: Maybe<VolunteersMutationResponse>;
  /** update single row of the table: "volunteers" */
  update_volunteers_by_pk?: Maybe<Volunteers>;
};

/** mutation root */
export type MutationRootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequestsBoolExp;
};

/** mutation root */
export type MutationRootDeleteAuthProvidersArgs = {
  where: AuthProvidersBoolExp;
};

/** mutation root */
export type MutationRootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokensBoolExp;
};

/** mutation root */
export type MutationRootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteAuthRolesArgs = {
  where: AuthRolesBoolExp;
};

/** mutation root */
export type MutationRootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteAuthUserProvidersArgs = {
  where: AuthUserProvidersBoolExp;
};

/** mutation root */
export type MutationRootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteAuthUserRolesArgs = {
  where: AuthUserRolesBoolExp;
};

/** mutation root */
export type MutationRootDeleteBucketArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteBucketsArgs = {
  where: BucketsBoolExp;
};

/** mutation root */
export type MutationRootDeleteFileArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteFilesArgs = {
  where: FilesBoolExp;
};

/** mutation root */
export type MutationRootDeleteUserArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootDeleteAddressesArgs = {
  where: AddressesBoolExp;
};

/** mutation root */
export type MutationRootDeleteAddressesByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteApplicationsArgs = {
  where: ApplicationsBoolExp;
};

/** mutation root */
export type MutationRootDeleteApplicationsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteBenefitsArgs = {
  where: BenefitsBoolExp;
};

/** mutation root */
export type MutationRootDeleteBenefitsByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteCertificationsArgs = {
  where: CertificationsBoolExp;
};

/** mutation root */
export type MutationRootDeleteCertificationsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteCompaniesArgs = {
  where: CompaniesBoolExp;
};

/** mutation root */
export type MutationRootDeleteCompaniesByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteCompanyAddressArgs = {
  where: CompanyAddressBoolExp;
};

/** mutation root */
export type MutationRootDeleteCompanyAddressByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteCompanySizesArgs = {
  where: CompanySizesBoolExp;
};

/** mutation root */
export type MutationRootDeleteCompanySizesByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteCompensationUnitsArgs = {
  where: CompensationUnitsBoolExp;
};

/** mutation root */
export type MutationRootDeleteCompensationUnitsByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteConversationsArgs = {
  where: ConversationsBoolExp;
};

/** mutation root */
export type MutationRootDeleteConversationsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteDataUsagesArgs = {
  where: DataUsagesBoolExp;
};

/** mutation root */
export type MutationRootDeleteDataUsagesByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteEducationLevelsArgs = {
  where: EducationLevelsBoolExp;
};

/** mutation root */
export type MutationRootDeleteEducationLevelsByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteEducationsArgs = {
  where: EducationsBoolExp;
};

/** mutation root */
export type MutationRootDeleteEducationsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteEmploymentTypesArgs = {
  where: EmploymentTypesBoolExp;
};

/** mutation root */
export type MutationRootDeleteEmploymentTypesByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteExperiencesArgs = {
  where: ExperiencesBoolExp;
};

/** mutation root */
export type MutationRootDeleteExperiencesByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteInfoUsagesArgs = {
  where: InfoUsagesBoolExp;
};

/** mutation root */
export type MutationRootDeleteInfoUsagesByPkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteJobsArgs = {
  where: JobsBoolExp;
};

/** mutation root */
export type MutationRootDeleteJobsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteMessagesArgs = {
  where: MessagesBoolExp;
};

/** mutation root */
export type MutationRootDeleteMessagesByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteNotificationsArgs = {
  where: NotificationsBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotificationsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteProfileCompanyArgs = {
  where: ProfileCompanyBoolExp;
};

/** mutation root */
export type MutationRootDeleteProfileCompanyByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteProfileNotificationArgs = {
  where: ProfileNotificationBoolExp;
};

/** mutation root */
export type MutationRootDeleteProfileNotificationByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteProfilesArgs = {
  where: ProfilesBoolExp;
};

/** mutation root */
export type MutationRootDeleteProfilesByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteResumesArgs = {
  where: ResumesBoolExp;
};

/** mutation root */
export type MutationRootDeleteResumesByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteTenantsArgs = {
  where: TenantsBoolExp;
};

/** mutation root */
export type MutationRootDeleteTenantsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteVolunteersArgs = {
  where: VolunteersBoolExp;
};

/** mutation root */
export type MutationRootDeleteVolunteersByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootInsertAuthProviderArgs = {
  object: AuthProvidersInsertInput;
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequestsInsertInput;
  on_conflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequestsInsertInput>;
  on_conflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthProvidersArgs = {
  objects: Array<AuthProvidersInsertInput>;
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokensInsertInput;
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokensInsertInput>;
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthRoleArgs = {
  object: AuthRolesInsertInput;
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthRolesArgs = {
  objects: Array<AuthRolesInsertInput>;
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthUserProviderArgs = {
  object: AuthUserProvidersInsertInput;
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProvidersInsertInput>;
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthUserRoleArgs = {
  object: AuthUserRolesInsertInput;
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};

/** mutation root */
export type MutationRootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRolesInsertInput>;
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};

/** mutation root */
export type MutationRootInsertBucketArgs = {
  object: BucketsInsertInput;
  on_conflict?: InputMaybe<BucketsOnConflict>;
};

/** mutation root */
export type MutationRootInsertBucketsArgs = {
  objects: Array<BucketsInsertInput>;
  on_conflict?: InputMaybe<BucketsOnConflict>;
};

/** mutation root */
export type MutationRootInsertFileArgs = {
  object: FilesInsertInput;
  on_conflict?: InputMaybe<FilesOnConflict>;
};

/** mutation root */
export type MutationRootInsertFilesArgs = {
  objects: Array<FilesInsertInput>;
  on_conflict?: InputMaybe<FilesOnConflict>;
};

/** mutation root */
export type MutationRootInsertUserArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootInsertAddressesArgs = {
  objects: Array<AddressesInsertInput>;
  on_conflict?: InputMaybe<AddressesOnConflict>;
};

/** mutation root */
export type MutationRootInsertAddressesOneArgs = {
  object: AddressesInsertInput;
  on_conflict?: InputMaybe<AddressesOnConflict>;
};

/** mutation root */
export type MutationRootInsertApplicationsArgs = {
  objects: Array<ApplicationsInsertInput>;
  on_conflict?: InputMaybe<ApplicationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertApplicationsOneArgs = {
  object: ApplicationsInsertInput;
  on_conflict?: InputMaybe<ApplicationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertBenefitsArgs = {
  objects: Array<BenefitsInsertInput>;
  on_conflict?: InputMaybe<BenefitsOnConflict>;
};

/** mutation root */
export type MutationRootInsertBenefitsOneArgs = {
  object: BenefitsInsertInput;
  on_conflict?: InputMaybe<BenefitsOnConflict>;
};

/** mutation root */
export type MutationRootInsertCertificationsArgs = {
  objects: Array<CertificationsInsertInput>;
  on_conflict?: InputMaybe<CertificationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertCertificationsOneArgs = {
  object: CertificationsInsertInput;
  on_conflict?: InputMaybe<CertificationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompaniesArgs = {
  objects: Array<CompaniesInsertInput>;
  on_conflict?: InputMaybe<CompaniesOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompaniesOneArgs = {
  object: CompaniesInsertInput;
  on_conflict?: InputMaybe<CompaniesOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompanyAddressArgs = {
  objects: Array<CompanyAddressInsertInput>;
  on_conflict?: InputMaybe<CompanyAddressOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompanyAddressOneArgs = {
  object: CompanyAddressInsertInput;
  on_conflict?: InputMaybe<CompanyAddressOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompanySizesArgs = {
  objects: Array<CompanySizesInsertInput>;
  on_conflict?: InputMaybe<CompanySizesOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompanySizesOneArgs = {
  object: CompanySizesInsertInput;
  on_conflict?: InputMaybe<CompanySizesOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompensationUnitsArgs = {
  objects: Array<CompensationUnitsInsertInput>;
  on_conflict?: InputMaybe<CompensationUnitsOnConflict>;
};

/** mutation root */
export type MutationRootInsertCompensationUnitsOneArgs = {
  object: CompensationUnitsInsertInput;
  on_conflict?: InputMaybe<CompensationUnitsOnConflict>;
};

/** mutation root */
export type MutationRootInsertConversationsArgs = {
  objects: Array<ConversationsInsertInput>;
  on_conflict?: InputMaybe<ConversationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertConversationsOneArgs = {
  object: ConversationsInsertInput;
  on_conflict?: InputMaybe<ConversationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertDataUsagesArgs = {
  objects: Array<DataUsagesInsertInput>;
  on_conflict?: InputMaybe<DataUsagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertDataUsagesOneArgs = {
  object: DataUsagesInsertInput;
  on_conflict?: InputMaybe<DataUsagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertEducationLevelsArgs = {
  objects: Array<EducationLevelsInsertInput>;
  on_conflict?: InputMaybe<EducationLevelsOnConflict>;
};

/** mutation root */
export type MutationRootInsertEducationLevelsOneArgs = {
  object: EducationLevelsInsertInput;
  on_conflict?: InputMaybe<EducationLevelsOnConflict>;
};

/** mutation root */
export type MutationRootInsertEducationsArgs = {
  objects: Array<EducationsInsertInput>;
  on_conflict?: InputMaybe<EducationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertEducationsOneArgs = {
  object: EducationsInsertInput;
  on_conflict?: InputMaybe<EducationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertEmploymentTypesArgs = {
  objects: Array<EmploymentTypesInsertInput>;
  on_conflict?: InputMaybe<EmploymentTypesOnConflict>;
};

/** mutation root */
export type MutationRootInsertEmploymentTypesOneArgs = {
  object: EmploymentTypesInsertInput;
  on_conflict?: InputMaybe<EmploymentTypesOnConflict>;
};

/** mutation root */
export type MutationRootInsertExperiencesArgs = {
  objects: Array<ExperiencesInsertInput>;
  on_conflict?: InputMaybe<ExperiencesOnConflict>;
};

/** mutation root */
export type MutationRootInsertExperiencesOneArgs = {
  object: ExperiencesInsertInput;
  on_conflict?: InputMaybe<ExperiencesOnConflict>;
};

/** mutation root */
export type MutationRootInsertInfoUsagesArgs = {
  objects: Array<InfoUsagesInsertInput>;
  on_conflict?: InputMaybe<InfoUsagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertInfoUsagesOneArgs = {
  object: InfoUsagesInsertInput;
  on_conflict?: InputMaybe<InfoUsagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertJobsArgs = {
  objects: Array<JobsInsertInput>;
  on_conflict?: InputMaybe<JobsOnConflict>;
};

/** mutation root */
export type MutationRootInsertJobsOneArgs = {
  object: JobsInsertInput;
  on_conflict?: InputMaybe<JobsOnConflict>;
};

/** mutation root */
export type MutationRootInsertMessagesArgs = {
  objects: Array<MessagesInsertInput>;
  on_conflict?: InputMaybe<MessagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertMessagesOneArgs = {
  object: MessagesInsertInput;
  on_conflict?: InputMaybe<MessagesOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotificationsArgs = {
  objects: Array<NotificationsInsertInput>;
  on_conflict?: InputMaybe<NotificationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotificationsOneArgs = {
  object: NotificationsInsertInput;
  on_conflict?: InputMaybe<NotificationsOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfileCompanyArgs = {
  objects: Array<ProfileCompanyInsertInput>;
  on_conflict?: InputMaybe<ProfileCompanyOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfileCompanyOneArgs = {
  object: ProfileCompanyInsertInput;
  on_conflict?: InputMaybe<ProfileCompanyOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfileNotificationArgs = {
  objects: Array<ProfileNotificationInsertInput>;
  on_conflict?: InputMaybe<ProfileNotificationOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfileNotificationOneArgs = {
  object: ProfileNotificationInsertInput;
  on_conflict?: InputMaybe<ProfileNotificationOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfilesArgs = {
  objects: Array<ProfilesInsertInput>;
  on_conflict?: InputMaybe<ProfilesOnConflict>;
};

/** mutation root */
export type MutationRootInsertProfilesOneArgs = {
  object: ProfilesInsertInput;
  on_conflict?: InputMaybe<ProfilesOnConflict>;
};

/** mutation root */
export type MutationRootInsertResumesArgs = {
  objects: Array<ResumesInsertInput>;
  on_conflict?: InputMaybe<ResumesOnConflict>;
};

/** mutation root */
export type MutationRootInsertResumesOneArgs = {
  object: ResumesInsertInput;
  on_conflict?: InputMaybe<ResumesOnConflict>;
};

/** mutation root */
export type MutationRootInsertTenantsArgs = {
  objects: Array<TenantsInsertInput>;
  on_conflict?: InputMaybe<TenantsOnConflict>;
};

/** mutation root */
export type MutationRootInsertTenantsOneArgs = {
  object: TenantsInsertInput;
  on_conflict?: InputMaybe<TenantsOnConflict>;
};

/** mutation root */
export type MutationRootInsertVolunteersArgs = {
  objects: Array<VolunteersInsertInput>;
  on_conflict?: InputMaybe<VolunteersOnConflict>;
};

/** mutation root */
export type MutationRootInsertVolunteersOneArgs = {
  object: VolunteersInsertInput;
  on_conflict?: InputMaybe<VolunteersOnConflict>;
};

/** mutation root */
export type MutationRootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  pk_columns: AuthProvidersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuthProviderRequestArgs = {
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  pk_columns: AuthProviderRequestsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuthProviderRequestsArgs = {
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};

/** mutation root */
export type MutationRootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};

/** mutation root */
export type MutationRootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  pk_columns: AuthRefreshTokensPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};

/** mutation root */
export type MutationRootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  pk_columns: AuthRolesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};

/** mutation root */
export type MutationRootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  pk_columns: AuthUserProvidersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};

/** mutation root */
export type MutationRootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  pk_columns: AuthUserRolesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};

/** mutation root */
export type MutationRootUpdateBucketArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  pk_columns: BucketsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateBucketsArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  where: BucketsBoolExp;
};

/** mutation root */
export type MutationRootUpdateFileArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  pk_columns: FilesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateFilesArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  where: FilesBoolExp;
};

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootUpdateAddressesArgs = {
  _set?: InputMaybe<AddressesSetInput>;
  where: AddressesBoolExp;
};

/** mutation root */
export type MutationRootUpdateAddressesByPkArgs = {
  _set?: InputMaybe<AddressesSetInput>;
  pk_columns: AddressesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateApplicationsArgs = {
  _set?: InputMaybe<ApplicationsSetInput>;
  where: ApplicationsBoolExp;
};

/** mutation root */
export type MutationRootUpdateApplicationsByPkArgs = {
  _set?: InputMaybe<ApplicationsSetInput>;
  pk_columns: ApplicationsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateBenefitsArgs = {
  _set?: InputMaybe<BenefitsSetInput>;
  where: BenefitsBoolExp;
};

/** mutation root */
export type MutationRootUpdateBenefitsByPkArgs = {
  _set?: InputMaybe<BenefitsSetInput>;
  pk_columns: BenefitsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCertificationsArgs = {
  _set?: InputMaybe<CertificationsSetInput>;
  where: CertificationsBoolExp;
};

/** mutation root */
export type MutationRootUpdateCertificationsByPkArgs = {
  _set?: InputMaybe<CertificationsSetInput>;
  pk_columns: CertificationsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCompaniesArgs = {
  _set?: InputMaybe<CompaniesSetInput>;
  where: CompaniesBoolExp;
};

/** mutation root */
export type MutationRootUpdateCompaniesByPkArgs = {
  _set?: InputMaybe<CompaniesSetInput>;
  pk_columns: CompaniesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCompanyAddressArgs = {
  _set?: InputMaybe<CompanyAddressSetInput>;
  where: CompanyAddressBoolExp;
};

/** mutation root */
export type MutationRootUpdateCompanyAddressByPkArgs = {
  _set?: InputMaybe<CompanyAddressSetInput>;
  pk_columns: CompanyAddressPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCompanySizesArgs = {
  _set?: InputMaybe<CompanySizesSetInput>;
  where: CompanySizesBoolExp;
};

/** mutation root */
export type MutationRootUpdateCompanySizesByPkArgs = {
  _set?: InputMaybe<CompanySizesSetInput>;
  pk_columns: CompanySizesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCompensationUnitsArgs = {
  _set?: InputMaybe<CompensationUnitsSetInput>;
  where: CompensationUnitsBoolExp;
};

/** mutation root */
export type MutationRootUpdateCompensationUnitsByPkArgs = {
  _set?: InputMaybe<CompensationUnitsSetInput>;
  pk_columns: CompensationUnitsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateConversationsArgs = {
  _set?: InputMaybe<ConversationsSetInput>;
  where: ConversationsBoolExp;
};

/** mutation root */
export type MutationRootUpdateConversationsByPkArgs = {
  _set?: InputMaybe<ConversationsSetInput>;
  pk_columns: ConversationsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateDataUsagesArgs = {
  _set?: InputMaybe<DataUsagesSetInput>;
  where: DataUsagesBoolExp;
};

/** mutation root */
export type MutationRootUpdateDataUsagesByPkArgs = {
  _set?: InputMaybe<DataUsagesSetInput>;
  pk_columns: DataUsagesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateEducationLevelsArgs = {
  _set?: InputMaybe<EducationLevelsSetInput>;
  where: EducationLevelsBoolExp;
};

/** mutation root */
export type MutationRootUpdateEducationLevelsByPkArgs = {
  _set?: InputMaybe<EducationLevelsSetInput>;
  pk_columns: EducationLevelsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateEducationsArgs = {
  _set?: InputMaybe<EducationsSetInput>;
  where: EducationsBoolExp;
};

/** mutation root */
export type MutationRootUpdateEducationsByPkArgs = {
  _set?: InputMaybe<EducationsSetInput>;
  pk_columns: EducationsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateEmploymentTypesArgs = {
  _set?: InputMaybe<EmploymentTypesSetInput>;
  where: EmploymentTypesBoolExp;
};

/** mutation root */
export type MutationRootUpdateEmploymentTypesByPkArgs = {
  _set?: InputMaybe<EmploymentTypesSetInput>;
  pk_columns: EmploymentTypesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateExperiencesArgs = {
  _set?: InputMaybe<ExperiencesSetInput>;
  where: ExperiencesBoolExp;
};

/** mutation root */
export type MutationRootUpdateExperiencesByPkArgs = {
  _set?: InputMaybe<ExperiencesSetInput>;
  pk_columns: ExperiencesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateInfoUsagesArgs = {
  _set?: InputMaybe<InfoUsagesSetInput>;
  where: InfoUsagesBoolExp;
};

/** mutation root */
export type MutationRootUpdateInfoUsagesByPkArgs = {
  _set?: InputMaybe<InfoUsagesSetInput>;
  pk_columns: InfoUsagesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateJobsArgs = {
  _inc?: InputMaybe<JobsIncInput>;
  _set?: InputMaybe<JobsSetInput>;
  where: JobsBoolExp;
};

/** mutation root */
export type MutationRootUpdateJobsByPkArgs = {
  _inc?: InputMaybe<JobsIncInput>;
  _set?: InputMaybe<JobsSetInput>;
  pk_columns: JobsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateMessagesArgs = {
  _append?: InputMaybe<MessagesAppendInput>;
  _delete_at_path?: InputMaybe<MessagesDeleteAtPathInput>;
  _delete_elem?: InputMaybe<MessagesDeleteElemInput>;
  _delete_key?: InputMaybe<MessagesDeleteKeyInput>;
  _prepend?: InputMaybe<MessagesPrependInput>;
  _set?: InputMaybe<MessagesSetInput>;
  where: MessagesBoolExp;
};

/** mutation root */
export type MutationRootUpdateMessagesByPkArgs = {
  _append?: InputMaybe<MessagesAppendInput>;
  _delete_at_path?: InputMaybe<MessagesDeleteAtPathInput>;
  _delete_elem?: InputMaybe<MessagesDeleteElemInput>;
  _delete_key?: InputMaybe<MessagesDeleteKeyInput>;
  _prepend?: InputMaybe<MessagesPrependInput>;
  _set?: InputMaybe<MessagesSetInput>;
  pk_columns: MessagesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotificationsArgs = {
  _append?: InputMaybe<NotificationsAppendInput>;
  _delete_at_path?: InputMaybe<NotificationsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<NotificationsDeleteElemInput>;
  _delete_key?: InputMaybe<NotificationsDeleteKeyInput>;
  _prepend?: InputMaybe<NotificationsPrependInput>;
  _set?: InputMaybe<NotificationsSetInput>;
  where: NotificationsBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotificationsByPkArgs = {
  _append?: InputMaybe<NotificationsAppendInput>;
  _delete_at_path?: InputMaybe<NotificationsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<NotificationsDeleteElemInput>;
  _delete_key?: InputMaybe<NotificationsDeleteKeyInput>;
  _prepend?: InputMaybe<NotificationsPrependInput>;
  _set?: InputMaybe<NotificationsSetInput>;
  pk_columns: NotificationsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateProfileCompanyArgs = {
  _append?: InputMaybe<ProfileCompanyAppendInput>;
  _delete_at_path?: InputMaybe<ProfileCompanyDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ProfileCompanyDeleteElemInput>;
  _delete_key?: InputMaybe<ProfileCompanyDeleteKeyInput>;
  _prepend?: InputMaybe<ProfileCompanyPrependInput>;
  _set?: InputMaybe<ProfileCompanySetInput>;
  where: ProfileCompanyBoolExp;
};

/** mutation root */
export type MutationRootUpdateProfileCompanyByPkArgs = {
  _append?: InputMaybe<ProfileCompanyAppendInput>;
  _delete_at_path?: InputMaybe<ProfileCompanyDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ProfileCompanyDeleteElemInput>;
  _delete_key?: InputMaybe<ProfileCompanyDeleteKeyInput>;
  _prepend?: InputMaybe<ProfileCompanyPrependInput>;
  _set?: InputMaybe<ProfileCompanySetInput>;
  pk_columns: ProfileCompanyPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateProfileNotificationArgs = {
  _append?: InputMaybe<ProfileNotificationAppendInput>;
  _delete_at_path?: InputMaybe<ProfileNotificationDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ProfileNotificationDeleteElemInput>;
  _delete_key?: InputMaybe<ProfileNotificationDeleteKeyInput>;
  _prepend?: InputMaybe<ProfileNotificationPrependInput>;
  _set?: InputMaybe<ProfileNotificationSetInput>;
  where: ProfileNotificationBoolExp;
};

/** mutation root */
export type MutationRootUpdateProfileNotificationByPkArgs = {
  _append?: InputMaybe<ProfileNotificationAppendInput>;
  _delete_at_path?: InputMaybe<ProfileNotificationDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ProfileNotificationDeleteElemInput>;
  _delete_key?: InputMaybe<ProfileNotificationDeleteKeyInput>;
  _prepend?: InputMaybe<ProfileNotificationPrependInput>;
  _set?: InputMaybe<ProfileNotificationSetInput>;
  pk_columns: ProfileNotificationPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateProfilesArgs = {
  _append?: InputMaybe<ProfilesAppendInput>;
  _delete_at_path?: InputMaybe<ProfilesDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ProfilesDeleteElemInput>;
  _delete_key?: InputMaybe<ProfilesDeleteKeyInput>;
  _prepend?: InputMaybe<ProfilesPrependInput>;
  _set?: InputMaybe<ProfilesSetInput>;
  where: ProfilesBoolExp;
};

/** mutation root */
export type MutationRootUpdateProfilesByPkArgs = {
  _append?: InputMaybe<ProfilesAppendInput>;
  _delete_at_path?: InputMaybe<ProfilesDeleteAtPathInput>;
  _delete_elem?: InputMaybe<ProfilesDeleteElemInput>;
  _delete_key?: InputMaybe<ProfilesDeleteKeyInput>;
  _prepend?: InputMaybe<ProfilesPrependInput>;
  _set?: InputMaybe<ProfilesSetInput>;
  pk_columns: ProfilesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateResumesArgs = {
  _set?: InputMaybe<ResumesSetInput>;
  where: ResumesBoolExp;
};

/** mutation root */
export type MutationRootUpdateResumesByPkArgs = {
  _set?: InputMaybe<ResumesSetInput>;
  pk_columns: ResumesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTenantsArgs = {
  _set?: InputMaybe<TenantsSetInput>;
  where: TenantsBoolExp;
};

/** mutation root */
export type MutationRootUpdateTenantsByPkArgs = {
  _set?: InputMaybe<TenantsSetInput>;
  pk_columns: TenantsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateVolunteersArgs = {
  _set?: InputMaybe<VolunteersSetInput>;
  where: VolunteersBoolExp;
};

/** mutation root */
export type MutationRootUpdateVolunteersByPkArgs = {
  _set?: InputMaybe<VolunteersSetInput>;
  pk_columns: VolunteersPkColumnsInput;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  message: Scalars['jsonb'];
  /** An array relationship */
  notification_profiles: Array<ProfileNotification>;
  /** An aggregate relationship */
  notification_profiles_aggregate: ProfileNotificationAggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "notifications" */
export type NotificationsMessageArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "notifications" */
export type NotificationsNotificationProfilesArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

/** columns and relationships of "notifications" */
export type NotificationsNotificationProfilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

/** aggregated selection of "notifications" */
export type NotificationsAggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<NotificationsAggregateFields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "notifications" */
export type NotificationsAggregateFields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<NotificationsMaxFields>;
  min?: Maybe<NotificationsMinFields>;
};

/** aggregate fields of "notifications" */
export type NotificationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<NotificationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type NotificationsAppendInput = {
  message?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type NotificationsBoolExp = {
  _and?: InputMaybe<Array<NotificationsBoolExp>>;
  _not?: InputMaybe<NotificationsBoolExp>;
  _or?: InputMaybe<Array<NotificationsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  message?: InputMaybe<JsonbComparisonExp>;
  notification_profiles?: InputMaybe<ProfileNotificationBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "notifications" */
export enum NotificationsConstraint {
  /** unique or primary key constraint */
  NotificationsPkey = 'notifications_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type NotificationsDeleteAtPathInput = {
  message?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type NotificationsDeleteElemInput = {
  message?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type NotificationsDeleteKeyInput = {
  message?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "notifications" */
export type NotificationsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['jsonb']>;
  notification_profiles?: InputMaybe<ProfileNotificationArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type NotificationsMaxFields = {
  __typename?: 'notifications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type NotificationsMinFields = {
  __typename?: 'notifications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "notifications" */
export type NotificationsMutationResponse = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** input type for inserting object relation for remote table "notifications" */
export type NotificationsObjRelInsertInput = {
  data: NotificationsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<NotificationsOnConflict>;
};

/** on_conflict condition type for table "notifications" */
export type NotificationsOnConflict = {
  constraint: NotificationsConstraint;
  update_columns?: Array<NotificationsUpdateColumn>;
  where?: InputMaybe<NotificationsBoolExp>;
};

/** Ordering options when selecting data from "notifications". */
export type NotificationsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  message?: InputMaybe<OrderBy>;
  notification_profiles_aggregate?: InputMaybe<ProfileNotificationAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: notifications */
export type NotificationsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type NotificationsPrependInput = {
  message?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "notifications" */
export enum NotificationsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "notifications" */
export type NotificationsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "notifications" */
export enum NotificationsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "profile_company" */
export type ProfileCompany = {
  __typename?: 'profile_company';
  /** An object relationship */
  company: Companies;
  company_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  position?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "profile_company" */
export type ProfileCompanyPositionArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "profile_company" */
export type ProfileCompanyAggregate = {
  __typename?: 'profile_company_aggregate';
  aggregate?: Maybe<ProfileCompanyAggregateFields>;
  nodes: Array<ProfileCompany>;
};

/** aggregate fields of "profile_company" */
export type ProfileCompanyAggregateFields = {
  __typename?: 'profile_company_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ProfileCompanyMaxFields>;
  min?: Maybe<ProfileCompanyMinFields>;
};

/** aggregate fields of "profile_company" */
export type ProfileCompanyAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile_company" */
export type ProfileCompanyAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProfileCompanyMaxOrderBy>;
  min?: InputMaybe<ProfileCompanyMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ProfileCompanyAppendInput = {
  position?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "profile_company" */
export type ProfileCompanyArrRelInsertInput = {
  data: Array<ProfileCompanyInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ProfileCompanyOnConflict>;
};

/** Boolean expression to filter rows from the table "profile_company". All fields are combined with a logical 'AND'. */
export type ProfileCompanyBoolExp = {
  _and?: InputMaybe<Array<ProfileCompanyBoolExp>>;
  _not?: InputMaybe<ProfileCompanyBoolExp>;
  _or?: InputMaybe<Array<ProfileCompanyBoolExp>>;
  company?: InputMaybe<CompaniesBoolExp>;
  company_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  position?: InputMaybe<JsonbComparisonExp>;
  profile?: InputMaybe<ProfilesBoolExp>;
  profile_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "profile_company" */
export enum ProfileCompanyConstraint {
  /** unique or primary key constraint */
  ProfileCompanyPkey = 'profile_company_pkey',
  /** unique or primary key constraint */
  ProfileCompanyProfileIdCompanyIdKey = 'profile_company_profile_id_company_id_key',
  /** unique or primary key constraint */
  ProfileIdCompanyIdPkey = 'profile_id_company_id_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ProfileCompanyDeleteAtPathInput = {
  position?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ProfileCompanyDeleteElemInput = {
  position?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ProfileCompanyDeleteKeyInput = {
  position?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "profile_company" */
export type ProfileCompanyInsertInput = {
  company?: InputMaybe<CompaniesObjRelInsertInput>;
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  position?: InputMaybe<Scalars['jsonb']>;
  profile?: InputMaybe<ProfilesObjRelInsertInput>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ProfileCompanyMaxFields = {
  __typename?: 'profile_company_max_fields';
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "profile_company" */
export type ProfileCompanyMaxOrderBy = {
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProfileCompanyMinFields = {
  __typename?: 'profile_company_min_fields';
  company_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "profile_company" */
export type ProfileCompanyMinOrderBy = {
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "profile_company" */
export type ProfileCompanyMutationResponse = {
  __typename?: 'profile_company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProfileCompany>;
};

/** on_conflict condition type for table "profile_company" */
export type ProfileCompanyOnConflict = {
  constraint: ProfileCompanyConstraint;
  update_columns?: Array<ProfileCompanyUpdateColumn>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

/** Ordering options when selecting data from "profile_company". */
export type ProfileCompanyOrderBy = {
  company?: InputMaybe<CompaniesOrderBy>;
  company_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfilesOrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: profile_company */
export type ProfileCompanyPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ProfileCompanyPrependInput = {
  position?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "profile_company" */
export enum ProfileCompanySelectColumn {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "profile_company" */
export type ProfileCompanySetInput = {
  company_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  position?: InputMaybe<Scalars['jsonb']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "profile_company" */
export enum ProfileCompanyUpdateColumn {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "profile_notification" */
export type ProfileNotification = {
  __typename?: 'profile_notification';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  notification: Notifications;
  notification_id: Scalars['uuid'];
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid'];
  receipt?: Maybe<Scalars['jsonb']>;
  response?: Maybe<Scalars['jsonb']>;
  ticket?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "profile_notification" */
export type ProfileNotificationReceiptArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "profile_notification" */
export type ProfileNotificationResponseArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "profile_notification" */
export type ProfileNotificationTicketArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "profile_notification" */
export type ProfileNotificationAggregate = {
  __typename?: 'profile_notification_aggregate';
  aggregate?: Maybe<ProfileNotificationAggregateFields>;
  nodes: Array<ProfileNotification>;
};

/** aggregate fields of "profile_notification" */
export type ProfileNotificationAggregateFields = {
  __typename?: 'profile_notification_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ProfileNotificationMaxFields>;
  min?: Maybe<ProfileNotificationMinFields>;
};

/** aggregate fields of "profile_notification" */
export type ProfileNotificationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile_notification" */
export type ProfileNotificationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProfileNotificationMaxOrderBy>;
  min?: InputMaybe<ProfileNotificationMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ProfileNotificationAppendInput = {
  receipt?: InputMaybe<Scalars['jsonb']>;
  response?: InputMaybe<Scalars['jsonb']>;
  ticket?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "profile_notification" */
export type ProfileNotificationArrRelInsertInput = {
  data: Array<ProfileNotificationInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ProfileNotificationOnConflict>;
};

/** Boolean expression to filter rows from the table "profile_notification". All fields are combined with a logical 'AND'. */
export type ProfileNotificationBoolExp = {
  _and?: InputMaybe<Array<ProfileNotificationBoolExp>>;
  _not?: InputMaybe<ProfileNotificationBoolExp>;
  _or?: InputMaybe<Array<ProfileNotificationBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  notification?: InputMaybe<NotificationsBoolExp>;
  notification_id?: InputMaybe<UuidComparisonExp>;
  profile?: InputMaybe<ProfilesBoolExp>;
  profile_id?: InputMaybe<UuidComparisonExp>;
  receipt?: InputMaybe<JsonbComparisonExp>;
  response?: InputMaybe<JsonbComparisonExp>;
  ticket?: InputMaybe<JsonbComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "profile_notification" */
export enum ProfileNotificationConstraint {
  /** unique or primary key constraint */
  ProfileIdNotificationIdPkey = 'profile_id_notification_id_pkey',
  /** unique or primary key constraint */
  ProfileNotificationPkey = 'profile_notification_pkey',
  /** unique or primary key constraint */
  ProfileNotificationProfileIdNotificationIdKey = 'profile_notification_profile_id_notification_id_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ProfileNotificationDeleteAtPathInput = {
  receipt?: InputMaybe<Array<Scalars['String']>>;
  response?: InputMaybe<Array<Scalars['String']>>;
  ticket?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ProfileNotificationDeleteElemInput = {
  receipt?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<Scalars['Int']>;
  ticket?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ProfileNotificationDeleteKeyInput = {
  receipt?: InputMaybe<Scalars['String']>;
  response?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "profile_notification" */
export type ProfileNotificationInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  notification?: InputMaybe<NotificationsObjRelInsertInput>;
  notification_id?: InputMaybe<Scalars['uuid']>;
  profile?: InputMaybe<ProfilesObjRelInsertInput>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  receipt?: InputMaybe<Scalars['jsonb']>;
  response?: InputMaybe<Scalars['jsonb']>;
  ticket?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ProfileNotificationMaxFields = {
  __typename?: 'profile_notification_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  notification_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "profile_notification" */
export type ProfileNotificationMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notification_id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProfileNotificationMinFields = {
  __typename?: 'profile_notification_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  notification_id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "profile_notification" */
export type ProfileNotificationMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notification_id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "profile_notification" */
export type ProfileNotificationMutationResponse = {
  __typename?: 'profile_notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProfileNotification>;
};

/** on_conflict condition type for table "profile_notification" */
export type ProfileNotificationOnConflict = {
  constraint: ProfileNotificationConstraint;
  update_columns?: Array<ProfileNotificationUpdateColumn>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

/** Ordering options when selecting data from "profile_notification". */
export type ProfileNotificationOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notification?: InputMaybe<NotificationsOrderBy>;
  notification_id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfilesOrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  receipt?: InputMaybe<OrderBy>;
  response?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: profile_notification */
export type ProfileNotificationPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ProfileNotificationPrependInput = {
  receipt?: InputMaybe<Scalars['jsonb']>;
  response?: InputMaybe<Scalars['jsonb']>;
  ticket?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "profile_notification" */
export enum ProfileNotificationSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NotificationId = 'notification_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Receipt = 'receipt',
  /** column name */
  Response = 'response',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "profile_notification" */
export type ProfileNotificationSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  notification_id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  receipt?: InputMaybe<Scalars['jsonb']>;
  response?: InputMaybe<Scalars['jsonb']>;
  ticket?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "profile_notification" */
export enum ProfileNotificationUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NotificationId = 'notification_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Receipt = 'receipt',
  /** column name */
  Response = 'response',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: ApplicationsAggregate;
  /** An object relationship */
  conversation?: Maybe<Conversations>;
  conversation_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "is_online" */
  is_online?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['geography']>;
  /** An array relationship */
  profile_companies: Array<ProfileCompany>;
  /** An aggregate relationship */
  profile_companies_aggregate: ProfileCompanyAggregate;
  /** An array relationship */
  profile_notifications: Array<ProfileNotification>;
  /** An aggregate relationship */
  profile_notifications_aggregate: ProfileNotificationAggregate;
  /** An array relationship */
  resumes: Array<Resumes>;
  /** An aggregate relationship */
  resumes_aggregate: ResumesAggregate;
  settings?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  tenant?: Maybe<Tenants>;
  tenant_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  view_as: Scalars['String'];
};

/** columns and relationships of "profiles" */
export type ProfilesApplicationsArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesApplicationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesProfileCompaniesArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesProfileCompaniesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesProfileNotificationsArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesProfileNotificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesResumesArgs = {
  distinct_on?: InputMaybe<Array<ResumesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy>>;
  where?: InputMaybe<ResumesBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesResumesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ResumesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy>>;
  where?: InputMaybe<ResumesBoolExp>;
};

/** columns and relationships of "profiles" */
export type ProfilesSettingsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "profiles" */
export type ProfilesAggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<ProfilesAggregateFields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type ProfilesAggregateFields = {
  __typename?: 'profiles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ProfilesMaxFields>;
  min?: Maybe<ProfilesMinFields>;
};

/** aggregate fields of "profiles" */
export type ProfilesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProfilesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profiles" */
export type ProfilesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProfilesMaxOrderBy>;
  min?: InputMaybe<ProfilesMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ProfilesAppendInput = {
  settings?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "profiles" */
export type ProfilesArrRelInsertInput = {
  data: Array<ProfilesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ProfilesOnConflict>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type ProfilesBoolExp = {
  _and?: InputMaybe<Array<ProfilesBoolExp>>;
  _not?: InputMaybe<ProfilesBoolExp>;
  _or?: InputMaybe<Array<ProfilesBoolExp>>;
  applications?: InputMaybe<ApplicationsBoolExp>;
  conversation?: InputMaybe<ConversationsBoolExp>;
  conversation_id?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  is_online?: InputMaybe<BooleanComparisonExp>;
  location?: InputMaybe<GeographyComparisonExp>;
  profile_companies?: InputMaybe<ProfileCompanyBoolExp>;
  profile_notifications?: InputMaybe<ProfileNotificationBoolExp>;
  resumes?: InputMaybe<ResumesBoolExp>;
  settings?: InputMaybe<JsonbComparisonExp>;
  tenant?: InputMaybe<TenantsBoolExp>;
  tenant_id?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
  view_as?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "profiles" */
export enum ProfilesConstraint {
  /** unique or primary key constraint */
  ProfilePkey = 'profile_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ProfilesDeleteAtPathInput = {
  settings?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ProfilesDeleteElemInput = {
  settings?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ProfilesDeleteKeyInput = {
  settings?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "profiles" */
export type ProfilesInsertInput = {
  applications?: InputMaybe<ApplicationsArrRelInsertInput>;
  conversation?: InputMaybe<ConversationsObjRelInsertInput>;
  conversation_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  profile_companies?: InputMaybe<ProfileCompanyArrRelInsertInput>;
  profile_notifications?: InputMaybe<ProfileNotificationArrRelInsertInput>;
  resumes?: InputMaybe<ResumesArrRelInsertInput>;
  settings?: InputMaybe<Scalars['jsonb']>;
  tenant?: InputMaybe<TenantsObjRelInsertInput>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
  view_as?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ProfilesMaxFields = {
  __typename?: 'profiles_max_fields';
  conversation_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  view_as?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "profiles" */
export type ProfilesMaxOrderBy = {
  conversation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  view_as?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProfilesMinFields = {
  __typename?: 'profiles_min_fields';
  conversation_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  view_as?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "profiles" */
export type ProfilesMinOrderBy = {
  conversation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  view_as?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "profiles" */
export type ProfilesMutationResponse = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** input type for inserting object relation for remote table "profiles" */
export type ProfilesObjRelInsertInput = {
  data: ProfilesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ProfilesOnConflict>;
};

/** on_conflict condition type for table "profiles" */
export type ProfilesOnConflict = {
  constraint: ProfilesConstraint;
  update_columns?: Array<ProfilesUpdateColumn>;
  where?: InputMaybe<ProfilesBoolExp>;
};

/** Ordering options when selecting data from "profiles". */
export type ProfilesOrderBy = {
  applications_aggregate?: InputMaybe<ApplicationsAggregateOrderBy>;
  conversation?: InputMaybe<ConversationsOrderBy>;
  conversation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_online?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  profile_companies_aggregate?: InputMaybe<ProfileCompanyAggregateOrderBy>;
  profile_notifications_aggregate?: InputMaybe<ProfileNotificationAggregateOrderBy>;
  resumes_aggregate?: InputMaybe<ResumesAggregateOrderBy>;
  settings?: InputMaybe<OrderBy>;
  tenant?: InputMaybe<TenantsOrderBy>;
  tenant_id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
  view_as?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: profiles */
export type ProfilesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ProfilesPrependInput = {
  settings?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "profiles" */
export enum ProfilesSelectColumn {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Settings = 'settings',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  ViewAs = 'view_as',
}

/** input type for updating data in table "profiles" */
export type ProfilesSetInput = {
  conversation_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  settings?: InputMaybe<Scalars['jsonb']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  view_as?: InputMaybe<Scalars['String']>;
};

/** update columns of table "profiles" */
export enum ProfilesUpdateColumn {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Settings = 'settings',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  ViewAs = 'view_as',
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: AddressesAggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "benefits" */
  benefits: Array<Benefits>;
  /** fetch aggregated fields from the table: "benefits" */
  benefits_aggregate: BenefitsAggregate;
  /** fetch data from the table: "benefits" using primary key columns */
  benefits_by_pk?: Maybe<Benefits>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** An array relationship */
  certifications: Array<Certifications>;
  /** An aggregate relationship */
  certifications_aggregate: CertificationsAggregate;
  /** fetch data from the table: "certifications" using primary key columns */
  certifications_by_pk?: Maybe<Certifications>;
  /** An array relationship */
  companies: Array<Companies>;
  /** An aggregate relationship */
  companies_aggregate: CompaniesAggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "company_address" */
  company_address: Array<CompanyAddress>;
  /** fetch aggregated fields from the table: "company_address" */
  company_address_aggregate: CompanyAddressAggregate;
  /** fetch data from the table: "company_address" using primary key columns */
  company_address_by_pk?: Maybe<CompanyAddress>;
  /** fetch data from the table: "company_sizes" */
  company_sizes: Array<CompanySizes>;
  /** fetch aggregated fields from the table: "company_sizes" */
  company_sizes_aggregate: CompanySizesAggregate;
  /** fetch data from the table: "company_sizes" using primary key columns */
  company_sizes_by_pk?: Maybe<CompanySizes>;
  /** fetch data from the table: "compensation_units" */
  compensation_units: Array<CompensationUnits>;
  /** fetch aggregated fields from the table: "compensation_units" */
  compensation_units_aggregate: CompensationUnitsAggregate;
  /** fetch data from the table: "compensation_units" using primary key columns */
  compensation_units_by_pk?: Maybe<CompensationUnits>;
  /** An array relationship */
  conversations: Array<Conversations>;
  /** An aggregate relationship */
  conversations_aggregate: ConversationsAggregate;
  /** fetch data from the table: "conversations" using primary key columns */
  conversations_by_pk?: Maybe<Conversations>;
  /** fetch data from the table: "data_usages" */
  data_usages: Array<DataUsages>;
  /** fetch aggregated fields from the table: "data_usages" */
  data_usages_aggregate: DataUsagesAggregate;
  /** fetch data from the table: "data_usages" using primary key columns */
  data_usages_by_pk?: Maybe<DataUsages>;
  /** fetch data from the table: "education_levels" */
  education_levels: Array<EducationLevels>;
  /** fetch aggregated fields from the table: "education_levels" */
  education_levels_aggregate: EducationLevelsAggregate;
  /** fetch data from the table: "education_levels" using primary key columns */
  education_levels_by_pk?: Maybe<EducationLevels>;
  /** An array relationship */
  educations: Array<Educations>;
  /** An aggregate relationship */
  educations_aggregate: EducationsAggregate;
  /** fetch data from the table: "educations" using primary key columns */
  educations_by_pk?: Maybe<Educations>;
  /** fetch data from the table: "employment_types" */
  employment_types: Array<EmploymentTypes>;
  /** fetch aggregated fields from the table: "employment_types" */
  employment_types_aggregate: EmploymentTypesAggregate;
  /** fetch data from the table: "employment_types" using primary key columns */
  employment_types_by_pk?: Maybe<EmploymentTypes>;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: ExperiencesAggregate;
  /** fetch data from the table: "experiences" using primary key columns */
  experiences_by_pk?: Maybe<Experiences>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "info_usages" */
  info_usages: Array<InfoUsages>;
  /** fetch aggregated fields from the table: "info_usages" */
  info_usages_aggregate: InfoUsagesAggregate;
  /** fetch data from the table: "info_usages" using primary key columns */
  info_usages_by_pk?: Maybe<InfoUsages>;
  /** An array relationship */
  jobs: Array<Jobs>;
  /** An aggregate relationship */
  jobs_aggregate: JobsAggregate;
  /** fetch data from the table: "jobs" using primary key columns */
  jobs_by_pk?: Maybe<Jobs>;
  /** execute function "jobs_nearby" which returns "jobs" */
  jobs_nearby: Array<Jobs>;
  /** execute function "jobs_nearby" and query aggregates on result of table type "jobs" */
  jobs_nearby_aggregate: JobsAggregate;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: MessagesAggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: NotificationsAggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "profile_company" */
  profile_company: Array<ProfileCompany>;
  /** fetch aggregated fields from the table: "profile_company" */
  profile_company_aggregate: ProfileCompanyAggregate;
  /** fetch data from the table: "profile_company" using primary key columns */
  profile_company_by_pk?: Maybe<ProfileCompany>;
  /** fetch data from the table: "profile_notification" */
  profile_notification: Array<ProfileNotification>;
  /** fetch aggregated fields from the table: "profile_notification" */
  profile_notification_aggregate: ProfileNotificationAggregate;
  /** fetch data from the table: "profile_notification" using primary key columns */
  profile_notification_by_pk?: Maybe<ProfileNotification>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: ProfilesAggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** An array relationship */
  resumes: Array<Resumes>;
  /** An aggregate relationship */
  resumes_aggregate: ResumesAggregate;
  /** fetch data from the table: "resumes" using primary key columns */
  resumes_by_pk?: Maybe<Resumes>;
  /** fetch data from the table: "tenants" */
  tenants: Array<Tenants>;
  /** fetch aggregated fields from the table: "tenants" */
  tenants_aggregate: TenantsAggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  userAggregate: UsersAggregate;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** An array relationship */
  volunteers: Array<Volunteers>;
  /** An aggregate relationship */
  volunteers_aggregate: VolunteersAggregate;
  /** fetch data from the table: "volunteers" using primary key columns */
  volunteers_by_pk?: Maybe<Volunteers>;
};

export type QueryRootAddressesArgs = {
  distinct_on?: InputMaybe<Array<AddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AddressesOrderBy>>;
  where?: InputMaybe<AddressesBoolExp>;
};

export type QueryRootAddressesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AddressesOrderBy>>;
  where?: InputMaybe<AddressesBoolExp>;
};

export type QueryRootAddressesByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootApplicationsArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

export type QueryRootApplicationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

export type QueryRootApplicationsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootAuthProviderArgs = {
  id: Scalars['String'];
};

export type QueryRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};

export type QueryRootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

export type QueryRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

export type QueryRootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

export type QueryRootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

export type QueryRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};

export type QueryRootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

export type QueryRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

export type QueryRootAuthRoleArgs = {
  role: Scalars['String'];
};

export type QueryRootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

export type QueryRootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

export type QueryRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};

export type QueryRootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

export type QueryRootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

export type QueryRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};

export type QueryRootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

export type QueryRootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

export type QueryRootBenefitsArgs = {
  distinct_on?: InputMaybe<Array<BenefitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BenefitsOrderBy>>;
  where?: InputMaybe<BenefitsBoolExp>;
};

export type QueryRootBenefitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BenefitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BenefitsOrderBy>>;
  where?: InputMaybe<BenefitsBoolExp>;
};

export type QueryRootBenefitsByPkArgs = {
  value: Scalars['String'];
};

export type QueryRootBucketArgs = {
  id: Scalars['String'];
};

export type QueryRootBucketsArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};

export type QueryRootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};

export type QueryRootCertificationsArgs = {
  distinct_on?: InputMaybe<Array<CertificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CertificationsOrderBy>>;
  where?: InputMaybe<CertificationsBoolExp>;
};

export type QueryRootCertificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CertificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CertificationsOrderBy>>;
  where?: InputMaybe<CertificationsBoolExp>;
};

export type QueryRootCertificationsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<CompaniesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompaniesOrderBy>>;
  where?: InputMaybe<CompaniesBoolExp>;
};

export type QueryRootCompaniesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompaniesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompaniesOrderBy>>;
  where?: InputMaybe<CompaniesBoolExp>;
};

export type QueryRootCompaniesByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootCompanyAddressArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

export type QueryRootCompanyAddressAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

export type QueryRootCompanyAddressByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootCompanySizesArgs = {
  distinct_on?: InputMaybe<Array<CompanySizesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanySizesOrderBy>>;
  where?: InputMaybe<CompanySizesBoolExp>;
};

export type QueryRootCompanySizesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompanySizesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanySizesOrderBy>>;
  where?: InputMaybe<CompanySizesBoolExp>;
};

export type QueryRootCompanySizesByPkArgs = {
  value: Scalars['String'];
};

export type QueryRootCompensationUnitsArgs = {
  distinct_on?: InputMaybe<Array<CompensationUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompensationUnitsOrderBy>>;
  where?: InputMaybe<CompensationUnitsBoolExp>;
};

export type QueryRootCompensationUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompensationUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompensationUnitsOrderBy>>;
  where?: InputMaybe<CompensationUnitsBoolExp>;
};

export type QueryRootCompensationUnitsByPkArgs = {
  value: Scalars['String'];
};

export type QueryRootConversationsArgs = {
  distinct_on?: InputMaybe<Array<ConversationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConversationsOrderBy>>;
  where?: InputMaybe<ConversationsBoolExp>;
};

export type QueryRootConversationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ConversationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConversationsOrderBy>>;
  where?: InputMaybe<ConversationsBoolExp>;
};

export type QueryRootConversationsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootDataUsagesArgs = {
  distinct_on?: InputMaybe<Array<DataUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DataUsagesOrderBy>>;
  where?: InputMaybe<DataUsagesBoolExp>;
};

export type QueryRootDataUsagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DataUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DataUsagesOrderBy>>;
  where?: InputMaybe<DataUsagesBoolExp>;
};

export type QueryRootDataUsagesByPkArgs = {
  value: Scalars['String'];
};

export type QueryRootEducationLevelsArgs = {
  distinct_on?: InputMaybe<Array<EducationLevelsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationLevelsOrderBy>>;
  where?: InputMaybe<EducationLevelsBoolExp>;
};

export type QueryRootEducationLevelsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EducationLevelsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationLevelsOrderBy>>;
  where?: InputMaybe<EducationLevelsBoolExp>;
};

export type QueryRootEducationLevelsByPkArgs = {
  value: Scalars['String'];
};

export type QueryRootEducationsArgs = {
  distinct_on?: InputMaybe<Array<EducationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationsOrderBy>>;
  where?: InputMaybe<EducationsBoolExp>;
};

export type QueryRootEducationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EducationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationsOrderBy>>;
  where?: InputMaybe<EducationsBoolExp>;
};

export type QueryRootEducationsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootEmploymentTypesArgs = {
  distinct_on?: InputMaybe<Array<EmploymentTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmploymentTypesOrderBy>>;
  where?: InputMaybe<EmploymentTypesBoolExp>;
};

export type QueryRootEmploymentTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<EmploymentTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmploymentTypesOrderBy>>;
  where?: InputMaybe<EmploymentTypesBoolExp>;
};

export type QueryRootEmploymentTypesByPkArgs = {
  value: Scalars['String'];
};

export type QueryRootExperiencesArgs = {
  distinct_on?: InputMaybe<Array<ExperiencesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExperiencesOrderBy>>;
  where?: InputMaybe<ExperiencesBoolExp>;
};

export type QueryRootExperiencesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExperiencesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExperiencesOrderBy>>;
  where?: InputMaybe<ExperiencesBoolExp>;
};

export type QueryRootExperiencesByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootFileArgs = {
  id: Scalars['uuid'];
};

export type QueryRootFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type QueryRootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type QueryRootInfoUsagesArgs = {
  distinct_on?: InputMaybe<Array<InfoUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InfoUsagesOrderBy>>;
  where?: InputMaybe<InfoUsagesBoolExp>;
};

export type QueryRootInfoUsagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<InfoUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InfoUsagesOrderBy>>;
  where?: InputMaybe<InfoUsagesBoolExp>;
};

export type QueryRootInfoUsagesByPkArgs = {
  value: Scalars['String'];
};

export type QueryRootJobsArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type QueryRootJobsAggregateArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type QueryRootJobsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootJobsNearbyArgs = {
  args: JobsNearbyArgs;
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type QueryRootJobsNearbyAggregateArgs = {
  args: JobsNearbyArgs;
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type QueryRootMessagesArgs = {
  distinct_on?: InputMaybe<Array<MessagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy>>;
  where?: InputMaybe<MessagesBoolExp>;
};

export type QueryRootMessagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<MessagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy>>;
  where?: InputMaybe<MessagesBoolExp>;
};

export type QueryRootMessagesByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};

export type QueryRootNotificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};

export type QueryRootNotificationsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootProfileCompanyArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

export type QueryRootProfileCompanyAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

export type QueryRootProfileCompanyByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootProfileNotificationArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

export type QueryRootProfileNotificationAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

export type QueryRootProfileNotificationByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootProfilesArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

export type QueryRootProfilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

export type QueryRootProfilesByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootResumesArgs = {
  distinct_on?: InputMaybe<Array<ResumesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy>>;
  where?: InputMaybe<ResumesBoolExp>;
};

export type QueryRootResumesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ResumesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy>>;
  where?: InputMaybe<ResumesBoolExp>;
};

export type QueryRootResumesByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootTenantsArgs = {
  distinct_on?: InputMaybe<Array<TenantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TenantsOrderBy>>;
  where?: InputMaybe<TenantsBoolExp>;
};

export type QueryRootTenantsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TenantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TenantsOrderBy>>;
  where?: InputMaybe<TenantsBoolExp>;
};

export type QueryRootTenantsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootUserArgs = {
  id: Scalars['uuid'];
};

export type QueryRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type QueryRootVolunteersArgs = {
  distinct_on?: InputMaybe<Array<VolunteersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VolunteersOrderBy>>;
  where?: InputMaybe<VolunteersBoolExp>;
};

export type QueryRootVolunteersAggregateArgs = {
  distinct_on?: InputMaybe<Array<VolunteersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VolunteersOrderBy>>;
  where?: InputMaybe<VolunteersBoolExp>;
};

export type QueryRootVolunteersByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "resumes" */
export type Resumes = {
  __typename?: 'resumes';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: ApplicationsAggregate;
  /** An array relationship */
  certifications: Array<Certifications>;
  /** An aggregate relationship */
  certifications_aggregate: CertificationsAggregate;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  educations: Array<Educations>;
  /** An aggregate relationship */
  educations_aggregate: EducationsAggregate;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: ExperiencesAggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid'];
  status: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An array relationship */
  volunteers: Array<Volunteers>;
  /** An aggregate relationship */
  volunteers_aggregate: VolunteersAggregate;
};

/** columns and relationships of "resumes" */
export type ResumesApplicationsArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesApplicationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesCertificationsArgs = {
  distinct_on?: InputMaybe<Array<CertificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CertificationsOrderBy>>;
  where?: InputMaybe<CertificationsBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesCertificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CertificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CertificationsOrderBy>>;
  where?: InputMaybe<CertificationsBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesEducationsArgs = {
  distinct_on?: InputMaybe<Array<EducationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationsOrderBy>>;
  where?: InputMaybe<EducationsBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesEducationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EducationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationsOrderBy>>;
  where?: InputMaybe<EducationsBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesExperiencesArgs = {
  distinct_on?: InputMaybe<Array<ExperiencesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExperiencesOrderBy>>;
  where?: InputMaybe<ExperiencesBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesExperiencesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExperiencesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExperiencesOrderBy>>;
  where?: InputMaybe<ExperiencesBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesVolunteersArgs = {
  distinct_on?: InputMaybe<Array<VolunteersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VolunteersOrderBy>>;
  where?: InputMaybe<VolunteersBoolExp>;
};

/** columns and relationships of "resumes" */
export type ResumesVolunteersAggregateArgs = {
  distinct_on?: InputMaybe<Array<VolunteersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VolunteersOrderBy>>;
  where?: InputMaybe<VolunteersBoolExp>;
};

/** aggregated selection of "resumes" */
export type ResumesAggregate = {
  __typename?: 'resumes_aggregate';
  aggregate?: Maybe<ResumesAggregateFields>;
  nodes: Array<Resumes>;
};

/** aggregate fields of "resumes" */
export type ResumesAggregateFields = {
  __typename?: 'resumes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ResumesMaxFields>;
  min?: Maybe<ResumesMinFields>;
};

/** aggregate fields of "resumes" */
export type ResumesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ResumesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "resumes" */
export type ResumesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ResumesMaxOrderBy>;
  min?: InputMaybe<ResumesMinOrderBy>;
};

/** input type for inserting array relation for remote table "resumes" */
export type ResumesArrRelInsertInput = {
  data: Array<ResumesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ResumesOnConflict>;
};

/** Boolean expression to filter rows from the table "resumes". All fields are combined with a logical 'AND'. */
export type ResumesBoolExp = {
  _and?: InputMaybe<Array<ResumesBoolExp>>;
  _not?: InputMaybe<ResumesBoolExp>;
  _or?: InputMaybe<Array<ResumesBoolExp>>;
  applications?: InputMaybe<ApplicationsBoolExp>;
  certifications?: InputMaybe<CertificationsBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  educations?: InputMaybe<EducationsBoolExp>;
  experiences?: InputMaybe<ExperiencesBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  profile?: InputMaybe<ProfilesBoolExp>;
  profile_id?: InputMaybe<UuidComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  summary?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
  volunteers?: InputMaybe<VolunteersBoolExp>;
};

/** unique or primary key constraints on table "resumes" */
export enum ResumesConstraint {
  /** unique or primary key constraint */
  ResumesPkey = 'resumes_pkey',
}

/** input type for inserting data into table "resumes" */
export type ResumesInsertInput = {
  applications?: InputMaybe<ApplicationsArrRelInsertInput>;
  certifications?: InputMaybe<CertificationsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  educations?: InputMaybe<EducationsArrRelInsertInput>;
  experiences?: InputMaybe<ExperiencesArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  profile?: InputMaybe<ProfilesObjRelInsertInput>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
  volunteers?: InputMaybe<VolunteersArrRelInsertInput>;
};

/** aggregate max on columns */
export type ResumesMaxFields = {
  __typename?: 'resumes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "resumes" */
export type ResumesMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ResumesMinFields = {
  __typename?: 'resumes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  profile_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "resumes" */
export type ResumesMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "resumes" */
export type ResumesMutationResponse = {
  __typename?: 'resumes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Resumes>;
};

/** input type for inserting object relation for remote table "resumes" */
export type ResumesObjRelInsertInput = {
  data: ResumesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ResumesOnConflict>;
};

/** on_conflict condition type for table "resumes" */
export type ResumesOnConflict = {
  constraint: ResumesConstraint;
  update_columns?: Array<ResumesUpdateColumn>;
  where?: InputMaybe<ResumesBoolExp>;
};

/** Ordering options when selecting data from "resumes". */
export type ResumesOrderBy = {
  applications_aggregate?: InputMaybe<ApplicationsAggregateOrderBy>;
  certifications_aggregate?: InputMaybe<CertificationsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  educations_aggregate?: InputMaybe<EducationsAggregateOrderBy>;
  experiences_aggregate?: InputMaybe<ExperiencesAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfilesOrderBy>;
  profile_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
  volunteers_aggregate?: InputMaybe<VolunteersAggregateOrderBy>;
};

/** primary key columns input for table: resumes */
export type ResumesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "resumes" */
export enum ResumesSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Status = 'status',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "resumes" */
export type ResumesSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  profile_id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "resumes" */
export enum ResumesUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Status = 'status',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type StDWithinGeographyInput = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: InputMaybe<Scalars['Boolean']>;
};

export type StDWithinInput = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: AddressesAggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "benefits" */
  benefits: Array<Benefits>;
  /** fetch aggregated fields from the table: "benefits" */
  benefits_aggregate: BenefitsAggregate;
  /** fetch data from the table: "benefits" using primary key columns */
  benefits_by_pk?: Maybe<Benefits>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** An array relationship */
  certifications: Array<Certifications>;
  /** An aggregate relationship */
  certifications_aggregate: CertificationsAggregate;
  /** fetch data from the table: "certifications" using primary key columns */
  certifications_by_pk?: Maybe<Certifications>;
  /** An array relationship */
  companies: Array<Companies>;
  /** An aggregate relationship */
  companies_aggregate: CompaniesAggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "company_address" */
  company_address: Array<CompanyAddress>;
  /** fetch aggregated fields from the table: "company_address" */
  company_address_aggregate: CompanyAddressAggregate;
  /** fetch data from the table: "company_address" using primary key columns */
  company_address_by_pk?: Maybe<CompanyAddress>;
  /** fetch data from the table: "company_sizes" */
  company_sizes: Array<CompanySizes>;
  /** fetch aggregated fields from the table: "company_sizes" */
  company_sizes_aggregate: CompanySizesAggregate;
  /** fetch data from the table: "company_sizes" using primary key columns */
  company_sizes_by_pk?: Maybe<CompanySizes>;
  /** fetch data from the table: "compensation_units" */
  compensation_units: Array<CompensationUnits>;
  /** fetch aggregated fields from the table: "compensation_units" */
  compensation_units_aggregate: CompensationUnitsAggregate;
  /** fetch data from the table: "compensation_units" using primary key columns */
  compensation_units_by_pk?: Maybe<CompensationUnits>;
  /** An array relationship */
  conversations: Array<Conversations>;
  /** An aggregate relationship */
  conversations_aggregate: ConversationsAggregate;
  /** fetch data from the table: "conversations" using primary key columns */
  conversations_by_pk?: Maybe<Conversations>;
  /** fetch data from the table: "data_usages" */
  data_usages: Array<DataUsages>;
  /** fetch aggregated fields from the table: "data_usages" */
  data_usages_aggregate: DataUsagesAggregate;
  /** fetch data from the table: "data_usages" using primary key columns */
  data_usages_by_pk?: Maybe<DataUsages>;
  /** fetch data from the table: "education_levels" */
  education_levels: Array<EducationLevels>;
  /** fetch aggregated fields from the table: "education_levels" */
  education_levels_aggregate: EducationLevelsAggregate;
  /** fetch data from the table: "education_levels" using primary key columns */
  education_levels_by_pk?: Maybe<EducationLevels>;
  /** An array relationship */
  educations: Array<Educations>;
  /** An aggregate relationship */
  educations_aggregate: EducationsAggregate;
  /** fetch data from the table: "educations" using primary key columns */
  educations_by_pk?: Maybe<Educations>;
  /** fetch data from the table: "employment_types" */
  employment_types: Array<EmploymentTypes>;
  /** fetch aggregated fields from the table: "employment_types" */
  employment_types_aggregate: EmploymentTypesAggregate;
  /** fetch data from the table: "employment_types" using primary key columns */
  employment_types_by_pk?: Maybe<EmploymentTypes>;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: ExperiencesAggregate;
  /** fetch data from the table: "experiences" using primary key columns */
  experiences_by_pk?: Maybe<Experiences>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "info_usages" */
  info_usages: Array<InfoUsages>;
  /** fetch aggregated fields from the table: "info_usages" */
  info_usages_aggregate: InfoUsagesAggregate;
  /** fetch data from the table: "info_usages" using primary key columns */
  info_usages_by_pk?: Maybe<InfoUsages>;
  /** An array relationship */
  jobs: Array<Jobs>;
  /** An aggregate relationship */
  jobs_aggregate: JobsAggregate;
  /** fetch data from the table: "jobs" using primary key columns */
  jobs_by_pk?: Maybe<Jobs>;
  /** execute function "jobs_nearby" which returns "jobs" */
  jobs_nearby: Array<Jobs>;
  /** execute function "jobs_nearby" and query aggregates on result of table type "jobs" */
  jobs_nearby_aggregate: JobsAggregate;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: MessagesAggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: NotificationsAggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "profile_company" */
  profile_company: Array<ProfileCompany>;
  /** fetch aggregated fields from the table: "profile_company" */
  profile_company_aggregate: ProfileCompanyAggregate;
  /** fetch data from the table: "profile_company" using primary key columns */
  profile_company_by_pk?: Maybe<ProfileCompany>;
  /** fetch data from the table: "profile_notification" */
  profile_notification: Array<ProfileNotification>;
  /** fetch aggregated fields from the table: "profile_notification" */
  profile_notification_aggregate: ProfileNotificationAggregate;
  /** fetch data from the table: "profile_notification" using primary key columns */
  profile_notification_by_pk?: Maybe<ProfileNotification>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: ProfilesAggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** An array relationship */
  resumes: Array<Resumes>;
  /** An aggregate relationship */
  resumes_aggregate: ResumesAggregate;
  /** fetch data from the table: "resumes" using primary key columns */
  resumes_by_pk?: Maybe<Resumes>;
  /** fetch data from the table: "tenants" */
  tenants: Array<Tenants>;
  /** fetch aggregated fields from the table: "tenants" */
  tenants_aggregate: TenantsAggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  userAggregate: UsersAggregate;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** An array relationship */
  volunteers: Array<Volunteers>;
  /** An aggregate relationship */
  volunteers_aggregate: VolunteersAggregate;
  /** fetch data from the table: "volunteers" using primary key columns */
  volunteers_by_pk?: Maybe<Volunteers>;
};

export type SubscriptionRootAddressesArgs = {
  distinct_on?: InputMaybe<Array<AddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AddressesOrderBy>>;
  where?: InputMaybe<AddressesBoolExp>;
};

export type SubscriptionRootAddressesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AddressesOrderBy>>;
  where?: InputMaybe<AddressesBoolExp>;
};

export type SubscriptionRootAddressesByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootApplicationsArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

export type SubscriptionRootApplicationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

export type SubscriptionRootApplicationsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootAuthProviderArgs = {
  id: Scalars['String'];
};

export type SubscriptionRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

export type SubscriptionRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

export type SubscriptionRootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

export type SubscriptionRootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

export type SubscriptionRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};

export type SubscriptionRootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

export type SubscriptionRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

export type SubscriptionRootAuthRoleArgs = {
  role: Scalars['String'];
};

export type SubscriptionRootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

export type SubscriptionRootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

export type SubscriptionRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

export type SubscriptionRootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

export type SubscriptionRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

export type SubscriptionRootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

export type SubscriptionRootBenefitsArgs = {
  distinct_on?: InputMaybe<Array<BenefitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BenefitsOrderBy>>;
  where?: InputMaybe<BenefitsBoolExp>;
};

export type SubscriptionRootBenefitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BenefitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BenefitsOrderBy>>;
  where?: InputMaybe<BenefitsBoolExp>;
};

export type SubscriptionRootBenefitsByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRootBucketArgs = {
  id: Scalars['String'];
};

export type SubscriptionRootBucketsArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};

export type SubscriptionRootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};

export type SubscriptionRootCertificationsArgs = {
  distinct_on?: InputMaybe<Array<CertificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CertificationsOrderBy>>;
  where?: InputMaybe<CertificationsBoolExp>;
};

export type SubscriptionRootCertificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CertificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CertificationsOrderBy>>;
  where?: InputMaybe<CertificationsBoolExp>;
};

export type SubscriptionRootCertificationsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<CompaniesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompaniesOrderBy>>;
  where?: InputMaybe<CompaniesBoolExp>;
};

export type SubscriptionRootCompaniesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompaniesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompaniesOrderBy>>;
  where?: InputMaybe<CompaniesBoolExp>;
};

export type SubscriptionRootCompaniesByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootCompanyAddressArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

export type SubscriptionRootCompanyAddressAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompanyAddressSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanyAddressOrderBy>>;
  where?: InputMaybe<CompanyAddressBoolExp>;
};

export type SubscriptionRootCompanyAddressByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootCompanySizesArgs = {
  distinct_on?: InputMaybe<Array<CompanySizesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanySizesOrderBy>>;
  where?: InputMaybe<CompanySizesBoolExp>;
};

export type SubscriptionRootCompanySizesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompanySizesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompanySizesOrderBy>>;
  where?: InputMaybe<CompanySizesBoolExp>;
};

export type SubscriptionRootCompanySizesByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRootCompensationUnitsArgs = {
  distinct_on?: InputMaybe<Array<CompensationUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompensationUnitsOrderBy>>;
  where?: InputMaybe<CompensationUnitsBoolExp>;
};

export type SubscriptionRootCompensationUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompensationUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompensationUnitsOrderBy>>;
  where?: InputMaybe<CompensationUnitsBoolExp>;
};

export type SubscriptionRootCompensationUnitsByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRootConversationsArgs = {
  distinct_on?: InputMaybe<Array<ConversationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConversationsOrderBy>>;
  where?: InputMaybe<ConversationsBoolExp>;
};

export type SubscriptionRootConversationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ConversationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConversationsOrderBy>>;
  where?: InputMaybe<ConversationsBoolExp>;
};

export type SubscriptionRootConversationsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootDataUsagesArgs = {
  distinct_on?: InputMaybe<Array<DataUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DataUsagesOrderBy>>;
  where?: InputMaybe<DataUsagesBoolExp>;
};

export type SubscriptionRootDataUsagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DataUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DataUsagesOrderBy>>;
  where?: InputMaybe<DataUsagesBoolExp>;
};

export type SubscriptionRootDataUsagesByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRootEducationLevelsArgs = {
  distinct_on?: InputMaybe<Array<EducationLevelsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationLevelsOrderBy>>;
  where?: InputMaybe<EducationLevelsBoolExp>;
};

export type SubscriptionRootEducationLevelsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EducationLevelsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationLevelsOrderBy>>;
  where?: InputMaybe<EducationLevelsBoolExp>;
};

export type SubscriptionRootEducationLevelsByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRootEducationsArgs = {
  distinct_on?: InputMaybe<Array<EducationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationsOrderBy>>;
  where?: InputMaybe<EducationsBoolExp>;
};

export type SubscriptionRootEducationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EducationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EducationsOrderBy>>;
  where?: InputMaybe<EducationsBoolExp>;
};

export type SubscriptionRootEducationsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootEmploymentTypesArgs = {
  distinct_on?: InputMaybe<Array<EmploymentTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmploymentTypesOrderBy>>;
  where?: InputMaybe<EmploymentTypesBoolExp>;
};

export type SubscriptionRootEmploymentTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<EmploymentTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmploymentTypesOrderBy>>;
  where?: InputMaybe<EmploymentTypesBoolExp>;
};

export type SubscriptionRootEmploymentTypesByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRootExperiencesArgs = {
  distinct_on?: InputMaybe<Array<ExperiencesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExperiencesOrderBy>>;
  where?: InputMaybe<ExperiencesBoolExp>;
};

export type SubscriptionRootExperiencesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExperiencesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ExperiencesOrderBy>>;
  where?: InputMaybe<ExperiencesBoolExp>;
};

export type SubscriptionRootExperiencesByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootFileArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type SubscriptionRootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type SubscriptionRootInfoUsagesArgs = {
  distinct_on?: InputMaybe<Array<InfoUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InfoUsagesOrderBy>>;
  where?: InputMaybe<InfoUsagesBoolExp>;
};

export type SubscriptionRootInfoUsagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<InfoUsagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<InfoUsagesOrderBy>>;
  where?: InputMaybe<InfoUsagesBoolExp>;
};

export type SubscriptionRootInfoUsagesByPkArgs = {
  value: Scalars['String'];
};

export type SubscriptionRootJobsArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type SubscriptionRootJobsAggregateArgs = {
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type SubscriptionRootJobsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootJobsNearbyArgs = {
  args: JobsNearbyArgs;
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type SubscriptionRootJobsNearbyAggregateArgs = {
  args: JobsNearbyArgs;
  distinct_on?: InputMaybe<Array<JobsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy>>;
  where?: InputMaybe<JobsBoolExp>;
};

export type SubscriptionRootMessagesArgs = {
  distinct_on?: InputMaybe<Array<MessagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy>>;
  where?: InputMaybe<MessagesBoolExp>;
};

export type SubscriptionRootMessagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<MessagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy>>;
  where?: InputMaybe<MessagesBoolExp>;
};

export type SubscriptionRootMessagesByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};

export type SubscriptionRootNotificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};

export type SubscriptionRootNotificationsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootProfileCompanyArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

export type SubscriptionRootProfileCompanyAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileCompanySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileCompanyOrderBy>>;
  where?: InputMaybe<ProfileCompanyBoolExp>;
};

export type SubscriptionRootProfileCompanyByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootProfileNotificationArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

export type SubscriptionRootProfileNotificationAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileNotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileNotificationOrderBy>>;
  where?: InputMaybe<ProfileNotificationBoolExp>;
};

export type SubscriptionRootProfileNotificationByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootProfilesArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

export type SubscriptionRootProfilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

export type SubscriptionRootProfilesByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootResumesArgs = {
  distinct_on?: InputMaybe<Array<ResumesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy>>;
  where?: InputMaybe<ResumesBoolExp>;
};

export type SubscriptionRootResumesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ResumesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy>>;
  where?: InputMaybe<ResumesBoolExp>;
};

export type SubscriptionRootResumesByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootTenantsArgs = {
  distinct_on?: InputMaybe<Array<TenantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TenantsOrderBy>>;
  where?: InputMaybe<TenantsBoolExp>;
};

export type SubscriptionRootTenantsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TenantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TenantsOrderBy>>;
  where?: InputMaybe<TenantsBoolExp>;
};

export type SubscriptionRootTenantsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootUserArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRootVolunteersArgs = {
  distinct_on?: InputMaybe<Array<VolunteersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VolunteersOrderBy>>;
  where?: InputMaybe<VolunteersBoolExp>;
};

export type SubscriptionRootVolunteersAggregateArgs = {
  distinct_on?: InputMaybe<Array<VolunteersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VolunteersOrderBy>>;
  where?: InputMaybe<VolunteersBoolExp>;
};

export type SubscriptionRootVolunteersByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "tenants" */
export type Tenants = {
  __typename?: 'tenants';
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: AddressesAggregate;
  /** An array relationship */
  companies: Array<Companies>;
  /** An aggregate relationship */
  companies_aggregate: CompaniesAggregate;
  created_at: Scalars['timestamptz'];
  data_usage: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: ProfilesAggregate;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "tenants" */
export type TenantsAddressesArgs = {
  distinct_on?: InputMaybe<Array<AddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AddressesOrderBy>>;
  where?: InputMaybe<AddressesBoolExp>;
};

/** columns and relationships of "tenants" */
export type TenantsAddressesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AddressesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AddressesOrderBy>>;
  where?: InputMaybe<AddressesBoolExp>;
};

/** columns and relationships of "tenants" */
export type TenantsCompaniesArgs = {
  distinct_on?: InputMaybe<Array<CompaniesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompaniesOrderBy>>;
  where?: InputMaybe<CompaniesBoolExp>;
};

/** columns and relationships of "tenants" */
export type TenantsCompaniesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CompaniesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompaniesOrderBy>>;
  where?: InputMaybe<CompaniesBoolExp>;
};

/** columns and relationships of "tenants" */
export type TenantsProfilesArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

/** columns and relationships of "tenants" */
export type TenantsProfilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfilesOrderBy>>;
  where?: InputMaybe<ProfilesBoolExp>;
};

/** aggregated selection of "tenants" */
export type TenantsAggregate = {
  __typename?: 'tenants_aggregate';
  aggregate?: Maybe<TenantsAggregateFields>;
  nodes: Array<Tenants>;
};

/** aggregate fields of "tenants" */
export type TenantsAggregateFields = {
  __typename?: 'tenants_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TenantsMaxFields>;
  min?: Maybe<TenantsMinFields>;
};

/** aggregate fields of "tenants" */
export type TenantsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TenantsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tenants". All fields are combined with a logical 'AND'. */
export type TenantsBoolExp = {
  _and?: InputMaybe<Array<TenantsBoolExp>>;
  _not?: InputMaybe<TenantsBoolExp>;
  _or?: InputMaybe<Array<TenantsBoolExp>>;
  addresses?: InputMaybe<AddressesBoolExp>;
  companies?: InputMaybe<CompaniesBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  data_usage?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  profiles?: InputMaybe<ProfilesBoolExp>;
  status?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "tenants" */
export enum TenantsConstraint {
  /** unique or primary key constraint */
  TenantsPkey = 'tenants_pkey',
}

/** input type for inserting data into table "tenants" */
export type TenantsInsertInput = {
  addresses?: InputMaybe<AddressesArrRelInsertInput>;
  companies?: InputMaybe<CompaniesArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data_usage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  profiles?: InputMaybe<ProfilesArrRelInsertInput>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TenantsMaxFields = {
  __typename?: 'tenants_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_usage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TenantsMinFields = {
  __typename?: 'tenants_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_usage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tenants" */
export type TenantsMutationResponse = {
  __typename?: 'tenants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenants>;
};

/** input type for inserting object relation for remote table "tenants" */
export type TenantsObjRelInsertInput = {
  data: TenantsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<TenantsOnConflict>;
};

/** on_conflict condition type for table "tenants" */
export type TenantsOnConflict = {
  constraint: TenantsConstraint;
  update_columns?: Array<TenantsUpdateColumn>;
  where?: InputMaybe<TenantsBoolExp>;
};

/** Ordering options when selecting data from "tenants". */
export type TenantsOrderBy = {
  addresses_aggregate?: InputMaybe<AddressesAggregateOrderBy>;
  companies_aggregate?: InputMaybe<CompaniesAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  data_usage?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profiles_aggregate?: InputMaybe<ProfilesAggregateOrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: tenants */
export type TenantsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "tenants" */
export enum TenantsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataUsage = 'data_usage',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "tenants" */
export type TenantsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data_usage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "tenants" */
export enum TenantsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataUsage = 'data_usage',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "auth.users" */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An object relationship */
  profile?: Maybe<Profiles>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokensAggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRolesAggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProvidersAggregate;
};

/** columns and relationships of "auth.users" */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "auth.users" */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

/** columns and relationships of "auth.users" */
export type UsersRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

/** columns and relationships of "auth.users" */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** columns and relationships of "auth.users" */
export type UsersRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** columns and relationships of "auth.users" */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** columns and relationships of "auth.users" */
export type UsersUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};

/** aggregate fields of "auth.users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type UsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersMaxOrderBy>;
  min?: InputMaybe<UsersMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UsersAppendInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  activeMfaType?: InputMaybe<StringComparisonExp>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  defaultRole?: InputMaybe<StringComparisonExp>;
  defaultRoleByRole?: InputMaybe<AuthRolesBoolExp>;
  disabled?: InputMaybe<BooleanComparisonExp>;
  displayName?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<CitextComparisonExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isAnonymous?: InputMaybe<BooleanComparisonExp>;
  lastSeen?: InputMaybe<TimestamptzComparisonExp>;
  locale?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  newEmail?: InputMaybe<CitextComparisonExp>;
  otpHash?: InputMaybe<StringComparisonExp>;
  otpHashExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  otpMethodLastUsed?: InputMaybe<StringComparisonExp>;
  passwordHash?: InputMaybe<StringComparisonExp>;
  phoneNumber?: InputMaybe<StringComparisonExp>;
  phoneNumberVerified?: InputMaybe<BooleanComparisonExp>;
  profile?: InputMaybe<ProfilesBoolExp>;
  refreshTokens?: InputMaybe<AuthRefreshTokensBoolExp>;
  roles?: InputMaybe<AuthUserRolesBoolExp>;
  ticket?: InputMaybe<StringComparisonExp>;
  ticketExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  totpSecret?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UsersDeleteAtPathInput = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UsersDeleteElemInput = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UsersDeleteKeyInput = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type UsersInsertInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  profile?: InputMaybe<ProfilesObjRelInsertInput>;
  refreshTokens?: InputMaybe<AuthRefreshTokensArrRelInsertInput>;
  roles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type UsersMaxOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type UsersMinOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "auth.users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "auth.users". */
export type UsersOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  defaultRoleByRole?: InputMaybe<AuthRolesOrderBy>;
  disabled?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isAnonymous?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  phoneNumberVerified?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfilesOrderBy>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokensAggregateOrderBy>;
  roles_aggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userProviders_aggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UsersPrependInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum UsersSelectColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "auth.users" */
export type UsersSetInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum UsersUpdateColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "volunteers" */
export type Volunteers = {
  __typename?: 'volunteers';
  cause?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  organization_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  resume: Resumes;
  resume_id: Scalars['uuid'];
  role?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "volunteers" */
export type VolunteersAggregate = {
  __typename?: 'volunteers_aggregate';
  aggregate?: Maybe<VolunteersAggregateFields>;
  nodes: Array<Volunteers>;
};

/** aggregate fields of "volunteers" */
export type VolunteersAggregateFields = {
  __typename?: 'volunteers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VolunteersMaxFields>;
  min?: Maybe<VolunteersMinFields>;
};

/** aggregate fields of "volunteers" */
export type VolunteersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VolunteersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "volunteers" */
export type VolunteersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<VolunteersMaxOrderBy>;
  min?: InputMaybe<VolunteersMinOrderBy>;
};

/** input type for inserting array relation for remote table "volunteers" */
export type VolunteersArrRelInsertInput = {
  data: Array<VolunteersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<VolunteersOnConflict>;
};

/** Boolean expression to filter rows from the table "volunteers". All fields are combined with a logical 'AND'. */
export type VolunteersBoolExp = {
  _and?: InputMaybe<Array<VolunteersBoolExp>>;
  _not?: InputMaybe<VolunteersBoolExp>;
  _or?: InputMaybe<Array<VolunteersBoolExp>>;
  cause?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  end_date?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  organization_name?: InputMaybe<StringComparisonExp>;
  resume?: InputMaybe<ResumesBoolExp>;
  resume_id?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  start_date?: InputMaybe<TimestamptzComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "volunteers" */
export enum VolunteersConstraint {
  /** unique or primary key constraint */
  VolunteersPkey = 'volunteers_pkey',
}

/** input type for inserting data into table "volunteers" */
export type VolunteersInsertInput = {
  cause?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organization_name?: InputMaybe<Scalars['String']>;
  resume?: InputMaybe<ResumesObjRelInsertInput>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type VolunteersMaxFields = {
  __typename?: 'volunteers_max_fields';
  cause?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organization_name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "volunteers" */
export type VolunteersMaxOrderBy = {
  cause?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organization_name?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type VolunteersMinFields = {
  __typename?: 'volunteers_min_fields';
  cause?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organization_name?: Maybe<Scalars['String']>;
  resume_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "volunteers" */
export type VolunteersMinOrderBy = {
  cause?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organization_name?: InputMaybe<OrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "volunteers" */
export type VolunteersMutationResponse = {
  __typename?: 'volunteers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Volunteers>;
};

/** on_conflict condition type for table "volunteers" */
export type VolunteersOnConflict = {
  constraint: VolunteersConstraint;
  update_columns?: Array<VolunteersUpdateColumn>;
  where?: InputMaybe<VolunteersBoolExp>;
};

/** Ordering options when selecting data from "volunteers". */
export type VolunteersOrderBy = {
  cause?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organization_name?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumesOrderBy>;
  resume_id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: volunteers */
export type VolunteersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "volunteers" */
export enum VolunteersSelectColumn {
  /** column name */
  Cause = 'cause',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationName = 'organization_name',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  Role = 'role',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "volunteers" */
export type VolunteersSetInput = {
  cause?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organization_name?: InputMaybe<Scalars['String']>;
  resume_id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "volunteers" */
export enum VolunteersUpdateColumn {
  /** column name */
  Cause = 'cause',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationName = 'organization_name',
  /** column name */
  ResumeId = 'resume_id',
  /** column name */
  Role = 'role',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type ApplicationsAggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ApplicationsOrderBy> | ApplicationsOrderBy>;
  where?: InputMaybe<ApplicationsBoolExp>;
}>;

export type ApplicationsAggregateQuery = {
  __typename?: 'query_root';
  applications_aggregate: {
    __typename?: 'applications_aggregate';
    nodes: Array<{
      __typename?: 'applications';
      id: string;
      created_at: string;
      updated_at: string;
      user: { __typename?: 'users'; id: string; displayName: string };
      resume?: {
        __typename?: 'resumes';
        id: string;
        summary?: string | null;
      } | null;
      job?: {
        __typename?: 'jobs';
        id: string;
        company?: { __typename?: 'companies'; name: string } | null;
      } | null;
    }>;
  };
};

export type InsertApplicationsOneMutationVariables = Exact<{
  object: ApplicationsInsertInput;
}>;

export type InsertApplicationsOneMutation = {
  __typename?: 'mutation_root';
  insert_applications_one?: {
    __typename?: 'applications';
    id: string;
    created_at: string;
  } | null;
};

export type UpdateApplicationsMutationVariables = Exact<{
  where: ApplicationsBoolExp;
  _set: ApplicationsSetInput;
}>;

export type UpdateApplicationsMutation = {
  __typename?: 'mutation_root';
  update_applications?: {
    __typename?: 'applications_mutation_response';
    returning: Array<{
      __typename?: 'applications';
      id: string;
      updated_at: string;
    }>;
  } | null;
};

export type DeleteApplicationsByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteApplicationsByPkMutation = {
  __typename?: 'mutation_root';
  delete_applications_by_pk?: {
    __typename?: 'applications';
    id: string;
  } | null;
};

export type ApplicationsByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type ApplicationsByPkQuery = {
  __typename?: 'query_root';
  applications_by_pk?: {
    __typename?: 'applications';
    id: string;
    created_at: string;
    updated_at: string;
  } | null;
};

export type InsertCompaniesMutationVariables = Exact<{
  objects: Array<CompaniesInsertInput> | CompaniesInsertInput;
}>;

export type InsertCompaniesMutation = {
  __typename?: 'mutation_root';
  insert_companies?: {
    __typename?: 'companies_mutation_response';
    returning: Array<{
      __typename?: 'companies';
      id: string;
      created_at: string;
      updated_at: string;
      establish_date?: string | null;
      image?: string | null;
      name: string;
      size?: string | null;
      status: string;
      summary?: string | null;
      suspended: boolean;
      tenant_id: string;
    }>;
  } | null;
};

export type CompaniesAggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CompaniesOrderBy> | CompaniesOrderBy>;
  where?: InputMaybe<CompaniesBoolExp>;
}>;

export type CompaniesAggregateQuery = {
  __typename?: 'query_root';
  companies_aggregate: {
    __typename?: 'companies_aggregate';
    nodes: Array<{
      __typename?: 'companies';
      id: string;
      created_at: string;
      updated_at: string;
      establish_date?: string | null;
      image?: string | null;
      name: string;
      size?: string | null;
      status: string;
      summary?: string | null;
      suspended: boolean;
      tenant_id: string;
    }>;
  };
};

export type UpdateCompaniesMutationVariables = Exact<{
  where: CompaniesBoolExp;
  _set: CompaniesSetInput;
}>;

export type UpdateCompaniesMutation = {
  __typename?: 'mutation_root';
  update_companies?: {
    __typename?: 'companies_mutation_response';
    returning: Array<{
      __typename?: 'companies';
      id: string;
      name: string;
      updated_at: string;
    }>;
  } | null;
};

export type DeleteCompaniesByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteCompaniesByPkMutation = {
  __typename?: 'mutation_root';
  delete_companies_by_pk?: {
    __typename?: 'companies';
    id: string;
    name: string;
    status: string;
    summary?: string | null;
  } | null;
};

export type CompaniesByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type CompaniesByPkQuery = {
  __typename?: 'query_root';
  companies_by_pk?: {
    __typename?: 'companies';
    id: string;
    created_at: string;
    updated_at: string;
    establish_date?: string | null;
    image?: string | null;
    name: string;
    size?: string | null;
    status: string;
    summary?: string | null;
    suspended: boolean;
    tenant_id: string;
  } | null;
};

export type ConversationsByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type ConversationsByPkQuery = {
  __typename?: 'query_root';
  conversations_by_pk?: {
    __typename?: 'conversations';
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description?: string | null;
    status: string;
    company_id?: string | null;
    company?: { __typename?: 'companies'; id: string; name: string } | null;
  } | null;
};

export type ConversationsAggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConversationsOrderBy> | ConversationsOrderBy>;
  where?: InputMaybe<ConversationsBoolExp>;
}>;

export type ConversationsAggregateQuery = {
  __typename?: 'query_root';
  conversations_aggregate: {
    __typename?: 'conversations_aggregate';
    nodes: Array<{
      __typename?: 'conversations';
      id: string;
      created_at: string;
      updated_at: string;
      name: string;
      description?: string | null;
      status: string;
      company?: { __typename?: 'companies'; id: string; name: string } | null;
    }>;
  };
};

export type InsertConversationsOneMutationVariables = Exact<{
  object: ConversationsInsertInput;
}>;

export type InsertConversationsOneMutation = {
  __typename?: 'mutation_root';
  insert_conversations_one?: {
    __typename?: 'conversations';
    id: string;
    name: string;
    description?: string | null;
    created_at: string;
  } | null;
};

export type MessagesAggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy> | MessagesOrderBy>;
  where?: InputMaybe<MessagesBoolExp>;
}>;

export type MessagesAggregateQuery = {
  __typename?: 'query_root';
  messages_aggregate: {
    __typename?: 'messages_aggregate';
    nodes: Array<{
      __typename?: 'messages';
      id: string;
      created_at: string;
      audio?: string | null;
      content?: string | null;
      conversation_id?: string | null;
      image?: string | null;
      is_bot: boolean;
      status: string;
      user_id?: string | null;
      video?: string | null;
      conversation?: {
        __typename?: 'conversations';
        id: string;
        name: string;
      } | null;
      user?: {
        __typename?: 'users';
        id: string;
        displayName: string;
        email?: any | null;
      } | null;
    }>;
  };
};

export type MessagesSubscriptionSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MessagesOrderBy> | MessagesOrderBy>;
  where?: InputMaybe<MessagesBoolExp>;
}>;

export type MessagesSubscriptionSubscription = {
  __typename?: 'subscription_root';
  messages_aggregate: {
    __typename?: 'messages_aggregate';
    nodes: Array<{
      __typename?: 'messages';
      id: string;
      created_at: string;
      content?: string | null;
      user?: { __typename?: 'users'; id: string; displayName: string } | null;
    }>;
  };
};

export type InsertMessagesOneMutationVariables = Exact<{
  object: MessagesInsertInput;
}>;

export type InsertMessagesOneMutation = {
  __typename?: 'mutation_root';
  insert_messages_one?: {
    __typename?: 'messages';
    id: string;
    created_at: string;
    updated_at: string;
  } | null;
};

export type SearchQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tenant_id?: InputMaybe<UuidComparisonExp>;
  keywords?: InputMaybe<Scalars['String']>;
}>;

export type SearchQuery = {
  __typename?: 'query_root';
  companies_aggregate: {
    __typename?: 'companies_aggregate';
    aggregate?: {
      __typename?: 'companies_aggregate_fields';
      count: number;
    } | null;
    nodes: Array<{
      __typename?: 'companies';
      id: string;
      name: string;
      summary?: string | null;
    }>;
  };
  jobs_aggregate: {
    __typename?: 'jobs_aggregate';
    aggregate?: { __typename?: 'jobs_aggregate_fields'; count: number } | null;
    nodes: Array<{
      __typename?: 'jobs';
      id: string;
      title: string;
      description?: string | null;
    }>;
  };
  profiles_aggregate: {
    __typename?: 'profiles_aggregate';
    aggregate?: {
      __typename?: 'profiles_aggregate_fields';
      count: number;
    } | null;
    nodes: Array<{
      __typename?: 'profiles';
      user: {
        __typename?: 'users';
        id: string;
        displayName: string;
        email?: any | null;
      };
    }>;
  };
};

export type JobsByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type JobsByPkQuery = {
  __typename?: 'query_root';
  jobs_by_pk?: {
    __typename?: 'jobs';
    compensations?: string | null;
    created_at: string;
    degree_type?: string | null;
    description?: string | null;
    employment_type?: string | null;
    end_time?: string | null;
    expiration_date?: string | null;
    image?: string | null;
    level?: string | null;
    location?: Geography | null;
    qualifications?: string | null;
    quantity: number;
    responsibilities?: string | null;
    start_time?: string | null;
    status: string;
    title: string;
    updated_at: string;
    address?: {
      __typename?: 'addresses';
      id: string;
      created_at: string;
      updated_at: string;
      data_usage: string;
      location?: Geography | null;
      unstructured_value?: string | null;
      structured_value?: string | null;
      status: string;
    } | null;
    applications: Array<{ __typename?: 'applications'; id: string }>;
    company?: {
      __typename?: 'companies';
      id: string;
      created_at: string;
      establish_date?: string | null;
      image?: string | null;
      name: string;
      size?: string | null;
      summary?: string | null;
      updated_at: string;
    } | null;
  } | null;
};

export type JobsNearbyAggregateQueryVariables = Exact<{
  args: JobsNearbyArgs;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobsBoolExp>;
}>;

export type JobsNearbyAggregateQuery = {
  __typename?: 'query_root';
  jobs_nearby_aggregate: {
    __typename?: 'jobs_aggregate';
    nodes: Array<{
      __typename?: 'jobs';
      id: string;
      created_at: string;
      description?: string | null;
      expiration_date?: string | null;
      image?: string | null;
      quantity: number;
      title: string;
      updated_at: string;
      status: string;
      address?: {
        __typename?: 'addresses';
        id: string;
        location?: Geography | null;
        unstructured_value?: string | null;
      } | null;
      company?: { __typename?: 'companies'; id: string; name: string } | null;
      applications: Array<{
        __typename?: 'applications';
        id: string;
        resume_id?: string | null;
        profile_id: string;
      }>;
    }>;
  };
};

export type InsertJobsMutationVariables = Exact<{
  objects: Array<JobsInsertInput> | JobsInsertInput;
}>;

export type InsertJobsMutation = {
  __typename?: 'mutation_root';
  insert_jobs?: {
    __typename?: 'jobs_mutation_response';
    returning: Array<{
      __typename?: 'jobs';
      id: string;
      created_at: string;
      title: string;
      description?: string | null;
    }>;
  } | null;
};

export type JobsAggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<JobsOrderBy> | JobsOrderBy>;
  where?: InputMaybe<JobsBoolExp>;
}>;

export type JobsAggregateQuery = {
  __typename?: 'query_root';
  jobs_aggregate: {
    __typename?: 'jobs_aggregate';
    nodes: Array<{
      __typename?: 'jobs';
      id: string;
      compensations?: string | null;
      created_at: string;
      degree_type?: string | null;
      description?: string | null;
      employment_type?: string | null;
      end_time?: string | null;
      expiration_date?: string | null;
      image?: string | null;
      level?: string | null;
      location?: Geography | null;
      qualifications?: string | null;
      quantity: number;
      responsibilities?: string | null;
      start_time?: string | null;
      status: string;
      title: string;
      updated_at: string;
      address?: {
        __typename?: 'addresses';
        id: string;
        created_at: string;
        updated_at: string;
        data_usage: string;
        location?: Geography | null;
        unstructured_value?: string | null;
        structured_value?: string | null;
        status: string;
      } | null;
      applications: Array<{ __typename?: 'applications'; id: string }>;
      company?: {
        __typename?: 'companies';
        id: string;
        created_at: string;
        establish_date?: string | null;
        image?: string | null;
        name: string;
        size?: string | null;
        summary?: string | null;
        updated_at: string;
      } | null;
    }>;
  };
};

export type UpdateJobsMutationVariables = Exact<{
  where: JobsBoolExp;
  _set: JobsSetInput;
}>;

export type UpdateJobsMutation = {
  __typename?: 'mutation_root';
  update_jobs?: {
    __typename?: 'jobs_mutation_response';
    returning: Array<{
      __typename?: 'jobs';
      id: string;
      title: string;
      updated_at: string;
    }>;
  } | null;
};

export type DeleteJobsByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteJobsByPkMutation = {
  __typename?: 'mutation_root';
  delete_jobs_by_pk?: { __typename?: 'jobs'; id: string; title: string } | null;
};

export type ResumesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy> | ResumesOrderBy>;
  where?: InputMaybe<ResumesBoolExp>;
}>;

export type ResumesQuery = {
  __typename?: 'query_root';
  resumes: Array<{
    __typename?: 'resumes';
    id: string;
    created_at: string;
    updated_at: string;
    summary?: string | null;
    status: string;
  }>;
};

export type InsertResumesOneMutationVariables = Exact<{
  object: ResumesInsertInput;
}>;

export type InsertResumesOneMutation = {
  __typename?: 'mutation_root';
  insert_resumes_one?: {
    __typename?: 'resumes';
    id: string;
    created_at: string;
    updated_at: string;
    summary?: string | null;
    status: string;
  } | null;
};

export type ResumesAggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ResumesOrderBy> | ResumesOrderBy>;
  where?: InputMaybe<ResumesBoolExp>;
}>;

export type ResumesAggregateQuery = {
  __typename?: 'query_root';
  resumes_aggregate: {
    __typename?: 'resumes_aggregate';
    nodes: Array<{
      __typename?: 'resumes';
      id: string;
      summary?: string | null;
      certifications: Array<{
        __typename?: 'certifications';
        id: string;
        updated_at: string;
        created_at: string;
        credential_url?: string | null;
        expiration_date?: string | null;
        issue_date?: string | null;
        organization?: string | null;
      }>;
      educations: Array<{
        __typename?: 'educations';
        id: string;
        updated_at: string;
        created_at: string;
        degree: string;
        description?: string | null;
        education_level?: string | null;
        end_date?: string | null;
        field?: string | null;
        school_name?: string | null;
        start_date?: string | null;
      }>;
      experiences: Array<{
        __typename?: 'experiences';
        id: string;
        updated_at: string;
        created_at: string;
        company_id?: string | null;
        description?: string | null;
        end_date?: string | null;
        name: string;
        start_date?: string | null;
      }>;
    }>;
  };
};

export type InsertResumeMutationVariables = Exact<{
  object: ResumesInsertInput;
}>;

export type InsertResumeMutation = {
  __typename?: 'mutation_root';
  insert_resumes_one?: {
    __typename?: 'resumes';
    id: string;
    summary?: string | null;
    created_at: string;
  } | null;
};

export type TenantsQueryVariables = Exact<{ [key: string]: never }>;

export type TenantsQuery = {
  __typename?: 'query_root';
  tenants: Array<{
    __typename?: 'tenants';
    id: string;
    name: string;
    description?: string | null;
    created_at: string;
    updated_at: string;
    data_usage: string;
  }>;
};

export type TenantsAggregateQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  order_by?: InputMaybe<Array<TenantsOrderBy> | TenantsOrderBy>;
  where?: InputMaybe<TenantsBoolExp>;
}>;

export type TenantsAggregateQuery = {
  __typename?: 'query_root';
  tenants_aggregate: {
    __typename?: 'tenants_aggregate';
    nodes: Array<{
      __typename?: 'tenants';
      id: string;
      created_at: string;
      updated_at: string;
      name: string;
      description?: string | null;
      data_usage: string;
    }>;
    aggregate?: {
      __typename?: 'tenants_aggregate_fields';
      count: number;
    } | null;
  };
};

export type InsertTenantsMutationVariables = Exact<{
  objects: Array<TenantsInsertInput> | TenantsInsertInput;
}>;

export type InsertTenantsMutation = {
  __typename?: 'mutation_root';
  insert_tenants?: {
    __typename?: 'tenants_mutation_response';
    returning: Array<{
      __typename?: 'tenants';
      id: string;
      created_at: string;
    }>;
  } | null;
};

export type TenantsByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type TenantsByPkQuery = {
  __typename?: 'query_root';
  tenants_by_pk?: {
    __typename?: 'tenants';
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description?: string | null;
    data_usage: string;
    status: string;
  } | null;
};

export type UpdateTenantsMutationVariables = Exact<{
  where: TenantsBoolExp;
  _set: TenantsSetInput;
}>;

export type UpdateTenantsMutation = {
  __typename?: 'mutation_root';
  update_tenants?: {
    __typename?: 'tenants_mutation_response';
    returning: Array<{
      __typename?: 'tenants';
      id: string;
      created_at: string;
      updated_at: string;
      name: string;
      description?: string | null;
      data_usage: string;
      status: string;
    }>;
  } | null;
};

export type UpdateTenantsByPkMutationVariables = Exact<{
  pk_columns: TenantsPkColumnsInput;
  _set: TenantsSetInput;
}>;

export type UpdateTenantsByPkMutation = {
  __typename?: 'mutation_root';
  update_tenants_by_pk?: {
    __typename?: 'tenants';
    id: string;
    name: string;
    description?: string | null;
  } | null;
};

export type DeleteTenantsByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type DeleteTenantsByPkMutation = {
  __typename?: 'mutation_root';
  delete_tenants_by_pk?: {
    __typename?: 'tenants';
    id: string;
    name: string;
    description?: string | null;
  } | null;
};

export type ProfilesAggregateQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  order_by?: InputMaybe<Array<ProfilesOrderBy> | ProfilesOrderBy>;
  where?: InputMaybe<ProfilesBoolExp>;
}>;

export type ProfilesAggregateQuery = {
  __typename?: 'query_root';
  profiles_aggregate: {
    __typename?: 'profiles_aggregate';
    nodes: Array<{
      __typename?: 'profiles';
      id: string;
      conversation_id?: string | null;
      location?: Geography | null;
      is_online?: boolean | null;
      view_as: string;
      settings?: any | null;
      user_id: string;
      tenant_id?: string | null;
      profile_companies: Array<{
        __typename?: 'profile_company';
        company: { __typename?: 'companies'; id: string; name: string };
      }>;
      user: {
        __typename?: 'users';
        id: string;
        createdAt: string;
        updatedAt: string;
        activeMfaType?: string | null;
        avatarUrl: string;
        defaultRole: string;
        disabled: boolean;
        displayName: string;
        email?: any | null;
        emailVerified: boolean;
        lastSeen?: string | null;
        locale: string;
        metadata?: any | null;
        roles: Array<{ __typename?: 'authUserRoles'; role: string }>;
      };
      tenant?: { __typename?: 'tenants'; id: string; name: string } | null;
    }>;
  };
};

export type ProfilesByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type ProfilesByPkQuery = {
  __typename?: 'query_root';
  profiles_by_pk?: {
    __typename?: 'profiles';
    id: string;
    is_online?: boolean | null;
    view_as: string;
    settings?: any | null;
    tenant_id?: string | null;
    user_id: string;
    tenant?: { __typename?: 'tenants'; id: string; name: string } | null;
    user: {
      __typename?: 'users';
      id: string;
      createdAt: string;
      updatedAt: string;
      activeMfaType?: string | null;
      avatarUrl: string;
      defaultRole: string;
      disabled: boolean;
      displayName: string;
      email?: any | null;
      emailVerified: boolean;
      lastSeen?: string | null;
      metadata?: any | null;
    };
    profile_companies: Array<{
      __typename?: 'profile_company';
      company: { __typename?: 'companies'; id: string; name: string };
    }>;
    resumes: Array<{
      __typename?: 'resumes';
      id: string;
      applications: Array<{ __typename?: 'applications'; id: string }>;
    }>;
  } | null;
};

export type UpdateProfilesMutationVariables = Exact<{
  where: ProfilesBoolExp;
  _set: ProfilesSetInput;
}>;

export type UpdateProfilesMutation = {
  __typename?: 'mutation_root';
  update_profiles?: {
    __typename?: 'profiles_mutation_response';
    returning: Array<{
      __typename?: 'profiles';
      id: string;
      user: { __typename?: 'users'; id: string; updatedAt: string };
      tenant?: { __typename?: 'tenants'; id: string; name: string } | null;
    }>;
  } | null;
};

export type UpdateProfilesByPkMutationVariables = Exact<{
  pk_columns: ProfilesPkColumnsInput;
  _set: ProfilesSetInput;
}>;

export type UpdateProfilesByPkMutation = {
  __typename?: 'mutation_root';
  update_profiles_by_pk?: {
    __typename?: 'profiles';
    id: string;
    user: { __typename?: 'users'; id: string; updatedAt: string };
    tenant?: { __typename?: 'tenants'; id: string; name: string } | null;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  pk_columns: UsersPkColumnsInput;
  _set: UsersSetInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'mutation_root';
  updateUser?: { __typename?: 'users'; id: string; updatedAt: string } | null;
};

export const ApplicationsAggregateDocument = gql`
  query APPLICATIONS_AGGREGATE(
    $limit: Int
    $offset: Int
    $order_by: [applications_order_by!]
    $where: applications_bool_exp
  ) {
    applications_aggregate(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      nodes {
        id
        created_at
        updated_at
        user {
          id
          displayName
        }
        resume {
          id
          summary
        }
        job {
          id
          company {
            name
          }
        }
      }
    }
  }
`;
export type ApplicationsAggregateQueryResult = Apollo.QueryResult<
  ApplicationsAggregateQuery,
  ApplicationsAggregateQueryVariables
>;
export const InsertApplicationsOneDocument = gql`
  mutation INSERT_APPLICATIONS_ONE($object: applications_insert_input!) {
    insert_applications_one(object: $object) {
      id
      created_at
    }
  }
`;
export type InsertApplicationsOneMutationFn = Apollo.MutationFunction<
  InsertApplicationsOneMutation,
  InsertApplicationsOneMutationVariables
>;
export type InsertApplicationsOneMutationResult =
  Apollo.MutationResult<InsertApplicationsOneMutation>;
export type InsertApplicationsOneMutationOptions = Apollo.BaseMutationOptions<
  InsertApplicationsOneMutation,
  InsertApplicationsOneMutationVariables
>;
export const UpdateApplicationsDocument = gql`
  mutation UPDATE_APPLICATIONS(
    $where: applications_bool_exp!
    $_set: applications_set_input!
  ) {
    update_applications(where: $where, _set: $_set) {
      returning {
        id
        updated_at
      }
    }
  }
`;
export type UpdateApplicationsMutationFn = Apollo.MutationFunction<
  UpdateApplicationsMutation,
  UpdateApplicationsMutationVariables
>;
export type UpdateApplicationsMutationResult =
  Apollo.MutationResult<UpdateApplicationsMutation>;
export type UpdateApplicationsMutationOptions = Apollo.BaseMutationOptions<
  UpdateApplicationsMutation,
  UpdateApplicationsMutationVariables
>;
export const DeleteApplicationsByPkDocument = gql`
  mutation DELETE_APPLICATIONS_BY_PK($id: uuid!) {
    delete_applications_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteApplicationsByPkMutationFn = Apollo.MutationFunction<
  DeleteApplicationsByPkMutation,
  DeleteApplicationsByPkMutationVariables
>;
export type DeleteApplicationsByPkMutationResult =
  Apollo.MutationResult<DeleteApplicationsByPkMutation>;
export type DeleteApplicationsByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteApplicationsByPkMutation,
  DeleteApplicationsByPkMutationVariables
>;
export const ApplicationsByPkDocument = gql`
  query APPLICATIONS_BY_PK($id: uuid!) {
    applications_by_pk(id: $id) {
      id
      created_at
      updated_at
    }
  }
`;
export type ApplicationsByPkQueryResult = Apollo.QueryResult<
  ApplicationsByPkQuery,
  ApplicationsByPkQueryVariables
>;
export const InsertCompaniesDocument = gql`
  mutation INSERT_COMPANIES($objects: [companies_insert_input!]!) {
    insert_companies(objects: $objects) {
      returning {
        id
        created_at
        updated_at
        establish_date
        image
        name
        size
        status
        summary
        suspended
        tenant_id
      }
    }
  }
`;
export type InsertCompaniesMutationFn = Apollo.MutationFunction<
  InsertCompaniesMutation,
  InsertCompaniesMutationVariables
>;
export type InsertCompaniesMutationResult =
  Apollo.MutationResult<InsertCompaniesMutation>;
export type InsertCompaniesMutationOptions = Apollo.BaseMutationOptions<
  InsertCompaniesMutation,
  InsertCompaniesMutationVariables
>;
export const CompaniesAggregateDocument = gql`
  query COMPANIES_AGGREGATE(
    $limit: Int
    $offset: Int
    $order_by: [companies_order_by!]
    $where: companies_bool_exp
  ) {
    companies_aggregate(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      nodes {
        id
        created_at
        updated_at
        establish_date
        image
        name
        size
        status
        summary
        suspended
        tenant_id
      }
    }
  }
`;
export type CompaniesAggregateQueryResult = Apollo.QueryResult<
  CompaniesAggregateQuery,
  CompaniesAggregateQueryVariables
>;
export const UpdateCompaniesDocument = gql`
  mutation UPDATE_COMPANIES(
    $where: companies_bool_exp!
    $_set: companies_set_input!
  ) {
    update_companies(where: $where, _set: $_set) {
      returning {
        id
        name
        updated_at
      }
    }
  }
`;
export type UpdateCompaniesMutationFn = Apollo.MutationFunction<
  UpdateCompaniesMutation,
  UpdateCompaniesMutationVariables
>;
export type UpdateCompaniesMutationResult =
  Apollo.MutationResult<UpdateCompaniesMutation>;
export type UpdateCompaniesMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompaniesMutation,
  UpdateCompaniesMutationVariables
>;
export const DeleteCompaniesByPkDocument = gql`
  mutation DELETE_COMPANIES_BY_PK($id: uuid!) {
    delete_companies_by_pk(id: $id) {
      id
      name
      status
      summary
    }
  }
`;
export type DeleteCompaniesByPkMutationFn = Apollo.MutationFunction<
  DeleteCompaniesByPkMutation,
  DeleteCompaniesByPkMutationVariables
>;
export type DeleteCompaniesByPkMutationResult =
  Apollo.MutationResult<DeleteCompaniesByPkMutation>;
export type DeleteCompaniesByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteCompaniesByPkMutation,
  DeleteCompaniesByPkMutationVariables
>;
export const CompaniesByPkDocument = gql`
  query COMPANIES_BY_PK($id: uuid!) {
    companies_by_pk(id: $id) {
      id
      created_at
      updated_at
      establish_date
      image
      name
      size
      status
      summary
      suspended
      tenant_id
    }
  }
`;
export type CompaniesByPkQueryResult = Apollo.QueryResult<
  CompaniesByPkQuery,
  CompaniesByPkQueryVariables
>;
export const ConversationsByPkDocument = gql`
  query CONVERSATIONS_BY_PK($id: uuid!) {
    conversations_by_pk(id: $id) {
      id
      created_at
      updated_at
      name
      description
      status
      company_id
      company {
        id
        name
      }
    }
  }
`;
export type ConversationsByPkQueryResult = Apollo.QueryResult<
  ConversationsByPkQuery,
  ConversationsByPkQueryVariables
>;
export const ConversationsAggregateDocument = gql`
  query CONVERSATIONS_AGGREGATE(
    $limit: Int
    $offset: Int
    $order_by: [conversations_order_by!]
    $where: conversations_bool_exp
  ) {
    conversations_aggregate(limit: $limit, offset: $offset, where: $where) {
      nodes {
        id
        created_at
        updated_at
        name
        description
        status
        company {
          id
          name
        }
      }
    }
  }
`;
export type ConversationsAggregateQueryResult = Apollo.QueryResult<
  ConversationsAggregateQuery,
  ConversationsAggregateQueryVariables
>;
export const InsertConversationsOneDocument = gql`
  mutation INSERT_CONVERSATIONS_ONE($object: conversations_insert_input!) {
    insert_conversations_one(object: $object) {
      id
      name
      description
      created_at
    }
  }
`;
export type InsertConversationsOneMutationFn = Apollo.MutationFunction<
  InsertConversationsOneMutation,
  InsertConversationsOneMutationVariables
>;
export type InsertConversationsOneMutationResult =
  Apollo.MutationResult<InsertConversationsOneMutation>;
export type InsertConversationsOneMutationOptions = Apollo.BaseMutationOptions<
  InsertConversationsOneMutation,
  InsertConversationsOneMutationVariables
>;
export const MessagesAggregateDocument = gql`
  query MESSAGES_AGGREGATE(
    $limit: Int
    $offset: Int
    $order_by: [messages_order_by!]
    $where: messages_bool_exp
  ) {
    messages_aggregate(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      nodes {
        id
        created_at
        audio
        content
        conversation_id
        image
        is_bot
        status
        user_id
        video
        conversation {
          id
          name
        }
        user {
          id
          displayName
          email
        }
      }
    }
  }
`;
export type MessagesAggregateQueryResult = Apollo.QueryResult<
  MessagesAggregateQuery,
  MessagesAggregateQueryVariables
>;
export const MessagesSubscriptionDocument = gql`
  subscription MESSAGES_SUBSCRIPTION(
    $limit: Int
    $order_by: [messages_order_by!]
    $where: messages_bool_exp
  ) {
    messages_aggregate(limit: $limit, order_by: $order_by, where: $where) {
      nodes {
        id
        created_at
        content
        user {
          id
          displayName
        }
      }
    }
  }
`;
export type MessagesSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<MessagesSubscriptionSubscription>;
export const InsertMessagesOneDocument = gql`
  mutation INSERT_MESSAGES_ONE($object: messages_insert_input!) {
    insert_messages_one(object: $object) {
      id
      created_at
      updated_at
    }
  }
`;
export type InsertMessagesOneMutationFn = Apollo.MutationFunction<
  InsertMessagesOneMutation,
  InsertMessagesOneMutationVariables
>;
export type InsertMessagesOneMutationResult =
  Apollo.MutationResult<InsertMessagesOneMutation>;
export type InsertMessagesOneMutationOptions = Apollo.BaseMutationOptions<
  InsertMessagesOneMutation,
  InsertMessagesOneMutationVariables
>;
export const SearchDocument = gql`
  query SEARCH(
    $limit: Int
    $offset: Int
    $tenant_id: uuid_comparison_exp
    $keywords: String
  ) {
    companies_aggregate(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { name: { _ilike: $keywords } }
              { summary: { _ilike: $keywords } }
            ]
          }
          { tenant_id: $tenant_id }
        ]
      }
    ) {
      aggregate {
        count
      }
      nodes {
        id
        name
        summary
      }
    }
    jobs_aggregate(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { title: { _ilike: $keywords } }
              { description: { _ilike: $keywords } }
            ]
          }
          { company: { tenant_id: $tenant_id } }
        ]
      }
    ) {
      aggregate {
        count
      }
      nodes {
        id
        title
        description
      }
    }
    profiles_aggregate(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          { user: { _or: [{ displayName: { _ilike: $keywords } }] } }
          { tenant_id: $tenant_id }
        ]
      }
    ) {
      aggregate {
        count
      }
      nodes {
        user {
          id
          displayName
          email
        }
      }
    }
  }
`;
export type SearchQueryResult = Apollo.QueryResult<
  SearchQuery,
  SearchQueryVariables
>;
export const JobsByPkDocument = gql`
  query JOBS_BY_PK($id: uuid!) {
    jobs_by_pk(id: $id) {
      compensations
      created_at
      degree_type
      description
      employment_type
      end_time
      expiration_date
      image
      level
      location
      qualifications
      quantity
      responsibilities
      start_time
      status
      title
      updated_at
      address {
        id
        created_at
        updated_at
        data_usage
        location
        unstructured_value
        structured_value
        status
      }
      applications {
        id
      }
      company {
        id
        created_at
        establish_date
        image
        name
        size
        summary
        updated_at
      }
    }
  }
`;
export type JobsByPkQueryResult = Apollo.QueryResult<
  JobsByPkQuery,
  JobsByPkQueryVariables
>;
export const JobsNearbyAggregateDocument = gql`
  query JOBS_NEARBY_AGGREGATE(
    $args: jobs_nearby_args!
    $limit: Int
    $offset: Int
    $where: jobs_bool_exp
  ) {
    jobs_nearby_aggregate(
      args: $args
      limit: $limit
      offset: $offset
      where: $where
    ) {
      nodes {
        id
        created_at
        description
        expiration_date
        image
        quantity
        title
        updated_at
        status
        address {
          id
          location
          unstructured_value
        }
        company {
          id
          name
        }
        applications {
          id
          resume_id
          profile_id
        }
      }
    }
  }
`;
export type JobsNearbyAggregateQueryResult = Apollo.QueryResult<
  JobsNearbyAggregateQuery,
  JobsNearbyAggregateQueryVariables
>;
export const InsertJobsDocument = gql`
  mutation INSERT_JOBS($objects: [jobs_insert_input!]!) {
    insert_jobs(objects: $objects) {
      returning {
        id
        created_at
        title
        description
      }
    }
  }
`;
export type InsertJobsMutationFn = Apollo.MutationFunction<
  InsertJobsMutation,
  InsertJobsMutationVariables
>;
export type InsertJobsMutationResult =
  Apollo.MutationResult<InsertJobsMutation>;
export type InsertJobsMutationOptions = Apollo.BaseMutationOptions<
  InsertJobsMutation,
  InsertJobsMutationVariables
>;
export const JobsAggregateDocument = gql`
  query JOBS_AGGREGATE(
    $limit: Int
    $offset: Int
    $order_by: [jobs_order_by!]
    $where: jobs_bool_exp
  ) {
    jobs_aggregate(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      nodes {
        id
        compensations
        created_at
        degree_type
        description
        employment_type
        end_time
        expiration_date
        image
        level
        location
        qualifications
        quantity
        responsibilities
        start_time
        status
        title
        updated_at
        address {
          id
          created_at
          updated_at
          data_usage
          location
          unstructured_value
          structured_value
          status
        }
        applications {
          id
        }
        company {
          id
          created_at
          establish_date
          image
          name
          size
          summary
          updated_at
        }
      }
    }
  }
`;
export type JobsAggregateQueryResult = Apollo.QueryResult<
  JobsAggregateQuery,
  JobsAggregateQueryVariables
>;
export const UpdateJobsDocument = gql`
  mutation UPDATE_JOBS($where: jobs_bool_exp!, $_set: jobs_set_input!) {
    update_jobs(where: $where, _set: $_set) {
      returning {
        id
        title
        updated_at
      }
    }
  }
`;
export type UpdateJobsMutationFn = Apollo.MutationFunction<
  UpdateJobsMutation,
  UpdateJobsMutationVariables
>;
export type UpdateJobsMutationResult =
  Apollo.MutationResult<UpdateJobsMutation>;
export type UpdateJobsMutationOptions = Apollo.BaseMutationOptions<
  UpdateJobsMutation,
  UpdateJobsMutationVariables
>;
export const DeleteJobsByPkDocument = gql`
  mutation DELETE_JOBS_BY_PK($id: uuid!) {
    delete_jobs_by_pk(id: $id) {
      id
      title
    }
  }
`;
export type DeleteJobsByPkMutationFn = Apollo.MutationFunction<
  DeleteJobsByPkMutation,
  DeleteJobsByPkMutationVariables
>;
export type DeleteJobsByPkMutationResult =
  Apollo.MutationResult<DeleteJobsByPkMutation>;
export type DeleteJobsByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteJobsByPkMutation,
  DeleteJobsByPkMutationVariables
>;
export const ResumesDocument = gql`
  query RESUMES(
    $limit: Int
    $offset: Int
    $order_by: [resumes_order_by!]
    $where: resumes_bool_exp
  ) {
    resumes(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      id
      created_at
      updated_at
      summary
      status
    }
  }
`;
export type ResumesQueryResult = Apollo.QueryResult<
  ResumesQuery,
  ResumesQueryVariables
>;
export const InsertResumesOneDocument = gql`
  mutation INSERT_RESUMES_ONE($object: resumes_insert_input!) {
    insert_resumes_one(object: $object) {
      id
      created_at
      updated_at
      summary
      status
    }
  }
`;
export type InsertResumesOneMutationFn = Apollo.MutationFunction<
  InsertResumesOneMutation,
  InsertResumesOneMutationVariables
>;
export type InsertResumesOneMutationResult =
  Apollo.MutationResult<InsertResumesOneMutation>;
export type InsertResumesOneMutationOptions = Apollo.BaseMutationOptions<
  InsertResumesOneMutation,
  InsertResumesOneMutationVariables
>;
export const ResumesAggregateDocument = gql`
  query RESUMES_AGGREGATE(
    $limit: Int
    $offset: Int
    $order_by: [resumes_order_by!]
    $where: resumes_bool_exp
  ) {
    resumes_aggregate(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      nodes {
        id
        summary
        certifications(order_by: { updated_at: desc }) {
          id
          updated_at
          created_at
          credential_url
          expiration_date
          issue_date
          organization
        }
        educations(order_by: { updated_at: desc }) {
          id
          updated_at
          created_at
          degree
          description
          education_level
          end_date
          field
          school_name
          start_date
        }
        experiences(order_by: { updated_at: desc }) {
          id
          updated_at
          created_at
          company_id
          description
          end_date
          name
          start_date
        }
      }
    }
  }
`;
export type ResumesAggregateQueryResult = Apollo.QueryResult<
  ResumesAggregateQuery,
  ResumesAggregateQueryVariables
>;
export const InsertResumeDocument = gql`
  mutation INSERT_RESUME($object: resumes_insert_input!) {
    insert_resumes_one(object: $object) {
      id
      summary
      created_at
    }
  }
`;
export type InsertResumeMutationFn = Apollo.MutationFunction<
  InsertResumeMutation,
  InsertResumeMutationVariables
>;
export type InsertResumeMutationResult =
  Apollo.MutationResult<InsertResumeMutation>;
export type InsertResumeMutationOptions = Apollo.BaseMutationOptions<
  InsertResumeMutation,
  InsertResumeMutationVariables
>;
export const TenantsDocument = gql`
  query TENANTS {
    tenants {
      id
      name
      description
      created_at
      updated_at
      data_usage
    }
  }
`;
export type TenantsQueryResult = Apollo.QueryResult<
  TenantsQuery,
  TenantsQueryVariables
>;
export const TenantsAggregateDocument = gql`
  query TENANTS_AGGREGATE(
    $limit: Int!
    $offset: Int!
    $order_by: [tenants_order_by!]
    $where: tenants_bool_exp
  ) {
    tenants_aggregate(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      nodes {
        id
        created_at
        updated_at
        name
        description
        data_usage
      }
      aggregate {
        count
      }
    }
  }
`;
export type TenantsAggregateQueryResult = Apollo.QueryResult<
  TenantsAggregateQuery,
  TenantsAggregateQueryVariables
>;
export const InsertTenantsDocument = gql`
  mutation INSERT_TENANTS($objects: [tenants_insert_input!]!) {
    insert_tenants(objects: $objects) {
      returning {
        id
        created_at
      }
    }
  }
`;
export type InsertTenantsMutationFn = Apollo.MutationFunction<
  InsertTenantsMutation,
  InsertTenantsMutationVariables
>;
export type InsertTenantsMutationResult =
  Apollo.MutationResult<InsertTenantsMutation>;
export type InsertTenantsMutationOptions = Apollo.BaseMutationOptions<
  InsertTenantsMutation,
  InsertTenantsMutationVariables
>;
export const TenantsByPkDocument = gql`
  query TENANTS_BY_PK($id: uuid!) {
    tenants_by_pk(id: $id) {
      id
      created_at
      updated_at
      name
      description
      data_usage
      status
    }
  }
`;
export type TenantsByPkQueryResult = Apollo.QueryResult<
  TenantsByPkQuery,
  TenantsByPkQueryVariables
>;
export const UpdateTenantsDocument = gql`
  mutation UPDATE_TENANTS(
    $where: tenants_bool_exp!
    $_set: tenants_set_input!
  ) {
    update_tenants(where: $where, _set: $_set) {
      returning {
        id
        created_at
        updated_at
        name
        description
        data_usage
        status
      }
    }
  }
`;
export type UpdateTenantsMutationFn = Apollo.MutationFunction<
  UpdateTenantsMutation,
  UpdateTenantsMutationVariables
>;
export type UpdateTenantsMutationResult =
  Apollo.MutationResult<UpdateTenantsMutation>;
export type UpdateTenantsMutationOptions = Apollo.BaseMutationOptions<
  UpdateTenantsMutation,
  UpdateTenantsMutationVariables
>;
export const UpdateTenantsByPkDocument = gql`
  mutation UPDATE_TENANTS_BY_PK(
    $pk_columns: tenants_pk_columns_input!
    $_set: tenants_set_input!
  ) {
    update_tenants_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
      name
      description
    }
  }
`;
export type UpdateTenantsByPkMutationFn = Apollo.MutationFunction<
  UpdateTenantsByPkMutation,
  UpdateTenantsByPkMutationVariables
>;
export type UpdateTenantsByPkMutationResult =
  Apollo.MutationResult<UpdateTenantsByPkMutation>;
export type UpdateTenantsByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateTenantsByPkMutation,
  UpdateTenantsByPkMutationVariables
>;
export const DeleteTenantsByPkDocument = gql`
  mutation DELETE_TENANTS_BY_PK($id: uuid!) {
    delete_tenants_by_pk(id: $id) {
      id
      name
      description
    }
  }
`;
export type DeleteTenantsByPkMutationFn = Apollo.MutationFunction<
  DeleteTenantsByPkMutation,
  DeleteTenantsByPkMutationVariables
>;
export type DeleteTenantsByPkMutationResult =
  Apollo.MutationResult<DeleteTenantsByPkMutation>;
export type DeleteTenantsByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteTenantsByPkMutation,
  DeleteTenantsByPkMutationVariables
>;
export const ProfilesAggregateDocument = gql`
  query PROFILES_AGGREGATE(
    $limit: Int!
    $offset: Int!
    $order_by: [profiles_order_by!]
    $where: profiles_bool_exp
  ) {
    profiles_aggregate(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      nodes {
        id
        conversation_id
        location
        is_online
        view_as
        settings
        profile_companies {
          company {
            id
            name
          }
        }
        user_id
        user {
          id
          createdAt
          updatedAt
          activeMfaType
          avatarUrl
          defaultRole
          disabled
          displayName
          email
          emailVerified
          lastSeen
          locale
          metadata
          roles {
            role
          }
        }
        tenant_id
        tenant {
          id
          name
        }
      }
    }
  }
`;
export type ProfilesAggregateQueryResult = Apollo.QueryResult<
  ProfilesAggregateQuery,
  ProfilesAggregateQueryVariables
>;
export const ProfilesByPkDocument = gql`
  query PROFILES_BY_PK($id: uuid!) {
    profiles_by_pk(id: $id) {
      id
      is_online
      view_as
      settings
      tenant_id
      tenant {
        id
        name
      }
      user_id
      user {
        id
        createdAt
        updatedAt
        activeMfaType
        avatarUrl
        defaultRole
        disabled
        displayName
        email
        emailVerified
        lastSeen
        metadata
      }
      profile_companies {
        company {
          id
          name
        }
      }
      resumes(limit: 1) {
        id
        applications {
          id
        }
      }
    }
  }
`;
export type ProfilesByPkQueryResult = Apollo.QueryResult<
  ProfilesByPkQuery,
  ProfilesByPkQueryVariables
>;
export const UpdateProfilesDocument = gql`
  mutation UPDATE_PROFILES(
    $where: profiles_bool_exp!
    $_set: profiles_set_input!
  ) {
    update_profiles(where: $where, _set: $_set) {
      returning {
        id
        user {
          id
          updatedAt
        }
        tenant {
          id
          name
        }
      }
    }
  }
`;
export type UpdateProfilesMutationFn = Apollo.MutationFunction<
  UpdateProfilesMutation,
  UpdateProfilesMutationVariables
>;
export type UpdateProfilesMutationResult =
  Apollo.MutationResult<UpdateProfilesMutation>;
export type UpdateProfilesMutationOptions = Apollo.BaseMutationOptions<
  UpdateProfilesMutation,
  UpdateProfilesMutationVariables
>;
export const UpdateProfilesByPkDocument = gql`
  mutation UPDATE_PROFILES_BY_PK(
    $pk_columns: profiles_pk_columns_input!
    $_set: profiles_set_input!
  ) {
    update_profiles_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
      user {
        id
        updatedAt
      }
      tenant {
        id
        name
      }
    }
  }
`;
export type UpdateProfilesByPkMutationFn = Apollo.MutationFunction<
  UpdateProfilesByPkMutation,
  UpdateProfilesByPkMutationVariables
>;
export type UpdateProfilesByPkMutationResult =
  Apollo.MutationResult<UpdateProfilesByPkMutation>;
export type UpdateProfilesByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateProfilesByPkMutation,
  UpdateProfilesByPkMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UPDATE_USER(
    $pk_columns: users_pk_columns_input!
    $_set: users_set_input!
  ) {
    updateUser(pk_columns: $pk_columns, _set: $_set) {
      id
      updatedAt
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

import type { Location } from '@screens/jobs/types';
import type { Entity, AggregateData } from '@lib/type-helpers';

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

export type JwtType = {
  token: string;
};

export type UserType = {
  id: string;
  created_at: string;
  email: string;
  is_available: boolean;
  is_hirable: boolean;
  first_name?: string;
  last_name?: string;
  source?: string;
  tenant_id?: string;
  last_seen?: Date;
  education_level?: string;
  user_name: string;
  updated_at: Date;
  location: Location;
  settings?: string;
  user_role: string;
  full_name?: string;
  picture?: string;
};

export type Resume = {
  id: string;
  name?: string;
  user_id: string;
  summary?: string;
  created_at: Date;
  updated_at: Date;
};

export type ResumeAggregateData = AggregateData<Resume, Entity.Resume>;

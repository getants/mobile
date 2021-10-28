import type { Entity, AggregateData, SingleData } from '@lib/type-helpers';

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
  created_at: Date;
  updated_at?: Date;
  description: string;
  end?: Date;
  title: string;
  image?: string;
  quantity: number;
  slug?: string;
  start?: Date;
  location?: Location; // Actually location of the job
};

export type SingleJobData = SingleData<Job, Entity.Job>;
export type JobAggregateData = AggregateData<Job, Entity.Job>;
export type JobsNearbyAggregateData = {
  jobs_nearby_aggregate: {
    nodes: Job[];
  };
};

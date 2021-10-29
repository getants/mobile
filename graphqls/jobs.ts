import gql from 'graphql-tag';

export const ALL_JOBS = gql`
  query ALL_JOBS {      
    allJobs {
      job_id
      name
      description
      slug
    }
  }
`;

export const SINGLE_JOB = gql`
  query SINGLE_JOB ($id: uuid!) {
    job_by_pk(id: $id) {
      company {
        id
        created_at
        establish_date
        image
        name
        summary
        updated_at
      }
      compensations
      created_at
      image
      level
      location
      quantity
      title
      description
      address {
        created_at
        data_usage
        id
        location
        updated_at
        unstructured_value
        structured_value
      }
      degree_type
      employment_type
      end_time
      expiration_date
      promotion_value
      qualifications
      start_time
      responsibilities
      updated_at
    }
  }
`;

export const AGGREGATE_JOBS = gql`
  query AGGREGATE_JOBS (
      $limit: Int!,
      $offset: Int!,
      $where: job_bool_exp!
    ) {
      job_aggregate(limit: $limit, offset: $offset, where: $where) {
        nodes {
          address {
            id
            structured_value
            unstructured_value
            location
          }
          created_at
          description
          expiration_date
          id
          quantity
          title
          updated_at
      }
    }
  }
`;

/*
 * args: {distance: float, long: float, lat: float}
 *       distance: how far we want to search for
 *       long/lat: the central position of the target
 * job's location is different from its address location
 * because the job's address adopted from company's address
 * but the real working location might be on the fields
 */
export const JOBS_NEARBY_AGGREGATE = gql`
  query JOBS_NEARBY_AGGREGATE (
      $args: jobs_nearby_args!,
      $limit: Int!,
      $offset: Int!,
      $where: job_bool_exp!
    ) {
      jobs_nearby_aggregate(args: $args, limit: $limit, offset: $offset, where: $where) {
          nodes {
              id
              created_at
              updated_at
              description
              expiration_date
              location
              quantity
              title
              tenant_id
              company {
                id
                image
                name
              }
              address {
                id
                unstructured_value
                location
              }
          }
      }
  }
`;

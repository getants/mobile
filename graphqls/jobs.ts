import gql from 'graphql-tag';

export const SINGLE_JOB = gql`
  query SINGLE_JOB ($id: uuid!) {
    jobs_by_pk(id: $id) {
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

export const JOBS_NEARBY_AGGREGATE = gql`
  query jobs_nearby_aggregate ($args: jobs_nearby_args!, $limit: Int!, $offset: Int!, $where: jobs_bool_exp!) {
    jobs_nearby_aggregate(args: $args, limit: $limit, offset: $offset, where: $where) {
      nodes {
        id
        created_at
        updated_at
        title
        description
        quantity
        expiration_date
        address {
          id
          unstructured_value
          location
        }
      }
    }
  }
`;

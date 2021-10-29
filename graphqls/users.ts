import gql from 'graphql-tag';

export const FIND_BY_USERNAME = gql`
  query findByUsername ($username: String!) {      
    findByUsername (username: $username) {
      bio
      created
      user_id
      name
      picture
      updated
      username
    }
  }
`;

// {
//     "user_id": "72c2d771-e41d-4a44-9591-941624fb4fb0",
//     "location": {
//       "type":"Point",
//       "coordinates": [60.336942,25.0244615]
//       }
//     }
export const UPSERT_MY_LOCATION = gql`
  mutation UPSERT_MY_LOCATION ($objects: [user_location_insert_input!]!) {
    insert_user_location (
        objects: $objects,
        on_conflict: {constraint: user_location_pkey, update_columns: location}
    ) {
        returning {
            user_id
            location
        }
        affected_rows
    }
  }
`;

export const RESUME_AGGREGATE = gql`
  query RESUME_AGGREGATE(
      $limit: Int!,
      $offset: Int!,
      $order_by: [resume_order_by!]!,
      $where: resume_bool_exp!
    ) {
    resume_aggregate(
      limit: $limit,
      offset: $offset,
      order_by: $order_by,
      where: $where
    ) {
      nodes {
        id
        name
        summary
        certifications(order_by: {updated_at: desc}) {
          created_at
          credential_url
          expiration_date
          id
          issue_date
          organization
          updated_at
        }
        educations(order_by: {updated_at: desc}) {
          created_at
          degree
          description
          education_level
          end_date
          field
          id
          school_name
          start_date
          updated_at
        }
        experiences(order_by: {updated_at: desc}) {
          company_id
          created_at
          updated_at
          description
          end_date
          id
          name
          start_date
        }
      }
    }
  }
`;

export const INSERT_RESUME = gql`
  mutation INSERT_RESUME($object: resume_insert_input!) {
    insert_resume_one(object: $object) {
      id
      name
      summary
      created_at
    }
  }
`;

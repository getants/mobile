// Beware: Vittu gql from @apollo/client has problem with tests
import gql from 'graphql-tag';

export const ALL_TAGS = gql`
  query ALL_TAGS {      
    allTags {
      tag_id
      description
      name
      slug
    }
  }
`;

export const CREATE_TAG = gql`
  mutation CREATE_TAG($input: TagInput!) {      
    createTag(input: $input) {
      tag_id
      description
      name
      slug
    }
  }
`;

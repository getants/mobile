import gql from 'graphql-tag';

export const ALL_CATEGORIES = gql`
  query ALL_CATEGORIES {
    allCategories {
      category_id
      name
      slug
      description
    }
  }
`;

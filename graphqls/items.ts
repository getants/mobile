import gql from 'graphql-tag';
/*
interface ItemFilter {
  limit: Number;
  sortAscending: Boolean;
  category: string;
  next: string;
  previous: string;
}
*/
export const ALL_ITEMS = gql`
  query ALL_ITEMS {      
    allItems {
      item_id
      created
      description
      name
      pictures
      quantity
      slug
    }
  }
`;

export const SINGLE_ITEM = gql`
  query SINGLE_ITEM($slug: String!) {
    singleItem(slug: $slug) {
      item_id
      name
      description
      created
      slug
      tags {
        name
        slug
        tag_id
      }
      pictures
    }
  }
`;

export const CREATE_ITEM = gql`
  mutation CREATE_ITEM($input: ItemInput!) {      
    createItem(input: $input) {
      created
      description
      name
      pictures
      quantity
      slug
      tags {
        tag_id
        name
      }
    }
  }
`;

export const PAGINATE_ITEMS = gql`
  query PAGINATE_ITEMS($filter: ItemFilter!) {
    paginateItems(filter: $filter) {
     results {
        created
        description
        name
        pictures
        quantity
        slug
        tags {
          tag_id
          name
        }
      }
      previous
      hasPrevious
      next 
      hasNext
    }
  }
`;

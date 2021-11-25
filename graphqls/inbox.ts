import { gql } from '@apollo/client';

export const SINGLE_CONVERSATION = gql`
  query SINGLE_CONVERSATION ($id: uuid!) {
    conversation_by_pk(id: $id) {
      id
      name
      description
      status
      company_id
      created_at
      updated_at
    }
  }
`;

export const CONVERSATION_AGGREGATE = gql`
  query CONVERSATION_AGGREGATE (
    $limit: Int!,
    $offset: Int!,
    $where: conversation_bool_exp!
  ) {
    conversation_aggregate (limit: $limit, offset: $offset, where: $where) {
      nodes {
        id
        name
        description
        status
        created_at
        updated_at
        company {
          id
          name
        }
      }
    }
  }
`;

// object: {
//   name: "Test Chat",
//   status: "ACTIVE",
//   company_id: "some_uuid",
//   users: { data: { user_id: "uuid" } }
// }
export const INSERT_CONVERSATION = gql`
  mutation INSERT_CONVERSATION ($object: conversation_insert_input!) {
    insert_conversation_one (object: $object) {
      id
      name
      description
      created_at
    }
  }
`;

export const MESSAGES_AGGREGATE = gql`
  query MESSAGES_AGGREGATE(
    $limit: Int!,
    $offset: Int!,
    $order_by: [message_order_by!]!,
    $where: message_bool_exp!
  ) {
    messages_aggregate(
      limit: $limit,
      offset: $offset,
      order_by: $order_by,
      where: $where
    ) {
      nodes {
        content
        id
        created_at
        conversation_id
        user {
          full_name
          picture
          id
        }
      }
    }
  }
`;

// Subscription for new messages only
// order_by: { created_at: asc }
export const MESSAGE_SUBSCRIPTION = gql`
  subscription MESSAGES_AGGREGATE(
    $limit: Int!,
    $order_by: [message_order_by!]!,
    $where: message_bool_exp!
  ) {
    messages_aggregate(
      limit: $limit,
      order_by: $order_by,
      where: $where
    ) {
      nodes {
        content
        id
        created_at
        user {
          full_name
          picture
          id
        }
      }
    }
  }
`;

export const INSERT_MESSAGE = gql`
  mutation INSERT_MESSAGE ($object: message_insert_input!) {
    insert_message_one(object: $object) {
      created_at
      id
      updated_at
    }
  }
`;

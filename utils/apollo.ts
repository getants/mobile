import fetch from 'cross-fetch';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import type { FieldPolicy } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { getEnvironment } from '@/utils/tokens';
import type { Message, Job } from '@/utils/types';
// import Connectivity from './connectivity';
// import Store from '../state/Store';

const { apiUrl, wsUrl } = getEnvironment();

// const makeHeaders = (token: string, id: string) => ({
//   Authorization: `Bearer ${token}`,
//   // FIXME: Change to 'user' at prod
//   'x-hasura-role': 'admin',
//   'x-hasura-user-id': id,
// });

const authLink = setContext(async () => {
  const isConnected = true;
  // const isConnected = await Connectivity.isAvailableAsync();
  if (!isConnected) {
    throw new Error('No connection available');
  }
  // const { jwt, user } = Store.getState().session;
  // return {
  //   headers: makeHeaders(jwt?.token, user?.id),
  // };
  return {
    Headers: 'asdf',
  };
});

const httpLink = new HttpLink({
  uri: `${apiUrl}/v1/graphql`,
  credentials: 'same-origin',
  fetch,
});

const httpLinkAuthed = from([
  authLink,
  // errorLink, // TODO
  httpLink,
]);

const wsLink = new WebSocketLink({
  uri: `${wsUrl}/v1/graphql`,
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: () => {
      // const { jwt, user } = Store.getState().session;
      // return {
      //   headers: makeHeaders(jwt?.token, user?.id),
      // };
      return {
        Headers: 'asdf',
      };
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
        && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLinkAuthed,
);

type DataExisting<T> = {
  __typename: string;
  nodes: T[];
};

const customPagination = <T extends (Job | Message)>(
  keyArgs: string[] = [],
): FieldPolicy<DataExisting<T>> => ({
  keyArgs,
  merge(existing, incoming, { args, readField }) {
    const checkIds = keyArgs
      .map((key) => args?.where[key]._eq ?? null)
      .filter((id) => !!id);

    const merged = (existing?.nodes ?? []).filter((o) => {
      const compareIds = keyArgs
        .map((key) => readField(key, o))
        .filter((id) => !!id);
      return compareIds.some((id) => checkIds.includes(id));
    });

    if (args) {
      const offset = args.offset ?? 0;

      for (let i = 0; i < incoming.nodes.length; ++i) {
        merged[offset + i] = incoming.nodes[i];
      }
    } else {
      merged.push(...incoming.nodes);
    }

    return {
      ...incoming,
      nodes: merged,
    };
  },
});

const cacheOptions = {
  typePolicies: {
    Query: {
      fields: {
        jobs_nearby_aggregate: customPagination<Job>(['tenant_id']),
        message_aggregate: customPagination<Message>(['conversation_id']),
      },
    },
  },
};

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(cacheOptions),
  link: splitLink,
});

export {
  apolloClient,
  httpLinkAuthed,
  wsLink,
};

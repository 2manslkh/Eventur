import { ApolloClient, InMemoryCache } from '@apollo/client/core';

export const graphqlClient = new ApolloClient({
  uri: 'https://base-sepolia.easscan.org/graphql',
  cache: new InMemoryCache(),
});

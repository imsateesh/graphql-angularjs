import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cjfaydyr04tr001915sluwzvk' })

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
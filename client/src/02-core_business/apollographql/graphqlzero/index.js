import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { NavLabels } from './config'
import TabsPanel from './tabpanel'

// https://jsonplaceholder.typicode.com/users
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
});

export default function () {
  return (
    <ApolloProvider client={client}>
      <TabsPanel mapList={NavLabels} />
    </ApolloProvider>
  );
}

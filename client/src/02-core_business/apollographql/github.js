import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { LaunchQuery, LaunchMutation } from './common'

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
// https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
  const my_access_token = 'bdebf2d378c9a48bb97e8af28eebffb5c0e0c66c'
  const my_graphql_access_token = 'b51a3f78d2feb94baff65f46fdcf0b72d750463b'
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${my_access_token}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function Viewer() {
  const QUERY = gql`
    {
      viewer {
        login
        bio
      }
    }
  `
  return <LaunchQuery query={QUERY} />
}

export default function () {
  return (
    <ApolloProvider client={client}>
        <h2>Github 🚀</h2>
        <Viewer />
    </ApolloProvider>
  );
}

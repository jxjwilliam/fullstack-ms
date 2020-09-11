import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Error, Loading, NotFound } from '../../components'

// https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
const my_access_token = 'bdebf2d378c9a48bb97e8af28eebffb5c0e0c66c'
const my_graphql_access_token = 'b51a3f78d2feb94baff65f46fdcf0b72d750463b'

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
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

const GET_VIEWER = gql`
  {
    viewer {
      login
      bio
    }
  }
`;

function Viewer() {
  const { loading, error, data } = useQuery(GET_VIEWER);

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <NotFound />

  return (
    <pre style={{ textAlign: 'initial' }}>
        <code>
          {JSON.stringify(data, null, 4)}
        </code>
      </pre>
  );
}

export default function () {
  return (
    <ApolloProvider client={client}>
        <h2>Github 🚀</h2>
        <Viewer />
    </ApolloProvider>
  );
}


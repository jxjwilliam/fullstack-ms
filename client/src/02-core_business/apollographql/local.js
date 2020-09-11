import React, { useState } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Error, Loading, NotFound } from '../../components'

const httpLink = createHttpLink({
  uri: "http://localhost:8081/graphql"
})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('authToken')
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function Hello() {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `)

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
      <Hello />
    </ApolloProvider>
  )
}

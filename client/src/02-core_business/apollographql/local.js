import React, { useState } from 'react'
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
  const QUERY = gql`
    {
      hello
    }
  `
  return <LaunchQuery query={QUERY} />
}

export default function () {
  return (
    <ApolloProvider client={client}>
      <Hello />
    </ApolloProvider>
  )
}

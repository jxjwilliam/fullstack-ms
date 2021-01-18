import React from 'react'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { LaunchQuery } from './common'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  // https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
  const myAccessToken = 'bdebf2d378c9a48bb97e8af28eebffb5c0e0c66c'
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${myAccessToken}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

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
  )
}

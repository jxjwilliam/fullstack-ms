import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { TabPanels, Error, Loading, NotFound } from '../../components'
import { NavLabels, Queries } from './config'

// https://48p1r2roz4.sse.codesandbox.io/
// https://graphqlzero.almansi.me/#example-top
// https://jsonplaceholder.typicode.com/users
function graphNavLabels() {
  for (let [key, value] of NavLabels) {

  }
  return <TabPanels ary={NavLabels} withIcon={true} />;
}

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
});


/**
 * `useQuery` hook exposes `error`, `loading`, `data` to `children`.
 */
function Launches(idx) {
  const { loading, error, data } = useQuery(gql`
    ${Queries[4]}
  `);

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <NotFound />

  return (
    <>
      {JSON.stringify(data, null, 2)}
    </>
  );
}

export default function () {
  return (
    <ApolloProvider client={client}>
      <div>
        <TabPanels ary={NavLabels} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

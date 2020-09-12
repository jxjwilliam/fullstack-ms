import {useMutation, useQuery} from "@apollo/client";
import {Error, Loading, NotFound} from "../../components/misc";
import {DataPrint} from "../../helpers/utils";
import React from "react";

export function LaunchQuery ({query, variables={}}) {
  const { loading, error, data } = useQuery(query, variables);

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <NotFound />

  return <DataPrint data={data} />
}

export function LaunchMutation({mutation, variables={}}) {
  const [action, { loading, error, data }] = useMutation(mutation)
  action(variables)

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <NotFound />

  return <DataPrint data={data} />
}

import React, { useState, useEffect } from 'react'
import fetching from './fetching'
import { Loading, NotFound, Error } from '../components/misc'

// useCallback, useFetchData
export const actionFetcher = (url, opts = {}) => () => fetching(url, opts)

// ref: https://medium.com/front-end-weekly/data-fetcher-component-using-hooks-and-render-props-aacf3162dfc2
function useFetcher(action) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  async function loadData() {
    try {
      setLoading(true)
      /**
       * const response = await fetch(url);
       * const data = response.json();
       */
      const data = await action()
      setData(data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return [data, loading, error]
}

const Fetcher = ({ action: args, children }) => {
  let fetchOrAction
  // mostly case is 'string'
  if (typeof args === 'string') fetchOrAction = actionFetcher(args)
  else if (typeof args === 'function') fetchOrAction = args
  else if (typeof args === 'object' && args !== null) {
    const { url, opts } = args
    fetchOrAction = actionFetcher(url, opts)
  }

  const [data, loading, error] = useFetcher(fetchOrAction)

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data) return <NotFound />

  return children(data)
}

export default Fetcher

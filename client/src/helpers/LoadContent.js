import React, {useState, useEffect} from 'react'
import fetching from "./fetching";
import {Loading, NotFound, Error} from '../components/misc'

// useCallback, useFetchData
export const loadContent = url => () => fetching(url)

// ref: https://medium.com/front-end-weekly/data-fetcher-component-using-hooks-and-render-props-aacf3162dfc2
function useFetcher(action) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function loadData() {
    try {
      setLoading(true);
      const actionData = await action();
      setData(actionData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData()
  }, []);

  return [data, loading, error];
}

const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetcher(action);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />
  if (!data) return <NotFound />;

  return children(data);
};

export default Fetcher;

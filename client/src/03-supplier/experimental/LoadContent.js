import React, {useState, useEffect} from 'react'
import {fetching} from "../../helpers/utils";
import {Loading, NotFound, Error} from '../../components/misc'

// useCallback, useFetchData
export default function LoadContent({url, children}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetching(url)
      .then(data => {
        setLoading(false)
        setData(data)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      }, [url])
  })

  return children({loading, error, data})
}

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
    loadData();
  }, [action]);

  return [data, loading, error];
}

const Spinner = () => <h1>Spinner</h1>
const Error = () => <h1>Error</h1>

const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetcher(action);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />
  if (!data) return <NotFound />;
  return children(data);
};

// const UserProfile = ({id}) => (
//   <Fetcher action={api.fetchProfile(id)}>
//     {data => renderProfile(data)}
//   </Fetcher>
// )

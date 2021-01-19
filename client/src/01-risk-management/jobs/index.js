import React, { useState, useEffect } from 'react'

function fetchGithubJobs() { }

function App() {
  const [list, updateList] = useState([])

  useEffect(() => {
    fetchGithubJobs(updateList)
  }, [])

  return <div>{list}</div>
}

export default App

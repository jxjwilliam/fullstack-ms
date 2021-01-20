import React, { useState, useEffect } from 'react'
import Jobs from './jobs'
import { fetching } from '../../helpers/utils'

const JOB = {
  'all': 'http://localhost:8076/api/jobs/github',
  'custom': 'http://localhost:8076/api/jobs/github_custom',
  'all1': '/api/jobs/github',
  'custom1': '/api/jobs/github_custom',

}

// directly access ms-redis
function fetchGit(url) {
  return function () {
    const [list, updateList] = useState([])

    useEffect(() => {
      async function getGihubJobs() {
        const res = await fetch(url)
        const json = await res.json()
        updateList(json)
      }
      getGihubJobs()
    }, [])

    return (
      <div className="App">
        <Jobs jobs={list} />
      </div>
    )
  }
}

// access ms-redis by proxy
function fetchingGit(url) {
  return () => {
    const [list, updateList] = useState([])

    useEffect(() => {
      console.log(url)
      fetching(url).then(data => {
        console.log('?????????????????????', data)
        updateList(data)
      })
    }, [])

    return (
      <div className="App">
        <Jobs jobs={list} />
      </div>
    )
  }
}

// const GitAll = fetchGit(JOB.all)
// const GitCustom = fetchGit(JOB.custom)
const GitAll = fetchingGit(JOB.all1)
const GitCustom = fetchingGit(JOB.custom1)

export {
  GitAll,
  GitCustom
}

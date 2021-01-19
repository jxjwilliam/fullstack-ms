const fetch = require('node-fetch')
const CronJob = require('cron').CronJob;

const baseUrl = 'https://jobs.github.com/positions.json'
const url = `${baseUrl}?search=node`

async function fetchGithubJobs() {
  let [resultCount, page] = [1, 0]
  const ary = []
  while (resultCount > 0) {
    const res = await fetch(`${url}&page=${page}`)
    const jobs = await res.json()
    ary.push(...jobs)
    resultCount = jobs.length
    console.log(jobs.length)
    page += 1
  }
  console.log('got ' + resultCount + ' total')
}


fetchGithubJobs()

const job = new CronJob('* * * * *', fetchGithubJobs, null, true, 'America/Los_Angeles');

// job.start();

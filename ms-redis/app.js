const express = require('express')
require('dotenv').config()

const port = process.env.REDIS_PORT

const app = express()

/**
 * github: https://jobs.github.com/positions
 */
app.get('/api/jobs/github', (req, res) => {
  const url = 'https://jobs.github.com/positions.json?search=node'
  res.json({})
})

/**
 * indeed
 */
app.get('/api/jobs/indeed', (req, res) => {
  res.json({})
})

/**
 * stackoverflow
 */
app.get('/api/jobs/stackoverflow', (req, res) => {
  res.json({})
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

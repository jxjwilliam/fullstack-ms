import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './src/schema'

require('dotenv').config()

const port = process.env.GRAPHQL_PORT

const app = express()

app.get('/', (req, res) => res.send('It works. You can use /graphql for more details.'))

app.get('/express', (req, res) => res.send('/express works. You can use /graphql for more details.'))

// GraphiQL is on http://localhost:8069/graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

app.listen(port, () => {
  console.log(`🚀 Running a GraphQL API server at localhost:${port}/graphql`)
})

const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

require('dotenv').config()

const port = process.env.GRAPHQL_PORT

// 使用 GraphQL Schema Language 创建一个 schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// root 提供所有 API 入口端点相应的解析器函数
const root = {
  hello: () => {
    return 'Hello the World from express-graphql !'
  },
}

const app = express()

// GraphiQL is on http://localhost:8069/graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
)

app.listen(port, () => {
  console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
})

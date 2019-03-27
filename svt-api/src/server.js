require('dotenv-flow').config()

const express = require('express')
const expressGraphql = require('express-graphql')
const fetch = require('node-fetch')
const fs = require('fs')
const cors = require('cors')
const { buildSchema } = require('graphql')
const { fetchTweets } = require('./clients/twitter')(fetch)

const app = express()

app.use('/graphql', cors(), expressGraphql({
  schema: buildSchema(fs.readFileSync('schema.graphql', 'utf8')),
  rootValue: {
    wordcloud: require('./handlers/wordcloud')(fetchTweets)
  },
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(8080, () => {
  console.info('Running on http://127.0.0.1:8080/graphql')
})

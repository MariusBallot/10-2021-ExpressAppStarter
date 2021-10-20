const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const users = require('./routes/projects')
const app = express()
const mainRouter = require('./routes/mainRouter')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', mainRouter);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`connected on: http://localhost:${port}`)
})
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

URI = process.env.REACT_APP_MONGODB_URI
// connect to db
mongoose.connect(URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT || 4000)
    })
  })
  .catch((error) => {
    console.log(error)
  })
  
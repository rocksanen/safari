const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photo: {
    filename: {
      type: String,
      required: true
    }
  },
  details: [
    {
      label:{
        type: String,
        required: true
      }
    },
    {
      label:{
        type: String,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('Product', productSchema)
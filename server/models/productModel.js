const mongoose = require('mongoose')
 
const Schema = mongoose.Schema

const productSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
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
      type: String,
      required: true
  },
  details: [
    {
      label:{
        type: String,
        required: true
      },
      value:{
        type: String
      }
    },
    {
      label:{
        type: String,
        required: true
      },
      value:{
        type: String
      }
    }
  ]
})


productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Product', productSchema)
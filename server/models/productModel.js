const mongoose = require('mongoose')

/*
const url = "mongodb+srv://xxx:xxx@cluster0.ooronxc.mongodb.net/products?retryWrites=true&w=majority"
console.log(url);
console.log('connecting to', url)
 

mongoose.connect(url)
  .then(result => {
      console.log('connected to MongoDB')
  })
  .catch((error) => {
      console.log('error connecting to MongoDB:', error.message)
  })
  
*/
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
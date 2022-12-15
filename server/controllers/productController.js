const Product = require('../models/productModel')
const mongoose = require('mongoose')
 

// get all products
const getProducts = async (req, res) => {
  try { 
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
  } catch (error) {
    // Log the error to the console
    console.error(error)
    // Send a 500 "Internal Server Error" response to the client
    res.status(500).send("Internal Server Error")
  }
}

// get a single product
const getProduct = async (req, res) => {
  // Get the product ID from the request parameters
  const { productId } = req.params

  // If the product ID is not a valid Mongoose ObjectId, return a 400 response with an error message
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({error: 'Invalid product ID'})
  }

  try {
    // Try to find the product by ID
    const product = await Product.findById(productId)

    // If the product is not found, return a 404 response with an error message
    if (!product) {
      return res.status(404).json({error: 'Product not found'})
    }
    
    // If the product is found, return a 200 response with the product data
    res.status(200).json(product)
  } catch (error) {
    // If there is an error, log it to the console and return a 500 response with an error message
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}



// create new product
const createProduct = async (req, res) => {
  // Destructure the fields from the request body
  const {name, price, stock, description, photo, details} = req.body

  // Create an array to store the names of any missing fields
  let missingFields = []

  // Check if each required field is present in the request body
  if(!name) {
    missingFields.push('name')
  }
  if(!price) {
    missingFields.push(0)
  }
  if(!stock) {
    missingFields.push(0)
  }
  if(!description) {
    missingFields.push('description')
  }
  if(!photo) {
    missingFields.push('url')
  }
  if(!details) {
    missingFields.push('details')
  }

  // If any required fields are missing, return a 400 response with an error message and the list of missing fields
  if(missingFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', missingFields })
  }

  // Add the new product to the database
  try {
    const product_id = req.body._id
    const product = await Product.create({name, price, stock, description, photo, details, product_id})
    res.status(201).json(product)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a product

const deleteProduct = async (req, res) => {
  try {
    // Get the product ID from the request parameters
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // If not, throw an error with a custom message
      throw new Error('Invalid product ID');
    }

    // Try to find and delete the product using the ID
    const product = await Product.findOneAndDelete({ _id: id });

    // If the product is not found, throw an error with a custom message
    if (!product) {
      throw new Error('Product not found');
    }

    // If the product is found, return a 200 response with the product
    res.status(200).json(product);
  } catch (error) {
    // If an error occurs, return a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
};

 
// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params

  // Return 404 if the provided ID is not valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  // Find the product by ID and update it with the request body
  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true // Return the updated product instead of the original
  })

  // Return a 400 error if the product was not found
  if (!product) {
    return res.status(400).json({error: 'No such product'})
  }

  // Return the updated product
  res.status(200).json(product)
}


module.exports = {
  getProducts: getProducts,
  getProduct: getProduct,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
}
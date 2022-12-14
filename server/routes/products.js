const express = require('express')
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct
} = require('../controllers/productController')

const router = express.Router()


// GET all products
router.get('/', getProducts)

//GET a single product
router.get('/:id/:productId', getProduct)

// POST a new product
router.post('/', createProduct)

// UPDATE a product
router.patch('/:id', updateProduct)
 

module.exports = router
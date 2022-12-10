const express = require('express')
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct
} = require('../controllers/productController')
//const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all product routes
//router.use(requireAuth)

// GET all products
router.get('/', getProducts)

//GET a single workout
router.get('/:id', getProduct)

// POST a new product
router.post('/', createProduct)

// UPDATE a product
router.patch('/:id', updateProduct)


module.exports = router
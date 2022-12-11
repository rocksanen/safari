const express = require('express')

// controller functions / getUsers can be removed after not neede for tests!!!!!
const { loginUser, signupUser, getUsers } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// For test purposes only!!!!!
router.get('/', getUsers)

module.exports = router
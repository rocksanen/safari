const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


//Token generator function
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '7d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    const name = user.name;

    // create a token
    const token = createToken(user._id)

    res.status(200).json({name, email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {

  const {name,email, password} = req.body

  try {
    const user = await User.signup(name,email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({name,email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// For test purposes only!!!!!
const getUsers = async (req, res) => {
  
  const users = await User.find({}).sort({createdAt: -1})
  res.status(200).json(users)
}
// getUsers can be removed after not neede anymore
module.exports = { signupUser, loginUser, getUsers }
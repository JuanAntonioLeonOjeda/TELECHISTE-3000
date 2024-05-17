const User = require('../models/user.model')
const ContactInfo = require('../models/contact.model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTS))
    req.body.password = bcrypt.hashSync(req.body.password, salt)

    const user = await User.create(req.body)
    await user.createContact_info()

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

    res.status(201).json({
      message: "Signup succesful",
      result: token,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error signing up",
      result: error,
    });
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.status(401).json({
        message: "Email or password incorrect",
        result: 0,
      });
    }

    const result = bcrypt.compareSync(req.body.password, user.password)

    if (!result) {
        return res.status(401).json({
          message: "Email or password incorrect",
          result: 0,
        });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    })

    res.status(200).json({
      message: "login succesful",
      result: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error signing up",
      result: error,
    });
  }
}

module.exports = {
  signup,
  login
}
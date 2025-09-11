const mongoose = require('mongoose')
const {isEmail} =require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    trim: true,
    maxlength: [25, "name cannot be more than 25 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valida email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [6, "password should be more than 6 characters"],
  },
});

const User= mongoose.model('user' , userSchema)

module.exports = User;
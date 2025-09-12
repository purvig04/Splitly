const mongoose = require('mongoose')
const {isEmail} =require('validator')
const bcrypt = require('bcrypt')

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
    unique: true, //have to handle with status code
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [6, "password should be more than 6 characters"],
  },
});

//encrypting the password before entering that to db
userSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password,salt);
  next();
})

const User= mongoose.model('user' , userSchema)

module.exports = User;
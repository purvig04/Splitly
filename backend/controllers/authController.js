const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();



const handleErrors = (err) => {
  console.log(err.message,err.code)
  const errors = { name: "", email: "", password: "" };

  //error during login
  if(err.message=='incorrect email'){
    errors.email="Email is not registered"
  }
  if (err.message == "incorrect password") {
    errors.password = "Password incorrect";
  }
  
  //duplicate error
  if (err.code == 11000) {
    errors.email = "User is already registered";
    return errors;
  }

  //validation error
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const getRegister = (req, res) => {
  console.log("req: " + req);
  res.send("register");
};

const postRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = createToken(user._id);
    // res.cookie("testing", "cookies");
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user= await User.login(email,password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({user:user._id})
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({errors});
  }

};

const getHome= (req,res) =>{
  res.status(200).json({
    message:'Welcome to home Page',
    user:res.locals.user
  })
}

const getLogout =(req,res) =>{
  res.cookie("jwt", "", { maxAge: 1 });
  res.send("Logged out")
  res.status(204).json({message:"logged out"})
}

module.exports = { getRegister, postRegister, postLogin,getHome ,getLogout};

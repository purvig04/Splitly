const User = require("../models/User");

const handleErrors = (err) => {
    //console.log(err.message,err.code)
    const errors= {name:'',email:'',password:''}

    //duplicate error
    if(err.code ==11000){
        errors.email="User is already registered";
        return errors;
    }

    //validation error
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message
        })
        
    }

    return errors;


}

const getRegister=(req,res)=>{
    console.log("req: " + req )
    res.send('register')

}

const postRegister = (req, res) => {
    const {name , email ,password} = req.body
    console.log(name,email,password);
    
    
  res.send("user registered");
};

const postLogin = async (req, res) => {
    const { name, email, password } = req.body;

    try{
        const user= await User.create({name,email,password})
        res.status(201).json(user);
    }
    catch(err){
        const error = handleErrors(err);
        res.status(400).send(error)
        
    }

};

module.exports={getRegister,postRegister,postLogin}
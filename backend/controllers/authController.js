
const getRegister=(req,res)=>{
    console.log("req: " + req )
    res.send('register')

}

const postRegister = (req, res) => {
  res.send("user registered");
};

const postLogin = (req, res) => {
  res.send("user logged in");
};

module.exports={getRegister,postRegister,postLogin}
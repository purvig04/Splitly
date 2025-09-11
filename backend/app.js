const express = require("express");
const cors =require('cors');
const authRoutes = require("./routes/authRoutes");
const app = express();


app.use(cors());
app.use(express.json())
app.use('/api',authRoutes);

app.get("/", (req, res) => {
  res.send("WORKING");
});



app.listen(3000, () => {
  console.log("SERVER Running");
});
 
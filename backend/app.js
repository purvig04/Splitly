const express = require("express");
const cors =require('cors');
const authRoutes = require("./routes/authRoutes");
const app = express();
const connectDB = require("./db/connect");
require('dotenv').config();
const cookieParser = require('cookie-parser')



app.use(
  cors({
    origin: "http://localhost:8081", 
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())
app.use('/api',authRoutes);

app.get("/", (req, res) => {
  res.send("WORKING");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
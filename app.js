const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const productRoutes = require('./routes/v1/product.route');
const messageRoutes = require("./routes/v1/message.route");



app.use(cors());
app.use(express.json());



// product routes

app.use('/', productRoutes)
app.use('/', messageRoutes)


app.get("/", (req, res) => {
  res.send("Sultan Tepih Server is Running.....");
});

app.all("*", (req, res) => {
  res.send("No Routes found!");
});

module.exports = app;

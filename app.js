const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require('./routes/v1/product.route');

app.use(cors());
app.use(express.json());


// product routes

app.use('/', productRoutes)




app.get("/", (req, res) => {
  res.send("Sultan Tepih Server is Running.....");
});

app.all("*", (req, res) => {
  res.send("No Routes found!");
});

module.exports = app;

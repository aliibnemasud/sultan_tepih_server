const app = require("./app");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require('mongoose');


/* mongoose.connect(process.env.DATABASE).then(()=> {
  console.log(`Database connection is successfully`.yellow.bold)
}); */

app.listen(port, () => {
  console.log(`Sultan Tepih Server Running on port ${port}`.red.bold);
});

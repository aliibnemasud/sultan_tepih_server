const app = require("./app");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require("colors");

app.listen(port, () => {
  console.log(`Sultan Tepih Server Running on port ${port}`.red.bold);
});

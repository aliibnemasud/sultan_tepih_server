const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../../models/Product");


router.route("/product")
  .get(async (req, res, next) => {

    try {
      const result = await Product.find({})
      res.send(result);      

    } catch (error) {
        console.log(error)
    }

  })

  .post(async (req, res, next) => {

    try {

        const product = await Product.create(req.body)
        res.send({status: 'success'})
        
    } catch (error) {
        console.log(error)        
    }
  });

module.exports = router;
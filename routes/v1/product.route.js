const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../../models/Product");

router
  .route("/product")
  /**
   * @api {get} Get all the Products
   */
  .get(async (req, res, next) => {
    try {
      const result = await Product.find({});
      res.status(200).json({
        status: "Success!",
        message: "Product data Loaded Successfully!",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        status: "Field!",
        message: "Data inserted Fail",
        error: error.message,
      });
    }
  })

  /**
   * @api {Post} the Products
   */

  .post(async (req, res, next) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json({
        status: "Success!",
        message: "Product data Inserted Successfully!",
        data: product,
      });
    } catch (error) {

      res.status(400).send({
        status: "Field!",
        message: "Data inserted Fail",
        error: error.message,
      });
    }
  });

module.exports = router;

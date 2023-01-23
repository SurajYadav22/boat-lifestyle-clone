const express = require("express");
const Product = require("../model/productModel");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    let data = [];
    for (let i = 0; i < product.length; i++) {
      data.push(product[i]);
    }
    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.send(product);
  } catch (err) {
    return res.send(err.message);
  }
});

module.exports = router;

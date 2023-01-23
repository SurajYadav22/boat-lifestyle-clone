const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    features: { type: [String], required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    original_price: { type: Number, required: true },
    discount: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true },
    image: { type: [String], required: true },
    color: { type: [String], required: true },
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;

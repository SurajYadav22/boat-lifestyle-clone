const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: {
      type: Array,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const Signup = mongoose.model("User", signupSchema);

module.exports = Signup;

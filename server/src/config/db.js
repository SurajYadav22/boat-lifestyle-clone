const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const username = process.env.USERNAME_DB;
const password = process.env.PASSWORD_DB;

module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.by2cyii.mongodb.net/?retryWrites=true&w=majority`,

    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

const express = require("express");
const connect = require("./src/config/db");
const cors = require("cors");
const dotenv = require("dotenv");

const productController = require("./src/controller/productController");
const signupController = require("./src/controller/signupController");
const championController = require("./src/controller/championController");
// const connection = require("./src/config/db");

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/products", productController);
app.use("/users", signupController);
app.use("/champions", championController);

const L_PORT = process.env.PORT || PORT;

app.listen(L_PORT, async () => {
  try {
    await connect();
  } catch (error) {
    console.log(`"Error while connecting to database ${error}`);
  }

  console.log("Server is listening on port " + L_PORT);
});

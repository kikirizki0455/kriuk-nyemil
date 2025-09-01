const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const product = require("./modules/products/product.controller");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use("/products", product);

app.get("/", (req, res) => {
  res.send("sudah aktif");
});

module.exports = app;

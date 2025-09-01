const express = require("express");
const route = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./product.service");

route.get("/", async (req, res) => {
  const product = await getAllProducts();
  res.status(200).send({
    product,
    message: "success ambil data product",
  });
});

route.post("/", async (req, res) => {
  const dataProduct = req.body;

  const product = await createProduct(dataProduct);
  res.status(201).send({
    data: product,
    message: "success membuat product",
  });
});

route.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const dataProduct = req.body;
  if (
    !dataProduct.name ||
    !dataProduct.price ||
    !dataProduct.image ||
    !dataProduct.description ||
    !dataProduct.title
  ) {
    return res.status(400).send("Semua kolom harus diisi");
  }
  const product = await updateProduct(id, dataProduct);
  res.status(200).send({
    data: product,
    message: "success update product",
  });
});

route.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const product = await deleteProduct(id);

  res.status(200).send({
    data: product,
    message: "berhasil hapus product",
  });
});

module.exports = route;

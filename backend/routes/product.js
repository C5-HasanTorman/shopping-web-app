const express = require("express");
const {
  addProduct,
  getAllProduct,
  deleteProduct,
} = require("../controllers/product");
const { authentication } = require("../middleware/authentication ");

const productRouter = express.Router();

productRouter.post("/", authentication, addProduct);
productRouter.get("/", getAllProduct);
productRouter.delete("/:id", authentication, deleteProduct);

module.exports = productRouter;

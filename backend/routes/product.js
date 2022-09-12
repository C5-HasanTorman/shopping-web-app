const express = require("express");
const {
  addProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");
const { authentication } = require("../middleware/authentication ");

const productRouter = express.Router();

productRouter.post("/", authentication, addProduct);
productRouter.get("/", getAllProduct);
productRouter.delete("/:id", authentication, deleteProduct);
productRouter.put("/:id", authentication, updateProduct);

module.exports = productRouter;

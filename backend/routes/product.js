const express = require("express");
const { addProduct, getAllProduct } = require("../controllers/product");
const { authentication } = require("../middleware/authentication ");

const productRouter = express.Router();

productRouter.post("/", authentication, addProduct);
productRouter.get("/", getAllProduct);

module.exports = productRouter;

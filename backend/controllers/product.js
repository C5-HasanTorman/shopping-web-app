const connection = require("../models/db");

/* 
1. ADD product
2. Get All Product
3. Delete Product
4. Edit Product
*/

// 1. ADD product

const addProduct = (req, res) => {
  const { user_id } = req.token;
  const { product_name, description, price, url } = req.body;

  const query =
    "INSERT INTO products (product_name, description, price, url,user_id) VALUES ( ?,?,?,?,?)";
  const data = [product_name, description, price, url, user_id];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error*",
        err: err,
      });
    }

    return res.status(201).json({
      success: true,
      massage: "Item Add Successfuly",
      result,
    });
  });
};

// 2. Get All Product
const getAllProduct = (req, res) => {
  const query = "SELECT * FROM products WHERE is_deleted =0";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error*",
        err: err,
      });
    }
    if (!result.length) {
      return res.status(404).json({
        success: false,
        massage: "Theres No Item To Show",
      });
    } else {
      res.status(200).json({
        success: true,
        massage: "All Items",
        result,
      });
    }
  });
};

// 3. Delete Product
const deleteProduct = (req, res) => {
  const {product_id} = req.params;
  const query = "UPDATE products SET is_deleted =1 WHERE id= ?";
  const data = [product_id];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error*",
        err: err,
      });
    }
    if (!result.changedRows) {
      return res.status(404).json({
        success: false,
        massage: `The Product: ${product_id} is not found`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: `Succeeded to delete Product with id: ${product_id}`,
      result: result,
    });
  });
};

module.exports = { addProduct, getAllProduct ,deleteProduct};

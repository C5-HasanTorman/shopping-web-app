const connection = require("../models/db");

/* 
1. ADD product
2. Get All Product
3. Delete Product
4. Edit Product
*/

const addProduct = (req, res) => {
  const { user_id } = req.token;
  const { product_name, description, price, url } = req.body;

  const query =
    "INSERT INTO product (product_name, description, price, url,user_id) VALUES ( ?,?,?,?,?)";
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

module.exports = { addProduct };

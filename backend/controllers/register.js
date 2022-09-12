const connection = require("../models/db");
const bcrybt = require("bcrypt");
const salt = 10;

const register = async (req, res) => {
  const { firstName, lastName, country, email, password, role_id } = req.body;

  //   password hash :
  const hashPassword = await bcrybt.hash(password, salt);
  console.log(hashPassword);

  const data = [firstName, lastName, country, email, hashPassword, role_id];
  const query = "SELECT email FROM users WHERE email = ?";

  connection.query(query, data[3], (err, result) => {
    if (!result.length) {
      return res.status(409).json({
        success: false,
        message: "The email already exists",
      });
    }

    const query =
      "INSERT INTO users (firstName, lastName, country, email, password ,role_id) VALUES (?,?,?,?,?,?) ";
    connection.query(query, data, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          massage: "server error*",
          err: err,
        });
      }
      res.status(201).json({
        success: true,
        message: "Account Created Successfully",
        result,
      });
    });
  });
};

module.exports = { register };

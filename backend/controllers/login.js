const connection = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * from users WHERE email= ?";
  const data = [email];

  connection.query(query, data, async (err, result) => {
    try {
      if (result.length) {
        // compare password
        const match = await bcrypt.compare(password, result[0].password);
        if (!match) {
          return res.status(500).json({
            success: false,
            massage: "Wrong password!!",
          });
        }
        // create token
        const payload = {
          userId: result[0].id,
          role_id: result[0].role_id,
          firstName: result[0].firstName,
        };
        const SECRET = process.env.SECRET;

        const token = jwt.sign(payload, SECRET);
      } else {
        res.status(404).json({
          message: "The email doesn't exist",
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        massage: "server error*",
        err: err,
      });
    }
  });
};

module.exports = { login };

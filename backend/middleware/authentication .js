const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }

    const token = req.headers.authorization.split(" ").pop();

    await jwt.verify(token, process.env.SECRET, (err, result) => {
      console.log(result, "verify");
      if (err) {
        res.status(403).json({
          success: false,
          message: "The token is invalid ",
        });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "SERVER ERROR",
      err,
    });
  }
};

module.exports = { authentication };

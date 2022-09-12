const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");

const app = express();
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const productRouter = require("./routes/product");

// built in middleware
app.use(cors());
app.use(express.json());

// router middleware
app.use("/regester", registerRouter);
app.use("/login", loginRouter);
app.use("/product", productRouter);

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

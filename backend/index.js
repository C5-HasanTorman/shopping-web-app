const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");

const app = express();
const roleRouter = require("./routes/role");
const registerRouter = require("./routes/register");

// built in middleware
app.use(express.json());
app.use(cors());

// router middleware
app.use("/role", roleRouter);
app.use("./regester", registerRouter);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

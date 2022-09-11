const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// built in middleware
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

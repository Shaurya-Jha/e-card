const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

// dotenv config
require('dotenv').config()
console.log(process.env);       // remove later

app.use(cors())

app.listen(PORT, () => {
  console.log(`server started running on port: ${PORT}`);
});

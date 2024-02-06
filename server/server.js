const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const mongoose = require("mongoose")

// dotenv config
require('dotenv').config()
// console.log(process.env.MONGO_URI);       // remove later

app.use(cors())

app.listen(PORT, async () => {
  console.log(`server started running on port: ${PORT}`);

//   console.log(process.env.MONGO_URI);

  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`database connected`);
  }).catch((err) => {
    console.log(`Cannot connect to the database: \n\n ${err}`);
  })
});

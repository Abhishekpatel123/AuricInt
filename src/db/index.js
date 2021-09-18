const mongoose = require("mongoose");
require("dotenv").config();
//Connections Setup

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("db is connected");
    // commonData()
  })
  .catch((err) => console.log("db is not connected", err));

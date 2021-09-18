const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./src/routes");
const PORT = process.env.PORT || 8000;

// db
require("./src/db");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// putting data in mongodb

// routes
app.use(routes);

// listening at port 8000
app.listen(PORT, () => console.log(`listening at port ${PORT}`));

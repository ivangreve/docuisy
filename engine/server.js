require("rootpath")();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./helpers/errorHandler");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Api routes
app.use("/api/documents", require("./controllers/documents.controller"));

// global error handler
app.use(errorHandler);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

const port = process.env.NODE_ENV === "production" ? 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});

module.exports = app;

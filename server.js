const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan-body");
const cors = require("cors");

const multer = require("multer");
var upload = multer();

// initializes app
const app = express();
// parses url-encoded data (parameters) with the querystring library when true.
app.use(bodyParser.urlencoded({ extended: false }));

// Parses req.body, making it readable on the request object
app.use(bodyParser.json());

// Enables Cross Origin Resource Sharing
app.use(cors());

// req/res object logger
logger(app);

//
app.use("/test", upload.none(), (req, res, next) => {
  const { firstName, lastName } = req.body;
  res.send({ firstName, lastName });
});

app.listen(5002, () => {
  console.log("listening on http://localhost:5002");
});

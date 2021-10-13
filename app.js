const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
var router = express.Router();

const oauthControllers = require('./src/oauth');

app.get("", (req, res) => {
  res.send("Hello world");
});

app.get("/generateToken", oauthControllers.generateToken);

app.listen(PORT, () => {
  console.log('Service is running on port ' + PORT);
});
const express = require("express");

const app = express();

app.use(express.urlencoded());

app.listen(3000, function () {
  console.log("app started on port 3000");
});

app.get("/", function (req, res) {
  res.send("hello");
});

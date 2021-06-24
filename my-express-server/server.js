const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello WORLD!!!</h1>");
});

app.get("/contact", function (req, res) {
  res.send(
    "You shouldn't be here!!!, but if u want to talk to someone you can reach me at tkhh123@gmail.com"
  );
});

app.get("/about", function (req, res) {
  res.send(
    "How do i make myself sound less boring? hmmmmmmmmmmmmmmmmmmmmmm hmmmmmmmmm"
  );
});

app.get("/YeshShmot", function (req, res) {
  res.send("Yesh Shmot ata yafe");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

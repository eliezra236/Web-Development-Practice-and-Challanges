const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen("3000", function () {
  console.log("Calculator started at port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("Thanks for using my shitty calculator, your result is: " + result);
});

app.get("/Bmi-Calculator", function (req, res) {
  res.sendFile(__dirname + "/BmiCalculator.html");
});

app.post("/bmiCaulculator", function (req, res) {
  var weight = req.body.weight;
  var height = req.body.height;

  var bmi = weight / (height * height);

  res.send("Your bmi is " + bmi + " fatso");
});

app.get("/moti", function());

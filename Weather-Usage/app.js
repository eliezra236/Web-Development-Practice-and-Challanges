const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen("3000", function () {
  console.log("app is running! catch it!!!");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // some general info to use later to check the weather
  const cityName = req.body.cityName;
  const appID = "390749f91adde428b1966d778635a428";
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    appID +
    "&units=metric";
  // making the request from the openWeather server
  https.get(url, function (respond) {
    // making the page appear with the recieved data
    respond.on("data", function (data) {
      const wetherResult = JSON.parse(data);
      console.log(wetherResult);
      const temp = wetherResult.main.temp;
      const weathDescrip = wetherResult.weather[0].description;
      const icon = wetherResult.weather[0].icon;
      res.send(
        "<h1>The weather in " +
          cityName +
          " is " +
          temp +
          " dagress in celsius </h1>" +
          "<h2>The weather can be described as " +
          weathDescrip +
          "</h2>" +
          "<img src='http://openweathermap.org/img/wn/" +
          icon +
          "@2x.png'></img>"
      );
    });
  });
});

app.get("/", function (req, res) {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=390749f91adde428b1966d778635a428&units=metric";
  https.get(url, function (respond) {
    respond.on("data", function (data) {
      console.log(typeof data);
      var wetherResult = JSON.parse(data);
      console.log(wetherResult);
      console.log(wetherResult.main.temp);
      var weathDescrip = wetherResult.weather[0].description;
      res.send(
        "<h1>The weather in Jerusalem is " +
          wetherResult.main.temp +
          " dagress in celsius </h1>" +
          "<h2>The weather can be described as " +
          weathDescrip +
          "</h2>" +
          "<img src='http://openweathermap.org/img/wn/" +
          wetherResult.weather[0].icon +
          "@2x.png'></img>"
      );
    });
  });
});

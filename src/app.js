const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});
app.get("/help", (req, res) => {
  res.send([{ name: "Chinmay", age: 27 }, { name: "Sarah" }]);
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/weather", (req, res) => {
  res.send("Weather");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

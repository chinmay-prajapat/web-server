const path = require("path");
const express = require("express");
const hbs = require("hbs");

//Load app
const app = express();

const publicPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//setup dynamic templates

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

//Static pages setup
app.use(express.static(publicPath));

//Setup routers

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "chinmay",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather forecasting",
    country: "India",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Chinmay",
  });
});
app.get("/weather", (req, res) => {
  res.send({ forecast: "sunny" });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    error: "Help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "chinmay",
    error: "Page not found",
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

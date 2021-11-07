const path = require("path");
const express = require("express");
console.log(__dirname);
console.log();
const app = express();

const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));

app.get("/weather", (req, res) => {
  res.send({ forecast: "sunny" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

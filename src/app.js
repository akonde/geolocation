const path = require("path");
const express = require("express");

const app = express();
// const publicDirectoryPath = path.join(__dirname, "../pubic");

// app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({
    location: "Wolverhampton",
    county: "west midlands, england, UK",
    temperature: " 10 C",
  });
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

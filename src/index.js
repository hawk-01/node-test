const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "Google", place: "Cal" });
});

app.listen(8080);

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World wide hansome");
});

app.listen(3000, () => {
  console.log("3000번 주소에서 app이 시작 됬어.");
});

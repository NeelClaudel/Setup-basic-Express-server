// import { Express } from "express";

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

const express = require("express");
const app = express();
const apiRouter = require("./router/api");

// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

app.use("/api", apiRouter);
let PORT = 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

const express = require("express");
const app = express();
const apiRouter = require("./router/api");
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/apptest")
  .then(() => {
    console.log("Successfully Db Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", apiRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Running on port :- ${PORT}`);
});

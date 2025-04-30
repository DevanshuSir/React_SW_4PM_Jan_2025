const express = require("express");
const app = express();
// const ejs = require("ejs");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("./public"));

let PORT = 5000;

const product = [
  {
    ProductName: "I-Phone",
    ProductPrice: "$45",
  },
  {
    ProductName: "Samsung",
    ProductPrice: "$40",
  },
  {
    ProductName: "Nothing",
    ProductPrice: "$32",
  },
];

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/home", (req, res) => {
//   res.render("index.ejs");
// });

app.get("/data", (req, res) => {
  res.send(product);
});

// app.get("/user/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send("Successfully");
// });

app.post("/userdata", (req, res) => {
  //   console.log(req.body);
  product.push(req.body[0]);
  res.send("Successfully Insert");
});

app.put("/update/:id", (req, res) => {
  const productId = req.params.id;
  const productData = req.body[0];
  product.splice(productId, 1, productData);
  res.send("Successfully Update");
});

app.delete("/delete/:id", (req, res) => {
  const productId = req.params.id;
  product.splice(productId, 1);
  res.send("Successfully Delete");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

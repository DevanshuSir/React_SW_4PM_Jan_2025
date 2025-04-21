const http = require("http");
const fs = require("fs");

// console.log(http);

const HomePage = fs.readFileSync("./index.html");
const CssFile = fs.readFileSync("./css/style.css");
const JsFile = fs.readFileSync("./js/index.js");
const home = fs.writeFileSync("home.html", "<h1>Hello class</h1>");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(HomePage);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.write(CssFile);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.write(JsFile);
    res.end();
  } else if (req.url === "/about") {
    res.write("About Page");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Running on port 5000");
});

// console.log("salom node js ");

// const app = require("./math");

// console.log(app(10, 30));

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Server ishga tushd");

  res.end();
});

server.listen(5000, () => {
  console.log("Server 5000 portda ishga tushdi");
});

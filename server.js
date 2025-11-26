const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Server ishga tushdi");

  res.end();
});

server.listen(5000, () => {
  console.log("Server 5000 portda ishga tushdi");
});

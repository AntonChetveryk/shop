const http = require("http");
let users = [
  { name: "Anton", age: 28 },
  { name: "Elena", age: 23 },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

    res.end(JSON.stringify(users));
  }
});

server.listen(5000, () => {
  console.log("Server is running...");
});

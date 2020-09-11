const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/json",
    });

    const users = [
      { name: "Anton", age: 28 },
      { name: "Elena", age: 23 },
    ];

    res.end(JSON.stringify(users));
  }
});

server.listen(5000, () => {
  console.log("Server is running...");
});

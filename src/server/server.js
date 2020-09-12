// const http = require("http");
const express = require("express");
const app = express();

app.get(function (req, res) {
  res.send("hello world");
});

app.listen(8080, () => {
  console.log("Server has been started");
});

let products = [
  {
    name: "iPhone 4s",
    price: 200,
    available: 2,
  },
  {
    name: "Nokia 2110",
    price: 600,
    available: 0,
  },
  {
    name: "Samsung s3",
    price: 345,
    available: 2,
  },
  {
    name: "LG G2",
    price: 90,
    available: 1,
  },
  {
    name: "Nokia 9930",
    price: 250,
    available: 3,
  },
  {
    name: "iPhone X",
    price: 123,
    available: 4,
  },
  {
    name: "Meizu m9",
    price: 656,
    available: 23,
  },
  {
    name: "Sonny 9",
    price: 564,
    available: 234,
  },
  {
    name: "iPhone 6 plus",
    price: 434,
    available: 7,
  },
  {
    name: "Alcatel noname",
    price: 123,
    available: 7,
  },
];

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     res.writeHead(200, {
//       "Content-Type": "text/json",
//       "Access-Control-Allow-Origin": "*",
//     });
//     res.end(JSON.stringify(products));
//   } else if (req.method === "POST") {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     res.end("anton");
//   }
// });

// server.listen(5000, () => {
//   console.log("Server is running...");
// });

const http = require("http");
const axios = require("axios");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello, World</h1>");
  } else if (req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      console.log(JSON.parse(data).todo); // 'Buy the milk'
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

// axios
//   .get("http://localhost:3000")
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

axios
  .post("http://localhost:3000", {
    todo: "Buy the milks",
  })
  .then((res) => {
    // console.log(`statusCode: ${res.status}`);
    // console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

////////////////////////////////------Express-------------
// const express = require("express");

// const app = express();

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// app.get("/", (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello, World</h1>");
// });

// app.post("/", (req, res) => {
//   console.log("---------------------------------express-post-----------------");
//   console.log(req.body.todo);
// });

// axios
//   .get("http://localhost:3000")
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// axios
//   .post("http://localhost:3000", {
//     todo: "Buy the milks",
//   })
//   .then((res) => {
//     // console.log(`statusCode: ${res.status}`);
//     // console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

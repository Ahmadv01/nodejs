import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/api") {
      res.end("This is from the server");
    } else {
      res.end("Bad URL");
    }
  }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));

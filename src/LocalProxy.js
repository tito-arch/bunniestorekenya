// Create a file named server.js

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/xml",
  createProxyMiddleware({
    target: "https://www.bunnieabc.com",
    changeOrigin: true,
  })
);

app.listen(3001, () => {
  console.log("Proxy server is running on http://localhost:3001");
});

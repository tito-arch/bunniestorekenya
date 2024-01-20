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
const PORT = 500;

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});

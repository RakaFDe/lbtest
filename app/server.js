const express = require("express");
const os = require("os");

const app = express();

const VERSION = process.env.APP_VERSION || "v1";
const PORT = process.env.PORT || 3000;

let requestCount=0;


app.get("/", (req, res) => {
  requestCount++;

  res.json({
    message: `Hello from ${VERSION}`,
    hostname: os.hostname(),
    timestamp: new Date().toISOString(),
    requestCount
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
  });
});

app.get("/ready", (req, res) => {
  res.status(200).json({
    ready: true,
  });
});

app.get("/metrics", (req, res) => {
  res.set("Content-Type", "text/plain");

  res.send(`
app_version{version="${VERSION}"} 1
`);
});

app.get("/hostname", (req, res) => {
  res.json({
    hostname: os.hostname(),
  });
});

app.get("/info", (req, res) => {
  res.json({
    version: VERSION,
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received");

  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

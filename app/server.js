const express = require("express");
const os = require("os");

const app = express();

const VERSION = process.env.APP_VERSION || "v1";
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: `Hello from ${VERSION}`,
    hostname: os.hostname(),
    timestamp: new Date(),
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
  res.send(`
app_version{version="${VERSION}"} 1
`);
});

app.get("/hostname", (req, res) => {
  res.json({
    hostname: os.hostname(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
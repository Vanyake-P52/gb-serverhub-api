const express = require("express");

const app = express();
app.use(express.json());

let servers = [];

app.get("/", (req, res) => {
  res.send("GB ServerHub API running");
});

app.get("/api/servers", (req, res) => {
  res.json(servers);
});

app.post("/api/servers", (req, res) => {
  const { code, name } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Server code required" });
  }

  servers.push({ code, name });
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

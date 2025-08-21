const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ CytraMusic API is running!");
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));

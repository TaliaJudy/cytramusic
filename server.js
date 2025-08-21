const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Download endpoint
app.get("/download", (req, res) => {
  const url = req.query.url;
  const format = req.query.format || "mp3"; // default mp3

  if (!url) {
    return res.status(400).json({ error: "Missing YouTube URL" });
  }

  // Build yt-dlp command
  let command = `yt-dlp -f bestaudio --extract-audio --audio-format ${format} --get-url "${url}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      return res.status(500).json({ error: "Download failed" });
    }
    res.json({ downloadUrl: stdout.trim() });
  });
});

app.listen(5000, () => {
  console.log("✅ Y2Mate-like API running on http://localhost:5000");
});

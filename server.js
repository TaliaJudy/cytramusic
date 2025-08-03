import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const RAPID_API_KEY = "e2fe6c2901msh58f8264b0440a0ap167959jsnae5287575407";
const RAPID_API_HOST = "youtube-to-mp3-converter2.p.rapidapi.com";

app.get("/convert", async (req, res) => {
  const videoId = req.query.id;
  if (!videoId) return res.status(400).json({ error: "Missing videoId" });

  try {
    const response = await fetch(
      `https://${RAPID_API_HOST}/?videoId=${videoId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": RAPID_API_HOST,
          "x-rapidapi-key": RAPID_API_KEY
        }
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

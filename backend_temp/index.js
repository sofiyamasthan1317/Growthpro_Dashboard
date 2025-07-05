const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simulated headline generator
const headlineTemplates = [
  (name, location) => `Why ${name} is ${location}'s Top Hidden Gem in 2025`,
  (name, location) => `${name} – ${location}'s Rising Star in Local Business`,
  (name, location) => `Discover Why Everyone in ${location} Loves ${name}`,
  (name, location) => `${name}: A Must-Visit in ${location}`,
  (name, location) => `What Makes ${name} Stand Out in ${location}'s Market`,
];


// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required" });
  }

  const rating = (Math.random() * 1 + 3.5).toFixed(1); // 3.5 to 4.5
  const reviews = Math.floor(Math.random() * 300) + 50; // 50 to 350
  const randomHeadline =
    headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  const headline = randomHeadline(name, location);

  res.json({ rating, reviews, headline });
});


// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: "Name and location query required" });
  }

  const randomHeadline =
    headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  const headline = randomHeadline(name, location);

  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// Import:
// In `index.js`, the `express()` function is used to create an `app`
const express = require("express");
// The `path` module and `__dirname` are used to generate an absolute path to the `dist/` folder of your React application
const path = require("path");

// Constants:
const app = express();

const filepath = path.join(__dirname, "../app/dist");

// Middleware:
// The `express.static()` middleware serves the static assets in the React application's `dist/` folder.
app.use(express.static(filepath));

// Controllers:
// 1. Create a `GET /api/picture` endpoint
app.get("/api/picture", (req, res) =>
  res.json({
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/meowntain-profile_banner-71b7a6d0d943dc9e-480.jpeg",
  })
);

// 2. Create a `GET /api/joke` endpoint
app.get("/api/joke", (req, res) =>
  res.json({
    setup: "Why do programmers prefer using the dark mode?",
    punchline: "Because light attracts bugs.",
  })
);

// 3. Create a `GET /api/rollDie` endpoint
app.get("/api/rollDie", (req, res) => {
  // Parsing quantity
  let quantity = parseInt(req.query.quantity);
  // Default to one roll
  if (isNaN(quantity) || quantity < 1) quantity = 1;
  // Response structure
  const rolls = Array.from(
    { length: quantity },
    () => Math.floor(Math.random() * 6) + 1
  );
  res.json({ rolls });
});

// Listen:
// The `app` listens on an available port (I recommend `8080`)
const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});

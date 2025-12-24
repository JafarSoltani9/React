const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());

// CORS (use your FRONTEND_ORIGIN from .env)
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true
  })
);

// Routes
app.use("/api", routes);

// Health check (super useful)
app.get("/api/health", (req, res) => res.json({ ok: true }));

// Fallback error handler (always JSON)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error." });
});

const PORT = Number(process.env.PORT || 3001);

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

// ✅ 1) Check if email exists
router.post("/auth/check-email", async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    if (!email) return res.status(400).json({ error: "Email is required." });

    const user = await User.findOne({ email }).select("_id");
    return res.json({ exists: !!user });
  } catch (err) {
    console.error("check-email error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// ✅ 2) Register (name + email + password)
router.post("/auth/register", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || "");

    if (!name) return res.status(400).json({ error: "Name is required." });
    if (!email) return res.status(400).json({ error: "Email is required." });
    if (password.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters." });

    const exists = await User.findOne({ email }).select("_id");
    if (exists) return res.status(409).json({ error: "Email already exists." });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, passwordHash });

    const token = jwt.sign(
      { sub: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      token,
      user: { id: user._id.toString(), name: user.name, email: user.email }
    });
  } catch (err) {
    console.error("register error:", err);
    if (err?.code === 11000) return res.status(409).json({ error: "Email already exists." });
    return res.status(500).json({ error: "Internal server error." });
  }
});

// ✅ 3) Login (email + password)
router.post("/auth/login", async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || "");

    if (!email || !password) return res.status(400).json({ error: "Email and password are required." });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials." });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials." });

    const token = jwt.sign(
      { sub: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      token,
      user: { id: user._id.toString(), name: user.name, email: user.email }
    });
  } catch (err) {
    console.error("login error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;

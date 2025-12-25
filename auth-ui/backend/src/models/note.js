const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    date: { type: String, required: true, index: true }, // "YYYY-MM-DD"
    text: { type: String, default: "" }
  },
  { timestamps: true }
);

// Ensure 1 note per user per date
noteSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Note", noteSchema);

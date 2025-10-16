import mongoose from "mongoose";

const pointsSchema = new mongoose.Schema({
  userEmail: String,
  points: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Points", pointsSchema);

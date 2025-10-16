import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Volunteer", volunteerSchema);

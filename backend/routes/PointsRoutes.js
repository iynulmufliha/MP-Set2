import express from "express";
import Points from "../models/Points.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const points = await Points.find();
  res.json(points);
});

router.post("/", async (req, res) => {
  const { userEmail, points } = req.body;

  const existing = await Points.findOne({ userEmail });
  if (existing) {
    existing.points += points;
    await existing.save();
    return res.json({ message: "Points updated!", points: existing.points });
  }

  const newPoints = new Points({ userEmail, points });
  await newPoints.save();
  res.json({ message: "Points added!", points: newPoints.points });
});

export default router;

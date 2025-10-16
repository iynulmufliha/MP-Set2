import express from "express";
import Donation from "../models/Donation.js";

const router = express.Router();

// Get all donations
router.get("/", async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

// Add donation
router.post("/", async (req, res) => {
  const newDonation = new Donation(req.body);
  await newDonation.save();
  res.json({ message: "Donation added successfully!" });
});

export default router;

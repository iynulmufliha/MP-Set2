import express from "express";
import Volunteer from "../models/Volunteer.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const volunteers = await Volunteer.find();
  res.json(volunteers);
});

router.post("/", async (req, res) => {
  const newVolunteer = new Volunteer(req.body);
  await newVolunteer.save();
  res.json({ message: "Volunteer registered successfully!" });
});

export default router;

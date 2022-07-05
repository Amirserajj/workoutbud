import express from "express";
import workoutModel from "../models/Workout.js";

const router = express.Router();

//Get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

//Get single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get one workouts" });
});

//Post a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

//Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a workout" });
});

export default router;

import express from "express";

const router=express.Router();

//Get all workouts
router.get( "/",(req,res)=>{
    res.json({msg: "Get all workouts"})
});

//Get single workout
router.get("/:id",(req,res)=>{
    res.json({msg:"Get one workouts"})
});

//Post a new workout
router.post("/",(req,res)=>{
    res.json({msg:"Post a new workout"})
});

//Delete a workout
router.delete("/:id",(req,res)=>{
    res.json({msg:"delete a workout"})
});

//Update a workout
router.patch("/:id",(req,res)=>{
    res.json({msg:"update a workout"})
});


export default router;
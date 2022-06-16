import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app=express();

//mw
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
// routes
import workoutRoutes from "./routes/workout.js"
app.use("/api/workouts/",workoutRoutes)





const port=process.env.PORT;
app.listen(port,()=>{console.log(`listening ${port}`)})
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();

//mw
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
import workoutRoutes from "./routes/workout.js";
app.use("/api/workouts/", workoutRoutes);

// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Server
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`listening ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

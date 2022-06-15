import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app=express();

//mw
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
// routes
app.get("/",(req,res)=>{
    res.json({message:"welcome"})
})





const port=process.env.PORT;
app.listen(port,()=>{console.log(`listening ${port}`)})
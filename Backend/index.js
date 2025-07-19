import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";
import authRoutes  from "./routes/auth.routes.js";
  import quizRoutes from "./routes/quiz.routes.js";
  import videoRoutes from "./routes/video.routes.js"


dotenv.config();

const app =express();
const PORT = process.env.PORT || 7777;


connectDB();


app.use(express.json());
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/quiz",quizRoutes);
app.use("/api/v1/video",videoRoutes);


app.get("/",(req,res)=>{
res.send("Welcome to the Quiz App");
});

app.listen(PORT,()=>
    console.log(`🚀🚀Server running on port ${PORT}`)
);

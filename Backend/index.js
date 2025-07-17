import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import router  from "./routes/user.routes.js";
const app=express();
connectDB();

app.use(cors());
app.use(express.json());

// app.use("api/v1/auth",authRoutes);


app.get("/",(req,res)=>{
res.send("🚀 Kreapt Backend is Running");

});

const PORT= process.env.PORT ||7777;
app.listen(PORT,()=>console.log(`🚀Server running on ${PORT}`));


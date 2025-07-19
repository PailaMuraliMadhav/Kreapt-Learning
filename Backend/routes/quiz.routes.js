import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createQuiz,getQuizByVideo } from "../controllers/quiz.controller.js";


const quizRoutes = express.Router();

quizRoutes.post("/",protect,createQuiz);
quizRoutes.get("/:videoId", getQuizByVideo);

export default quizRoutes;
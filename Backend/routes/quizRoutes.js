import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createQuiz,getQuizByVideo } from "../controllers/quiz.controller.js";


const router = express.Router();

router.post("/",protect,createQuiz);
router.get("/:videoId", getQuizByVideo);

export default router;
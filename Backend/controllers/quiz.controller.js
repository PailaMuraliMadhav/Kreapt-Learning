import { Quiz } from "../models/quiz.model.js";

export const createQuiz = async (req, res) => {
  const { videoId, questions } = req.body;
  const quiz = await Quiz.create({ videoId, questions });
  res.status(201).json(quiz);
};

export const getQuizByVideo = async (req, res) => {
  const quiz = await Quiz.findOne({ videoId: req.params.videoId });
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });
  res.json(quiz);


};
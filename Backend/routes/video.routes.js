import express from 'express';
import { uploadVideo,getVideos } from '../controllers/video.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const videoRoutes =express.Router();

videoRoutes.post('/upload',protect,uploadVideo);
videoRoutes.get('/videos',protect,getVideos  );

export default videoRoutes;  
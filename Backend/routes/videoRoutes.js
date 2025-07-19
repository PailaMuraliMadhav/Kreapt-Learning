import express from 'express';
import { uploadVideo,getVideos } from '../controllers/video.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router =express.Router();

router.post('/upload',protect,uploadVideo);
router.get('/videos',protect,getVideos  );

export default router;  
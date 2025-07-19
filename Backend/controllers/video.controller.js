import {Video} from "../models/video.model.js";

export const uploadVideo =async(req,res)=>{
    const {title,description,videoURL,thumbnail,category}=req.body;
    const video =await Video.create({title,description,videoURL,thumbnail,category,user:req});
    res.status(200).json(video);


};

export const getVideos= async (req,res)=>{
    const videos =await Video.find().populate("user","name");
    res.json(videos);
};

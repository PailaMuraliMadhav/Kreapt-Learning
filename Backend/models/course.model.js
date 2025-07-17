import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title:String,
  description:String,
  instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  price:Number,
  lessons:[
    {
title:String,
videourl:String,
content:String
    }
  ]
},{timestamps:true});

export const Course =mongoose.model("Course",courseSchema);
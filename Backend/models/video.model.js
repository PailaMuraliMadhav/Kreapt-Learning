import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
    {
        title:String,
        description:String,
        videoURL:String,
        thumbnail:String,
        category:String,
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }]
    },
    {
        timestamps:true

    }
);

export const Video=mongoose.model("Video",videoSchema);

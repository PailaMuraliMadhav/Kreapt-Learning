import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    videoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    },
    questions:[{
    question:String,
    options:[String],
    answer:String,
    },
],
},

{timestamps:true}
);

export const Quiz = mongoose.model("Quiz",quizSchema);
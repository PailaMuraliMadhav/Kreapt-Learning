import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:["student","instructor","admin"],
        default:"student"
    },
    password:{
        type:String,
        required:true,
        minLength:8
    }},
    {
        timestamps:true
    

})

export const User = mongoose.model("User",userSchema);
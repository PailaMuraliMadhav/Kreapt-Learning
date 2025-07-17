import { User } from "../models/user.model.js";

export const registerUser= async(req,res)=>{
try{
    const user=await User.create(req.body);
    res.status(201).json(user);
}
catch(err){
    res.status(500).json({error:err.merssage});
}



};

export const getAllUsers =async(req,res)=>{
    const users= await User.find();
    res.json(users);
}
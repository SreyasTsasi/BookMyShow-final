import mongoose from "mongoose";
 const schema = new mongoose.Schema({
    title:{
        type:String
    },
    profile:{
        type:String
    }
 })

 export default mongoose.model.Films || mongoose.model("Film",schema);
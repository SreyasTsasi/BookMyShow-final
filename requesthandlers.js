import movieSchema from "./schema/movie.schema.js";
export async function uploadFile(req,res){
    try {
        let {title, profile}=req.body;
        console.log(title,profile);
        let result=await movieSchema.create({
            title,
            profile
        });
        if(result){
            return res.json("file uploaded")
        }
        return res.status(400).send("file could not be uploaded")
      
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("error")
    }
}
export async function getProfile(req,res){
    try {
       
        let data=await movieSchema.find();
        return res.json(data);
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("error")
    }
}
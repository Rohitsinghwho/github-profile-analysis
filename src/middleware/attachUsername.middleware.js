
export const attachUsernameToGithub=(req,res,next)=>{
    const {username}=req.params;
    if(!username){
        return res.status(400).json({message:"Username is required"});
    }
    req.username = username;
    next();
}
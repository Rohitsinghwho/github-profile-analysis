import { getUserByUsername, createNewUser,GetDataFromGithub } from "./user.service.js";


export const createUser = async (req,res)=>{
    try{
        const username=req.username;
        const user = await getUserByUsername(username);
        if(user){
            return res.status(400).json({user:user});
        }

        const data = await GetDataFromGithub(username);
        const response= {
            username:username,
            name:data.name,
            email:data.email,
            repo_count:data.public_repos,
            followers:data.followers,
            following:data.following
        }
        const newUser = await createNewUser(response);
        return res.status(201).json({user:newUser});

    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}

export const retrieveUser = async (req,res)=>{
    try{
        const username=req.username;
        const user = await getUserByUsername(username);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json({user:user});
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}


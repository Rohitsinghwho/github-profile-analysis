import {prisma} from '../../db/prisma.js';


export const getUserByUsername = async (username)=>{
    try{
        const user = await prisma.user.findUnique({
            where:{
                username:username
            }
        })
        return user;
    }
    catch(err){
        throw new Error(err.message);
    }
}

export const createNewUser = async (user)=>{
    try{
        const newUser = await prisma.user.create({
            data:{
                username:user.username,
                name:user.name,
                repo_count:user.repo_count,
                followers:user.followers,
                following:user.following
            }
        })
        return newUser;
    }
    catch(err){
        throw new Error(err.message);
    }
}

export const GetDataFromGithub = async (username)=>{
    try{
        const response = await fetch(`${process.env.GITHUB_API}/${username}`);
        if(!response.ok){
            throw new Error('User not found');
        }
        const data = await response.json();
        return data;
    }
    catch(err){
        throw new Error(err.message);
    }
}
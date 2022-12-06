import { NextApiHandler } from "next"
import path from "path";
import {promises as fs, readFileSync } from 'fs'
import matter from "gray-matter";

const postsHandler:NextApiHandler = async (req,res)=> {
const {method} = req
const pathToPostFiles = path.join(process.cwd(), 'posts/');


const readPostInfo =async ()=> {
    const dirToRead = await fs.readdir(pathToPostFiles);    
    const allPosts = dirToRead.map((post)=> {
        const eachFile = readFileSync(pathToPostFiles + post, 'utf-8')
        return matter(eachFile).data        
    })
    
    
    return allPosts
    
}

switch (method){
    case "GET" : {
        const data = await readPostInfo();
        return res.json({posts:data})
    }
    default: res.status(404).send('Not found');

}
}


export default postsHandler
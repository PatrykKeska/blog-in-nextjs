import path from "path";
import { promises as fs, readdirSync, readFileSync } from "fs"; 
import matter from "gray-matter";

export const fetchPosts =async ()=>{
    
    const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + filename);
    const fileContent = readFileSync(filePathToRead, { encoding: "utf-8" });
    return matter(fileContent).data;
});
return data as Response[]

}


interface Response {
    title: string
    slug: string
    meta: string
}
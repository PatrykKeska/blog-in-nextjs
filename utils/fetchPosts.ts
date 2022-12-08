import { ResponseInterface } from "../types/Blogs/blogs.interface"
import { apiUrl } from "./api_url"

export const fetchPosts =async ()=>{
    const res = await fetch(`${apiUrl}posts`)
    const data: ResponseInterface = await res.json()
    const { posts } = data

    return posts

}
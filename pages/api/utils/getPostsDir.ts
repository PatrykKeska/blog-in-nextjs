import path from 'path'
import { promises as fs, readFileSync } from 'fs'

interface Response {
    pathToPostFiles: string,
    dirToRead: string[]
}

export const getPostsFsDetails = async ()=> {
const pathToPostFiles = path.join(process.cwd(), 'posts/')
const dirToRead = await fs.readdir(pathToPostFiles)

return {
    pathToPostFiles,
    dirToRead
} as Response
}

export const readPostFile = async (fileName:string)=> {
  const { dirToRead, pathToPostFiles } = await getPostsFsDetails()

  const file = readFileSync(pathToPostFiles + fileName + '.md', 'utf-8')
  return file
}
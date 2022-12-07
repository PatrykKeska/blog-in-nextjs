import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import { getPostsFsDetails, readPostFile } from '../api/utils/getPostsDir'
import { readFileSync } from 'fs'
import {
  ContextInterface,
  Post,
  Props,
} from '../../types/Blogs/postSlug.interface'

const SinglePage: NextPage<Props> = ({ content, title }) => {
  const router = useRouter()
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { dirToRead, pathToPostFiles } = await getPostsFsDetails()
  const paths = dirToRead.map((post) => {
    const eachFile = readFileSync(pathToPostFiles + post, 'utf-8')
    return { params: { postSlug: matter(eachFile).data.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Post> = async (context) => {
  const { params } = context as ContextInterface
  const { postSlug } = params
  const file = await readPostFile(postSlug)
  const { content, data } = matter(file)

  return {
    props: {
      title: data.title,
      content,
    },
  }
}

export default SinglePage

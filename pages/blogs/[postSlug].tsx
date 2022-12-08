import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import { getPostsFsDetails, readPostFile } from '../api/utils/getPostsDir'
import { readFileSync } from 'fs'
import {
  ContextInterface,
  Post,
  Props,
} from '../../types/Blogs/postSlug.interface'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const SinglePage: NextPage<Props> = ({ content, title }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h2>Loading....</h2>
  }
  return (
    <div className="max-w-3xl m-auto my-10 p-10 pb-20  bg-green-50">
      <article className="prose prose-slate">
        <h1 className="font-semibold text-3xl uppercase">{title}</h1>
        <MDXRemote {...content} />
      </article>
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
  try {
    const { params } = context as ContextInterface
    const { postSlug } = params
    const file = await readPostFile(postSlug)
    const { content, data } = matter(file)
    const source = await serialize(content)

    return {
      props: {
        title: data.title,
        content: source,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default SinglePage

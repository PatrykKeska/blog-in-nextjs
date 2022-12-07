import { GetStaticProps, NextPage } from 'next'
import {
  BlogPostInterface,
  Props,
  ResponseInterface,
} from '../types/Blogs/blogs.interface'
import { apiUrl } from './api/utils/api_url'
import BlogCard from '../components/BlogCard'

export const getStaticProps: GetStaticProps<ResponseInterface> = async () => {
  const res = await fetch(`${apiUrl}/posts`)
  const data: ResponseInterface = await res.json()
  const { posts } = data

  return {
    props: {
      posts,
    },
  }
}

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <section
      className="mx-auto max-w-3xl space-y-3
       p-5"
    >
      {posts.map((post: BlogPostInterface) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.slug}
          description={post.meta}
        />
      ))}
    </section>
  )
}

export default Blogs

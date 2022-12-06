import { NextPage } from 'next'
import {
  BlogPostInterface,
  Props,
  ResponseInterface,
} from '../types/Blogs/blogs.interface'
import { apiUrl } from './api/utils/api'
import BlogCard from './components/BlogCard'

export const getStaticProps = async () => {
  const res = await fetch(`${apiUrl}/posts`)
  const data = await res.json()
  const { posts } = data as ResponseInterface

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
      {posts.map((item: BlogPostInterface) => (
        <BlogCard
          key={item.slug}
          title={item.slug}
          description={item.meta}
        />
      ))}
    </section>
  )
}

export default Blogs

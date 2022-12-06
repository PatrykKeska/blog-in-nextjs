import { NextPage } from 'next'
import { apiUrl } from './api/utils/api'
import BlogCard from './components/BlogCard'

interface Props {
  posts: BlogPostInterface[]
}
interface BlogPostInterface {
  title: string
  slug: string
  meta: string
  description: string
}
interface ResponseInterface {
  posts: BlogPostInterface[]
}

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

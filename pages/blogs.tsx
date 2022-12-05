import { NextPage } from 'next'
import BlogCard from './components/BlogCard'
interface Props {
  // blogPosts: []
}

interface BlogPostInterface {
  title: string
  description: string
}

const blogPosts = [
  {
    title: 'this is title',
    description:
      'this is description for our blog post to see a resulout of styling',
  },
  {
    title: 'this is title',
    description:
      'this is description for our blog post to see a resulout of styling',
  },
  {
    title: 'this is title',
    description:
      'this is description for our blog post to see a resulout of styling',
  },
] as BlogPostInterface[]

const Blogs: NextPage<Props> = () => {
  return (
    <section
      className="mx-auto max-w-3xl space-y-3
       p-5"
    >
      {blogPosts.map((item: BlogPostInterface) => (
        <BlogCard title={item.title} description={item.description} />
      ))}
    </section>
  )
}

export default Blogs

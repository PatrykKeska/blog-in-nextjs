import { GetStaticProps, NextPage } from 'next'
import {
  BlogPostInterface,
  Props,
  ResponseInterface,
} from '../../types/Blogs/blogs.interface'
import BlogCard from '../../components/BlogCard'
import { fetchPosts } from '../../utils/fetchPosts'

export const getStaticProps: GetStaticProps<ResponseInterface> = async () => {
  const posts = await fetchPosts()

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

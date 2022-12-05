import { NextPage } from 'next'
import BlogCard from './components/BlogCard'
interface Props {
  name: string
}

const Blogs: NextPage<Props> = () => {
  return (
    <section className="bg-green-100 max-w-3xl mx-auto p-5">
      <BlogCard
        title="here is our title"
        description="loremloremloremloremloremlorem"
      />
    </section>
  )
}

export default Blogs

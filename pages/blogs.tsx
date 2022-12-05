import { NextPage } from 'next'
interface Props {
  name: string
}

const Blogs: NextPage<Props> = () => {
  return (
    <section className="bg-green-100 max-w-3xl mx-auto p-5">
      <div>
        <h1 className="text-gray-900 text-3xl font-semibold">
          Name of the blog post
        </h1>
        <p className="text-gray-500 text->xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.Blanditiisdolorem ducimus est fugiat, inventore iste magni
          quisquam undevoluptate. A at culpa deleniti dolor iusto, maxime
          mollitianostrum tempora voluptates?
        </p>
      </div>
    </section>
  )
}

export default Blogs

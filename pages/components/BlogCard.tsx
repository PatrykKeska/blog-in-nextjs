import { FC } from 'react'

interface Props {
  title: string
  description: string
}

const BlogCard: FC<Props> = ({
  title,
  description,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-start rounded bg-green-100 p-8 pt-2">
      <h1 className="m-1 text-2xl font-medium uppercase text-gray-900">
        {title}
      </h1>
      <p className="text->xl text-gray-500">
        {description}
      </p>
    </div>
  )
}

export default BlogCard

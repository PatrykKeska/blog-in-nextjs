import Link from 'next/link'
import { FC } from 'react'
import { apiBlogPosts } from '../pages/api/utils/api_url'

interface Props {
  title: string
  description: string
  slug: string
}

const BlogCard: FC<Props> = ({ title, description, slug }): JSX.Element => {
  return (
    <Link
      href={`${apiBlogPosts}${slug}`}
      className="flex flex-col items-start justify-start rounded bg-green-100 p-8 pt-2 hover:cursor-pointer"
    >
      <h1 className="m-1 text-2xl font-medium uppercase text-gray-900">
        {title}
      </h1>
      <p className="text->xl text-gray-500">{description}</p>
    </Link>
  )
}

export default BlogCard

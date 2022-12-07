import { getStaticProps } from './../../pages/blogs';
import { InferGetStaticPropsType } from 'next';

  export interface BlogPostInterface {
    title: string
    slug: string
    meta: string
    description: string
  }

  interface props {
    posts: BlogPostInterface[]
  }

  export type Props = InferGetStaticPropsType<typeof getStaticProps>

  export interface ResponseInterface {
    posts: BlogPostInterface[]
  }
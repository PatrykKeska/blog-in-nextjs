import { getStaticProps } from './../../pages/blogs/[postSlug]';
import { InferGetStaticPropsType } from 'next';

export type Props = InferGetStaticPropsType<typeof getStaticProps>

export type Post = {
    title: string
    content: string
  }
  
  export interface ContextInterface {
    params: {
      postSlug: string
    }
  }
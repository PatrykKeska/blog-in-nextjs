import { getStaticProps } from './../../pages/blogs/[postSlug]';
import { InferGetStaticPropsType } from 'next';
import {MDXRemoteSerializeResult} from 'next-mdx-remote'

export type Props = InferGetStaticPropsType<typeof getStaticProps>

export type Post = {
    title: string
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>

  }
  
  export interface ContextInterface {
    params: {
      postSlug: string
    }
  }
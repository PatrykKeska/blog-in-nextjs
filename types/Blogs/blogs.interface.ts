
  export interface BlogPostInterface {
    title: string
    slug: string
    meta: string
    description: string
  }

 export interface Props {
    posts: BlogPostInterface[]
  }

  export interface ResponseInterface {
    posts: BlogPostInterface[]
  }
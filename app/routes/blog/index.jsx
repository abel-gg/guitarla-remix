import React from 'react'
import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/blog.server'
import ListadoPosts from '~/components/listado-posts'

export function meta() {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'Blog de música y venta de guitarras',
  }
}

export async function loader() {
  const posts = await getPosts()

  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return <ListadoPosts posts={posts} />
}

export default Blog

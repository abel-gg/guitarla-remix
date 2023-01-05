import React from 'react'
import { useLoaderData } from '@remix-run/react'
import { getPostByUrl } from '~/models/blog.server'
import { formatearFecha } from '~/utils/helpers'

export async function loader({ params }) {
  const { url } = params
  const post = await getPostByUrl(url)

  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado',
    })
  }

  return post
}

export function meta({ data }) {
  if (!data) {
    return {
      title: 'GuitarLA - Post no encontrado',
      description: 'Blog - Post no encontrado',
    }
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Blog - ${data.data[0].attributes.titulo}`,
  }
}

const Post = () => {
  const post = useLoaderData()
  const { titulo, contenido, imagen, publishedAt } = post?.data[0].attributes

  return (
    <article className=" post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.formats.medium.url}
        alt={titulo}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post

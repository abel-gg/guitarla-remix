import React from 'react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música y más',
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image',
    },
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="nosotros" className="" />
        <div>
          <p>
            Curabitur a consequat nibh, eget gravida diam. Nulla ullamcorper
            vitae justo sed tincidunt. Cras neque nunc, semper eu arcu sed,
            blandit pellentesque nisi. Cras ut ipsum sit amet metus vulputate
            bibendum vel et quam. Nam risus eros, dignissim vitae magna nec,
            tempus dictum purus.
          </p>
          <p>
            Curabitur a consequat nibh, eget gravida diam. Nulla ullamcorper
            vitae justo sed tincidunt. Cras neque nunc, semper eu arcu sed,
            blandit pellentesque nisi. Cras ut ipsum sit amet metus vulputate
            bibendum vel et quam. Nam risus eros, dignissim vitae magna nec,
            tempus dictum purus.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros

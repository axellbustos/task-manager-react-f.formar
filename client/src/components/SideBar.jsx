import React from 'react'
import {Link} from 'react-router-dom'

export const SideBar = () => {
  return (
        <aside className='text-white'>
            <p>Hola</p>
            <Link to="createProject">Agregar Proyecto</Link>
        </aside>
  )
}

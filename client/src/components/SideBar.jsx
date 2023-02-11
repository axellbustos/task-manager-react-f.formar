import React from 'react'
import {Link} from 'react-router-dom'

export const SideBar = () => {
  return (
        <aside>
            <p>Hola</p>
            <Link to="createProject">Agregar Proyecto</Link>
        </aside>
  )
}

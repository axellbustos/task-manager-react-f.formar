import React from 'react'

export const Task = () => {
  return (
    <div className='text-white'>
      <div >
        <p>Nombre de la tarea</p>
        <p>Descripcion de la tarea</p>
        <p>Fecha de entraga</p>
        <p>Prioridad</p>
      </div>
      <div>
        <button 
        /* onClick={} */
        >Editar</button>
        <button>Completa/Incompleta</button>
        <button 
        /* onClick={} */
        >Eliminar</button>
      </div>
    </div>
  )
}

import React from 'react'

export const FormProject = () => {
  return (
    <form 
    /* onSubmit={} */
    >
        <div>
            <label htmlFor='name'>Nombre del proyecto</label>
            <input type="text" id='name' placeholder='Nombre del proyecto.'/>
        </div>
        <div>
            <label htmlFor='description'>Descripcion del proyecto</label>
            <input type="text" id='description' placeholder='Descripcion del proyecto.' style={{resize:"none"}}/>
        </div>
        <div>
            <label htmlFor='data-expire'>Fecha de entrega</label>
            <input type="date" id='data-expire' />
        </div>
        <div>
            <label htmlFor='client'>Nombre cliente</label>
            <input type="text" id='client' placeholder='Nombre de cliente.'/>
        </div>
        <button>Actualizar/Guardar</button>
    </form>
  )
}

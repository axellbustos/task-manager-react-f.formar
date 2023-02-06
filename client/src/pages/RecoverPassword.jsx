import React from 'react'

export const RecoverPassword = () => {
  return (
    <div>
         
      <form action="" className='form flex  flex-col items-center text-white h-60 p-10 my-20 '>
      <h1 className='w-full text-sky-600 text-center text-3xl'>Reestablece tu contraseña</h1>
        <div>
            <label htmlFor="password">Nueva Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su nueva contraseña" />
        </div>
        <div>
            <label htmlFor="password2">Confirme su contraseña</label>
            <input type="password" id="password2" placeholder="Ingrese nuevamente su contraseña" />
        </div>
        <button type="submit" className='button-submit'>Guardar nueva contraseña</button>
      </form>
    </div>
  )
}

import React from 'react'

export const RecoverPassword = () => {
  return (
    <div>
         <h1>REestablece tu contraseña</h1>
      <form action="">
        <div>
            <label htmlFor="password">Nueva Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su nueva contraseña" />
        </div>
        <div>
            <label htmlFor="password2">Confirme su contraseña</label>
            <input type="password" id="password2" placeholder="Ingrese nuevamente su contraseña" />
        </div>
        <button type="submit" >Guerdar nueva contraseña</button>
      </form>
    </div>
  )
}

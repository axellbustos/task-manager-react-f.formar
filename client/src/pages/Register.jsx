import React from 'react'
import { Link} from "react-router-dom";

export const Register = () => {
  return (
    <div>
         <h1>Creá tu cuenta</h1>
      <form action="">
        <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Ingrese su Nombre" autoComplete='off'/>
        </div>
        <div>
            <label htmlFor="email">Correo electronico</label>
            <input type="email" id="email" placeholder="Ingrese su email" />
        </div>
        <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" />
        </div>
        <div>
            <label htmlFor="password2">Confirme su contraseña</label>
            <input type="password" id="password2" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit" >Crear cuenta</button>
      </form>
      <nav>
        <Link to={'/'}>Estas registrado? Inicia sesion</Link>
      </nav>
    </div>
  )
}

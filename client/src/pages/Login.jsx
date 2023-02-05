import React from "react";
import { Link} from "react-router-dom";
export const Login = () => {
  return (
    <div>
      
      <form action="" className='form flex  flex-col items-center text-white h-60 p-10 my-20 '>
      <h1 className='w-full text-sky-600 text-center text-3xl'>Inicia Sesion</h1>
        <div>
            <label htmlFor="email">Correo electronico</label>
            <input type="email" id="email" placeholder="Ingrese su email" />
        </div>
        <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit" className='button-submit'>Iniciar sesion</button>
      
        <Link to={'/register'}>No tienes una cuenta? Registrate</Link>
        <Link to={'/forget-password'}>Olvide mi contraseña</Link>
      </form>
      
    </div>
  );
};

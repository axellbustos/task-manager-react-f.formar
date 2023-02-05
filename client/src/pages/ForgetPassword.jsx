import React from "react";
import { Link} from "react-router-dom";
export const ForgetPassword = () => {
  return (
    <div>
      
      <form action="" className='form flex  flex-col items-center text-white h-60 p-10 my-20 '>
      <h1 className='w-full text-sky-600 text-center text-3xl'>Recupera tu contraseña</h1>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input type="email" id="email" placeholder="Ingrese su email" />
        </div>
        <button type="submit" className='button-submit'>Recupera tu contraseña </button>
        
        <Link to={"/register"}>No tienes una cuenta? Registrate</Link>
        <Link to={"/"}>Estas registrado? Inicia sesion</Link>
      
      </form>
      
    </div>
  );
};

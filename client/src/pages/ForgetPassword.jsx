import React from "react";
import { Link} from "react-router-dom";
export const ForgetPassword = () => {
  return (
    <div>
      <h1>Recupera tu cotraseña</h1>
      <form action="">
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input type="email" id="email" placeholder="Ingrese su email" />
        </div>
        <button type="submit">Recupera tu contraseña </button>
      </form>
      <nav>
        <Link to={"/register"}>No tienes una cuenta? Registrate</Link>
        <Link to={"/"}>Estas registrado? Inicia sesion</Link>
      </nav>
    </div>
  );
};

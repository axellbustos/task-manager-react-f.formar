import React from "react";

export const Login = () => {
  return (
    <div>
      <h1>Inicia Sesion</h1>
      <form action="">
        <div>
            <label htmlFor="email">Correo electronico</label>
            <input type="email" id="email" placeholder="Ingrese su email" />
        </div>
        <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit" >Iniciar sesion</button>
      </form>
      <nav>
        <Link to={'/register'}>No tienes una cuenta? Registrate</Link>
        <Link to={'/forget-password'}>Olvide mi contraseña</Link>
      </nav>
    </div>
  );
};

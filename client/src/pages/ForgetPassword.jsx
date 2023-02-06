import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import { clientAxios } from '../config/clientAxios';
import Swal from 'sweetalert2'

export const ForgetPassword = () => {
  const [alert, setAlert] = useState({});
  const [email, setEmail] = useState("");

  const handleShowAlert = (msg) => {
    setAlert({ msg });
    setTimeout(() => {
      setAlert({});
    }, 20000);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    if (!email) {
      handleShowAlert("El campo email es obligatorio");
      return null;
    }
    try {

    const {data}=await clientAxios.post(`/auth/sendToken`,{
      email
    })
    Swal.fire({
      icon:'success',
      title:'Revisa tu email',
      text:"te enviamos instrucciones para recuperar tu contraseña",
      confirmButtonText:"ok",
      allowOutsideClick: false
    })
    setEmail("")

    } catch (error) {
      handleShowAlert(error.response.data.msg)
      setEmail("")
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form flex  flex-col items-center text-white h-60 p-10 my-20 "
      >
        <h1 className="w-full text-sky-600 text-center text-3xl">
          Recupera tu contraseña
        </h1>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {alert.msg && <Alert {...alert} />}
        <button type="submit" className="button-submit">
          Recupera tu contraseña{" "}
        </button>

        <Link to={"/register"}>No tienes una cuenta? Registrate</Link>
        <Link to={"/"}>Estas registrado? Inicia sesion</Link>
      </form>
    </div>
  );
};

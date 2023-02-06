import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientAxios } from "../config/clientAxios";
import { Alert } from "../components/Alert";
import Swal from "sweetalert2";

export const RecoverPassword = () => {
  const { token } = useParams(); // token que viene por parametro
  const navigate = useNavigate();
  const [alert, setAlert] = useState({});
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [tokenChecked, setTokenChecked] = useState(false);

  const handleShowAlert = (msg) => {
    setAlert({ msg });
    setTimeout(() => {
      setAlert({});
    }, 2000);
  };

  useEffect(() => {
    //  a la funcion de useEfect no se le puede poner async pero a una funcion interna si
    const checkToken = async () => {
      try {
        const { data } = await clientAxios.get(
          `/auth/resetPassword?token=${token}`
        );
        console.log(data);
        setTokenChecked(true);
      } catch (error) {
        handleShowAlert(error.response.data.msg);
      }
    };
    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([password, password2].includes("")) {
      handleShowAlert("todos los campos son obligatorios");
      return null;
    }
    if (password !== password2) {
      handleShowAlert("las contraseñas no coinciden");
      return null;
    }
    try {
      const { data } = await clientAxios.post(
        `/auth/resetPassword?token=${token}`,
        { password }
      );
      Swal.fire({
        icon: "success",
        title: "Tu contraseña ha sido reseteada",
        text: "inicia sesion para continuar",
        confirmButtonText: "Inicia sesion",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
          setPassword("");
          setPassword2("");
        }
      });
    } catch (error) {
      handleShowAlert(error.response.data.msg);
      setPassword("");
      setPassword2("");
    }
  };

  return (
    <div>
      {alert.msg && <Alert {...alert} />}
      {tokenChecked && ( //si el token es valido mostrar formulario si no no
        <form
          onSubmit={handleSubmit}
          className="form flex  flex-col items-center text-white h-60 p-10 my-20 "
        >
          <h1 className="w-full text-sky-600 text-center text-3xl">
            Reestablece tu contraseña
          </h1>

          <div>
            <label htmlFor="password">Nueva Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password2">Confirme su contraseña</label>
            <input
              type="password"
              id="password2"
              placeholder="Ingrese nuevamente su contraseña"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <button type="submit" className="button-submit">
            Reestablecer contraseña
          </button>
        </form>
      )}
    </div>
  );
};

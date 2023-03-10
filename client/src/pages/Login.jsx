import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import { useForm } from "../hooks/useForm";
import  useAuth  from "../hooks/useAuth";
import { clientAxios } from '../config/clientAxios';
import { useNavigate} from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate()
  const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;
  const{setAuth} = useAuth()
  const [alert, setAlert] = useState({});
  const { formValues, handleInputChange, reset } = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleShowAlert = (msg) => {
    setAlert({ msg });
    setTimeout(() => {
      setAlert({});
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email,password].includes("")) {
      handleShowAlert("todos los campos son obligatorios")
      return null
    }
    if (!exRegEmail.test(email)) {
      handleShowAlert("el campo email no es valido")
      return null
    }

    try {
      const {data}= await clientAxios.post('/auth/login',{
        email, password
       })
       console.log(data);
      
      setAuth(data.user)
      sessionStorage.setItem('token',data.token)
      navigate('/')

    } catch (error) {
      console.error(error); //.error()sale el error en rojo, ta' piola
      handleShowAlert(error.response.data.msg)
    }
  };

  return (
    <div>
      <form
        action=""
        className="form flex  flex-col items-center  h-60 p-10 my-20 " onSubmit={handleSubmit}
      >
        <h1 className="w-full text-sky-600 text-center text-3xl">
          Inicia Sesion
        </h1>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contrase??a</label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contrase??a"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="button-submit">
          Iniciar sesion
        </button>
        {alert.msg && <Alert {...alert} />}
        <Link to={"/register"}>No tienes una cuenta? Registrate</Link>
        <Link to={"/forget-password"}>Olvide mi contrase??a</Link>
      </form>
    </div>
  );
};

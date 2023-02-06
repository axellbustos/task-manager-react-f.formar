import React, {useEffect, useState} from "react";
import  {Link, useNavigate, useParams} from "react-router-dom";
import { clientAxios } from '../config/clientAxios';
import { Alert } from '../components/Alert';
import Swal from 'sweetalert2'

export const ConfirmAccount = () => {

  const params = useParams()
  const {token}= params// token que viene por parametro
  const navigate = useNavigate()
  const [alert, setAlert] = useState({});

  const handleShowAlert=(msg)=>{
    setAlert({msg})
    setTimeout(() => {
      setAlert({})}, 20000);
  }

  useEffect(() => {//  a la funcion de useEfect no se le puede poner async pero a una funcion interna si
    const confirmAccount =async ()=>{
      try {
        
        const {data}=await clientAxios.get(`/auth/verify?token=${token}`)
        Swal.fire({
          icon:'success',
          title:'Felicitaciones!!',
          text:data.msg,
          confirmButtonText:"Inicia session",
          allowOutsideClick: false
        }).then(result =>{
          if (result.isConfirmed) {
            navigate('/login')
          }
        })

      } catch (error) {
        handleShowAlert(error.response.data.msg)
      }
    }
    confirmAccount()
  }, []);


  return (
    <div>
      <h1>Verifica tu cuenta</h1>
      {alert.msg && <Alert {...alert}/>}
      <Link to={'/register'}>No tienes una cuenta? Registrate</Link>
      <Link to={'/forget-password'}>Olvide mi contraseña</Link>
    </div>
  );
};

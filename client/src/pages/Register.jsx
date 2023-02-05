import  {React, useState } from 'react'
import { Link} from "react-router-dom";
import { Alert } from '../components/Alert';
import { clientAxios } from '../config/clientAxios';
import { useForm } from '../hooks/useForm';

export const Register = () => {
  const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

  const [alert, setAlert] = useState({});

  const {formValues, setformValues, handleInputChange, reset} =useForm({
    name:"",
    email:"",
    password:"",
    password2:""
  })

  const {name, email, password, password2}= formValues
  const handleShowAlert=(msg)=>{
    setAlert({msg})
    setTimeout(() => {
      setAlert({})}, 2000);
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    // console.log(formValues);

    if ([name,email,password,password2].includes("")) {
      handleShowAlert("todos los campos son obligatorios")
      return null
    }
    if (!exRegEmail.test(email)) {
      handleShowAlert("el campo email no es valido")
      return null
    }
    if (password !== password2) {
      handleShowAlert("las contraseñas no coinciden")
      return null
    }

    try {
      const {data}= await clientAxios.post('/auth/register',{
        name, email, password
       })
       console.log(data);
    } catch (error) {
      console.error(error);//.error()sale el error en rojo, ta' piola
    }
  }
  
  return (
    <div className=''>
         
         {
          alert.msg && <Alert {...alert}/>//si existe msg.alert mostra la alerta
         }
      <form action="" onSubmit={handleSubmit} noValidate className='form flex  flex-col items-center text-white h-60 p-10 my-20 '>
      <h1 className='w-full text-sky-600 text-center text-3xl'>Registrate</h1>
        <div >
            <label htmlFor="name" className='w-full p-2'>Nombre</label>
            <input className='input-form' type="text" id="name" placeholder="Ingrese su Nombre" autoComplete='off' value={name} name="name" onChange={handleInputChange} />
        </div>
        <div>
            <label htmlFor="email">Correo electronico</label>
            <input type="email" id="email" placeholder="Ingrese su email" value={email} name="email" onChange={handleInputChange} />
        </div>
        <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" value={password} name="password" onChange={handleInputChange}/>
        </div>
        <div>
            <label htmlFor="password2">Confirme su contraseña</label>
            <input type="password" id="password2" placeholder="Ingrese su contraseña" value={password2} name="password2" onChange={handleInputChange}/>
        </div>
        <button type="submit" className='button-submit'>Crear cuenta</button>
        <Link to={'/login'}>Estas registrado? Inicia sesion</Link>
      </form>
      
    </div>
  )
}

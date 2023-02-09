import React,{useState} from 'react'
import { useEffect } from 'react';
import {createContext} from 'react'
import { clientAxios } from '../config/clientAxios';

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const authUser = async ()=>{
        const token = sessionStorage.getItem("token")
        if (!token) {
            setLoading(false)
            return null//SI NO EXISTE token en session storage es porque no hay nadie logeado entonces corta la ejecucion para enviar a logearse
        }
        const config  ={//envia la cabecera con la autenticacion para hacer la consulta a la api
            headers: {
                "Content-Type":"application/json",//obligatorio
                Authorization :token
            }
        }

        try {
            const{data}=await clientAxios.get('/user/profile', config)//trae los datos del login{ok,msg,user}
            
            setAuth(data.user)//y los setea en auth
        } catch (error) {
            console.error(error)
            sessionStorage.removeItem("token")
            
        } finally{// <= investigar esta cosa, parece que se ejecuta en cualquiera de los 2 casos
            setLoading(false)
        }

      }
      authUser()
    },[])
    
  return (
    <AuthContext.Provider
    value={
        {
            auth,
            setAuth,
            loading //setea los datos del usuario autenticado en el front 
        }
    }>
        {children}
    </AuthContext.Provider>
  )
}

export{
    AuthProvider //componente que pasa el auth por props a todas las rutas en app
}
export default AuthContext
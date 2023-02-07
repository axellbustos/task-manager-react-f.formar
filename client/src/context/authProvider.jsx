import React,{useState} from 'react'
import {createContext} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider 
    value={
        {
            auth, setAuth //setea los datos del usuario autenticado en el front 
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
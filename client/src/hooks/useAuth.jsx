import { useContext }  from "react"
import  AuthContext from "../context/authProvider"

const useAuth = () => {
  return useContext(AuthContext)//viene de authProvide
}
export default useAuth 
//se envia a login del front para guardar los datos del usuario autenticado 
 
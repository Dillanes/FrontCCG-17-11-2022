import { createContext,useState } from "react";
import axios from 'axios'
 

 const LoginContext = createContext()
 const URLBASE = 'http://127.0.0.1:8000/'
const  headers =  {
          "Content-Type": "application/json",
        }

   const LoginProvider = ({children})=> {
      
   //ESTADOS
   const [isPending, setIsPending] = useState(false);
   const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('ValidateToken')))
   const [message, setMessage] = useState();
   const [typeMsg, setTypeMsg] = useState();

 console.log('nmnbmbn',window.localStorage.getItem('ValidateToken'))

 // RESETEAR RESPUESTAS MSG
 function resetResponse(activo=false,mensaje = null,tipo = null) {
   setIsPending(activo)
   setMessage(mensaje)
   setTypeMsg(tipo)
   
 }

 

 //FUNCION CERRAR SESIÓN
   const Logout = () => {
      axios.post(`${URLBASE}logout/`,{
         username:token?.user?.username,
         password:token?.user?.password,
         token:token?.token
         },headers).then(response =>{
            window.localStorage.removeItem('ValidateToken')
            setToken()
            resetResponse(true,response?.data?.mensaje_sesion,'success')
            setTimeout(() => {
               resetResponse()
            }, 5000)
      }).catch(error=>{
            resetResponse(true,error?.response?.data?.error,'error')
            window.localStorage.removeItem('ValidateToken')
            setTimeout(() => {
               resetResponse()
            }, 5000);
      })
    }


  //FUNCION INICIAR SESIÓN
    const Login = (Data) => {
      axios.post(`${URLBASE}login/`,
      Data
      ,headers).then(result=>{
         window.localStorage.setItem('ValidateToken',JSON.stringify(result.data))
         setToken(result.data)
         resetResponse(true,result.data.mensaje,'success')
         setTimeout(() => {
            resetResponse()
         }, 5000);
      }).catch(error=>{
         resetResponse(true,error?.response?.data?.error,'error')
         setTimeout(() => {
            resetResponse()
         }, 5000);
      })}
   
    const data = {
      isPending,
      token,
      message,
      Login,
      typeMsg,
      Logout
    }
    return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>

    
 }

   export {LoginProvider}
   export default LoginContext
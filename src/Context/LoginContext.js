import { createContext,useState } from "react";
import axios from 'axios'
 

 const LoginContext = createContext()
 const URLBASE = 'https://msdocs-python-sqlserver-api-215.azurewebsites.net/api/'
const  headers =  {
         "Content-type": "application/json"
        }

   const LoginProvider = ({children})=> {
      
   //ESTADOS
   const [isPending, setIsPending] = useState(false);
   const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('ValidateToken')))
   const [message, setMessage] = useState();
   const [typeMsg, setTypeMsg] = useState();

//  console.log('nmnbmbn',window.localStorage.getItem('ValidateToken'))
console.log(token);

 // RESETEAR RESPUESTAS MSG
 function resetResponse(activo=false,mensaje = null,tipo = null) {
   setIsPending(activo)
   setMessage(mensaje)
   setTypeMsg(tipo)
   

 }

 

 //FUNCION CERRAR SESIÓN
   const Logout = () => {
      try {
         window.localStorage.removeItem('ValidateToken')
         setToken()
         resetResponse(true,'sesión cerrada','success')
      } catch (error) {
         console.log(error)
         resetResponse(true,'bad request','error')
      }

      // axios.post(`${URLBASE}logout/`,{
      //    username:token?.user?.username,
      //    password:token?.user?.password,
      //    token:token?.token
      //    },headers).then(response =>{
         
      //       resetResponse(true,response?.data?.mensaje_sesion,'success')
      //       setTimeout(() => {
      //          resetResponse()
      //       }, 5000)
      // }).catch(error=>{
      //    console.log('error',error)
           
      //       resetResponse(true,error?.response?.data?.error,'error')
      //       window.localStorage.removeItem('ValidateToken')
      //       setTimeout(() => {
      //          resetResponse()
      //       }, 5000);
      // })
    }


  //FUNCION INICIAR SESIÓN
    const Login = (Data) => {
      axios.post(`${URLBASE}login/`,
      Data
      ,headers).then(result=>{
         console.log('*********',result)
         window.localStorage.setItem('ValidateToken',JSON.stringify(result.data.detail[0].data))
         setToken(result.data.detail[0].data)
         resetResponse(true,result.data.detail[0].data.msg,'success')
         setTimeout(() => {
            resetResponse()
         }, 5000);
      }).catch(error=>{
         console.log('error',error)
         resetResponse(true,error?.response?.data?.detail[0].msg,'error')
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
import React,{useContext,useState} from 'react'
import axios from 'axios'
import LoginContext from '../Context/LoginContext'
import '../Components/pruebaCss.css'


function Prueba1() {

  const {token} = useContext(LoginContext)

  const URL =  'http://127.0.0.1:8000/'

 
const headers = {
  headers:{
      Authorization: `Token ${token.token}`,
  }
}

// setInterval(() => {
//   axios.get(`${URL}apiomcproductos/OMC23Nivel1`,headers).then(res=>console.log(res.data.results) ).catch(Error=>console.log(Error))
// }, );


// console.log(arr)


  const API =  ()=>{

     axios.get(`${URL}apiomcproductos/OMC23Nivel`,headers).then(res=>console.log(res.data.results) ).catch(Error=>console.log(Error))

      fetch(`${URL}apiomcproductos/OMC23Nivel1/`,headers).then(response=>{
        console.log(response?.ok)
        if(!response?.ok){
          throw Error(console.log({error:response.status,message:'Ha ocurrido un error'}))
        }else{
          response.json().then(res=>console.log(res.results))
        }
      })   
  }



  return (
    <div>
      <h1  >Esta es la prueba 1</h1>
      <button onClick={API} >Traer Api</button>

      <div className='div-drop' >
        <div className='div-in-drop'>

        </div>
      </div>

    </div>
  )
}

export default Prueba1

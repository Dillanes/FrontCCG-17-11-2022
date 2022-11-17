import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setOmc23,deleteOmc23,putOmc23} from '../reducers/omc23/Omc23Slice'

function Prueba2() {

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.omc23)

  const [user, setUser] = useState({id:null,name:'',age:null});



  console.log(setOmc23)

  function save(e) {
    setUser({...user,[e.target.name]: e.target.name === 'name' ? e.target.value: parseInt(e.target.value)})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(user)
    setUser({id:null,name:'',age:null})
    dispatch(setOmc23(user))
  }
  const handleSubmitM = (e)=>{
    e.preventDefault()
      dispatch(putOmc23(user))
  }
   
  return (
    <div>
      <table>
        <thead>
          <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length>0&&data.map(dato =>(
            <tr key={dato?.id}>
              <td>{dato?.id}</td>
              <td>{dato?.name}</td>
              <td>{dato?.age}</td>
              <td><button onClick={()=>dispatch(deleteOmc23(dato?.id))}>Eliminar</button></td>
          </tr>

          ))
            
          }
        </tbody>
      </table>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={save} type='number' name='id' defaultValue={user.id}/>
          <input onChange={save} type='text' name='name' defaultValue={user.name}/>
          <input onChange={save} type='number' name='age' defaultValue={user.age}/>
          <input type='submit'  value='Enviar'/>

        </form>
      </div>
      <div>
        <form onSubmit={handleSubmitM}>
          <input onChange={save} type='number' name='id' defaultValue={user.id}/>
          <input onChange={save} type='text' name='name' defaultValue={user.name}/>
          <input onChange={save} type='number' name='age' defaultValue={user.age}/>
          <input type='submit'  value='Modificar'/>
        </form>
      </div>
    </div>
  )
}

export default Prueba2

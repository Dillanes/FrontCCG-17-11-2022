// import { useContext } from "react"
// import LoginContext from "../../Context/LoginContext" 
import {AiOutlineMenu} from 'react-icons/ai';
import Logo from '../../Assets/img/logoConsulting.png'
import {Route, Routes } from "react-router-dom";
import CementoPremezclado from '../../Pages/Menu/ElementosConstruccion/cementoPremezclado';
import Prueba2 from '../Prueba2';


function MenuContent() {
    // const {isPending,typeMsg,message} = useContext(LoginContext)

    const collap = ()=> {
        const nav = document.querySelectorAll('.content-menu-nav')[0]
        const menu = document.querySelectorAll('.content-menu-container')[0]
        const avatar = document.querySelectorAll('.container-menu-target-avatar')[0]
        nav.classList.toggle('show-nav')
        menu.classList.toggle('collapsed-menu')
        avatar.classList.toggle('disguise-avatar')
    }

  return (
    <div className='content-menu-container collapsed-menu'>
        <div className="menu-nav-sticky">
            <div><AiOutlineMenu className='icon-colap' onClick={collap}/></div>
            <div className="menu-nav-container-logo">
                <img className="menu-nav-logo" src={Logo} alt='logo.jpg'></img>
            </div>
        </div>
        <div className="container-options-show">
        <Routes>
            <Route path="prueba1/" element={<CementoPremezclado/>}/>
            <Route path="prueba2/" element={<Prueba2/>}/>
            <Route path="*" element={<h2 style={{borderBottom:'2px solid grey'}}> No found 404</h2>}/>
        </Routes>
        </div>
    {/* <div >
      {isPending&&<Message msg={message} type={typeMsg}/>}
      <button className='btn-limpiar'>SALIR</button>
    </div>
    <div></div> */}
  </div>
  )
}

export default MenuContent



import {AiOutlineInteraction} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi'
import { useContext } from 'react';
import { GiMaterialsScience } from "react-icons/gi";
import { RiUserSettingsFill } from "react-icons/ri";
import { VscOrganization } from "react-icons/vsc";
import { BiCuboid } from "react-icons/bi";
import { TbBuildingStore } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { SiElement } from "react-icons/si";
import LoginContext from '../../Context/LoginContext';
import { Link } from 'react-router-dom';
import {IoIosArrowForward,IoIosArrowDown} from 'react-icons/io'

export default function MenuNav() {
    
    const {Logout,token} = useContext(LoginContext)


    const selecteOption = (e)=>{
      const idDelete = document.getElementById('menu-nav-target-options-selecte')


      if(idDelete){
        idDelete.removeAttribute('id','menu-nav-target-options-selecte')
      }
      e.currentTarget.setAttribute('id','menu-nav-target-options-selecte')
    }

    const showLista = (type)=>{
 
        
        switch (type) {
            case 'complementarL':
                const listaCN = document.querySelectorAll('.listaCN')[0]
                listaCN.classList.toggle('showComplementarLista')
                break;
            case 'proveedor':
                const listaCN2 = document.querySelectorAll('.listaCN')[1]
                  listaCN2.classList.toggle('showComplementarLista')
                break;
        
            default:
                break;
        }

        
        
    }

  return (
    <nav className='content-menu-nav'>
        {/* <div className='menu-nav-content-icon' > 
            <AiOutlineMenu onClick={collap} className='icon-colap'/>
        </div> */}
        <div className='container-menu-target-avatar disguise-avatar' >
            <div  className='container-menu-avatar-img-cont'>
                <img  className='container-menu-img-avatar' src='https://thumbs.dreamstime.com/b/icono-de-hombre-negocios-imagen-avatar-macho-vector-perfil-con-gafas-y-peinado-barba-179728610.jpg' alt='imgAvatar.jpg'/>            
            </div>
            <div><p>{token.user.correo}</p></div>
        </div>
        <div className='container-menu-options'>

            <Link to='#' className='menu-nav-target-options' onClick={selecteOption}>
              <FaUserAlt className="nav_logo-icon" />
              <span className="nav_logo-name">PERFIL</span>  
            </Link>
            <Link to='/prueba1' className='menu-nav-target-options' onClick={selecteOption}>
                <SiElement className="nav_logo-icon" />
                <span className="nav_logo-name">ELEMENTOS DE CONSTRUCCION</span>
            </Link>

            <Link to='/prueba2' className='menu-nav-target-options' onClick={selecteOption}>
            <GiMaterialsScience className="nav_logo-icon" />
                <span className="nav_logo-name">MATERIALES</span>
            </Link>

            <Link to="/tablaReact" className="menu-nav-target-options" onClick={selecteOption}>
                <BiCuboid className="nav_logo-icon" />
                <span className="nav_logo-name">PRODUCTOS</span>
              </Link>

              <Link to="/omniclass" className="menu-nav-target-options" onClick={selecteOption}>
                <AiOutlineInteraction className="nav_logo-icon"></AiOutlineInteraction>
                <span className="nav_logo-name">ACTIVIDADES</span>
              </Link>

              <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                <VscOrganization className="nav_logo-icon" />
                <span className="nav_logo-name">ROLES ORGANIZACIONALES</span>
              </Link>

              <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                <BsTools className="nav_logo-icon" />
                <span className="nav_logo-name">HERRAMIENTA Y EQUIPO</span>
              </Link>
              {/* COMPLEMENTAR NORMA  */}
              <Link to="/RolesOrg" className="menu-nav-target-options" onClick={()=>showLista('complementarL')}>
                <RiUserSettingsFill className="nav_logo-icon" />
                <span className="nav_logo-name">COMPLEMENTAR NORMA</span>
                <IoIosArrowForward id='compNormacollapse' className="nav_logo-icon"/>
              </Link>
              {/* LISTA COMPLEMENTAR NORMA */}
                    <div className='listaCN showComplementarLista'>
                          <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                            <IoIosArrowDown className="nav_logo-icon" />
                            <span className="nav_logo-name">Registro</span>
                          </Link>
                          <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                            <IoIosArrowDown className="nav_logo-icon" />
                            <span className="nav_logo-name">Consulta</span>
                          </Link>
                    </div>

            {/* PROVEEDORES */}
             <Link to="/RolesOrg" className="menu-nav-target-options"   onClick={()=>showLista('proveedor')}>
                <TbBuildingStore className="nav_logo-icon" />
                <span className="nav_logo-name">PROVEEDORES</span>
                <IoIosArrowForward id='compNormacollapse' className="nav_logo-icon"/>
              </Link>

            {/*LISTA DE PROVEEDORES*/ }
            <div className='listaCN showComplementarLista'>
                 <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                     <IoIosArrowDown className="nav_logo-icon" />
                     <span className="nav_logo-name">Indice de Proveedores</span>
                   </Link>
                   <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                     <IoIosArrowDown className="nav_logo-icon" />
                     <span className="nav_logo-name">Materiales Según Proveedor</span>
                   </Link>
                   <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                     <IoIosArrowDown className="nav_logo-icon" />
                     <span className="nav_logo-name">Marca</span>
                   </Link>
                   <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                     <IoIosArrowDown className="nav_logo-icon" />
                     <span className="nav_logo-name">Sector de Mercado</span>
                   </Link>
                   <Link to="/RolesOrg" className="menu-nav-target-options" onClick={selecteOption}>
                     <IoIosArrowDown className="nav_logo-icon" />
                     <span className="nav_logo-name">Sucursales</span>
                   </Link>
            </div>

        </div>
        <div className='menu-bottom-settings'>
                <BiLogOut className='menu-icon-exit' onClick={Logout}/>
        </div>

    </nav>
  )
}

import {useState, useContext} from 'react'
import '../Pages/Login.css'
import Logo from '../Assets/img/logoConsulting.png'
import FormLogin from '../Components/Login/FormLogin'
import Message from '../Components/GlobalComponents/Message';
import LoginContext from '../Context/LoginContext';



function Login() {

    const {
            isPending,
            message,
            Login,
            typeMsg
            } = useContext(LoginContext)
            console.log('LOCALSTORAGE',window.localStorage.getItem('ValidateToken'))

    const [showPassword, setShowPassword] = useState(true);

    const showPass = (e)=>{
        setShowPassword(!showPassword)
        const input = document.getElementById('textTrasformInput')
        if (showPassword) {
            input.type = 'text'
        }else{
            input.type = 'password'
        }
    }

    const handleSubmitForm = (data)=>{
        Login(data)
    }


  return (

    <div className='container-login'>
        {/* <div className='fondoBofy'></div> */}

      <div className='container-articles-login'>
        <div className='article-left-login'>
            {/* <div className='fondo-one-login'></div> */}
            <div className='container-logo-login'>
                <div className='border-left-login'></div>
                <img className='logo-consulting-login' alt='Logo.png' src={Logo}/>
                <div className='border-rigth-login'></div>
            </div>
            <div className='textLoginDesc'>
               <h3>IMPULSAMOS LA TRANSFORMACIÓN<br/> HACIA LA CONSTRUCCIÓN 4.0 </h3>
               <br/>
               <p>Integración de Tecnologías para la Administración de
               Proyectos de Arquitectura, Ingeniería y Construcción</p>
            </div>
        </div>
        <div className='article-rigth-login'>
            <div className='form-header-login'>
               <h3 style={{color:'#999'}}>Login de Acceso</h3>
               <p style={{color: 'silver'}}>
                Bienvenido, para poder ingresar escribe tus credenciales en la parte inferior, en caso de no contar con ellas contactar al administrador.
               </p>
            </div> 
            <div className='form-menu-login'>
                {isPending&&<Message msg={message} type={typeMsg}/>}
                <FormLogin 
                    showPassword={showPassword} 
                    handleSubmitForm={handleSubmitForm} 
                    showPass={showPass}
                    />
            </div>
            <div className='form-footer-login'>
                Consulting & Construction Group
            </div>
            
        </div>
      </div>

      <div className='footer-container-login'>      
            CC&G
      </div>

    </div>
  )
}

export default Login

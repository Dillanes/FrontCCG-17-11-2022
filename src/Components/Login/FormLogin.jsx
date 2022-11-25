
import {AiFillEye,AiOutlineEyeInvisible} from 'react-icons/ai' 
import { useForm } from 'react-hook-form'
function FormLogin({showPassword,showPass,handleSubmitForm}) {

  const {register,formState:{errors},handleSubmit,reset} = useForm()
  


  const enviar = (data,e)=>{
        handleSubmitForm(data)
        reset()
  }

  return (
    <form className='form-login' autoComplete='off' onSubmit={handleSubmit(enviar)} >
        <div className='inputs-colections-form'>
            <div className='content-input-form'>
            <input type='text' className='form-input-text'  placeholder='Ingresar Usuario' {...register('email',{maxLength:{value:30,message:'Maximo 30 caracteres'},required:'Este campo es requerido'})} />
            {errors.email && <span style={{color:'red',fontSize:'12px'}}>{errors.email?.message}</span>}
            </div>
            <div className='content-input-form'>
            <input type='password' id='textTrasformInput' className='form-input-text'  placeholder='Ingresar Contraseña' {...register('password',{maxLength:{value:30,message:'Maximo 30 caracteres'},required:'Este campo es requerido'})}/>
            {errors.password && <span style={{color:'red',fontSize:'12px'}}>{errors.password?.message}</span>}
            <div className='content-icon-password' onClick={showPass}>{!showPassword?<AiOutlineEyeInvisible/>:<AiFillEye/>}</div>
            </div>
            <p className='p-text-login' >Olvide mi contraseña?</p>
        </div>
        
        <div className='form-footer-component'>
            <input type='submit' className='btn-enviar' value='Ingresar'/>
            <button type='reset' className='btn-limpiar'>Limpiar</button>
        </div>
    </form>


  )
}

export default FormLogin

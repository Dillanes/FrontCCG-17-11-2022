import {BiErrorCircle} from 'react-icons/bi'
import {BsCheckCircle} from 'react-icons/bs'
import {AiOutlineWarning,AiOutlineInfoCircle} from 'react-icons/ai'
let color = ''
function Message({msg='mensaje',type='success'}) {
    

    if(type==='success') color = '#D4EDDA'
    if(type==='error') color = '#F8D7DA'
    if(type==='alert') color = '#FFF3CD'
    if(type==='info') color = '#D1ECF1' 
    
    const style = {
        // with:'100%',
        width:'100%',
        maxHeight:'container',
        display:'flex',
        gap:'10px',
        backgroundColor:`${color}`,
        borderRadius:'5px',
        padding:'5px',
        fontSize:'1rem',
        textOverflow: 'ellipsis'
    }


  return (
    <div style={style} >
        {type==='success'&&<BsCheckCircle/>}
        {type==='error'&&<BiErrorCircle/>}
        {type==='alert'&&<AiOutlineWarning/>}
        {type==='info'&&<AiOutlineInfoCircle/>}
        <p>{msg}</p>
    </div>
  )
}

export default Message

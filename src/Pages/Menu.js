import MenuContent from '../Components/Menu/MenuContent'
import MenuNav from '../Components/Menu/MenuNav'
import '../Components/Menu/menunav.css'

function MenuInicio() {
  return (
    <div style={{backgroundColor:'lightblue',height:'100vh',width:'100%',display:''}}>
      <MenuNav/>
      <MenuContent/>
    </div>
  )
}




export default MenuInicio



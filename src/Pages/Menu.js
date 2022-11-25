import MenuContent from '../Components/Menu/MenuContent'
import MenuNav from '../Components/Menu/MenuNav'
import '../Components/Menu/menunav.css'
import { ConcretoReforzadoProvider } from '../Context/concretoPremezcladoContext'

function MenuInicio() {
  return (
    <ConcretoReforzadoProvider>
    <div style={{backgroundColor:'lightblue',height:'100vh',width:'100%',display:''}}>
      <MenuNav/>
      <MenuContent/>

    </div>
    </ConcretoReforzadoProvider>
  )
}




export default MenuInicio



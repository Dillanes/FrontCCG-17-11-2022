import {useContext} from "react";
import Login from "./Pages/Login";
import MenuInicio from "./Pages/Menu";
import LoginContext from "./Context/LoginContext";
function App() {
  const {token} = useContext(LoginContext)

  console.log(token)
  return (
    <div className="App">
      
      {!token?<Login/>:
      <MenuInicio/>}
      
    </div>
  );
}

export default App;

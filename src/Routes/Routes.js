import {Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import MenuInicio from "../Pages/Menu";


export default function name() {
        <Routes>
            <Route path="login/" element={<Login/>}/>
            <Route path="menu/" element={<MenuInicio/>}/>
        </Routes>
}

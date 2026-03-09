import { useState } from "react";
import { LOGO_URL } from "../utils/urls"
// This is named export --> we can export multiple things in 1 Module/File
export const Header=()=>{
    const[login,setLogin]=useState("Login");
    function setLogin1(){
        if(login==="Login"){setLogin("Logout");}
        else{setLogin("Login");}
    }

    return (
        <div className="Header">
            <div className="logo-container">
                {/* <img  src={logo} /> */}
                <img id="Logo" src={LOGO_URL}/>
            </div>
            <h1 className="app-name">Swigyyyy</h1>
            <div className="nav-items">
                <button className="Buttons" id="login" onClick={setLogin1}>{login}</button>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
// we can use both type of exports together and can import both the ways--
//  import Header  from "./Component/Header";  ---> for default
//  import {Header}  from "./Component/Header"; ----> for named export

//export default Header  --> only 1 thing can be exported in a file
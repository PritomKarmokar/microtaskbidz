import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";

function Navbar(){
    return(
        <nav className="nav">
        <p className ="site-title"><NavLink to="/">Rain Design</NavLink></p>
        <ul>
            <li><p><NavLink to="/signin">Sign In</NavLink></p></li>
            
            <li><p><NavLink to="/signup">Sign Up</NavLink></p></li> 
        </ul>
        </nav>
    )
}

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";

function Navbar(){
    return(
        <nav className="nav">
        <a className ="site-title" href="/">Rain Design</a>
        <ul>
            <li><p><NavLink to="/signin">Sign In</NavLink></p></li>
            
            <li><p><NavLink to="/signup">Sign Up</NavLink></p></li> 
        </ul>
        </nav>
    )
}

export default Navbar;
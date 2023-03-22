import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/signup.css";

function SignUp() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name + ' ' + email)
    }

    return (
        <div className="auth-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 >SignUp Page!</h1>

                <br></br>

                <label htmlFor="name">Name </label>
                <input val={name} onChange={(e) => setName(e.target.value)} type="text" className="input-box" placeholder="Enter your name here" required/>
                <br></br>

                <label htmlFor="email">Email </label>
                <input val={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input-box" placeholder="Enter your email here" required/>
                <br></br>

                <label htmlFor="password">Password </label>
                <input val={pass} onChange={(e) => setPass(e.target.value)} type="password" className="input-box" placeholder="Enter your password here" required/>
                <br></br>
                <button type="submit" className="sign-btn"> <NavLink to="/">Signup</NavLink></button>
                <hr></hr>
                <p className="p-class">Already have an account?<NavLink to="/" className="nav-link">Sign In</NavLink></p>
            </form>
            
        </div>
    )
}

export default SignUp;
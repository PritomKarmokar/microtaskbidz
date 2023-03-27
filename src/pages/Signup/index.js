import React, { useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import "../../css/signup.css";
import {publicPost} from "../../utilities/apiCaller";

function Signup() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name + ' ' + email)

        const response = await publicPost(
            "/user",
            JSON.stringify({
                name: name,
                email: email,
                password: pass,
            })
        );

        setMsg(response.msg);
        navigateTo("/"); // SignIn isn't completed yet, when complete it'll navigate to "/signin"
    };

    return (
        <div className="auth-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 >SignUp Page!</h1>

                <br></br>

                <label htmlFor="name">Name </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input-box" placeholder="Enter your name here" required/>
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

export default Signup;
import React,{useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "../../css/signup.css";
import { publicPost } from "../../utilities/apiCaller";

function Signin(){

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigateTo = useNavigate();

    // console.log(email)
    // console.log(pass)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await publicPost(
            "/user/signin",
            JSON.stringify({
                email: email,
                password: pass,
            })
        );

        console.log(response.message);
        console.log(response.token);
        console.log(response.status)

        if(response.message === "Login successful"){
            sessionStorage.setItem("token", response.token);
            navigateTo("/");
        }
        else{
            console.log("Your're wrong")
        }
        
    };  
    
    return(
        <div className="auth-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>SignIn page</h1>
                <br></br>
                <label htmlFor="email">Email </label>
                <input className="input-box" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required/>
                <br></br>
                <label htmlFor="password">Password </label>
                <input className="input-box" type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter your password" required />
                <br></br>
                <button type="submit" className="sign-btn">SignIn</button>
            </form>
        </div>
    )
}

export default Signin;
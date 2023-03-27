import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/signup.css";

const Home = () => {
  return (
    <div>
      <h1 className="my-6 text-center text-3xl font-bold">Welcome to React</h1>
      <NavLink to="/signup">
        Sign up
      </NavLink><br></br>
      <NavLink to="/signin">
        Sign in
      </NavLink>
    </div>
  );
};

export default Home;

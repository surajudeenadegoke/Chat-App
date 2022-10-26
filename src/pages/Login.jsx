import React from "react";
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Deen Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </form>
        <p>You don't have an account? <Link to = {'/register'} className ="link">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;

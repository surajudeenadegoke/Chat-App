import React from "react";
import {Link} from "react-router-dom"  

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Deen Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="title" />

          <button>Sign Up</button>
        </form>
        <p>You have an account? <Link to = {'/login'} className = "link">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;

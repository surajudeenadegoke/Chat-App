import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Deen Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="passwor" />
        </form>
        <p>You don't have an account? Sign Up</p>
      </div>
    </div>
  );
}

export default Login;

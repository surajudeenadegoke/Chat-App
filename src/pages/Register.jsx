import React from "react";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Deen Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="passwor" />
          <input type="file" id="title" />

          <button>Sign Up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;

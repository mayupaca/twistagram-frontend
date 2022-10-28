import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Twistagram</h3>
          <div className="loginDesc">Let's enjoy!!</div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">Login here!</p>
            <input type="text" className="loginInput" placeholder="email" />
            <input type="text" className="loginInput" placeholder="password" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Do you forget your password?</span>
            <button className="loginRegisterButton">Register here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

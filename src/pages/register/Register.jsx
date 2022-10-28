import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Twistagram</h3>
          <div className="registerDesc">Let's enjoy!!</div>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <p className="registerMsg">Register here!</p>
            <input type="text" className="registerInput" placeholder="username" />
            <input type="text" className="registerInput" placeholder="email" />
            <input
              type="text"
              className="registerInput"
              placeholder="password"
            />
            <input
              type="text"
              className="registerInput"
              placeholder="confirm password"
            />
            <button className="registerButton">Sign up</button>
            <button className="registerLoginButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  // useRefを使って、form>inputの値を簡単に取ってくる
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check password and passwordConfirm
    if (password.current.value !== passwordConfirm.current.value) {
      // .setCustomValidity関数
      passwordConfirm.current.setCustomValidity(
        "Your passwor is not the same."
      );
    } else {
      try {
        // 登録するユーザー情報
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          passwordConfirm: passwordConfirm.current.value,
        };
        // registerのapiたたく
        await axios.post("/auth/register", user)
        navigate('/login')
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Twistagram</h3>
          <div className="registerDesc">Let's enjoy!!</div>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="registerMsg">Register here!</p>
            <input
              type="text"
              className="registerInput"
              placeholder="username"
              required
              ref={username}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="email"
              required
              ref={email}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="password"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="confirm password"
              required
              minLength="6"
              ref={passwordConfirm}
            />
            <button className="registerButton" type="submit">
              Sign up
            </button>
            <button className="registerLoginButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

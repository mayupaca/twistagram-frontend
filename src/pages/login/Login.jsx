import React, { useRef } from "react";
import { useContext } from "react";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";
import "./Login.css";

export default function Login() {
  // useRefを使って、form>inputの値を簡単に取ってくる
  const email = useRef();
  const password = useRef();
  // dispatchを使いたいからglobalで使えるAuthContextをimportする
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    // loginCall is from actionCall.js
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Twistagram</h3>
          <div className="loginDesc">Let's enjoy!!</div>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">Login here!</p>
            <input
              type="email"
              className="loginInput"
              placeholder="email"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Do you forget your password?</span>
            <button className="loginRegisterButton">Register here</button>
          </form>
        </div>
      </div>
    </div>
  );
}

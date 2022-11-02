// dispatch
import axios from "axios";
export const loginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    // "auth/login"でauth.jsのloginAPIをたたいた
    const response = await axios.post("auth/login", user);
    // despatchでAuthAction.jsのactionを呼んで更新
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};

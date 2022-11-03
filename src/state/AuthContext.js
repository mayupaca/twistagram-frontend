// context = グローバルコンテキスト = 一つのファイルからどのコンポーネントに対しても変数を渡せる
// propsを渡さなくてもアクセスできる
// 最初のユーザー状態
import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  // user: {
  //   _id: "635697b796721dc5c65e122a",
  //   username: "mayumura",
  //   email: "mayumura@example.com",
  //   password: "asdfgh",
  //   profilePicture: "/person/UsaMaro.png",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
// initialStateは変わる前の状態(初期値)
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // stateは変わってからの状態
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    // localStorageの.setItem関数
    // userっていう名前のlocal storageに保存する
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        // dispatch関数 = actionの通知
        dispatch,
      }}
    >
      {/* children = <App />はいつでもvalueが使える */}
      {children}
    </AuthContext.Provider>
  );
};

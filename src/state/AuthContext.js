// context = グローバルコンテキスト = 一つのファイルからどのコンポーネントに対しても変数を渡せる
// propsを渡さなくてもアクセスできる
// 最初のユーザー状態
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
// initialStateは変わる前の状態(初期値)
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // stateは変わってからの状態
  const [state, dispatch] = useReducer(AuthReducer, initialState);
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

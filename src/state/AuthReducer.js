// reducer = stateをstate'にする裏側の仕組み
// actionはAuthActions.jsのtype
const AuthReducer = (state, action) => {
  // アクションごとの処理
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        // 情報を取得しますよー
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        // 取得したuser
        user: action.payload,
        // 情報を取得しますよー
        isFetching: false,
        error: false,
      };
    case "LOGIN_ERROR":
      return {
        user: null,
        // 情報を取得しますよー
        isFetching: false,
        error: action.payload,
      };
  }
};

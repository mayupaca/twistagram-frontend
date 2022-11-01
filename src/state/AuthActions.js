// user inputに応じたアクションの設定
// userにはuserの状態が入っている
// typeはアクションの名前
// payloadは情報を返すための情報
export const LoginStart = (user) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});

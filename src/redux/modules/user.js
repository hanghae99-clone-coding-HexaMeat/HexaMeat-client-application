import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

const loginAX = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      //   "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .post(
        "http://54.180.152.35/user/login",
        { id: id, password: pwd },
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          let token = res.data.token;
          sessionStorage.setItem("token", token);

          dispatch(
            setUser({
              id: res.config.data.id,
            })
          );
        }
        history.push("/");
      })
      .catch((error) => {
        window.alert("입력하신 아이디와 비밀번호가 일치하지 않습니다!");
      });
  };
};

const signupAX = (id, pwd, pwdCheck, nickname) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      //   "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .post(
        "http://54.180.152.35/user/register",
        {
          id: id,
          password: pwd,
          confirmPassword: pwdCheck,
          nickname: nickname,
        },
        { headers: headers }
      )
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
        history.replace("/signup");
      });
  };
};

const isLogin = () => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    if (!token) {
      return false;
    }
    dispatch(
      setUser({
        id: userId,
      })
    );
  };
};

// 로그아웃
const logout = () => {
  return function (dispatch, getState, { history }) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    dispatch(logOut());
    const lastMessage = window.confirm("로그아웃 하시겠습니까?");
    if (lastMessage) {
      window.alert("로그아웃이 완료되었습니다.");
      history.replace("/");
    }
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  logOut,
  setUser,
  loginAX,
  signupAX,
  isLogin,
  logout,
};

export { actionCreators };

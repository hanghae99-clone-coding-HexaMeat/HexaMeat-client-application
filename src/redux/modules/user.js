import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션 타입부터 정해줍니다!
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// 액션 생성 함수를 만들어요.
//  redux-actions의 createAction을 사용해서 만들어줍니다.
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState를 만듭니다.
// 기본 값을 미리 정해주는거예요.
/**
 * user 유저 정보가 들어가는 딕셔너리
 * is_login 로그인했는 지, 아닌 지 여부
 */
const initialState = {
  user: null,
  is_login: false,
};

// 미들웨어(액션이 일어나고 -> 리듀서 내의 어떤 로직이 실행되기 사이의 중간다리 역할을 해줄 함수들)을 작성합니다!
/**
 *
 * @param {*} id 아이디
 * @param {*} pwd 패스워드
 * 파이어베이스의 인증 서비스를 통해 로그인 한 뒤,
 * 리덕스에서도 로그인 상태를 저장해줄거예요.
 */
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
        if (res.status === 200) {
          let token = res.data.token;
          let userId = res.config.data.id;

          sessionStorage.setItem("token", token);
          dispatch(
            setUser({
              id: res.config.data.id,
            })
          );
        }
        window.alert("로그인 완료!");
        history.push("/");
      })
      .catch((error) => {
        window.alert("입력하신 아이디와 비밀번호가 일치하지 않습니다!");

        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

// 회원가입
/**
 *
 * @param {*} id 아이디
 * @param {*} pwd 패스워드
 * @param {*} user_name 닉네임
 * @returns
 */
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
        console.log(res);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
        window.alert(err.response.data.errorMessage);
        history.replace("/signup");
      });
  };
};

// 로그인했는 지 아닌 지 체크, 만약 파이어베이스에 로그인한 상태라면? 리덕스에도 유저 정보를 넣어줍니다.
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

// 만든 액션생성자들(+중간다리들)을 외부에서 호출할 수 있도록 내보내줍니다. 내보낼 필요가 없는 건 굳이 내보내지 않아도 괜찮아요!
const actionCreators = {
  logOut,
  setUser,
  loginAX,
  signupAX,
  isLogin,
  logout,
};

export { actionCreators };

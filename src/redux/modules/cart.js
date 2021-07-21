import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션 타입부터 정해줍니다!
const SET_CART = "SET_CART";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// 액션 생성 함수를 만들어요.
//  redux-actions의 createAction을 사용해서 만들어줍니다.
const setCart = createAction(SET_CART, (product_list) => ({ product_list }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState를 만듭니다.
// 기본 값을 미리 정해주는거예요.
/**
 * user 유저 정보가 들어가는 딕셔너리
 * is_login 로그인했는 지, 아닌 지 여부
 */
const initialState = {
  list: [],
};

const addCartAX = (productId, option, quantity) => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const headers = {
      //   "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "authorization": `Bearer ${token}`,
    };
    axios
      .post(
        `http://54.180.152.35/cart?productId=${productId}&productOption=${option}`,
        {
          quantity: quantity,
        },
        { headers: headers }
      )
      .then()
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
      });
  };
};

const getCartAX = () => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const headers = {
      //   "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };
    axios
      .get("http://54.180.152.35/cart", { headers: headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
      });
  };
};
// reducer
export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.product_list;
      }),
  },
  initialState
);

// 만든 액션생성자들(+중간다리들)을 외부에서 호출할 수 있도록 내보내줍니다. 내보낼 필요가 없는 건 굳이 내보내지 않아도 괜찮아요!
const actionCreators = {
  setCart,
  addCartAX,
  getCartAX,
};

export { actionCreators };

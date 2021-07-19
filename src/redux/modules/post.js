import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_POST = "SET_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  is_loading: false,
};

const getPostAX = () => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    const headers = {
      //   "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .get(
        "http://54.180.152.35/products",
        { headers: headers }
      )
      .then((res) => {
        let post_list = [];
        res.forEach((p) => {
          let post = {
            title: p.title,
            price: p.price, // Int
            priceStandard: p.priceStandard,
            img: p.img,
            productId: p.productId, // 고유값
            freeAnti: p.freeAntibiotic,
            cartCount: p.cartCount,
          };
          post_list.push(post);
        });
        dispatch(setPost(post_list));
      });
  };
};

const getBestPost = () => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        draft.is_loading = false;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  loading,
  getPostAX,
};

export { actionCreators };

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
      .get("http://54.180.152.35/products", { headers: headers })
      .then((res) => {
        let post_list = [];
        
        res.data.result.forEach((p) => {
          console.log(res);
          let post = {
            id: p.id,
            title: p.title,
            price: p.price, // Int
            priceStandard: p.priceStandard,
            img: p.detailImage,
            productId: p.productId, // 고유값
            freeAnti: p.freeAntibiotic,
            category: p.category,
            best: p.bestProduct,
            option: p.productOption,
          };
          post_list.push(post);
        });
        console.log(post_list);
        dispatch(setPost(post_list));
      });
  };
};

// const getBestPostAX = () => {
//   return function (dispatch, getState, { history }) {
//     dispatch(loading(true));
//     const headers = {
//       //   "Content-Type": "multipart/form-data",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     };
//     axios
//       .get("http://54.180.152.35/products", { headers: headers })
//       .then((res) => {
//         let post_list = [];
//         res.forEach((p) => {
//           let post = {
//             title: p.title,
//             price: p.price, // Int
//             priceStandard: p.priceStandard,
//             img: p.detailImage,
//             productId: p.productId, // 고유값
//             freeAnti: p.freeAntibiotic,
//             cartCount: p.cartCount,
//             category: p.category,
//             best: p.bestProduct,
//             option: p.productOption,
//           };
//           post_list.push(post);
//         });
//         dispatch(setPost(post_list));
//       });
//   };
// };

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

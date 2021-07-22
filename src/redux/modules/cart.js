import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_CART = "SET_CART";
const SET_TOTAL = "SET_TOTAL";
const DELETE_CART = "DELETE_CART";

const setCart = createAction(SET_CART, (product_list) => ({ product_list }));
const setTotal = createAction(SET_TOTAL, (total) => ({ total }));
const deleteCart = createAction(DELETE_CART, (id, product_list) => ({
  id,
  product_list,
}));

const initialState = {
  list: [],
  totalPrice: [],
};

const addCartAX = (productId, option, quantity) => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const headers = {
      //   "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    axios
      .post(
        `http://54.180.152.35/cart?productId=${productId}`,
        {
          productOption: option,
          quantity: quantity,
        },
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
      })
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
        let product_list = [];
        res.data.products.forEach((p) => {
          let product = {
            cartId: p.cartId,
            title: p.title,
            img: p.image,
            option: p.productOption,
            weight: p.weight,
            quantity: p.quantity,
            price: p.price,
            total: p.totalPriceOfProduct,
          };
          product_list.push(product);
        });
        let allprice = res.data.totalPriceOfCart;
        dispatch(setTotal(allprice));
        dispatch(setCart(product_list));
      })
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
      });
  };
};

const addQtyAX = (cartId) => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const headers = {
      //   "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    axios
      .patch(
        `http://54.180.152.35/cart?cartId=${cartId}&action=plus`,
        {},
        {
          headers: headers,
        }
      )
      .then((res) => {})
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
      });
  };
};

const minusQtyAX = (cartId) => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const headers = {
      //   "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    axios
      .patch(
        `http://54.180.152.35/cart?cartId=${cartId}&action=minus`,
        {},
        {
          headers: headers,
        }
      )
      .then((res) => {})
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
      });
  };
};

const deleteCartAX = (cartId) => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const headers = {
      //   "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    axios
      .delete(`http://54.180.152.35/cart?cartId=${cartId}`, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        dispatch(deleteCart(cartId));
        history.replace("/cart");
      })
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
      });
  };
};

const deleteAllAX = () => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const headers = {
      //   "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    axios
      .delete(`http://54.180.152.35/cart/buy`, {
        headers: headers,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        window.alert(err.response.data.errorMessage);
      });
  };
};

export default handleActions(
  {
    [SET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.product_list;
      }),
    [SET_TOTAL]: (state, action) =>
      produce(state, (draft) => {
        draft.totalPrice = action.payload.total;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.cartId);
        if (idx !== -1) {
          draft.list.splice(idx, 1);
        }
      }),
  },
  initialState
);

const actionCreators = {
  setCart,
  setTotal,
  deleteCart,
  addCartAX,
  getCartAX,
  addQtyAX,
  minusQtyAX,
  deleteCartAX,
  deleteAllAX,
};

export { actionCreators };

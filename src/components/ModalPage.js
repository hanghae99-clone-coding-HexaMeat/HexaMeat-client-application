import React from "react";

import ModalDropDown from "./ModalDropDown";
import ModalQuantity from "./ModalQuantity";

import { Grid, Text, Button } from "../elements";
import { priceCheck } from "../shared/pricecheck";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as cartActions } from "../redux/modules/cart";

const ModalPage = (props, onClose) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const close = (e) => {
    if (props?.onClose) {
      props?.onClose(e);
    }
  };

  const [quantity, setQuantity] = React.useState(1);
  const getQuantity = (qnum) => {
    setQuantity(qnum);
  };

  const [option, setOption] = React.useState(props?.option[0]);
  const getOption = (option) => {
    setOption(option);
  };

  const totalPrice = props?.price * parseInt(quantity);

  const addCart = (e) => {
    if(!is_login){
      window.alert("로그인이 필요한 서비스입니다.");
      return history.push("/login");
    }
    dispatch(cartActions.addCartAX(props?.productId, option, quantity));
    window.alert("장바구니에 추가되었습니다.");
    close(e);
  };

  const addCartTo = () => {
    if(!is_login){
      window.alert("로그인이 필요한 서비스입니다.");
      return history.push("/login");
    }
    dispatch(cartActions.addCartAX(props?.productId, option, quantity));
    window.alert("장바구니로 이동합니다.");
    history.push("/cart");
  };

  return (
    <React.Fragment>
      <Grid height="34rem">
        <Grid width="37rem" height="" margin="0 auto 0 auto">
          <Text color="black" size="2.5rem" bold2="900" text_align="center">
            {props.title}
          </Text>
          <ModalQuantity getQuantity={getQuantity} quantity={quantity} />
        </Grid>
        <Grid width="37rem" height="5.2rem" margin="0 auto 0 auto">
          <Text
            color="black"
            size="1.8rem"
            margin="1.5rem 3rem 1.5rem 0"
            bold2="900"
          >
            옵션선택
          </Text>
          <ModalDropDown getOption={getOption} {...props} options={option} />
        </Grid>
        <Grid height="6rem" margin="3.4rem 0 0 0">
          <Text
            size="2.5rem"
            bold2="900"
            is_float="right"
            margin="2.5rem 6.4rem 2.5rem 0"
          >
            {priceCheck(totalPrice)}원
          </Text>
        </Grid>
        <Grid is_flex2 width="100%" height="6rem">
          <Button
            width="50%"
            height="5.6rem"
            bg="#acacac"
            cursor="t"
            border="none"
            color="#fff"
            bold="900"
            size="1.8rem"
            _onClick={addCartTo}
          >
            바로구매
          </Button>
          <Button
            width="50%"
            height="5.6rem"
            bg="#000"
            cursor="t"
            border="none"
            color="white"
            bold="900"
            size="1.8rem"
            _onClick={addCart}
          >
            장바구니
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ModalPage;

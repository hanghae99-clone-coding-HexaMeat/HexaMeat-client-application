import React from "react";
import styled from "styled-components";

import ModalDropDown from "./ModalDropDown";
import ModalQuantity from "./ModalQuantity";

import { Grid, Text, Button } from "../elements";

const ModalPage = (props) => {
  const totalPrice = 16800;

  const [quantity, setQuantity] = React.useState(1);
  const getQuantity = (qnum) => {
    setQuantity(qnum);
  };

  const [option, setOption] = React.useState("");
  const getOption = (op) => {
    setOption(op);
  };

  return (
    <React.Fragment>
      <Grid height="34rem">
        <Grid width="37rem" height="" margin="0 auto 0 auto">
          <Text color="black" size="2.5rem" bold2="900" text_align="center">
            초신선 돼지 삼겹살 구이용
          </Text>
          <ModalQuantity getQuantity={getQuantity} />
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
          <ModalDropDown getOption={getOption} />
        </Grid>
        <Grid height="6rem" margin="3.4rem 0 0 0">
          <Text
            size="2.5rem"
            bold2="900"
            is_float="right"
            margin="2.5rem 6.4rem 2.5rem 0"
          >
            {totalPrice * quantity}원
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
          >
            장바구니
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ModalPage;

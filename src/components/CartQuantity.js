import React from "react";
import styled from "styled-components";

import { Grid, Button, Text } from "../elements";

const CartQuantity = (props) => {
  const [qnum, setQNum] = React.useState(1);
  const sendQuantity = (qnum) => {
    props.getQuantity(qnum);
  };

  const addQ = () => {
    setQNum(qnum + 1);
    if (qnum === 20) {
      setQNum(20);
      window.alert("주문은 20개까지만 가능합니다.");
    }
  };
  const minusQ = () => {
    setQNum(qnum - 1);
    if (qnum === 1) {
      setQNum(1);
      window.alert("최소 수량은 1개입니다.");
    }
    sendQuantity(qnum - 1);
  };
  console.log(qnum);
  return (
    <div className="container">
      <div className="menu-container">
        <Grid>
          <Grid
            width="12rem"
            height="4rem"
            is_border="0.1rem solid gray"
            bg="white"
            // _onClick={onClick}
            cursor
            is_flex
          >
            <Button
              width="4rem"
              height="3.8rem"
              border="0.1rem solid white"
              padding="1rem"
              cursor="pointer"
              bg="white"
              _onClick={minusQ}
            >
              <span
                class="material-icons"
                style={{
                  color: "gray",
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                }}
              >
                remove
              </span>
            </Button>
            <Text
              size="1.8rem"
              bold2="400"
              color="white"
              text_align="center"
              //   margin="1rem 0 1rem 8rem"
            >
              <div style={{ color: "black" }}>{qnum}</div>
            </Text>
            <Button
              width="4rem"
              height="3.8rem"
              border="0.1rem solid white"
              padding="1rem"
              cursor="pointer"
              bg="white"
              _onClick={addQ}
            >
              <span
                class="material-icons"
                style={{
                  color: "gray",
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                }}
              >
                add
              </span>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CartQuantity;

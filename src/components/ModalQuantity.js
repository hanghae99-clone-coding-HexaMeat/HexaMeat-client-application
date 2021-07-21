import React from "react";
import styled from "styled-components";

import { Grid, Button, Text } from "../elements";

const ModalQuantity = (props) => {
  const quantity = props?.quantity;

  const addQ = () => {
    props.getQuantity(quantity + 1);
    if (quantity === 100) {
      props.getQuantity(100);
      window.alert("수량은 100까지만 설정 가능합니다.");
      return;
    }
  }

  const minusQ = () => {
    props.getQuantity(quantity - 1);
    if (quantity === 1) {
      props.getQuantity(1);
      window.alert("최소 수량은 1개입니다.");
      return;
    }
  };

  return (
    <div className="container">
      <div className="menu-container">
        <Grid>
          <Grid
            width="37rem"
            height="5rem"
            updownborder="0.1rem solid gray"
            bg="white"
            // _onClick={onClick}
            cursor
            is_flex
          >
            <Button
              width="5rem"
              height="5rem"
              border="0.1rem solid gray"
              padding="1rem"
              cursor="pointer"
              bg="white"
              _onClick={minusQ}
            >
              <span
                className="material-icons"
                style={{
                  color: "gray",
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                remove
              </span>
            </Button>
            <Text
              size="1.8rem"
              bold2="400"
              color="#212121"
              text_align="center"
              //   margin="1rem 0 1rem 8rem"
            >
              {props?.quantity}
            </Text>
            <Button
              width="5rem"
              height="5rem"
              border="0.1rem solid gray"
              padding="1rem"
              cursor="pointer"
              bg="white"
              _onClick={addQ}
            >
              <span
                className="material-icons"
                style={{
                  color: "gray",
                  fontSize: "3rem",
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

export default ModalQuantity;

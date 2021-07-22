import React from "react";

import { Grid, Button, Text } from "../elements";

const Quantity = (props) => {
  const quantity = props?.quantity;

  const addQ = () => {
    props.getQuantity(quantity + 1);
    if(quantity === 20){
      props.getQuantity(20);
      window.alert("주문은 20개까지만 가능합니다.");
      return;
    }
  };

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
            width="31.5rem"
            height="5rem"
            is_border="0.1rem solid gray"
            bg="#1c1c1c"
            cursor
            is_flex
          >
            <Button
              width="5rem"
              height="5rem"
              border="0.1rem solid gray"
              padding="1rem"
              cursor="pointer"
              bg="#1c1c1c"
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
              color="white"
              text_align="center"
            >
              {props?.quantity}
            </Text>
            <Button
              width="5rem"
              height="5rem"
              border="0.1rem solid gray"
              padding="1rem"
              cursor="pointer"
              bg="#1c1c1c"
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

export default Quantity;

import React from "react";
import styled from "styled-components";

import { Grid, Button, Text } from "../elements";

const Quantity = (props) => {
  const [qnum, setQNum] = React.useState(1);

  const addQ = () => {
    setQNum(qnum + 1);
    if(qnum === 20){
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
  };
  console.log(qnum);
  return (
    <div className="container">
      <div className="menu-container">
        <Grid>
          <Grid
            width="31.5rem"
            height="5rem"
            is_border="0.1rem solid gray"
            bg="#1c1c1c"
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
              bg="#1c1c1c"
              _onClick={minusQ}
            >
              <span
                class="material-icons"
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
              //   margin="1rem 0 1rem 8rem"
            >
              {qnum}
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
                class="material-icons"
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

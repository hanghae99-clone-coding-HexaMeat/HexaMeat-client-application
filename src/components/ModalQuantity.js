import React from "react";
import styled from "styled-components";

import { Grid, Button, Text } from "../elements";

const ModalQuantity = (props) => {
  const [qnum, setQNum] = React.useState(1);
  const sendQuantity = (qnum) => {
    props.getQuantity(qnum);
  };

  const addQ = () => {
    setQNum(qnum + 1);
    if (qnum === 100) {
      setQNum(100);
      window.alert("수량은 100까지만 설정 가능합니다.");
      return;
    }
    sendQuantity(qnum + 1);
  }

  const minusQ = () => {
    setQNum(qnum - 1);
    if (qnum === 1) {
      setQNum(1);
      window.alert("최소 수량은 1개입니다.");
      return;
    }
    sendQuantity(qnum - 1);
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
              color="#212121"
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
              bg="white"
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

export default ModalQuantity;

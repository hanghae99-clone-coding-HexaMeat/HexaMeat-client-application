/*eslint-disable*/
import React from "react";
import styled from "styled-components";

import BtnCard from "../shared/img/BtnCard.png";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import Post from "../components/Post";

const Cart = (props) => {
  return (
    <Grid margin="10rem -18,48rem 0 0" padding="0 0 0 10rem">
      <Grid margin="10rem 5rem 5rem 0" is_flex2>
        <h5
          style={{
            fontSize: "3.2rem",
            fontWeight: "500",
            lineHeight: "2.6rem",
            margin: "0",
          }}
        >
          장바구니
        </h5>
      </Grid>

      <Grid is_flex2>
        {/* L그리드 전체 */}
        <Grid width="86rem" height="20.4rem" bg="yellow" margin="5.1rem 0 0 0">
          <Grid
            width=""
            height="5.5rem"
            lineHeight="5.5rem"
            borderBottom="0.1rem solid #e1dedf"
          >
            <Text
              margin="0 0 0 24.9rem"
              float="left"
              fontSize="1.3rem"
              lineHeight="5.5rem"
            >
              상품정보
            </Text>
            <Text
              margin="0 0 0 50rem"
              float="left"
              fontSize="1.3rem"
              lineHeight="5.5rem"
            >
              수량
            </Text>
            <Text
              margin="0 0 0 61.7rem"
              float="left"
              fontSize="1.3rem"
              lineHeight="5.5rem"
            >
              가격
            </Text>
          </Grid>
        </Grid>

        <Grid
          width="28.0rem"
          height="43.2rem"
          margin="5.1rem 0 0 3.9rem"
          padding="0 0 0 3rem"
          bg="#f8f8f8"
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;

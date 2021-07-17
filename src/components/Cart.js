import React from "react";
import styled from "styled-components";

import BtnCard from "../shared/img/BtnCard.png";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import Post from "../components/Post";

const Cart = (props) => {
  return (
    <div style={{ marginBottom: "6rem" }}>
      <Grid margin="10rem auto" is_flex2 wrap="true">
        <h5
          style={{
            fontSize: "3.2rem",
            fontWeight: "800",
            lineHeight: "2.6rem",
            margin: "0",
          }}
        >
          장바구니
        </h5>
      </Grid>

      <Grid is_flex="true"></Grid>
    </div>
  );
};

export default Cart;

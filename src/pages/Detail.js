import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../elements";
import DropDown from "../components/DropDown";
import Quantity from "../components/Quantity";

import { history } from "../redux/configureStore";

const Detail = (props) => {
  return (
    <Grid>
      <Grid is_flex2 bg="#1c1c1c" padding="0 0 5rem 0">
        <Grid
          width="37.6rem"
          height="42rem" // 임시
          margin="0 2.8rem 3rem 0"
          padding="1rem 1rem 0rem 1rem"
        >
          <Image
            shape="rectangle"
            src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"
            cursor="t"
            margin="7rem 5rem 0 5rem"
            _onClick={() => {
              history.push(`/post/${props.id}`);
            }}
          />
        </Grid>
        <Grid width="37.6rem">
          <Text color="white" size="3rem" bold2="900">
            초신선 돼지 삼겹살 구이용
          </Text>
          <Text color="#9b9b9b" size="1.6rem" margin="0">
            100g당 2,800원
          </Text>
          <Text color="white" size="2.4rem" margin="0.6rem 0 0 0">
            기준가 16,800원 (600g)
          </Text>
          <hr
            style={{
              width: "38rem",
              height: "0.1rem",
              backgroundColor: "#4a4a4a",
              marginTop: "2.6rem",
              border: "0",
            }}
          />
          <Grid height="5.2rem" margin="2.9rem 0 0 0">
            <Text
              color="white"
              is_float="left"
              size="1.8rem"
              margin="1.5rem 3rem 1.5rem 0"
              bold
            >
              옵션
            </Text>
            <DropDown />
          </Grid>
          <Grid height="5.2rem" margin="2.9rem 0 0 0">
            <Text
              color="white"
              is_float="left"
              size="1.8rem"
              margin="1.5rem 3rem 1.5rem 0"
              bold
            >
              수량
            </Text>
            <Quantity />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;

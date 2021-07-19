import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements";
import DropDown from "../components/DropDown";
import Quantity from "../components/Quantity";
import Copyright from "../components/Copyright";

import DetailExp from "../shared/img/DetailExp.png";
import DetailExp2 from "../shared/img/DetailExp2.png";
import DetailExp3 from "../shared/img/DetailExp3.png";

import { history } from "../redux/configureStore";

const Detail = (props) => {
  return (
    <Grid>
      <Grid bg="#1c1c1c">
        <Grid is_flex2 padding="0 9rem 0 0">
          <Grid
            width="60rem"
            height="60rem" // 임시
            margin="0 2.8rem 3rem 0"
            padding="1rem 1rem 0rem 1rem"
          >
            <MainPic
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
            <Text color="white" size="2.4rem" margin="0.6rem 0 0 0" bold2="600">
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
            <Grid is_flex2 margin="4rem 0 0 0">
              <Button
                width="18rem"
                height="6rem"
                bg="#888"
                margin="0 2rem 0 0"
                cursor="t"
                border="none"
                // _onClick={}
              >
                <Text size="1.6rem" color="#fff" bold2="900">
                  바로구매
                </Text>
              </Button>
              <Button
                width="18rem"
                height="6rem"
                bg="#d0021b"
                cursor="t"
                border="none"
              >
                <Text size="1.6rem" color="#fff" bold2="900">
                  장바구니
                </Text>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid width="30rem" margin="0 auto">
        <Text size="2.4rem" color="#000" bold2="700" text_align="center">
          상품설명
        </Text>
      </Grid>
      <hr />
      <Desc2 />
      <Desc />
      <Desc3 />
      <Copyright margin="15rem 0 0 0" />
    </Grid>
  );
};

const MainPic = styled.div`
  width: 50rem;
  aspect-ratio: auto 500 / 500;
  height: 50rem;
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  ${(props) => (props.radius ? `border-radius: 0.5rem;` : "")}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
`;

const Desc = styled.div`
  min-width: 118rem;
  width: 100%;
  height: 100rem;
  padding-top: 146%;
  background-image: url(${DetailExp});
  /* background-position: 50%; */
  background-size: cover;
`;

const Desc2 = styled.div`
  min-width: 118rem;
  width: 100%;
  height: 100%;
  padding-top: 43%;
  background-image: url(${DetailExp2});
  /* background-position: 50%; */
  background-size: cover;
`;

const Desc3 = styled.div`
  min-width: 118rem;
  width: 100%;
  height: 100%;
  padding-top: 96%;
  background-image: url(${DetailExp3});
  /* background-position: 50%; */
  background-size: cover;
`;
export default Detail;

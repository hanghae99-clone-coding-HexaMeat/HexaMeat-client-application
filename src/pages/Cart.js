import React from "react";
import styled from "styled-components";

import Copyright from "../components/Copyright";

import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configureStore";

const Cart = (props) => {
  return (
    <Grid margin="0 auto" width="127rem">
      <Grid margin="20rem 5rem 5rem 0" is_flex2>
        <Text size="3.2rem" text_align="center" bold="700">
          장바구니
        </Text>
      </Grid>

      <Grid flex>
        <Grid
          width="86rem"
          height="auto"
          min_height="20rem"
          bg="white"
          borderTop="0.1rem solid black"
        >
          <Grid
            width="100%"
            height="5.5rem"
            padding="2rem"
            borderBottom="0.1rem solid #e1dedf"
            flex
          >
            <Text margin="0 0 0 24.9rem" fontSize="1.3rem" lineHeight="5.5rem">
              상품정보
            </Text>
            <Text margin="0 0 0 30.1rem" fontSize="1.3rem" lineHeight="5.5rem">
              수량
            </Text>
            <Text margin="0 0 0 11.6rem" fontSize="1.3rem" lineHeight="5.5rem">
              가격
            </Text>
          </Grid>

          <Grid
            height="14.7rem"
            is_flex2
            padding="2rem 0"
            align_items
            borderBottom="0.1rem solid #e1dedf"
          >
            <Grid is_flex width="86rem">
              <Grid width="10rem" margin="1.9rem 0 0 2.4rem">
                <MainPic
                  src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-fresh-list.png?alt=media"
                  cursor="t"
                  size="100%"
                  _onClick={() => {
                    history.push("/");
                  }}
                />
              </Grid>

              <Grid margin="0 0 0 15rem" padding="1rem 0 0 0 ">
                <Text size="1.6rem" cursor="t">
                  초신선 돼지 삼겹살 구이용
                </Text>
                <Text color="#9B9B9B" cursor="t">
                  보통(16mm)
                </Text>
              </Grid>

              <Grid is_flex height="auto">
                <Grid width="10rem">
                  <Text color="#9b9b9b" size="1.4rem" margin="0 2rem 0 0">
                    600g 기준
                  </Text>
                </Grid>
                <Grid>
                  <Text size="1.6rem">???원 </Text>
                </Grid>
                <Grid>
                  <span
                    class="material-icons"
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    disabled_by_default
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          is_fle
          width="28.0rem"
          height="43.2rem"
          margin="0 0 0 3.9rem"
          padding="0 3rem 0 3rem"
          bg="#f8f8f8"
          borderTop="0.1rem solid black"
        >
          <Grid
            is_flex
            width="22rem"
            height="5.4rem"
            borderBottom="0.1rem solid #9b9b9b"
          >
            <Text color="black" size="1.5rem">
              총 상품 금액
            </Text>

            <Text>???원</Text>
          </Grid>

          <Grid width="22rem" height="2.33rem">
            <Text
              color="black"
              size="1.3rem"
              margin="7rem 0 0 0"
              bold2="700"
              text_align="right"
            >
              예상 결제 금액
            </Text>
          </Grid>

          <Grid width="22rem" height="2.33rem">
            <Text color="#d0021b" size="2.4rem" bold2="700" text_align="right">
              ???원
            </Text>
          </Grid>

          <Grid padding="3rem 0 0 0">
            <Button
              width="100%"
              height="5rem"
              bg="#d0021b"
              margin="1rem 0 2rem 0"
              cursor="t"
              border="none"
            >
              <Text size="1.6rem" color="white" bold2="700">
                전체상품 주문하기
              </Text>
            </Button>
            <Button
              width="100%"
              height="5rem"
              bg="#acacac"
              cursor="t"
              border="none"
              _onClick={() => {
                history.push("/");
              }}
            >
              <Text size="1.5rem" color="#fff" bold2="700">
                쇼핑계속하기
              </Text>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid margin="50rem 0 0 0">
        <Copyright />
      </Grid>
    </Grid>
  );
};

const MainPic = styled.div`
  width: 10.9rem;
  height: 10.9rem;
  position: absolute;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-position: left;
  background-size: cover;
  padding-top: 0rem;
  ${(props) => (props.radius ? `border-radius: 0.5rem;` : "")}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Cart;

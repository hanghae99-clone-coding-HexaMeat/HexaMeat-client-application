import React from "react";
import styled from "styled-components";

import BtnCard from "../shared/img/BtnCard.png";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import Post from "../components/Post";

const Shopping = (props) => {
  return (
    <div style={{ marginBottom: "6rem" }}>
      <Grid is_flex2 wrap="true" margin="1rem auto 0 auto">
        <ShopBtn cursor="t">돼지</ShopBtn>
        <ShopBtn cursor="t">소</ShopBtn>
        <ShopBtn cursor="t">닭</ShopBtn>
      </Grid>

      <Grid is_flex2 wrap="true" margin="3rem auto 0 auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
      <hr />
      <Grid>
        <Grid margin="3rem 12rem 3rem 12rem">
          <Text bold2="900" size="1.5rem" cursor>
            <span style={{ fontWeight: "400", margin: "0 2.5rem 0 0" }}>
              이용약관
            </span>
            개인정보처리방침
          </Text>
        </Grid>

        <Grid is_flex margin="3rem 12rem 3rem 12rem">
          <Grid is_float="left">
            <Text>
              (주)정육각 대표이사: 김재연 | 주소: 경기도 김포시 고촌읍
              아라육로57번길 126
            </Text>
            <Text>
              사업자등록번호: 224-87-00271 | 통신판매업신고번호:
              2021-경기김포-0668
            </Text>
            <Text>개인정보관리책임자: 박준태(privacy@yookgak.com)</Text>
          </Grid>
          <Grid is_float="right">
            <Text>고객센터</Text>
            <Text>1800-0658</Text>
            <span>평일: 08:30 - 17:30</span>
            <span>점심: 12:30 - 13:30</span>
            <span>(토, 일 및 공휴일 휴무)</span>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const ShopBtn = styled.button`
  width: 14.3rem;
  height: 5.6rem;
  line-height: 5.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  border-radius: 3%;
  background-color: #eee;
  margin: 1rem 0.5rem 5rem 0.5rem;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #212121;
    color: white;
    font-weight: 700;
  }
`;

export default Shopping;

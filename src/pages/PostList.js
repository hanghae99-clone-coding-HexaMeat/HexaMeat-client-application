import React from "react";
import styled from "styled-components";

import main1 from "../shared/img/main1.png";
import main2 from "../shared/img/main2.png";
import main3 from "../shared/img/main3.png";
import main4 from "../shared/img/main4.png";
import bottomLogo from "../shared/img/bottomimg.svg";

import Post from "../components/Post";
import { Grid, Text, Image } from "../elements";

const PostList = (props) => {
  return (
    <Grid margin="0 auto">
      <Grid>
        <Main1 />
      </Grid>
      <Grid is_flex padding="0 8rem 0 13rem">
        <Grid maxWidth="59rem" padding="5rem 0">
          <Main2 />
        </Grid>
        <Grid maxWidth="59rem" padding="2rem">
          <Main3 />
        </Grid>
      </Grid>
      <Grid margin="0 11rem" is_flex>
        <h5
          style={{
            fontSize: "3.2rem",
            fontWeight: "800",
            lineHeight: "3.2rem",
            margin: "0",
          }}
        >
          정육각 베스트 상품
        </h5>
      </Grid>
      <Grid is_flex2 wrap="true" margin="3rem auto 0 auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
      <Grid padding="3rem 14rem 15rem 12rem">
        <Main4 />
      </Grid>
      <hr />
      <Grid>
        <Grid margin="3rem 12rem 3rem 12rem" width="">
          <Text bold2="900" size="1.5rem" cursor>
            <span style={{ fontWeight: "400", margin: "0 2.5rem 0 0" }}>
              이용약관
            </span>
            개인정보처리방침
          </Text>
        </Grid>

        <Grid width="" is_flex margin="3rem 12rem 3rem 12rem">
          <Grid is_float="left">
            <Grid>
              <Main5 />
            </Grid>
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
          <Grid text_align="right" is_float="right" padding="0 2rem 0 0">
            <Text size="1.4rem" margin="-5rem 0 0 0">고객센터</Text>
            <Text size="2.4rem" bold2="900" margin="0">1800-0658</Text>
            <Text margin="0">평일: 08:30 - 17:30</Text>
            <Text margin="0">점심: 12:30 - 13:30</Text>
            <Text margin="0">(토, 일 및 공휴일 휴무)</Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

PostList.defaultProps = {};

const Main1 = styled.div`
  padding-top: 40%;
  background-image: url(${main1});
  background-position: 50%;
  background-size: cover;
`;
const Main2 = styled.div`
  padding-top: 30%;
  background-image: url(${main2});
  background-position: center;
  background-size: cover;
`;
const Main3 = styled.div`
  padding-top: 30%;
  background-image: url(${main3});
  background-position: center;
  background-size: cover;
`;
const Main4 = styled.div`
  padding-top: 18%;
  background-image: url(${main4});
  background-position: 40%;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Main5 = styled.div`
  /* padding-top: 18%; */
  background-image: url(${bottomLogo});
  background-position: 40%;
  background-size: cover;
  width: 8.2rem;
  aspect-ratio: auto 82 / 32;
  height: 3.2rem;
`;

export default PostList;

/*eslint-disable*/
import React from "react";
import styled from "styled-components";

import BtnCard from "../shared/img/BtnCard.png";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import Post from "../components/Post";

import banner_pork from "../shared/img/banner_pork.png";
import banner_beef from "../shared/img/banner_beef.png";
import banner_kfc from "../shared/img/banner_kfc.png";

const Shopping = (props) => {
  const [pork, setPork] = React.useState(true);
  const [beef, setBeef] = React.useState(false);
  const [kfc, setKfc] = React.useState(false);

  const changePork = () => {
    setPork(true); //값이 true, false가 되어 있어서 삼항연산자 사용 시 !사용 가능
    setBeef(false);
    setKfc(false);
  };
  const changeBeef = () => {
    setBeef(true);
    setPork(false);
    setKfc(false);
  };

  const changeKfc = () => {
    setKfc(true);
    setPork(false);
    setBeef(false);
  };

  return (
    <div style={{ marginBottom: "6rem" }}>
      <Grid margin="0 auto">
        {pork && !beef && !kfc ? (
          <Grid>
            <Banner style={{ backgroundImage: `url(${banner_pork})` }} />
          </Grid>
        ) : (
          ""
        )}
        {beef && !pork && !kfc ? (
          <Grid>
            <Banner style={{ backgroundImage: `url(${banner_beef})` }} />
          </Grid>
        ) : (
          ""
        )}
        {kfc && !beef && !pork ? (
          <Grid>
            <Banner style={{ backgroundImage: `url(${banner_kfc})` }} />
          </Grid>
        ) : (
          ""
        )}
      </Grid>

      <Grid is_flex2 wrap="true" margin="5rem auto 0 auto">
        <ShopBtn cursor="t" value="pork" onClick={changePork}>
          돼지
        </ShopBtn>

        <ShopBtn cursor="t" value="beef" onClick={changeBeef}>
          소
        </ShopBtn>
        <ShopBtn cursor="t" value="kfc" onClick={changeKfc}>
          닭
        </ShopBtn>
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

Shopping.defaultProps = {};

const Banner = styled.div`
  padding-top: 40%;
  background-position: 50%;
  background-size: cover;
`;

export default Shopping;

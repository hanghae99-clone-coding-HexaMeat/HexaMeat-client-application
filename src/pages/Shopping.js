/*eslint-disable*/
import React from "react";
import styled from "styled-components";

import { Grid, Image, Text, Button } from "../elements";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Post from "../components/Post";
import Copyright from "../components/Copyright";

import banner_pork from "../shared/img/banner_pork.png";
import banner_beef from "../shared/img/banner_beef.png";
import banner_kfc from "../shared/img/banner_kfc.png";
import BtnCard from "../shared/img/BtnCard.png";

const Shopping = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

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

  React.useEffect(() => {
    dispatch(postActions.getPostAX());
  }, []);
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

      <Grid is_flex2 wrap="true" margin="7.2rem auto 0 auto">
        <ShopBtn bg={pork? "#212121" : "#eee"} color={pork? "white" : "#212121"} cursor="t" value="pork" onClick={changePork}>
          돼지
        </ShopBtn>
        <ShopBtn bg={beef? "#212121" : "#eee"} color={beef? "white" : "#212121"} cursor="t" value="beef" onClick={changeBeef}>
          소
        </ShopBtn>
        <ShopBtn bg={kfc? "#212121" : "#eee"} color={kfc? "white" : "#212121"} cursor="t" value="kfc" onClick={changeKfc}>
          닭
        </ShopBtn>
      </Grid>

      <Grid is_flex2 wrap="true" margin="3rem auto 0 auto">
        {pork && !beef && !kfc
          ? post_list.map((p, idx) => {
              if (p.category === "돼지") {
                return <Post {...p} key={p.id} />;
              }
              return null;
            })
          : ""}
          {!pork && beef && !kfc
          ? post_list.map((p, idx) => {
              if (p.category === "소") {
                return <Post {...p} key={p.id} />;
              }
              return null;
            })
          : ""}
          {!pork && !beef && kfc
          ? post_list.map((p, idx) => {
              if (p.category === "닭") {
                return <Post {...p} key={p.id} />;
              }
              return null;
            })
          : ""}
      </Grid>
      <Copyright margin="15rem 0 0 0"/>
    </div>
  );
};

Shopping.defaultProps = {};

const ShopBtn = styled.button`
  width: 14.3rem;
  height: 5.6rem;
  line-height: 5.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  border-radius: 3%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  margin: 1rem 0.5rem 5rem 0.5rem;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #212121;
    color: white;
    font-weight: 700;
  }
`;

const Banner = styled.div`
  padding-top: 40%;
  background-position: 50%;
  background-size: cover;
`;

export default Shopping;

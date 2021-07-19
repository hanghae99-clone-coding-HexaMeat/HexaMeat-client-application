import React from "react";
import styled from "styled-components";

import main1 from "../shared/img/main1.png";
import main2 from "../shared/img/main2.png";
import main3 from "../shared/img/main3.png";
import main4 from "../shared/img/main4.png";
import bottomLogo from "../shared/img/bottomimg.svg";

import Post from "../components/Post";
import Copyright from "../components/Copyright";

import { Grid, Text, Image } from "../elements";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  
  React.useEffect(() => {
    dispatch(postActions.getPostAX());
  }, []);

  return (
    <Grid margin="0 auto">
      <Grid>
        <Main1
          onClick={() => {
            window.alert("죄송합니다. 준비중입니다!");
          }}
        />
      </Grid>
      <Grid is_flex padding="0 8rem 0 13rem">
        <Grid maxWidth="59rem" padding="5rem 0">
          <Main2 />
        </Grid>
        <Grid maxWidth="59rem" padding="2rem">
          <Main3
            onClick={() => {
              window.alert("죄송합니다. 준비중입니다!");
            }}
          />
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
        {post_list.map((p, idx) => {
          if (p.best) {
            return <Post {...p} key={p.id} />;
          }
          return null;
        })}
      </Grid>
      <Grid padding="3rem 14rem 15rem 12rem">
        <Main4 />
      </Grid>
      <Copyright />
    </Grid>
  );
};

PostList.defaultProps = {};

const Main1 = styled.div`
  padding-top: 40%;
  background-image: url(${main1});
  background-position: 50%;
  background-size: cover;
  cursor: pointer;
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
  cursor: pointer;
`;
const Main4 = styled.div`
  padding-top: 18%;
  background-image: url(${main4});
  background-position: 40%;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

export default PostList;

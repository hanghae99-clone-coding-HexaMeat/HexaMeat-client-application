import React from "react";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements";
import { priceCheck } from "../shared/pricecheck";

import DropDown from "../components/DropDown";
import Quantity from "../components/Quantity";
import Copyright from "../components/Copyright";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as cartActions } from "../redux/modules/cart";

const Detail = (props) => {

  const dispatch = useDispatch();

  const id = props?.match.params.id;
  const is_login = useSelector((state) => state.user.is_login);
  const post_list = useSelector((state) => state?.post.list);
  const post_idx = post_list?.findIndex((p) => p.id === id);
  const post = post_list[post_idx];

  const gram = post?.priceStandard
    .split(" ")[2]
    .split(")")[0]
    .split("(")[1]
    .split("g")[0];
  const pergram = (post?.price / gram) * 100;

  const [quantity, setQuantity] = React.useState(1);
  const getQuantity = (quantity) => {
    setQuantity(quantity);
  };

  const [option, setOption] = React.useState(post?.option[0]);
  const getOption = (option) => {
    setOption(option);
  };

  const addCart = () => {
    if(!is_login){
      window.alert("로그인이 필요한 서비스입니다.");
      return history.push("/login");
    }
    dispatch(cartActions.addCartAX(post?.productId, option, quantity));
    window.alert("장바구니에 추가되었습니다.");
  };
  
  const addCartTo = () => {
    if(!is_login){
      window.alert("로그인이 필요한 서비스입니다.");
      return history.push("/login");
    }
    dispatch(cartActions.addCartAX(post?.productId, option, quantity));
    window.alert("추가 완료! 장바구니로 이동합니다.");
    history.push("/cart");
  };

  React.useEffect(() => {
    window.scrollTo(0,0);
    if (post) {
      return;
    }
    dispatch(postActions.getPostAX());
  }, []);

  return (
    <Grid>
      <Grid bg="#1c1c1c" width="" height="">
        <Grid is_flex2 padding="8rem 14rem 0rem 9rem">
          <Grid
            width="60rem"
            height="60rem"
            margin="0 2.8rem 3rem 0"
            padding="1rem 1rem 0rem 1rem"
          >
            <MainPic src={post?.img[0]} margin="7rem 5rem 0 5rem" />
          </Grid>
          <Grid width="37.6rem">
            <Text color="white" size="3rem" bold2="900">
              {post?.title}
            </Text>
            <Text color="#9b9b9b" size="1.8rem" margin="0">
              100g당 {priceCheck(pergram)}원
            </Text>
            <Text color="white" size="2.4rem" margin="0.6rem 0 0 0" bold2="600">
              {post?.priceStandard}
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
              <DropDown getOption={getOption} {...post} options={option} />
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
              <Quantity getQuantity={getQuantity} quantity={quantity} />
            </Grid>
            <Grid is_flex2 margin="4rem 0 0 0">
              <Button
                width="18rem"
                height="6rem"
                bg="#888"
                margin="0 2rem 0 0"
                cursor="t"
                border="none"
                _onClick={addCartTo}
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
                _onClick={addCart}
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
      {post?.category === "소" ? (
        <Grid>
          <Desc4 src={post?.img[1]} />
          <Desc5 src={post?.img[2]} />
        </Grid>
      ) : (
        <Grid>
          <Desc1 bg={post?.img[1]} />
          <Desc2 src={post?.img[2]} />
          <Desc3 src={post?.img[3]} />
        </Grid>
      )}
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

const Desc1 = styled.div`
  min-width: 118rem;
  width: 100%;
  height: 100%;
  padding-top: 43%;
  background-image: url("${(props) => props.bg}");
  background-size: cover;
`;

const Desc2 = styled.img`
  min-width: 30rem;
  width: 100%;
  height: 230rem;
  background-size: cover;
  padding: 6%;
`;

const Desc3 = styled.img`
  min-width: 118rem;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const Desc4 = styled.img`
  min-width: 118rem;
  width: 100%;
  height: 75rem;
  background-size: cover;
  background-position: center;
`;

const Desc5 = styled.img`
  min-width: 30rem;
  width: 100%;
  min-height: 323rem;
  background-size: cover;
`;
// https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fdescriptions%2Fweb%2Fbeefsirloin-bonep2.png?alt=media
export default Detail;

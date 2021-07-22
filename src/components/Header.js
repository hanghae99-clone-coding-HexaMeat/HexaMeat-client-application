import React from "react";
import styled from "styled-components";

import { Grid, Button } from "../elements";

import hexameat from "../shared/img/hexameat.png";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const logout = () => {
    setShopping("");
    dispatch(userActions.logout());
  };

  const [shopping, setShopping] = React.useState("쇼핑하기");

  React.useEffect(() => {
    dispatch(userActions.isLogin());
  }, []);

  return (
    <Div>
      <Div2>
        <Grid is_flex width="118.4rem" margin="0 auto" padding="2rem 0 0 0">
          <Flex>
            <Logo
              onClick={() => {
                setShopping("");
                history.push("/");
              }}
            />
            <Button
              size="1.8rem"
              width="7.5rem"
              bold="700"
              bg="transparent"
              color="#fff"
              border="none"
              cursor="t"
              borderBottom={shopping ? "0.1rem solid white" : ""}
              _onClick={() => {
                setShopping("쇼핑하기");
                history.push("/posts");
              }}
            >
              쇼핑하기
            </Button>
            <Button
              size="1.8rem"
              width="8.8rem"
              bold="700"
              bg="transparent"
              color="#fff"
              border="none"
              padding="0 0.5rem 0 0.5rem"
              margin="0 1.4rem 0 2.8rem"
              cursor="t"
            >
              이용가이드
            </Button>
            <Button
              size="1.8rem"
              width="8.6rem"
              bold="700"
              bg="transparent"
              color="#fff"
              border="none"
              padding="0 0.5rem 0 0.5rem"
              margin="0 1.4rem 0 0"
              cursor="t"
            >
              이벤트
            </Button>
          </Flex>
          <Flex>
            <Button
              size="1.5rem"
              width="6.6rem"
              bold="700"
              bg="transparent"
              color="#fff"
              border="none"
              padding="0 0.5rem 0 0.5rem"
              margin="0"
              cursor="t"
            >
              공지사항
            </Button>
            <Button
              size="1.5rem"
              width="6.8rem"
              bold="700"
              bg="transparent"
              color="#fff"
              border="none"
              padding="0 0.5rem 0 0.5rem"
              margin="0 1.4rem 0 0"
              cursor="t"
            >
              고객센터
            </Button>
            <span
              style={{
                backgroundColor: "white",
                width: "0.1rem",
                height: "1.3rem",
              }}
            >
              |
            </span>
            {is_login ? (
              <Button
                size="1.5rem"
                width="8.8rem"
                bold="700"
                bg="transparent"
                color="#fff"
                border="none"
                padding="0 0.5rem 0 0.5rem"
                margin="0 1.5rem 0 1rem"
                cursor="t"
                _onClick={logout}
              >
                로그아웃
              </Button>
            ) : (
              <React.Fragment>
                <Button
                  size="1.5rem"
                  width="5.8rem"
                  bold="700"
                  bg="transparent"
                  color="#fff"
                  border="none"
                  padding="0 0.5rem 0 0.5rem"
                  margin="0 0 0 1rem"
                  cursor="t"
                  _onClick={() => {
                    setShopping("");
                    history.push("/login");
                  }}
                >
                  로그인
                </Button>
                <Button
                  size="1.5rem"
                  width="6.8rem"
                  bold="700"
                  bg="transparent"
                  color="#fff"
                  border="none"
                  padding="0 0.5rem 0 0.5rem"
                  margin="0 1.5rem 0 0"
                  cursor="t"
                  _onClick={() => {
                    setShopping("");
                    history.push("/signup");
                  }}
                >
                  회원가입
                </Button>
              </React.Fragment>
            )}
            <span
              className="material-icons-outlined"
              style={{
                color: "white",
                width: "3.5rem",
                height: "3.5rem",
                fontSize: "3.5rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setShopping("");
                if (is_login === true) {
                  return window.location.replace("/cart");
                }
                window.alert("로그인이 필요한 서비스입니다.");
                return history.push("/login");
              }}
            >
              shopping_cart
            </span>
          </Flex>
        </Grid>
      </Div2>
    </Div>
  );
};

const Div = styled.div`
  top: 0rem;
  position: fixed;
  width: 100%;
  min-width: 118.4rem;
  min-width: 37.6rem;
  height: 10rem;
  background-color: #000;
  z-index: 10;
  margin: 0 auto;
`;

const Div2 = styled.div`
  width: 118.4rem;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.div`
  width: 15.9rem;
  aspect-ratio: auto 129 / 48;
  height: 6.1rem;
  background-image: url(${hexameat});
  background-position: 40%;
  background-size: cover;
  cursor: pointer;
  margin: 0 2rem 0 0;
`;

export default Header;

import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";

import Copyright from "../components/Copyright";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
    const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id && pwd === "") {
      window.alert("비밀번호를 입력해주세요!");
      return;
    }
    if (pwd && id === "") {
      window.alert("아이디를 입력해주세요!");
      return;
    }
    if (id === "" && pwd === "") {
      window.alert("아이디와 비밀번호 모두 입력해주세요!");
      return;
    }
    dispatch(userActions.loginAX(id, pwd));
  };
  console.log(id);
  console.log(pwd);

  return (
    <React.Fragment>
      <Grid>
        <Text
          size="2.4rem"
          bold2="900"
          color="#212121"
          text_align="center"
          margin="6rem 0 0 0"
        >
          로그인
        </Text>
        <Text
          margin="6rem auto 0 auto"
          size="1.8rem"
          bold2="800"
          width="30.8rem"
        >
          아이디 로그인
        </Text>
        <Grid width="30.8rem" margin="0 auto">
          <InputId
            placeholder="아이디를 입력해주세요."
            value={id}
            border="0.1rem solid #e1dedf"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <InputPwd
            placeholder="패스워드 입력해주세요."
            type="password"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            is_submit
            onSubmit={login}
          />
          <Button
            width="31.2rem"
            height="4.8rem"
            bg="#000"
            color="#fff"
            size="1.6rem"
            radius="0.4rem"
            bold="700"
            margin="0.8rem auto 0 auto"
            _onClick={login}
          >
            로그인
          </Button>
        </Grid>
      </Grid>
      <Copyright margin="15rem 0 0 0"/>
    </React.Fragment>
  );
};

Login.defaultProps = {
  
};

const InputId = styled.input`
  width: 31.2rem;
  height: 4.6rem;
  border: 0.1rem solid #e1dedf;
  padding: 0 0 0 1.4rem;
  font-size: 1.4rem;
  margin: 0.8rem 0 0 0;
`;

const InputPwd = styled.input`
  width: 31.2rem;
  height: 4.6rem;
  border: 0.1rem solid #e1dedf;
  padding: 0 0 0 1.4rem;
  font-size: 1.4rem;
  margin: 0.8rem 0 0 0;
`;
export default Login;

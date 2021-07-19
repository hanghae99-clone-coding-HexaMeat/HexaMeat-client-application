import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";

import Copyright from "../components/Copyright";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
    const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [nick, setNick] = React.useState("");

  const signup = () => {
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
    if (pwd !== pwdCheck) {
      window.alert("패스워드가 일치하지 않습니다!");
      return;
    }
    if (id === "" || pwd === "" || pwdCheck === "" || nick === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    if (nick === "") {
      window.alert("닉네임을 입력해주세요!");
    }
    // window.alert("환영합니다! 회원가입이 완료되었습니다!");
    dispatch(userActions.signupAX(id, pwd, pwdCheck, nick));
  };

  return (
    <React.Fragment>
      <Grid>
        <Text
          size="3.2rem"
          bold2="600"
          color="#212121"
          text_align="center"
          margin="10rem 0 0 0"
        >
          회원가입
        </Text>
        <Grid
          maxWidth="118rem"
          height="9.4rem"
          bg="#f7f7f7"
          margin="3.3rem auto 0 auto"
          is_flex2
        >
          <span
            className="material-icons"
            style={{
              width: "5.1rem",
              height: "4.56rem",
              margin: "0 0 2.56rem 3.5rem",
              fontSize: "6.5rem",
            }}
          >
            drive_file_rename_outline
          </span>
          <Text
            size="2rem"
            margin="0.5rem 0 0 1.65rem"
            bold2="800"
            text_align="center"
          >
            01. 정보입력
          </Text>
        </Grid>

        <Grid maxWidth="78rem" margin="1.6rem auto 3.4rem auto">
          <Text margin="6rem 0 auto" size="1.7rem" bold2="600" width="30.8rem">
            가입정보 입력
          </Text>
          <Grid
            maxWidth="77.8rem"
            height="100%"
            margin="1.6rem 0 3.4rem 0"
            border="0.1rem solid #e1dedf"
          >
            <div
              style={{
                overflow: "hidden",
                borderBottom: "0.1rem solid #e1dedf",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Div>
                <Text bold2="600" text_align="center" margin="0">
                  아이디
                </Text>
              </Div>
              <div>
                <InputObj
                  placeholder="아이디를 입력하세요."
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
              </div>
            </div>
            <div
              style={{
                overflow: "hidden",
                borderBottom: "0.1rem solid #e1dedf",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Div>
                <Text bold2="600" text_align="center" margin="0">
                  비밀번호
                </Text>
              </Div>
              <div>
                <InputObj
                  placeholder="비밀번호를 입력하세요."
                  type="password"
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
              </div>
            </div>
            <div
              style={{
                overflow: "hidden",
                borderBottom: "0.1rem solid #e1dedf",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Div>
                <Text bold2="600" text_align="center" margin="0">
                  비밀번호 확인
                </Text>
              </Div>
              <div>
                <InputObj
                  placeholder="비밀번호를 재입력하세요."
                  type="password"
                  onChange={(e) => {
                    setPwdCheck(e.target.value);
                  }}
                />
              </div>
            </div>
            <div
              style={{
                overflow: "hidden",
                borderBottom: "0.1rem solid #e1dedf",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Div>
                <Text bold2="600" text_align="center" margin="0">
                  닉네임
                </Text>
              </Div>
              <div>
                <InputObj
                  placeholder="닉네임을 입력하세요."
                  onChange={(e) => {
                    setNick(e.target.value);
                  }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid is_flex2 maxWidth="77.8rem" margin="0 auto">
        <Button
          bg="#888"
          width="50%"
          height="6rem"
          border="none"
          size="1.6rem"
          bold="900"
          color="#fff"
          cursor="t"
          _onClick={() => {
            history.push("/");
          }}
        >
          홈으로
        </Button>
        <Button
          bg="#000"
          width="50%"
          height="6rem"
          border="none"
          size="1.6rem"
          bold="900"
          color="#fff"
          _onClick={signup}
          cursor="t"
        >
          가입하기
        </Button>
      </Grid>
      <Copyright margin="15rem 0 0 0" />
    </React.Fragment>
  );
};

Signup.defaultProps = {};

const Div = styled.div`
  width: 17.9rem;
  background-color: #f7f7f7;
  border-right: 0.1rem solid #e1dedf;
  font-size: 1.3rem;
  line-height: 6.8rem;
`;

const InputObj = styled.input`
  width: 49.9rem;
  height: 3.8rem;
  border: 0.1rem solid #e1dedf;
  font-size: 1.3rem;
  margin: 1.5rem 2rem;
  padding: 0 0 0 2.2rem;
`;

export default Signup;

import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";
import bottomLogo from "../shared/img/bottomimg.svg";

const Copyright = (props) => {
  return (
    <React.Fragment>
      <Hr margin={props.margin} />
      <Grid>
        <Grid margin="2rem 12rem" width="">
          <Text bold2="900" size="1.5rem" cursor="t">
            <span style={{ fontWeight: "400", margin: "0 2.5rem 0 0" }}>
              이용약관
            </span>
            개인정보처리방침
          </Text>
        </Grid>
        <Hr color="#eee" />

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
            <Text size="1.2rem" margin="2.9rem 0">
              © 2021 Jeongyookgak Inc. All rights reserved.
            </Text>
          </Grid>
          <Grid text_align="right" is_float="right" padding="0 2rem 0 0">
            <Text size="1.4rem" margin="-5rem 0 0 0">
              고객센터
            </Text>
            <Text size="2.4rem" bold2="900" margin="0">
              1800-0658
            </Text>
            <Text margin="0">평일: 08:30 - 17:30</Text>
            <Text margin="0">점심: 12:30 - 13:30</Text>
            <Text margin="0">(토, 일 및 공휴일 휴무)</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Main5 = styled.div`
  /* padding-top: 18%; */
  background-image: url(${bottomLogo});
  background-position: 40%;
  background-size: cover;
  width: 8.2rem;
  aspect-ratio: auto 82 / 32;
  height: 3.2rem;
`;

const Hr = styled.hr`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;
export default Copyright;

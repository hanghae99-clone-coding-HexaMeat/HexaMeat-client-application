import React from "react";
import Copyright from "../components/Copyright";

import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configureStore";

const EmptyCart = (props) => {
  return (
    <Grid margin="0 auto" width="127rem">
      <Grid margin="20rem 5rem 5rem 0" is_flex2>
        <Text size="3.2rem" text_align="center" bold="700">
          장바구니
        </Text>
      </Grid>
      <Grid margin="5.2rem 0 0 0" borderTop="0.1rem solid #000">
        <Text size="3.8rem" text_align="center" color="#e1dedf" bold2="400">
          장바구니에 담은 상품이 없습니다.
        </Text>
      </Grid>

      <Grid is_flex height="7rem">
        <Button
          width="25rem"
          bg="black"
          border="none"
          size="1.6rem"
          bold2="700"
          margin="6.3rem auto 0 auto"
          padding="0 3rem"
          cursor="t"
          _onClick={() => {
            history.push("/posts");
          }}
        >
          <Grid is_flex>
            <Text bold2="700" color="white" size="2rem" text_align="center">
              쇼핑 계속하기
            </Text>
            <span className="material-icons" style={{ color: "white" }}>
              east
            </span>
          </Grid>
        </Button>
      </Grid>
      <Grid height="10rem" borderBottom="0.1rem solid #e1dedf"></Grid>
      <Grid margin="50rem 0 0 0">
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default EmptyCart;

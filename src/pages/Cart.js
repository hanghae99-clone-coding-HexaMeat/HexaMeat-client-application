import React from "react";

import Copyright from "../components/Copyright";
import CartList from "../components/CartList";
import EmptyCart from "../components/EmptyCart";

import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { priceCheck } from "../shared/pricecheck";
import { actionCreators as cartActions } from "../redux/modules/cart";

const Cart = (props) => {
  const dispatch = useDispatch();

  const product_list = useSelector((state) => state?.cart.list);
  const totalPrice = useSelector((state) => state?.cart.totalPrice);

  const [tot, setTot] = React.useState(totalPrice);
  const getTotal = (total) => {
    setTot(total);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(cartActions.getCartAX());
  }, []);

  return (
    <React.Fragment>
      {product_list.length > 0 ? (
        <Grid margin="0 auto" width="127rem">
          <Grid margin="20rem 5rem 5rem 0" is_flex2>
            <Text size="3.2rem" text_align="center" bold2="700">
              장바구니
            </Text>
          </Grid>

          <Grid is_flex3>
            <Grid
              width="86rem"
              height="auto"
              min_height="20rem"
              borderTop="0.1rem solid black"
              margin="0"
            >
              <Grid
                height="5.5rem"
                padding="2rem"
                borderBottom="0.1rem solid #e1dedf"
                flex
              >
                <Text
                  margin="0 3rem 0 22.9rem"
                  fontSize="1.3rem"
                  lineHeight="5.5rem"
                >
                  상품정보
                </Text>
                <Text
                  margin="0 3.5rem 0 27.8rem"
                  fontSize="1.3rem"
                  lineHeight="5.5rem"
                >
                  수량
                </Text>
                <Text
                  margin="0 7rem 0 8.6rem"
                  fontSize="1.3rem"
                  lineHeight="5.5rem"
                >
                  가격
                </Text>
              </Grid>

              {product_list.map((p, idx) => {
                return (
                  <CartList
                    {...p}
                    key={p.cartId}
                    getTotal={getTotal}
                    tot={totalPrice ? tot : ""}
                  />
                );
              })}
            </Grid>

            <Grid
              width="28.0rem"
              height="43.2rem"
              margin="0 0 0 3.9rem"
              padding="0 3rem 0 3rem"
              bg="#f8f8f8"
              borderTop="0.1rem solid black"
            >
              <Grid
                is_flex
                width="22rem"
                height="5.4rem"
                borderBottom="0.1rem solid #9b9b9b"
              >
                <Text color="black" size="1.5rem">
                  총 상품 금액
                </Text>
                <Text>{priceCheck(tot)}원</Text>
              </Grid>

              <Grid width="22rem" height="2.33rem">
                <Text
                  color="black"
                  size="1.3rem"
                  margin="7rem 0 0 0"
                  bold2="700"
                  text_align="right"
                >
                  예상 결제 금액
                </Text>
              </Grid>

              <Grid width="22rem" height="2.33rem">
                <Text
                  color="#d0021b"
                  size="2.4rem"
                  bold2="700"
                  text_align="right"
                >
                  {priceCheck(tot)}원
                </Text>
              </Grid>

              <Grid padding="3rem 0 0 0">
                <Button
                  width="100%"
                  height="5rem"
                  bg="#d0021b"
                  margin="1rem 0 2rem 0"
                  cursor="t"
                  border="none"
                >
                  <Text
                    size="1.6rem"
                    color="white"
                    bold2="700"
                    _onClick={() => {
                      const really = window.confirm("주문하시겠습니까?");
                      if (really) {
                        dispatch(cartActions.deleteAllAX());ㅇ
                      }
                      window.alert(`구매 완료되었습니다! 감사합니다!\n`);
                    }}
                  >
                    전체상품 주문하기
                  </Text>
                </Button>
                <Button
                  width="100%"
                  height="5rem"
                  bg="#acacac"
                  cursor="t"
                  border="none"
                  _onClick={() => {
                    history.push("/");
                  }}
                >
                  <Text size="1.5rem" color="#fff" bold2="700">
                    쇼핑계속하기
                  </Text>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid margin="15rem 0 0 0">
            <Copyright />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </React.Fragment>
  );
};

export default Cart;

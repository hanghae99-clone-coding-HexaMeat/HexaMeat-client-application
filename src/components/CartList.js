import React from "react";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { priceCheck } from "../shared/pricecheck";
import { actionCreators as cartActions } from "../redux/modules/cart";

const CartList = (props) => {
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state?.cart.totalPrice);

  const [qty, setQty] = React.useState(props?.quantity);

  const oneTotal = qty * props?.price;

  const addQ = () => {
    setQty(qty + 1);
    if (qty === 100) {
      setQty(100);
      window.alert("수량은 100까지만 설정 가능합니다.");
      return;
    }
    props?.getTotal(props?.tot + props?.price);
  };

  const minusQ = () => {
    setQty(qty - 1);
    if (qty === 1) {
      setQty(1);
      window.alert("최소 수량은 1개입니다.");
      return;
    }
    props?.getTotal(props?.tot - props?.price);
  };

  const deleteCart = () => {
    const really = window.confirm(
      `정말로 삭제하시겠습니까?\n다시 되돌릴 수 없습니다.`
    );
    if (really) {
      props?.getTotal(props?.tot - props?.total);
      dispatch(cartActions.deleteCartAX(props?.cartId));
    }
  };

  React.useEffect(() => {
    props?.getTotal(totalPrice);
    setQty(props?.quantity);
  }, []);

  return (
    <>
      <Grid
        height="14.7rem"
        is_flex
        padding="2rem 0"
        borderBottom="0.1rem solid #e1dedf"
      >
        <Grid>
          <MainPic
            src={props?.img}
            cursor="t"
            _onClick={() => {
              history.push("/");
            }}
          />
        </Grid>
        <Grid padding="4rem 2.5rem 2.5rem 15rem">
          <Text width="22rem" size="1.6rem" margin="0">
            {props?.title}
          </Text>
          <Text color="#9B9B9B" margin="0">
            {props?.option}
          </Text>
        </Grid>
        <Grid is_flex2 width="46%" height="2rem" margin="auto 0">
          <Text width="7rem" color="#9b9b9b" size="1.4rem">
            {props?.weight}
          </Text>
        </Grid>
        <div
          className="container"
          style={{ padding: "4rem 0 4rem 3rem", height: "11rem" }}
        >
          <div className="menu-container">
            <Grid>
              <Grid
                width="13rem"
                height="3rem"
                border="0.1rem solid #e1dedf"
                bg="white"
                cursor="t"
                is_flex
              >
                <Button
                  width="3rem"
                  height="3rem"
                  border="0.1rem solid #e1dedf"
                  padding="0.3rem 0 0 0"
                  cursor="t"
                  bg="white"
                  _onClick={() => {
                    minusQ();
                    dispatch(cartActions.minusQtyAX(props?.cartId));
                  }}
                >
                  <span
                    className="material-icons"
                    style={{
                      color: "gray",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    remove
                  </span>
                </Button>
                <Text
                  size="1.5rem"
                  bold2="400"
                  color="#212121"
                  text_align="center"
                >
                  {qty}
                </Text>
                <Button
                  width="3rem"
                  height="3rem"
                  border="0.1rem solid #e1dedf"
                  padding="0.3rem 0 0 0"
                  cursor="pointer"
                  bg="white"
                  _onClick={() => {
                    addQ();
                    dispatch(cartActions.addQtyAX(props?.cartId));
                  }}
                >
                  <span
                    className="material-icons"
                    style={{
                      color: "gray",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    add
                  </span>
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <Grid is_flex2 margin="0 0 0 5rem">
          <Text size="1.6rem">{priceCheck(oneTotal)}원</Text>
        </Grid>
        <Grid text_align="right" padding="3.5rem 0 0 0">
          <span
            className="material-icons"
            style={{
              backgroundColor: "#e1dedf",
              color: "white",
              cursor: "pointer",
              border: "none",
              fontSize: "3.5rem",
            }}
            onClick={deleteCart}
          >
            disabled_by_default
          </span>
        </Grid>
      </Grid>
    </>
  );
};

const MainPic = styled.div`
  width: 10.9rem;
  height: 10.9rem;
  position: absolute;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-position: left;
  background-size: cover;
  margin: 0 3rem;
  ${(props) => (props.radius ? `border-radius: 0.5rem;` : "")}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;
export default CartList;

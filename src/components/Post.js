import React from "react";
import styled from "styled-components";

import Modal from "./Modal";
import ModalPage from "./ModalPage";

import BtnCard from "../shared/img/BtnCard.png";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {
  const [isHover, setIsHover] = React.useState(false);
  const chgBtnColor = () => {
    setIsHover(true);
  };
  const chgBtnColor2 = () => {
    setIsHover(false);
  };
  console.log(props);
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div style={{ marginBottom: "6rem" }}>
      <Grid
        width="37.6rem"
        height="42rem" // 임시
        margin="0 2.8rem 3rem 0"
        bg="#f9f7f8"
        padding="1rem 1rem 0rem 1rem"
        shadow
      >
        <Image
          shape="rectangle"
          // src={props?.img[0]}
          cursor="t"
          margin="7rem 5rem 0 5rem"
          _onClick={() => {
            history.push(`/posts/${props.id}`);
          }}
        />

        {isHover ? (
          <>
            <CartBtn
              style={{ backgroundColor: "black" }}
              onClick={openModal}
              onMouseEnter={chgBtnColor}
              onMouseLeave={chgBtnColor2}
            >
              <span
                className="material-icons-outlined"
                style={{
                  color: "white",
                  width: "3.5rem",
                  height: "3.5rem",
                  fontSize: "3.5rem",
                }}
              >
                shopping_cart
              </span>
            </CartBtn>
            {modalVisible && (
              <Modal
                visible={modalVisible}
                closable={true}
                maskClosable={true}
                onClose={closeModal}
              >
                <ModalPage {...props} />
              </Modal>
            )}
          </>
        ) : (
          <>
            <CartBtn
              onClick={openModal}
              onMouseEnter={chgBtnColor}
              onMouseLeave={chgBtnColor2}
            >
              <span
                className="material-icons-outlined"
                style={{
                  color: "black",
                  width: "3.5rem",
                  height: "3.5rem",
                  fontSize: "3.5rem",
                }}
              >
                shopping_cart
              </span>
            </CartBtn>
            {modalVisible && (
              <Modal
                visible={modalVisible}
                closable={true}
                maskClosable={true}
                onClose={closeModal}
              >
                <ModalPage {...props} />
              </Modal>
            )}
          </>
        )}
      </Grid>

      <Grid maxWidth="37.6rem">
        <Text bold2="900" size="1.8rem" margin="1.6rem 0 0 0" cursor="t">
          {props.title}
        </Text>
      </Grid>
      <Grid maxWidth="37.6rem">
        <Text color="#9b9b9b" bold2="600" size="1.65rem" margin="0" cursor="t">
          {props.priceStandard}
        </Text>
      </Grid>
    </div>
  );
};

const CartBtn = styled.button`
  /* position: relative; */
  width: 7.2rem;
  height: 7.2rem;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  border: 0.2rem solid #eee;
  border-radius: 50%;
  background-color: white;
  margin: -1.8rem 2rem 0 28.8rem;
  display: block;
  cursor: pointer;
  float: right;
`;

export default Post;

import React from "react";
import styled from "styled-components";
import { Button, Image } from "../elements";

const CloseButton = (props) => {
  const { _onClick } = props;

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>
        <span className="material-icons-outlined" style={{ fontSize: "3.5rem" }}>
          close
        </span>
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  _onClick: () => {},
};

const ElButton = styled.button`
  width: 100%;
  height: 13%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  text-align: right;
  background-image: url("");
  cursor: pointer;
  float: right;
`;

export default CloseButton;

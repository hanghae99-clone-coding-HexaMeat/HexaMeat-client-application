import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    margin,
    width,
    padding,
    _onClick,
    cursor,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin,
    width,
    padding: padding,
    _onClick: _onClick,
    cursor,
  };

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "1.4rem",
  margin: false,
  width: "",
  padding: false,
  _onClick: () => {},
  cursor: "",
};

const P = styled.p`
  word-break: keep-all;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
`;

export default Text;

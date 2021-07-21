import React from "react";
import "./modalstyle.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Button, Text, Grid } from "../elements";

const ModalDropDown = (props) => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const option = props?.option[0];

  const chooseOption = (event) => {
    props.getOption(event.target.innerText);
    setIsActive(null);
  };

  return (
    <div className="container">
      <div className="menu-container">
        <Grid is_flex2>
          <Button
            width="36.9rem"
            height="5rem"
            border="0.1rem solid gray"
            bg="white"
            _onClick={onClick}
            className="menu-trigger"
            cursor="t"
          >
            <Grid is_flex2>
              <Text
                size="1.6rem"
                color="#212121"
                text_align="center"
                margin="1rem 0 1rem 8rem"
                bold2="600"
              >
                {props?.options}
              </Text>
              <div
                style={{
                  position: "relative",
                  float: "right",
                  width: "1rem",
                  padding: "0 0 0 7rem",
                }}
              >
                <span
                  className="material-icons"
                  style={{
                    fontSize: "3rem",
                    color: "gray",
                    margin: "0.2rem 0 0 2.5rem",
                  }}
                >
                  expand_more
                </span>
              </div>
            </Grid>
          </Button>
        </Grid>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
          style={{
            width: "36.9rem",
            backgroundColor: "white",
            cursor: "pointer",
            zIndex: "1",
            borderRadius: "none",
            top: "4.9rem",
          }}
        >
          {props?.option && props?.option.length > 0
            ? props?.option.map((option, idx) => {
                return (
                  <Text
                    size="1.6rem"
                    color="#212121"
                    bold2="600"
                    text_align="center"
                    margin="1.6rem 0 1.6rem 0.9rem"
                    cursor="t"
                    _onClick={chooseOption}
                    key={idx}
                  >
                    {option}
                  </Text>
                );
              })
            : ""}
        </nav>
      </div>
    </div>
  );
};

export default ModalDropDown;

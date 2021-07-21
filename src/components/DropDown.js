import React from "react";
import "./style.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Button, Text, Grid } from "../elements";

const DropDown = (props) => {
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
            width="31.7rem"
            height="5rem"
            border="0.1rem solid gray"
            bg="#1c1c1c"
            _onClick={onClick}
            className="menu-trigger"
            cursor="t"
          >
            <Grid is_flex2>
              <Text
                size="1.6rem"
                color="white"
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
                <span className="material-icons" style={{ color: "gray" }}>
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
            width: "100%",
            backgroundColor: "#1c1c1c",
            cursor: "pointer",
            zIndex: "1",
          }}
        >
          {props?.option.map((option, idx) => {
            return (
              <Text
                size="1.6rem"
                color="white"
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
          })}
        </nav>
      </div>
    </div>
  );
};

DropDown.defaultProps = {
  option: ["1", "2", "3"], // 선택할 수 없음
};
export default DropDown;

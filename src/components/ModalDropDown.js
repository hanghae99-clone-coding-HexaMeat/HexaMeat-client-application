import React from "react";
import "./style2.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Button, Text, Grid } from "../elements";

const ModalDropDown = (props) => {
  React.useEffect(() => {
    sendOption(btnname);
  })
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const firstdiv = "보통(16mm)";
  const [btnname, setBtnName] = React.useState(firstdiv);

  const chooseOption = (event) => {
    setBtnName(event.target.innerText);
    setIsActive(null);
  };

  const sendOption = (option) => {
    props.getOption(option);
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
                {btnname}
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
            width: "37rem",
            backgroundColor: "white",
            cursor: "pointer",
            zIndex: "1",
            margin: "0 0.1rem 0 0",
            borderRadius: "none",
          }}
        >
          <Grid bg="white" minHeight="10rem" margin="2rem 0 1rem 0">
            <Grid height="3rem">
              <Text
                size="1.6rem"
                color="#212121"
                bold2="600"
                text_align="center"
                cursor="t"
                _onClick={chooseOption}
              >
                보통(16mm)
              </Text>
            </Grid>
            <Grid height="3rem">
              <Text
                size="1.6rem"
                color="#212121"
                bold2="600"
                text_align="center"
                cursor="t"
                _onClick={chooseOption}
              >
                얇게(11mm)
              </Text>
            </Grid>
            <Grid height="3rem">
              <Text
                size="1.6rem"
                color="#212121"
                bold2="600"
                text_align="center"
                cursor="t"
                _onClick={chooseOption}
              >
                두껍(24mm)
              </Text>
            </Grid>
          </Grid>
        </nav>
      </div>
    </div>
  );
};

export default ModalDropDown;

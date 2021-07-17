import React from "react";
import "./style.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Button, Text, Grid } from "../elements";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const DropDown = (props) => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const firstdiv = "보통(16mm)";
  const [btnname, setBtnName] = React.useState(firstdiv);

  const chooseOption = (event) => {
    setBtnName(event.target.innerText);
    setIsActive(null);
  };
  console.log(btnname);
  // DB목록에서 옵션 대신 btnname

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
            cursor
          >
            <Grid is_flex2>
              <Text
                size="1.6rem"
                color="white"
                text_align="center"
                margin="1rem 0 1rem 8rem"
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
                <span class="material-icons" style={{color: "gray"}}>expand_more</span>
              </div>
            </Grid>
          </Button>
        </Grid>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
          style={{ width: "100%", backgroundColor: "#1c1c1c", cursor: "pointer"}}
        >
          <Grid bg="#1c1c1c" minHeight="10rem" margin="2rem 0">
            <Grid height="3rem">
              <Text
                size="1.6rem"
                color="white"
                bold2="900"
                text_align="center"
                cursor
                _onClick={chooseOption}
              >
                {props.name}
              </Text>
            </Grid>
            <Grid height="3rem">
              <Text
                size="1.6rem"
                color="white"
                bold2="900"
                text_align="center"
                cursor
                _onClick={chooseOption}
              >
                얇게(11mm)
              </Text>
            </Grid>
            <Grid height="3rem">
              <Text
                size="1.6rem"
                color="white"
                bold2="900"
                text_align="center"
                cursor
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
DropDown.defaultProps = {
  name: "보통(16mm)",
};
export default DropDown;

import React from "react";
import backgroundImage from "../../assests/images/background.png";
import { useNavigate } from "react-router-dom";
import CommonSections from "./CommonSections";

function Section1() {
  const navigate = useNavigate();
  return (
    <CommonSections
      backgroundImage={backgroundImage}
      heading={"Tawjeeh"}
      h4color="#e16327"
      bgColour="#e16327"
      btnborder="1px solid #e16327"
    />
  );
}

export default Section1;

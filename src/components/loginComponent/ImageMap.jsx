import React, { useState } from "react";
import loginimage from "../../assests/images/infographic_1130 2.png";
import "../../pages/Auth/login/loginStyles.css"

function ImageMap({ onRegionClick }) {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const handleRegionClick = (region) => {
    onRegionClick(region);
    if (region === 1) {
      setBackgroundColor("rgba(222, 97, 15, 0.1)");
    } else if (region === 2) {
      setBackgroundColor("rgba(100, 0, 53, 0.15)");
    } else if (region === 3) {
      setBackgroundColor("rgba(43, 153, 0, 0.1)");
    } else if (region === 4) {
      setBackgroundColor("rgba(182, 245, 242, 0.2)");
    } else if (region === 5) {
      setBackgroundColor("rgba(94, 131, 129, 0.2)");
    } else {
      setBackgroundColor("transparent");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: backgroundColor,
        flexDirection: "column",
      }}
    >
      <h3 className="imgtitle" style={{fontWeight:"600"}}>Awal Plastics</h3>
      <img src={loginimage} className="loginimage" useMap="#image-map" />
      <map name="image-map">
        <area
          alt="Section 1"
          coords="74,137,207,270"
          shape="rect"
          onClick={() => handleRegionClick(1)}
          style={{ cursor: "pointer", backgroundColor: "red" }}
        />
        <area
          alt="Section 2"
          coords="215,56,348,189"
          shape="rect"
          onClick={() => handleRegionClick(2)}
          style={{ cursor: "pointer", backgroundColor: "green" }}
        />
        <area
          alt="Section 3"
          coords="357,139,490,272"
          shape="rect"
          onClick={() => handleRegionClick(3)}
          style={{ cursor: "pointer", backgroundColor: "green" }}
        />
        <area
          alt="Section 4"
          coords="358,299,491,432"
          shape="rect"
          onClick={() => handleRegionClick(4)}
          style={{ cursor: "pointer", backgroundColor: "green" }}
        />
        <area
          alt="Section 5"
          coords="217,385,350,518"
          shape="rect"
          onClick={() => handleRegionClick(5)}
          style={{ cursor: "pointer", backgroundColor: "green" }}
        />
      </map>
    </div>
  );
}

export default ImageMap;

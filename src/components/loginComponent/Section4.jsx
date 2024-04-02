import React from "react";
import CommonSections from "./CommonSections";
import backgroundImage from "../../assests/images/background.png";

function Section4() {
  return (
    <div>
      <CommonSections
        backgroundImage={backgroundImage}
        heading={"Accomodations Login"}
        h4color="skyblue"
        bgColour="skyblue"
        btnborder="1px solid skyblue"
      />
    </div>
  );
}

export default Section4;

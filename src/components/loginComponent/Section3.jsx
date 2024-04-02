import React from "react";
import CommonSections from "./CommonSections";
import backgroundImage from "../../assests/images/background.png";

function Section3() {
  return (
    <div>
      <CommonSections
        backgroundImage={backgroundImage}
        heading={"Umrah"}
        h4color="green"
        bgColour="green"
        btnborder="1px solid green"
      />
    </div>
  );
}

export default Section3;

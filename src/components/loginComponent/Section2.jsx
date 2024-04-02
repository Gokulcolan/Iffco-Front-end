import React from "react";
import CommonSections from "./CommonSections";
import backgroundImage from "../../assests/images/background.png";

function Section2() {
  return (
    <div>
      <CommonSections
        backgroundImage={backgroundImage}
        heading={"GatePass"}
        h4color="brown"
        bgColour="brown"
        btnborder="1px solid brown"
      />
    </div>
  );
}

export default Section2;

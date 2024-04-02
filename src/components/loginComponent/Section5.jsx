import React from "react";
import CommonSections from "./CommonSections";
import backgroundImage from "../../assests/images/background.png";

function Section5() {
  return (
    <div>
      <CommonSections
        backgroundImage={backgroundImage}
        heading={"Trade License"}
        h4color="darkblue"
        bgColour="darkblue"
        btnborder="1px solid darkblue"
      />
    </div>
  );
}

export default Section5;

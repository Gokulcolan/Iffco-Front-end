import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./compareProperty.scss";
import selectimg from "../../../../assests/images/select-property.png";

export default function CompareProperty() {
  let compareArray = Array.from("foo");
  return (
    <div className="comparecardcontainer">
      {compareArray.map((val,i) => {
        return (
          <>
          <Card className="comparecard">
            <CardMedia
              className="comparecardimg"
              component="img"
              alt="green iguana"
              // height="140"
              image={selectimg}
            />
          </Card>

          {i !== compareArray.length-1 && <h3>vs</h3>}
          </>
        );
      })}
      
    </div>
  );
}

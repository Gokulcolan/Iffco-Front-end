import React, { useState } from "react";
import LogoutComponent from "../../common/LogoutComponent";
import { Button, Card, Typography } from "@mui/material";
import cottage from "../../../assests/images/select-property.png";
import AccomCompareCard, { AccomVsCard } from "./AccomCompareCard";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccomCompareTable from "./AccomCompareTable";

function AccomCompare() {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleAccordionDisplay = (value) => {
    setShowAccordion(value);
  };
  
  return (
    <div>
      {" "}
      <div style={{ display: "flex", placeContent: "end" }}>
        <Button
          className="refresh-btn"
          style={{
            color: "#E22D2C",
            borderColor: "#E22D2C",
            height: "4vh",
            textTransform: "none",
            backgroundColor: "white",
            marginTop: "10px",
            borderRadius: "10px",
          }}
          variant="outlined"
          endIcon={<AutorenewIcon sx={{ color: "#E22D2C" }} />}
        >
          Refresh
        </Button>

        <LogoutComponent mainheading={""} />
      </div>
      <Card sx={{ borderRadius: "20px" }}>
        <div style={{ padding: "40px" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", fontSize: "29px" }}
            component="div"
          >
            {" "}
            Compare Property
          </Typography>
          <div style={{ display: "flex" }}>
            {" "}
            <AccomCompareCard
              homeimage={cottage}
              setAccordionDisplay={handleAccordionDisplay}
            />
          </div>
          <div style={{ paddingTop: "30px" }}>
            {" "}
            {showAccordion && <AccomCompareTable />}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AccomCompare;

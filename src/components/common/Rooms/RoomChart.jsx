import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Looks5Icon from "@mui/icons-material/Looks5";
import RoomButton from "./RoomsButton";

const RoomChart = () => {
  const buttonValue = [
    { Value: "R01" },
    { Value: "R02" },
    { Value: "R03" },
    { Value: "R04" },
    { Value: "R05" },
    { Value: "R06" },
    { Value: "R07" },
    { Value: "R08" },
    { Value: "R09" },
    { Value: "R10" },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <div>
          <span>
            <b>Property Name</b>: Dubai CreekSearch
          </span>
          <input
            type="text"
            placeholder="Search"
            style={{
              marginLeft: "10px",
              borderRadius: "5px",
              border: "solid 1px #dee2e6",
              padding: "5px",
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px" }}>
            <CheckCircleIcon sx={{ color: "green" }} /> Occupied
          </div>
          <div style={{ marginRight: "10px" }}>
            {" "}
            <Looks5Icon sx={{ color: "#ffb536" }} /> Available
          </div>
          <div>
            <ErrorIcon sx={{ color: "red" }} /> Under Maintenance
          </div>
        </div>
      </div>

      <div
        style={{
          border: "solid 1px #dee2e6",
          borderRadius: "10px",
          padding: "40px 0px 20px 40px",
        }}
      >
        <RoomButton val={buttonValue} />
      </div>
    </div>
  );
};

export default RoomChart;

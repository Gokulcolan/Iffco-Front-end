import React from "react";
import CommonTextFields from "../../../components/fields/CommonTextFields";

function DailyActivity() {
  return (
    <div>
      <div
        style={{
          border: "1px solid silver",
          padding: "10px",
          borderRadius: "10px",
          margin:"2%"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontWeight: "550", fontSize: "15px" }}>
            Daily Activities
          </span>
          <span style={{ fontSize: "15px" }}>Monday 18-Sep-2023</span>
        </div>
        <hr color="green" size="90px" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <CommonTextFields placeholder="2-Rooms Added" />
          <CommonTextFields placeholder="3-Rooms Vaccanted" />
          <CommonTextFields placeholder="New property added in dubai" />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <span style={{ fontWeight: "550", fontSize: "15px" }}>
            Notifications
          </span>
        </div>
        <hr color="green" size="90px" />
        <CommonTextFields placeholder="Al quasis inspected reports is available" />
      </div>
    </div>
  );
}

export default DailyActivity;

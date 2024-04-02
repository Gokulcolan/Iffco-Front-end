import { Card } from "@mui/material";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import RoomChart from "./Rooms/RoomChart";

function Dohnut() {
  const data = {
    labels: ["Allotted Rooms", "Remaining Rooms", "Maintanence"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        datalabels: {
          display: false,
        },
      },
    ],
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop:"25px",
          paddingBottom:"25px",
         gap:"12px"
        }}
      >
        <div> 
          {" "}
          <Card sx={{ borderRadius: "20px", paddingBottom: "25px" }}>
            <h5 style={{ fontWeight: "550", padding: "20px" }}>Rooms</h5>
            <Doughnut style={{ padding: "20px" }} data={data} />
          </Card>
        </div>
        <div>
          <Card sx={{ borderRadius: "20px", padding: "10px" }}>
            <RoomChart />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dohnut;

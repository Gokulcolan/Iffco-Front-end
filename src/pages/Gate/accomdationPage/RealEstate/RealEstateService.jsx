import React, { useEffect, useRef } from "react";
import LogoutComponent from "../../../../components/common/LogoutComponent";
import RealEstateCard from "../../../../components/common/RealEstateCard";
import { Doughnut, Pie } from "react-chartjs-2";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Card } from "@mui/material";
import RoomChart from "../../../../components/common/Rooms/RoomChart";
import RealEstateTownCard from "../../../../components/common/RealEstateTownCard";
import Dohnut from "../../../../components/common/Dohnut";

function RealEstateService() {
  return (
    <div>
      <LogoutComponent
        mainheading={"AI-Nahda Real Estate and Services LLC,Dubai"}
      />
      <RealEstateCard />
      <Dohnut />
      <RealEstateTownCard />
      {/* <RealstateMap /> */}
    </div>
  );
}

export default RealEstateService;

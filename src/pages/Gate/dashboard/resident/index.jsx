import { useState } from "react";
import AdminHeaderCard from "../../../../components/Dashboard/common/adminHeaderCard";
import LocationChart from "../../../../components/Dashboard/charts/adminLocationChart";
import AdminSelect from "../../../../components/Dashboard/common/adminSelect";
import CommonFromToDate from "../../../../components/fields/CommonFromToDate";
import { residentCardData } from "../../../../utils/constants/cardData";
import DailyActivity from "../../payments/DailyActivity";
import AdminCostChart from "../../../../components/Dashboard/charts/adminCostChart";
import CommonDashboardDropdownfield from "../../../../components/fields/CommonDashboardDropdownfield";
import { residentData } from "../../../../components/common/SelectOptions";
import { Grid } from "@mui/material";

const Resident = () => {
  const Data = [
    {
      id: 1,
      year: "Total Occupied",
      userGain: 1000,
      userLost: 823,
      color: "tomato",
    },
    {
      id: 2,
      year: "Total Occupied",
      userGain: 2000,
      userLost: 345,
      color: "#FFA500",
    },
    {
      id: 3,
      year: "vacant",
      userGain: 3000,
      userLost: 555,
      color: "#6B8E23",
    },
    {
      id: 4,
      year: "Maintenance",
      userGain: 2000,
      userLost: 4555,
      color: "#0d6efd",
    },
  ];
  const [barchartData, setBarChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#0d6efd", "#20c997"],
        borderColor: "#20c997",
        borderWidth: 2,
        barThickness: 20,
      },
    ],
  });
  return (
    <div className="paymentContainer">
      <h4 style={{ paddingTop: "15px" }}>Resident</h4>
      <div
        style={{
          paddingTop: "1rem",
        }}
      >
        <CommonDashboardDropdownfield
          label="Select a BU-HR :"
          options={residentData}
        />
      </div>
      <Grid container spacing={2} columns={12}>
        <Grid item xl={9}>
          <Grid container spacing={2} columns={3}>
            {residentCardData.map((cardData, index) => (
              <Grid item key={index} xs={6} sm={12} md={6} lg={4} xl={3}>
                <AdminHeaderCard cardData={cardData} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xl={3}>
          <Grid container spacing={2} columns={6}>
            <Grid item xs={6} sm={12} md={12} lg={8} xl={12}>
              <DailyActivity />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ paddingTop: "30px" }}>
        <CommonFromToDate label="Period From :" />
      </div>
      <div style={{ paddingTop: "40px" }}>
        <Grid item xs={12}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
              <h6 style={{ textAlign: "center" }}>
                Employee Occupied vs Property
              </h6>
              <LocationChart chartData={barchartData} />
            </Grid>
            <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
              <h6 style={{ textAlign: "center" }}>
                Employee Transfered/ Cancelled
              </h6>
              <AdminCostChart chartData={barchartData} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Resident;

import { useState } from "react";
import AdminHeaderCard from "../../../../components/Dashboard/common/adminHeaderCard";
import AdminSelect from "../../../../components/Dashboard/common/adminSelect";
import { buCardData, cardDatas } from "../../../../utils/constants/cardData";
import "./property.scss";
import AdminAccomChart from "../../../../components/Dashboard/charts/adminAccomChart";
import { Grid } from "@mui/material";
const Property = () => {
  const Data = [
    {
      id: 1,
      year: "Total Occupied",
      userGain: 120,
      userLost: 823,
      color: "tomato",
    },
    {
      id: 2,
      year: "Partially Occupied",
      userGain: 10,
      userLost: 345,
      color: "#FFA500",
    },
    {
      id: 3,
      year: "vacant",
      userGain: 20,
      userLost: 555,
      color: "#6B8E23",
    },
    {
      id: 4,
      year: "Maintenance",
      userGain: 10,
      userLost: 4555,
      color: "#0d6efd",
    },
  ];
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => {
      return { year: data.year, color: data.color, value: data.userGain };
    }),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["tomato", "#FFA500", "#6B8E23", "#0d6efd"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="propertyContainer">
      <h2 style={{ fontSize: "1.42rem" }}>BU/Property</h2>
      <div style={{ paddingTop: "15px" }}>
        {" "}
        <AdminSelect menuItemArr={[]} />
      </div>

      <div style={{ paddingTop: "25px" }}>
        <AdminHeaderCard cardData={cardDatas} />
      </div>
      <Grid container spacing={2} columns={12}>
        <Grid item xl={9}>
          <Grid container spacing={2} columns={3}>
            {buCardData.map((cardData, index) => (
              <Grid item key={index} xs={6} sm={12} md={6} lg={4} xl={3}>
                <AdminHeaderCard cardData={cardData} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xl={3}>
          <Grid container spacing={2} columns={6}>
            <Grid item xs={6} sm={12} md={12} lg={4} xl={12}>
              <AdminAccomChart chartData={chartData} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Property;

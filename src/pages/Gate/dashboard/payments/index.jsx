import { Grid } from "@mui/material";
import AdminHeaderCard from "../../../../components/Dashboard/common/adminHeaderCard";
import LocationChart from "../../../../components/Dashboard/charts/adminLocationChart";
import AdminSelect from "../../../../components/Dashboard/common/adminSelect";
import { buCardData, payCardData } from "../../../../utils/constants/cardData";
import "./payments.scss";
import AdminCostChart from "../../../../components/Dashboard/charts/adminCostChart";
import { useState } from "react";
const SuAdminPayment = () => {
  const Data = [
    {
      id: 1,
      year: "Dubai",
      userGain: 120,
      userLost: 823,
      color: "#6B8E23",
    },
    {
      id: 2,
      year: "Sharjah",
      userGain: 80,
      userLost: 345,
      color: "tomato",
    },
    {
      id: 3,
      year: "Al Ain",
      userGain: 90,
      userLost: 555,
      color: "#6B8E23",
    },
    {
      id: 4,
      year: "Ajman",
      userGain: 60,
      userLost: 4555,
      color: "#0d6efd",
    },
    {
      id: 5,
      year: "Kalba",
      userGain: 50,
      userLost: 4555,
      color: "#0d6efd",
    },
    {
      id: 6,
      year: "Hatta",
      userGain: 75,
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
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  });

  return (
    <div className="paymentContainer">
      <h4>Payment</h4>
      <div>
        {payCardData.map((cardData) => {
          return <AdminHeaderCard cardData={cardData} />;
        })}
      </div>
      <div style={{ paddingTop: "40px" }}>
        <AdminSelect menuItemArr={[]} />
      </div>
      <div style={{ paddingTop: "40px" }}>
        <Grid item xs={12}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
              <h6 style={{ textAlign: "center" }}>
                Payment-Year Wise Analysis
              </h6>
              <LocationChart chartData={barchartData} />
            </Grid>
            <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
              <h6 style={{ textAlign: "center" }}>
                Comparsion Of expense BU Wise(2023)
              </h6>
              <AdminCostChart chartData={barchartData} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SuAdminPayment;

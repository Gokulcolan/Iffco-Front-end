import { ArcElement, Chart } from "chart.js/auto";
import { useState } from "react";

import AdminAccomChart from "../../../../components/Dashboard/charts/adminAccomChart";
import AdminCostChart from "../../../../components/Dashboard/charts/adminCostChart";
import AdminExpenseChart from "../../../../components/Dashboard/charts/adminExpenseChart";
import LocationChart from "../../../../components/Dashboard/charts/adminLocationChart";
import AdminPaymentChart from "../../../../components/Dashboard/charts/adminPaymentChart";
import CustomCard from "../../../../components/common/card";
import "./superadmin.scss";
import AdminHeaderCard from "../../../../components/Dashboard/common/adminHeaderCard";
import AdminSelect from "../../../../components/Dashboard/common/adminSelect";
import { cardDatas } from "../../../../utils/constants/cardData";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

const SuperAdmin = () => {
  Chart.register(ArcElement);
  const navigate = useNavigate();

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

  const selectData = [
    {
      item: "BU – HR",
      value: "bu-hr",
    },
    {
      item: "International Foodstuffs Co L.L.C, Sharjah",
      value: "bu-hr",
    },
    {
      item: "Shama Food Industries LLC",
      value: "bu-hr",
    },
    {
      item: "Awal Chemicals FZE",
      value: "bu-hr",
    },
  ];
  const handleNavigateResident = () => {
    navigate("/addemployee");
  };
  const handleNavigateBuProperty = () => {
    navigate("/editproperty");
  };
  const handleNavigateProperty = () => {
    // navigate("/addemployee");
  };
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => {
      return { year: data.year, color: data.color, value: data.userGain };
    }),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["tomato", "tomato", "#6B8E23", "#0d6efd"],
        borderColor: "",
        borderWidth: 2,
      },
    ],
  });
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
    <div className="admincontainer">
      <div className="super_Ad_m">
        <div className="sr_head">
          <h2>Super Admin</h2>
        </div>
        <div className="sr_buttons">
          <div>
            {" "}
            <a>
              <button
                className="head_sr_button"
                onClick={handleNavigateResident}
              >
                Add Resident
              </button>
            </a>
          </div>
          <a>
            <button
              className="head_sr_button"
              onClick={handleNavigateBuProperty}
            >
              Add BU/property
            </button>
          </a>
          <a>
            <button className="head_sr_button" onClick={handleNavigateProperty}>
              Compare Property
            </button>
          </a>
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <AdminHeaderCard cardData={cardDatas} />
      </div>

      <div style={{ margin: "29px 0px" }}>
        <AdminSelect menuItemArr={selectData} />
      </div>
      <Grid container  columns={12}>
        <Grid item xs={12}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={6} sm={12} md={12} lg={6} xl={4}>
              <div className="">
                <AdminAccomChart chartData={chartData} />
                <h6>Accommodations</h6>
              </div>
            </Grid>
            <Grid item xs={6} sm={12} md={12} lg={6} xl={4}>
              <div className="">
                <LocationChart chartData={barchartData} />
                <h6>Location vs Resident</h6>
              </div>
            </Grid>
            <Grid item xs={6} sm={12} md={12} lg={6} xl={4}>
              <div className="">
                <AdminCostChart chartData={barchartData} />
                <h6>Location vs Resident</h6>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
              <div className="">
                <AdminExpenseChart chartData={barchartData} />
                <h6>Monthly BU wise expenses(%)</h6>
              </div>
            </Grid>
            <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
              <div className="">
                <AdminPaymentChart chartData={barchartData} />
                <h6>Payment(%)</h6>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SuperAdmin;

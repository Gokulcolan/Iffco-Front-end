import React from "react";
import { CounterCardRealEstateData } from "../../utils/constants/CounterCardData";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import "../Accomdation/propertycard/PropertyCard.scss";
import property from "../../assests/images/dashboard-employees.jpg";
import occupied from "../../assests/images/dashboard-occupied-rooms.png";
import vacant from "../../assests/images/dashboard-rooms.png";
import undermaintenance from "../../assests/images/dashboard-room-service.png";

function RealEstateCard() {
  const CounterCardRealEstateData = [
    { title: "Total Employees", value: 100, icon: property },
    { title: "Total Rooms", value: 20, icon: occupied },
    { title: "Allotted Rooms", value: 95, icon: vacant },
    { title: "Room Under Service", value: 50, icon: undermaintenance },
  ];

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {CounterCardRealEstateData.map((counterdata) => {
          return (
            <Grid item xs={3}>
              <Card className="real-estate-card">
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <img src={counterdata.icon} alt="icon"></img>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "600" }}
                        component="div"
                      >
                        {counterdata.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600" }}
                        component="div"
                      >
                        {counterdata.value}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default RealEstateCard;

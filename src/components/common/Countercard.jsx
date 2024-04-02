import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CounterCardData } from "../../utils/constants/CounterCardData";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { adminSelector } from "../../redux/slice/adminSlice";
import { AccomodationCardGetApi } from "../../redux/action/adminAction";

const Countercard = ({ icon, title, values }) => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={6} sm={12} md={12} lg={12} xl={12}>
          <Card className="accom-small-card">
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img src={icon} alt="icon"></img>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "600" }}
                    component="div"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600" }}
                    component="div"
                  >
                    {values}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Countercard;

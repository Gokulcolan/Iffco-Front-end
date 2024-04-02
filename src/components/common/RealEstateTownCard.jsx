import React from "react";
import {
  HideProductCardDatas,
  ProductCardDatas,
} from "../../utils/constants/ProductCardData";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import bt3 from "../../assests/images/editn.png";
import bt1 from "../../assests/images/renewable.png";
import bt2 from "../../assests/images/remove.png";
import { useNavigate } from "react-router-dom";
import RealstateMap from "./RealstateMap";

function RealEstateTownCard() {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleEdit = () => {
    // Use navigate instead of history.push
    navigate(`/editproperty`);
  };

  const handleOpenRealEstate = () => {
    navigate(`/realestate`);
  };
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Grid>
        {HideProductCardDatas?.map((productdatas, i) => {
          return (
            <Grid key={i} item xs={6}>
              <Card
                sx={{
                  cursor: "pointer",
                  padding: "5px",
                  borderRadius: "10px",
                  height: "65vh",
                }}
              >
                <CardMedia
                  onClick={handleOpenRealEstate}
                  component="img"
                  sx={{
                    height: "45vh",
                    padding: "5px",
                    borderRadius: "12px",
                  }}
                  src={productdatas?.image}
                  alt="icon"
                />
                <CardContent>
                  <Typography
                    sx={{ pb: 1 }}
                    onClick={handleOpenRealEstate}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {productdatas.title}
                  </Typography>
                  <span>
                    Al-Nahda Real Estate and Services LLC, Dubai, United Arab
                    Emirates Top Facilities of this Hotel are Swimming Pool &
                    Free Shuttle Service & Steam and Sauna.
                  </span>
                  <Stack direction="column" spacing={3}>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        paddingTop: "10px",
                      }}
                      onClick={handleOpenRealEstate}
                    >
                      <div>
                        <Typography variant="subtitle2" gutterBottom>
                          <b>No.of Rooms:</b> {productdatas.noofrooms}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                          <b>Occupied:</b> {productdatas.occupied}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2" gutterBottom>
                          <b>Type:</b> {productdatas.type}
                        </Typography>{" "}
                        <Typography variant="subtitle2" gutterBottom>
                          <b>Category:</b> {productdatas.category}
                        </Typography>
                      </div>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <RealstateMap />
    </div>
  );
}

export default RealEstateTownCard;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RealstateMap = () => {
  return (
    <div style={{}}>
      <Card sx={{ maxWidth: 500, height: "65vh", borderRadius: "10px" }}>
        <CardMedia
          component="iframe"
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115415.61287495725!2d55.300121518544266!3d25.313008535060813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f597e2129bfcd%3A0x4487baf7812301c0!2sAl%20Nahda%20Real%20Estate!5e0!3m2!1sen!2sin!4v1694943446224!5m2!1sen!2sin"
          style={{
            border: 0,
            width: "100%",
            height: "46vh",
            padding: "10px",
            borderRadius: "15px",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Al-Nahda Real Estate and Services LLC
          </Typography>
          <Typography vvariant="h6" color="text.secondary">
            Hotel is Near Dubai International Airport Al-Nahda Real Estate and
            Services LLC a Dubai, United Arab Emirates Top Facilities of this
            hotel are Swimming Pool & Free Shuttle Service Steam and Sauna.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealstateMap;

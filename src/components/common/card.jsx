import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import "./card.scss";

export default function CustomCard(props) {
  const { title, value, icon } = props.CardData;
  return (
    <Card
      className="cardContainer"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0px 25px",
      }}
    >
      <CardMedia className="cardImageContainer">
        <img src={icon} className="cardImage" alt="icon"></img>
      </CardMedia>
      <CardContent
        sx={{
          width: "70%",
          paddingTop: "10px",
          color: "black",
        }}
        className="cardContent"
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "600",
            fontStyle: "bold",
            padding: "0px",
            color: "black",
          }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "600", color: "black" }}
          color="text.secondary"
          gutterBottom
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

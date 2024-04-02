import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

const RedCardTitle = ({ title }) => {
  return (
    <>
      <div style={{ paddingTop: "28px" }}>
        <Stack direction="row" alignItems="center" gap="10px" spacing={0.5}>
          <Card sx={{ background: "rgb(19, 115, 200)", padding: "8px" }}>
            <LanguageIcon sx={{ color: "white", fontSize: "22px" }} />
          </Card>
          <Typography sx={{ fontWeight: "550" }} variant="h6">
            {title}
          </Typography>
        </Stack>
      </div>
    </>
  );
};

export default RedCardTitle;

export const ResidentTitle = ({ title }) => {
  return (
    <>
      <div style={{ paddingTop: "28px" }}>
        <Stack direction="row" alignItems="center" gap="10px" spacing={0.5}>
          <Card sx={{ background: "rgb(19, 115, 200)", padding: "8px" }}>
            <HomeIcon sx={{ color: "white", fontSize: "22px" }} />
          </Card>
          <Typography sx={{ fontWeight: "550" }} variant="h6">
            {title}
          </Typography>
        </Stack>
      </div>
    </>
  );
};

export const FriendsTitle = ({ title }) => {
  return (
    <>
      <div style={{ paddingTop: "28px" }}>
        <Stack direction="row" alignItems="center" gap="10px" spacing={0.5}>
          <Card sx={{ background: "rgb(19, 115, 200)", padding: "8px" }}>
            <PersonIcon sx={{ color: "white", fontSize: "22px" }} />
          </Card>
          <Typography sx={{ fontWeight: "550" }} variant="h6">
            {title}
          </Typography>
        </Stack>
      </div>
    </>
  );
};

import { Select, Stack } from "@mui/material";
import React from "react";

const CommonDropdownFields = ({ label, name, ...props }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <label style={{ fontSize: "14px", fontWeight: "600", width: "100%" }}>
          {label}
        </label>
        <Select
          margin="normal"
          size="small"
          name={name}
          fullWidth
          type="text"
          variant="outlined"
          {...props}
          sx={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default CommonDropdownFields;

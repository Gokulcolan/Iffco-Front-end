import { MenuItem, Select, Stack } from "@mui/material";
import React from "react";

const CommonDashboardDropdownfield = ({ label, id, options, disabled, ...props }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap:"12px"
        }}
      >
        <label id={`${id}-label`} style={{ fontSize: "14px", fontWeight: "600" }}>
          {label}
        </label>
        <Select
          margin="normal"
          size="small"
          labelId={`${id}-label`}
          id={id}
          fullWidth
          type="text"
          variant="outlined"
          disabled={disabled}
          {...props}
          sx={{
            width: "20%",
          }}
        >
          {options?.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CommonDashboardDropdownfield;

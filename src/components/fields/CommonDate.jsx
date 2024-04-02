import { Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React from "react";

function CommonDate({ label, title, name }) {
  return (
    <Stack spacing={0.5}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <label style={{ fontWeight: "550", fontSize: "14px" }}>{label}</label>
        <DatePicker name={name} />
      </LocalizationProvider>
    </Stack>
  );
}

export default CommonDate;

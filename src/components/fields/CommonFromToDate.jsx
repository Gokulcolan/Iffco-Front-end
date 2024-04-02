import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React from "react";

function CommonFromToDate({ label1, label2 }) {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ display: "flex", gap:"12px" }}>
          <Stack spacing={0.5}>
            {" "}
            <label style={{ paddingTop: "15px" }}>{label1}</label>
            <div style={{}}>
              <DatePicker defaultValue={dayjs("2022-04-17")} />
            </div>
          </Stack>
          <Stack spacing={0.5}>
            <label style={{ paddingTop: "15px" }}>{label2}</label>
            <div style={{}}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </div>
          </Stack>
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default CommonFromToDate;

export const CommonDateFromToPicker = ({ title, label, name }) => {
  const useStyles = makeStyles((theme) => ({
    datePicker: {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        borderRadius: "5px",
        paddingTop: "3px",
      },
    },
  }));
  const classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={0}>
          <div style={{ width: "40%" }}>
            {" "}
            <label style={{ fontSize: "14px", fontWeight: "500" }}>
              {label}
            </label>
          </div>

          <div style={{ width: "415px" }}>
            <DatePicker className={classes.datePicker} name={name} />
          </div>
        </Stack>
      </div>
    </LocalizationProvider>
  );
};

import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputBase, Stack } from "@mui/material";
import "../fields/feildstyle.scss";
import { makeStyles } from "@mui/styles";
import dayjs from "dayjs";

const CommonDatePicker = ({
  title,
  formik,
  id,
  label,
  name,
  handler,
  value,
  customStyles = { width: "50%" },
}) => {
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
    className="commomtextfieldflex"
      >
        <div style={{ width: "40%" }}>
          <label style={{ fontSize: "14px", fontWeight: "600", width: "100%" }}>
            {label}
          </label>
        </div>
        <div style={{ width: "60%" }}>
          <DatePicker
            className={classes.datePicker}
            id={id}
            value={dayjs(value)}
            onChange={(date) => handler(date)}
            format="YYYY-MM-DD"
            error={Boolean(formik?.touched?.[id] && formik?.errors?.[id])}
            helperText={<>{formik?.touched?.[id] && formik?.errors?.[id]}</>}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CommonDatePicker;

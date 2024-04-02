import { MenuItem, TextField, inputLabelClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import "../fields/feildstyle.scss";
import { locationGetApi } from "../../redux/action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { adminSelector } from "../../redux/slice/adminSlice";

function CommonAccomSelect({
  id,
  label,
  formik,
  options,
  sx,
  customStyles,
  defaultValue,
  value,
  disabled,
  required,
  customChange,
  labelClassName,
  statusChecker = false,
}) {
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    setSelectedValue(formik.values[id] || defaultValue || value);
  }, [defaultValue, formik.values, id, value]);
  return (
    <div className="formik-select-wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <label
          style={{
            fontSize: "15px",
            fontWeight: "600",
            paddingTop: "8px",
          }}
        >
          {label}
          {required && <span className="field-required">*</span>}
        </label>
        <TextField
          id={id}
          select
          margin="normal"
          name={id}
          disabled={disabled}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            formik.handleChange(e);
            if (customChange) customChange(e);
          }}
          value={formik.values[id] || defaultValue}
          variant="outlined"
          error={Boolean(formik.touched[id] && formik.errors[id])}
          helperText={<>{formik.touched[id] && formik.errors[id]}</>}
          sx={{
            "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: "9.5px",
              },
            "& .css-1wc848c-MuiFormHelperText-root ": {
              marginTop: "0px",
            },
            mt: 0,
            mb: 0,
            width: "50%",
            backgroundColor: "white",
          }}
          InputProps={{
            ...customStyles?.startAdornment,
            sx: {
              color: selectedValue === defaultValue ? "#bbbbbb" : "black",
              [`&.${inputLabelClasses.shrink}`]: {
                color: selectedValue === defaultValue ? "#bbbbbb" : "black",
              },
              ...sx?.inputProps,
            },
          }}
          SelectProps={{
            IconComponent: UilAngleDown,
            MenuProps: {
              PaperProps: {
                style: {
                  maxHeight: "250px",
                },
              },
            },
          }}
        >
          {selectedValue === defaultValue && (
            <MenuItem value={defaultValue} disabled hidden>
              {defaultValue}
            </MenuItem>
          )}
          {options?.map((option, index) => (
            <MenuItem key={option.id} value={index + 1}>
              {statusChecker && (
                <div
                  className={option.active ? "active-dot" : "non-active-dot"}
                ></div>
              )}

              {option?.city_name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}

export default CommonAccomSelect;

import { MenuItem, TextField, inputLabelClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

function CommonIndexSelect({
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
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <label style={{ fontSize: "14px", fontWeight: "600", width: "30%" }}>
          {label}
          {required && <span className="field-required">*</span>}
        </label>
        <TextField
          size="small"
          id={id}
          select
          fullWidth
          margin="normal"
          name={id}
          disabled={disabled}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            formik.handleChange(e);

            if (customChange) customChange(e);
          }}
          value={formik.values[id] || defaultValue}
          className="select-menu-item"
          variant="outlined"
          error={Boolean(formik.touched[id] && formik.errors[id])}
          helperText={<>{formik.touched[id] && formik.errors[id]}</>}
          sx={{
            ".MuiOutlinedInput-notchedOutline": sx?.outlinedInput,
            "& .MuiOutlinedInput-input": customStyles?.OutlinedInput,
            ...sx?.root,
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
            width: "70%",
            mt: 0,
            mb: 0,
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
              {" "}
              {statusChecker && (
                <div
                  className={option.active ? "active-dot" : "non-active-dot"}
                ></div>
              )}
              {option.status || option.type}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}

export default CommonIndexSelect;

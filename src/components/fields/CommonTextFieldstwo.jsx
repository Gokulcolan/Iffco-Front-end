import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { MenuItem, inputLabelClasses } from "@mui/material";
import { UilAngleDown } from "@iconscout/react-unicons";

const CommonTextFieldstwo = ({ label, placeholder, ...props }) => {
  return (
    <>
      <Stack spacing={0.5}>
        <label style={{ fontWeight: "550", fontSize: "14px" }}>{label}</label>
        <TextField
          sx={{
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "6px !important",
            },
          }}
          margin="normal"
          fullWidth
          type="text"
          variant="outlined"
          placeholder={placeholder}
          {...props}
        />
      </Stack>
    </>
  );
};

export default CommonTextFieldstwo;

export const CommonSelecttwo = ({
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
}) => {
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    setSelectedValue(formik.values[id] || defaultValue || value);
  }, [defaultValue, formik.values, id, value]);
  return (
    <>
      <Stack spacing={0.5}>
        <label style={{ fontWeight: "500", fontSize: "15px" }}>{label}</label>
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
            width: "100%",
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
          {options?.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {statusChecker && (
                <div
                  className={option.active ? "active-dot" : "non-active-dot"}
                ></div>
              )}
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
    </>
  );
};

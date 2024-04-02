import React from "react";
import TextField from "@mui/material/TextField";
import "../fields/feildstyle.scss";
import { Stack } from "@mui/material";

const CommonTextsFormik = ({
  id,
  label,
  formik,
  customStyles = { width: "40%" },
  disabled,
  placeholder,
  required,
  module,
  defaultvalue,
  handleChange,

  ...props
}) => {
  return (
    <>
      <div className="commomtextfieldflex">
        <label className="commomtextfieldlabel">{label}</label>
        {/* className={module === "AddEmployee" ? "commomtextfieldlabel" : "commomtextfieldflex"} */}
        <TextField
          className="commontxt commontextfield "
          fullWidth
          id={id}
          margin="normal"
          disabled={disabled}
          type="text"
          placeholder={placeholder}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
          error={Boolean(formik.touched[id] && formik.errors[id])}
          helperText={<>{formik.touched[id] && formik.errors[id]}</>}
          variant="outlined"
          sx={{
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "8px !important",
            },
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
            mt: 0,
            mb: 0,
            borderRadius: "10px",
            "& .MuiOutlinedInput-input": customStyles?.OutlinedInput,
          }}
          {...props}
        />
      </div>
    </>
  );
};

export default CommonTextsFormik;

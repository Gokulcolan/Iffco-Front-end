import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

const CommonCheckBox = ({ label, checked, onChange }) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked={checked} onChange={onChange}  />}
          label={
            <Typography style={{ fontSize: "14.5px", fontWeight: "550" }}>
              {label}
            </Typography>
          }
        />
      </FormGroup>
    </div>
  );
};

export default CommonCheckBox;

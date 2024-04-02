import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function CommonSearchbar({ placeholder }) {
  return (
    <div>
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        sx={{
          "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
            padding: "2px",
          },
          backgroundColor: "white",
        }}
      />
    </div>
  );
}

export default CommonSearchbar;

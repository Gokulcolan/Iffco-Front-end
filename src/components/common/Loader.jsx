import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function Loader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleToggle();
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Backdrop
        sx={{ color: "#E22D2C", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Loader;

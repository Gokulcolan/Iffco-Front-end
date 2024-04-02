import { Button } from "@mui/material";
import React, { useState } from "react";
import LogoutModal from "./Modal/LogoutModal";
import LogoutIcon from "@mui/icons-material/Logout";

function LogoutComponent({ mainheading, ptag }) {
  const [openLogout, setOpenLogout] = useState(false);
  const handleLogout = () => {
    setOpenLogout(true);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
          paddingBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <h3>{mainheading}</h3>
          <span style={{ paddingTop: "5px" }}>{ptag}</span>
        </div>
        <div className="">
          {" "}
          <Button
            onClick={handleLogout}
            className="logout-btn"
            style={{
              backgroundColor: "#E22D2C",
              padding: "6px 20px",
              textTransform: "none",
              borderRadius: "10px",
            }}
            variant="contained"
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </div>
      </div>
      <LogoutModal openLogout={openLogout} setOpenLogout={setOpenLogout} />
    </>
  );
}

export default LogoutComponent;

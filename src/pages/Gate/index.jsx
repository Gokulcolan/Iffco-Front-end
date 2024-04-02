import { Button, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { menuItems } from "../../utils/constants/menu";
import GateSideBar from "../../layout/nav/gateLayout/gateSideBar";
import "../../../src/layout/nav/LogoutBox/logout.css";
import { useState } from "react";
import LogoutModal from "../../components/common/Modal/LogoutModal";
import LogoutComponent from "../../components/common/LogoutComponent";

const AccomLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <GateSideBar menuItems={menuItems} />

      <div
        style={{
          backgroundColor: "#eaeded",
          minHeight: "100vh",
          // width: "100vw",
          padding: "0 20px",
        }}
      >
        <div style={{ margin: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AccomLayout;

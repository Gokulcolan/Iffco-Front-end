import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListIcon from "@mui/icons-material/List";
import awallogo from "../../../assests/images/awallogo.svg";
import "../../nav/layout.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useLocation } from "react-router-dom";
import "../gateLayout/gate.css";
const drawerWidth = 300;

function SingleList({ menuItems }) {
  const { name, path, icon, icon2, activePath } = menuItems;
  const location = useLocation();
  // const isActive = location.pathname === path;
  const isActive =
    location.pathname === path || activePath?.includes(location.pathname);
  return (
    <>
      <ListItemButton
        component={Link}
        to={path}
        className={`multi-list ${isActive ? "active-sidebar-item" : ""}`}
        style={{
          backgroundColor: isActive ? "rgb(31, 118, 206)" : "transparent",
        }}
      >
        <ListItemIcon>
          <img src={isActive ? icon2 : icon} />
        </ListItemIcon>
        <ListItemText
          sx={{ color: isActive ? "white !important" : "#696e84" }}
          className="sidebartext"
          primary={name}
        />
        <ChevronRightIcon />
      </ListItemButton>
    </>
  );
}
function MultipleList({ menuItems }) {
  const location = useLocation();
  const { name, path } = menuItems;
  const isActive = location.pathname === path;
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <ListItemButton
        component={Link}
        to={path}
        onClick={handleClick}
        className={`multi-list ${isActive ? "active-sidebar-item" : ""}`}
        style={{ backgroundColor: isActive ? "#E22D2C" : "transparent" }}
      >
        <ListIcon sx={{ marginRight: "8px" }} />
        <ListItemText
          style={{
            backgroundColor: isActive ? "white" : "inherit",
          }}
          primary={name}
        />
        {open ? (
          <ExpandLessIcon className="listicon" />
        ) : (
          <ExpandMoreIcon className="listicon" />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menuItems.isNested.map((nestedItem, index) => {
            const { name, path } = nestedItem;
            return (
              <ListItemButton
                component={Link}
                to={path}
                style={{ paddingLeft: 16 }}
                key={`${index}-item`}
                className="nested-list"
              >
                <ListItemText
                  style={{
                    color: isActive ? "white" : "inherit",
                  }}
                  className=""
                  primary={name}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
export default function GateSideBar({ menuItems }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="dflex-align">
          <img src={awallogo} className="logo" />
        </div>

        {/* return items.isNested ? (
            <MultipleList menuItems={items} key={index} />
          ) : ( */}
        <List>
          {menuItems?.map((items, index) => {
            return <SingleList menuItems={items} key={index} />;
          })}
        </List>
      </Drawer>
    </Box>
  );
}

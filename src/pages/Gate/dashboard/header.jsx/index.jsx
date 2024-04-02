import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import { Button } from "@mui/base";
import AccomLayout from "../..";
import LogoutComponent from "../../../../components/common/LogoutComponent";

const HeaderCrumbs = [
  {
    path: "/dashboard/superadmin",
    title: "Super Admin",
  },
  {
    path: "/dashboard/property",
    title: "BU/Property",
  },
  {
    path: "/dashboard/payment",
    title: "Payments",
  },
  {
    path: "/dashboard/resident",
    title: "Resident",
  },
];

export function BasicBreadcrumbs() {
  const location = useLocation();
  let currentPath = location.pathname.split("/dashboard");
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {HeaderCrumbs.map((headerdata, index) => {
          const { path, title } = headerdata;
          const activePath = path.split("/dashboard")[1] === currentPath[1];
          return (
            <Link
              className={activePath ? "activebreadlink" : "breadlink"}
              key={index}
              underline="hover"
              to={path}
            >
              {title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

const Header = () => {
  return (
    <>
      <div>
        {" "}
        <LogoutComponent mainheading={"Dasboard"} />
      </div>
      <div className="headercontainer">
        <div>
          <BasicBreadcrumbs />
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { Route, Routes } from "react-router-dom";
import accomRoutes from "./accomRoutes";
import guestRoutes from "./guestRoute";

const ROLES_ROUTES = {
  0: guestRoutes,
  1: accomRoutes,
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};



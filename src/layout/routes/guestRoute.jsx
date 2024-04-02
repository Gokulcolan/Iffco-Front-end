import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Auth/login";

// const Login = lazy(() => import("../../pages/Auth/login"));

const guestRoutes = [
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
];

export default guestRoutes;

import { Outlet } from "react-router-dom";
import "./dashboard.scss";
import Header from "./header.jsx";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default Dashboard;

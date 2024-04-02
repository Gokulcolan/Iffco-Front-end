import React, { useEffect } from "react";
import EmployeeCounters from "../EmployeeCounters";
import room from "../../../assests/images/room.png";
import room2 from "../../../assests/images/room2.png";
import { useDispatch, useSelector } from "react-redux";
import { employeeDasboardGetApi } from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";

function EmployeeDashboard() {
  const { employeeDashboardInfo } = useSelector(adminSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employeeDasboardGetApi());
  }, []);
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <EmployeeCounters
        icon={room}
        title={"Total Rooms"}
        count={employeeDashboardInfo?.total_rooms}
      />
      <EmployeeCounters
        icon={room2}
        title={"Occupied Rooms"}
        count={employeeDashboardInfo?.occupied_rooms}
      />
      <EmployeeCounters
        icon={room}
        title={"Vacant"}
        count={employeeDashboardInfo?.total_rooms}
      />
      <EmployeeCounters
        icon={room}
        title={"Active Employees"}
        count={employeeDashboardInfo?.total_rooms}
      />
    </div>
  );
}

export default EmployeeDashboard;

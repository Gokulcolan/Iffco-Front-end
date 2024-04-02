import React from "react";
import DataTable from "../../../components/common/editProperty/DataTable";
import EmployeeCounters from "../../../components/common/EmployeeCounters";
import LogoutComponent from "../../../components/common/LogoutComponent";

const Employee = () => {
  return (
    <>
      <LogoutComponent mainheading={"All Employees"} ptag={"(Map Room)"} />
      <EmployeeCounters />
      <DataTable />
    </>
  );
};

export default Employee;

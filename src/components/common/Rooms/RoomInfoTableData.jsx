import React from "react";
import { useState } from "react";
import TableWithPagination from "../TableWithPagination";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const RoomInfoTableData = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };

  const tableData = [
    {
      code: "L4-5T",
      PropertyName: "Dubai Creek",
      EmpName: "Jane Cooper(301)",
      Location: "Dubai",
      RoomType: "Single bed",
      RoomNumber: "1A",
      statusaccom: "CheckOut",
      Date: "14-09-2023",
    },
    {
      code: "L4-5T",
      PropertyName: "Al Barsha",
      EmpName: "Emma(302)",
      Location: "Dubai",
      RoomType: "Single bed",
      RoomNumber: "1A",
      statusaccom: "CheckOut",
      Date: "14-09-2023",
    },
    {
      code: "L4-5T",
      PropertyName: "Deira",
      EmpName: "Olivia(303)",
      Location: "Sharjah",
      RoomType: "Single bed",
      RoomNumber: "1A",
      statusaccom: "CheckOut",
      Date: "14-09-2023",
    },
    {
      code: "L4-5T",
      PropertyName: "Dubai Mall",
      EmpName: "Aiden(304)",
      Location: "Sharjah",
      RoomType: "Single bed",
      RoomNumber: "1A",
      statusaccom: "	CheckIn",
      Date: "14-09-2023",
    },
    {
      code: "L4-5T",
      PropertyName: "Downtown Dubai",
      EmpName: "Liam(305)",
      Location: "Ajman",
      RoomType: "Single bed",
      RoomNumber: "1A",
      statusaccom: "CheckOut",
      Date: "14-09-2023",
    },
    {
      code: "L4-5T",
      PropertyName: "Jumeirah Beach",
      EmpName: "Sophia(306)",
      Location: "Ajman",
      RoomType: "Single bed",
      RoomNumber: "1A",
      statusaccom: "CheckOut",
      Date: "14-09-2023",
    },
  ];
  
  const filteredRows = tableData?.filter((e) =>
    Object.values(e).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchFilter.toLowerCase())
    )
  );

  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "flex",
          placeContent: "end",
        }}
      >
        <TextField
          size="small"
          sx={{
            borderRadius: "5px",
            p: 1,
          }}
          type="text"
          placeholder="Search..."
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </div>
      <TableWithPagination
        columns={[
          {
            id: "code",
            label: "Code",
            minWidth: "auto",
          },
          {
            id: "PropertyName",
            label: "Property Name",
            minWidth: "auto",
          },
          {
            id: "EmpName",
            label: "Emp Name",
            minWidth: "auto",
          },
          {
            id: "Location",
            label: "Location",
            minWidth: "auto",
          },

          {
            id: "RoomType",
            label: "Room Type",
            minWidth: "auto",
          },
          {
            id: "RoomNumber",
            label: "Room Number",
            minWidth: "auto",
          },
          {
            id: "statusaccom",
            label: "Status",
            minWidth: "auto",
          },
          {
            id: "Date",
            label: "Date",
            minWidth: "auto",
          },
          {
            id: "roomAction",
            label: "Action",
            minWidth: "auto",
          },
        ]}
        rows={filteredRows}
        paginationStatus={true}
        rowsPerPageOptions={paginationRowsOptions}
        page={page}
        size={size}
        handleChangePage={handlePageChange}
        handleChangeRowsPerPage={handlePerRowsChange}
      />
    </div>
  );
};

export default RoomInfoTableData;

import React from "react";
import { useState } from "react";
import TableWithPagination from "../TableWithPagination";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const EditRoomTable = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);

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
      PropertyName: "Dubai Creek",
      RoomNumber: "R05",
      Person: "03",
      status: "Active",
      action: (
        <>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
          <DeleteOutlineIcon sx={{ color: "red", fontSize: "20px" }} />
        </>
      ),
    },
    {
      PropertyName: "Al Barsha",
      RoomNumber: "R10",
      Person: "01",
      status: "Maintenance",
      action: (
        <>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
          <DeleteOutlineIcon sx={{ color: "red", fontSize: "20px" }} />
        </>
      ),
    },
    {
      PropertyName: "Deira",
      RoomNumber: "R05",
      Person: "01",
      status: "Active",
      action: (
        <>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
          <DeleteOutlineIcon sx={{ color: "red", fontSize: "20px" }} />
        </>
      ),
    },
    {
      PropertyName: "Dubai Mall",
      RoomNumber: "R325",
      Person: "01",
      status: "InActive",
      action: (
        <>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />

          <DeleteOutlineIcon sx={{ color: "red", fontSize: "20px" }} />
        </>
      ),
    },
    {
      PropertyName: "Jumeirah Beach",
      RoomNumber: "R95",
      Person: "03",
      status: "Active",
      action: (
        <>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />

          <DeleteOutlineIcon sx={{ color: "red", fontSize: "20px" }} />
        </>
      ),
    },
    {
      PropertyName: "Downtown Dubai",
      RoomNumber: "R85",
      Person: "03",
      status: "Active",
      action: (
        <>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />

          <DeleteOutlineIcon sx={{ color: "red", fontSize: "20px" }} />
        </>
      ),
    },
  ];

  return (
    <div>
      <TableWithPagination
        columns={[
          {
            id: "PropertyName",
            label: "Property Name",
            minWidth: "auto",
          },
          {
            id: "RoomNumber",
            label: "Room Number",
            minWidth: "auto",
          },
          {
            id: "Person",
            label: "Person",
            minWidth: "auto",
          },
          {
            id: "status",
            label: "Status",
            minWidth: "auto",
          },
          {
            id: "action",
            label: "Action",
            minWidth: "auto",
          },
        ]}
        rows={tableData}
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

export default EditRoomTable;

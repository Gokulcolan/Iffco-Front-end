import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  colors,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./TableWithPagination.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PaymentTableDeleteModal from "./Modal/PaymentTableDeleteModal";
import PortraitIcon from "@mui/icons-material/Portrait";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import { useNavigate } from "react-router-dom";

function TableWithPagination(props) {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      height: "100%",
    },
  });
  const {
    rows,
    columns,
    buttonclick,
    page,
    size,
    rowsPerPageOptions,
    handleChangePage,
    handleChangeRowsPerPage,
    paginationStatus,
    isReportsTable,
    editPaymentValue,
  } = props;
  const classes = useStyles();
  const prevCountRef = React.useRef();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    prevCountRef.current = rows;
  }, []);

  const startIndex = size * page + 1;
  const endIndex = (size * (page + 1), rows?.length);
  const totalEntries = rows?.length;

  const handleRoomView = () => {
    navigate("/rooms/view");
  };

  const handleRedirect = () => {
    navigate("/addemployee");
  };

  const handleTranferEmployee = () => {
    navigate("/transferEmployee");
  };

  return (
    <div>
      <Paper elevation={0} className={classes.root}>
        <TableContainer className={classes.root}>
          <Table
            sx={{
              border: "1px solid lightgrey",
            }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column, i) => (
                  <TableCell
                    key={i}
                    align={column.align}
                    style={
                      isReportsTable
                        ? {
                            backgroundColor: "rgba(98, 134, 132, 1)",
                            color: "white",
                            minWidth: column.minWidth,
                            maxWidth: column.maxWidth,
                            fontWeight: "bold",
                            fontSize: "16px",
                            lineHeight: 1.75,
                            textTransform: "capitalize",
                          }
                        : {
                            minWidth: column.minWidth,
                            maxWidth: column.maxWidth,
                            fontWeight: "bold",
                            fontSize: "16px",
                            lineHeight: 1.75,
                            textTransform: "capitalize",
                          }
                    }
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {rows == "" ||
            rows == undefined ||
            rows == null ||
            rows?.content?.length === 0 ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    There are no records to display
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {rows?.slice(size * page, size * page + page).map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      {columns.map((column) => {
                        const value =
                          column.id === "View" ||
                          column.id === "rating" ||
                          column.id === "EditDelete" ||
                          column.id === "ThreeActions" ||
                          column.id === "Viewdouble" ||
                          column.id === "roomAction" ||
                          column.id === "statusaccom" ||
                          column.id === "associate"
                            ? column.id
                            : row[column.id];
                        return (
                          <Fragment key={column.id}>
                            <TableCell
                              align={column.align}
                              sx={{ padding: "12px" }}
                            >
                              {value === "rating" ? (
                                <IconButton
                                  style={{ cursor: "pointer" }}
                                  // onClick={() => buttonclick(row, "rating")}
                                >
                                  <StarBorderIcon sx={{ color: "orange" }} />
                                  <StarBorderIcon sx={{ color: "orange" }} />
                                </IconButton>
                              ) : value === "View" ? (
                                <IconButton
                                  style={{ cursor: "pointer" }}
                                  onClick={() => buttonclick(row, "View")}
                                >
                                  <RemoveRedEyeIcon />
                                </IconButton>
                              ) : value === "statusaccom" ? (
                                <div
                                  style={{
                                    color:
                                      row.statusaccom === "CheckOut"
                                        ? "red"
                                        : "green",
                                  }}
                                >
                                  {row.statusaccom}
                                </div>
                              ) : value === "Viewdouble" ? (
                                <div style={{ display: "flex", gap: "8px" }}>
                                  {" "}
                                  <RemoveRedEyeIcon
                                    sx={{
                                      cursor: "pointer",
                                      color: "gray",
                                    }}
                                    onClick={handleRedirect}
                                  />
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="edit-ico"
                                    onClick={handleRedirect}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  />
                                  <PortraitIcon
                                    onClick={handleTranferEmployee}
                                    sx={{
                                      color: "black",
                                      cursor: "pointer",
                                    }}
                                  />
                                  <DeleteOutlineIcon
                                    sx={{
                                      color: "red",
                                      cursor: "pointer",
                                    }}
                                  />
                                </div>
                              ) : value === "roomAction" ? (
                                <div style={{ display: "flex", gap: "8px" }}>
                                  {" "}
                                  <VisibilityIcon
                                    onClick={handleRoomView}
                                    style={{ cursor: "pointer" }}
                                    className="eye-icon"
                                  />
                                  <FontAwesomeIcon
                                    style={{ cursor: "pointer" }}
                                    onClick={handleRoomView}
                                    icon={faPenToSquare}
                                    className="edit-icon"
                                  />
                                  <ReduceCapacityIcon
                                    onClick={handleTranferEmployee}
                                    sx={{ cursor: "pointer" }}
                                    className="emp-icon"
                                  />
                                </div>
                              ) : value === "ThreeActions" ? (
                                <div
                                  style={{
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                >
                                  <RemoveRedEyeIcon
                                    sx={{ color: "gray" }}
                                    onClick={() => buttonclick(row, "View")}
                                  />
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="edit-pay"
                                    onClick={() => editPaymentValue(row)}
                                  />
                                  <DeleteOutlineIcon
                                    onClick={() => buttonclick(row, "Actions")}
                                    sx={{ ml: 1, color: "#E22D2C" }}
                                  />
                                </div>
                              ) : value === "EditDelete" ? (
                                <div>
                                  <ModeEditIcon
                                    sx={{
                                      color: "#299EF5",
                                      cursor: "pointer",
                                    }}
                                  />
                                  <DeleteOutlineIcon
                                    sx={{
                                      ml: 1,
                                      color: "#E22D2C",
                                      cursor: "pointer",
                                    }}
                                  />
                                </div>
                              ) : (
                                <>{value}</>
                              )}
                            </TableCell>
                          </Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        {paginationStatus && (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="pagination-info"
          >
            <div>
              <p style={{ paddingTop: "10px", fontSize: "14px" }}>
                Showing {startIndex} to {endIndex} of {totalEntries} entries
              </p>
            </div>
            <div>
              <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={rows?.length || 0}
                rowsPerPage={page}
                page={size}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                className="pagination-text"
              />
            </div>
          </div>
        )}
      </Paper>
    </div>
  );
}

export default TableWithPagination;

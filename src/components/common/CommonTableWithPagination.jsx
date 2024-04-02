import React, { Fragment, useEffect } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
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
} from "@mui/material";
import { makeStyles } from "@mui/styles";

function CommonTableWithPagination(props) {
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      height: "100%",
    },
  });
  const { rows, columns, deleteTable, page, size, editTable } = props;
  const classes = useStyles();
  const prevCountRef = React.useRef();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    prevCountRef.current = rows;
  }, []);

  const startIndex = size * page + 1;
  const endIndex = (size * (page + 1), rows?.length);
  const totalEntries = rows?.length;
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
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                      fontWeight: "bold",
                      fontSize: "14.5px",
                      lineHeight: 1.75,
                      textTransform: "capitalize",
                    }}
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
                {rows?.map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      {columns?.map((column) => {
                        const value =
                          column.id === "EditDelete" ||
                          column.id === "associate" ||
                          column.from === "Room"
                            ? column.id
                            : row[column.id];
                        return (
                          <Fragment key={column.id}>
                            <TableCell
                              align={column.align}
                              sx={{ padding: "15px" }}
                            >
                              {value === "EditDelete" ? (
                                <div>
                                  <ModeEditIcon
                                    sx={{
                                      color: "#299EF5",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => editTable(row, "Action")}
                                  />
                                  <DeleteOutlineIcon
                                    sx={{
                                      ml: 1,
                                      color: "#E22D2C",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => deleteTable(row, "Action")}
                                  />
                                </div>
                              ) : value === "room_no" ||
                                value === "room_type" ||
                                value === "no_of_residents" ||
                                value === "bath_attached" ||
                                value === "room_status" ? (
                                row?.room[value]
                              ) 
                              : value === "amneities_pk" ? (
                                row.amenities?.map((val) => val.room_amenitie)
                              ) : value === "S.No" ? (
                                i + 1
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
        {/* {paginationStatus && (
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
        )} */}
      </Paper>
    </div>
  );
}

export default CommonTableWithPagination;

// import React, { Fragment, useEffect } from "react";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import {
//   IconButton,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// function CommonTableWithPagination(props) {
//   const useStyles = makeStyles({
//     root: {
//       width: "100%",
//     },
//     container: {
//       height: "100%",
//     },
//   });
//   const { rows, columns, buttonclick, page, size, clickbutton } = props;
//   console.log("Rows data:", rows);
//   console.log(columns, "columns");
//   const classes = useStyles();
//   const prevCountRef = React.useRef();
//   // const label = {inputProps: { "aria-label": "Checkbox demo" }};

//   useEffect(() => {
//     prevCountRef.current = rows;
//   }, []);

//   const startIndex = size * page + 1;
//   const endIndex = size * (page + 1);
//   const totalEntries = rows ? rows.length : 0;

//   return (
//     <div>
//       <Paper elevation={0} className={classes.root}>
//         <TableContainer className={classes.root}>
//           <Table
//             sx={{
//               border: "1px solid lightgrey",
//             }}
//             stickyHeader
//             aria-label="sticky table"
//           >
//             <TableHead>
//               <TableRow>
//                 {columns.map((column, i) => (
//                   <TableCell
//                     key={i}
//                     align={column.align}
//                     style={{
//                       minWidth: column.minWidth,
//                       maxWidth: column.maxWidth,
//                       fontWeight: "bold",
//                       fontSize: "14.5px",
//                       lineHeight: 1.75,
//                       textTransform: "capitalize",
//                     }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows && Object.keys(rows).length > 0 ? (
//                 <TableRow>
//                   {columns?.map((column) => {
//                     console.log(column, "testcolumn");
//                     const value =
//                       column.id === "EditDelete" || column.id === "associate"
//                         ? column.id
//                         : rows[column.id];
//                     console.log(value, "value");
//                     return (
//                       <Fragment key={column.id}>
//                         <TableCell
//                           align={column.align}
//                           sx={{ padding: "15px" }}
//                         >
//                           {value === "EditDelete" ? (
//                             <div>
//                               <ModeEditIcon
//                                 sx={{
//                                   color: "#299EF5",
//                                   cursor: "pointer",
//                                 }}
//                                 onClick={() => clickbutton(rows, "Action")}
//                               />
//                               <DeleteOutlineIcon
//                                 sx={{
//                                   ml: 1,
//                                   color: "#E22D2C",
//                                   cursor: "pointer",
//                                 }}
//                                 onClick={(e) => buttonclick(rows, "Action")}
//                               />
//                             </div>
//                           ) : (
//                             <>{value}</>
//                           )}
//                         </TableCell>
//                       </Fragment>
//                     );
//                   })}
//                 </TableRow>
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={columns?.length}>
//                     There are no records to display
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <div
//           style={{ display: "flex", justifyContent: "space-between" }}
//           className="pagination-info"
//         >
//           <div>
//             <p style={{ paddingTop: "10px", fontSize: "14px" }}>
//               Showing {startIndex} to {endIndex} of {totalEntries} entries
//             </p>
//           </div>
//           <div>
//             <TablePagination
//               component="div"
//               count={totalEntries}
//               rowsPerPage={size}
//               page={page}
//               onPageChange={props.handleChangePage}
//               onRowsPerPageChange={props.handleChangeRowsPerPage}
//               className="pagination-text"
//             />
//           </div>
//         </div>
//       </Paper>
//     </div>
//   );
// }

// export default CommonTableWithPagination;

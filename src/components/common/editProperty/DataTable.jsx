import React, { useState } from "react";
import "mdbreact/dist/css/mdb.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import "./common.css";
import {useNavigate } from "react-router-dom";
import TableWithPagination from "../TableWithPagination";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const DataTable = () => {
  const navigate = useNavigate();
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        date: "2012/08/06",
        salary: "$137",
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        date: "2010/10/14",
        salary: "$327",
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        date: "2009/09/15",
        salary: "$205",
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        date: "2008/12/13",
        salary: "$103",
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        date: "2008/12/19",
        salary: "$90",
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: "22",
        date: "2013/03/03",
        salary: "$342",
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        date: "2008/10/16",
        salary: "$470",
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London",
        age: "43",
        date: "2012/12/18",
        salary: "$313",
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        age: "19",
        date: "2010/03/17",
        salary: "$385",
      },
      {
        name: "Michael Silva",
        position: "Marketing Designer",
        office: "London",
        age: "66",
        date: "2012/11/27",
        salary: "$198",
      },
      {
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        office: "New York",
        age: "64",
        date: "2010/06/09",
        salary: "$725",
      },
      {
        name: "Gloria Little",
        position: "Systems Administrator",
        office: "New York",
        age: "59",
        date: "2009/04/10",
        salary: "$237",
      },
      {
        name: "Bradley Greer",
        position: "Software Engineer",
        office: "London",
        age: "41",
        date: "2012/10/13",
        salary: "$132",
      },
      {
        name: "Dai Rios",
        position: "Personnel Lead",
        office: "Edinburgh",
        age: "35",
        date: "2012/09/26",
        salary: "$217",
      },
      {
        name: "Jenette Caldwell",
        position: "Development Lead",
        office: "New York",
        age: "30",
        date: "2011/09/03",
        salary: "$345",
      },
      {
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        office: "New York",
        age: "40",
        date: "2009/06/25",
        salary: "$675",
      },
      {
        name: "Caesar Vance",
        position: "Pre-Sales Support",
        office: "New York",
        age: "21",
        date: "2011/12/12",
        salary: "$106",
      },
      {
        name: "Doris Wilder",
        position: "Sales Assistant",
        office: "Sidney",
        age: "23",
        date: "2010/09/20",
        salary: "$85",
      },
      {
        name: "Angelica Ramos",
        position: "Chief Executive Officer (CEO)",
        office: "London",
        age: "47",
        date: "2009/10/09",
        salary: "$1",
      },
      {
        name: "Gavin Joyce",
        position: "Developer",
        office: "Edinburgh",
        age: "42",
        date: "2010/12/22",
        salary: "$92",
      },
      {
        name: "Jennifer Chang",
        position: "Regional Director",
        office: "Singapore",
        age: "28",
        date: "2010/11/14",
        salary: "$357",
      },
      {
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: "28",
        date: "2011/06/07",
        salary: "$206",
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: "48",
        date: "2010/03/11",
        salary: "$850",
      },
      {
        name: "Shou Itou",
        position: "Regional Marketing",
        office: "Tokyo",
        age: "20",
        date: "2011/08/14",
        salary: "$163",
      },
      {
        name: "Michelle House",
        position: "Integration Specialist",
        office: "Sidney",
        age: "37",
        date: "2011/06/02",
        salary: "$95",
      },
      {
        name: "Suki Burks",
        position: "Developer",
        office: "London",
        age: "53",
        date: "2009/10/22",
        salary: "$114",
      },
      {
        name: "Prescott Bartlett",
        position: "Technical Author",
        office: "London",
        age: "27",
        date: "2011/05/07",
        salary: "$145",
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: "22",
        date: "2008/10/26",
        salary: "$235",
      },
      {
        name: "Martena Mccray",
        position: "Post-Sales support",
        office: "Edinburgh",
        age: "46",
        date: "2011/03/09",
        salary: "$324",
      },
      {
        name: "Unity Butler",
        position: "Marketing Designer",
        office: "San Francisco",
        age: "47",
        date: "2009/12/09",
        salary: "$85",
      },
      {
        name: "Howard Hatfield",
        position: "Office Manager",
        office: "San Francisco",
        age: "51",
        date: "2008/12/16",
        salary: "$164",
      },
      {
        name: "Hope Fuentes",
        position: "Secretary",
        office: "San Francisco",
        age: "41",
        date: "2010/02/12",
        salary: "$109",
      },
      {
        name: "Vivian Harrell",
        position: "Financial Controller",
        office: "San Francisco",
        age: "62",
        date: "2009/02/14",
        salary: "$452",
      },
      {
        name: "Timothy Mooney",
        position: "Office Manager",
        office: "London",
        age: "37",
        date: "2008/12/11",
        salary: "$136",
      },
      {
        name: "Jackson Bradshaw",
        position: "Director",
        office: "New York",
        age: "65",
        date: "2008/09/26",
        salary: "$645",
      },
      {
        name: "Olivia Liang",
        position: "Support Engineer",
        office: "Singapore",
        age: "64",
        date: "2011/02/03",
        salary: "$234",
      },
      {
        name: "Bruno Nash",
        position: "Software Engineer",
        office: "London",
        age: "38",
        date: "2011/05/03",
        salary: "$163",
      },
      {
        name: "Sakura Yamamoto",
        position: "Support Engineer",
        office: "Tokyo",
        age: "37",
        date: "2009/08/19",
        salary: "$139",
      },
      {
        name: "Thor Walton",
        position: "Developer",
        office: "New York",
        age: "61",
        date: "2013/08/11",
        salary: "$98",
      },
      {
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",
        date: "2009/07/07",
        salary: "$87",
      },
      {
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
      {
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
      },
      {
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
      },
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112",
      },
    ],
    tfoot: [],
  };

  const handleNavigate = () => {
    navigate("/addemployee");
  };

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

  const valuesData = [
    {
      no: "1",
      date: "20/09/2023",
      name: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "villa",
      contact: "(255)986547",
    },
    {
      no: "2",
      date: "20/09/2023",
      name: "Race course",
      location: "india",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "112",
      property: "apartments",
      contact: "(255)986547",
    },
    {
      no: "3",
      date: "20/09/2023",
      name: "Race course",
      location: "singapore",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "downtown",
      contact: "(255)986547",
    },
    {
      no: "4",
      date: "20/09/2023",
      name: "tom",
      location: "dubai",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "villa",
      contact: "(255)986547",
    },
    {
      no: "5",
      date: "20/09/2023",
      name: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "villa",
      contact: "(255)986547",
    },
    {
      no: "6",
      date: "20/09/2023",
      name: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "apartments",
      contact: "(255)986547",
    },
    {
      no: "7",
      date: "20/09/2023",
      name: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "apartments",
      contact: "(255)986547",
    },
    {
      no: "8",
      date: "20/09/2023",
      name: "Apartments",
      location: "dubai",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "apartments",
      contact: "(255)986547",
    },
    {
      no: "9",
      date: "20/09/2023",
      name: "Apartments",
      location: "dubai",
      last_inspection: "8/09/2022",
      room_info: "double",
      room_no: "111",
      property: "apartments",
      contact: "(255)986547",
    },
  ];

  const filteredRows = valuesData?.filter((e) =>
    Object.values(e).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchFilter.toLowerCase())
    )
  );

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div>
        <div style={{}}>
          <Box
            sx={{
              m: "auto",
              width: "100%",
            }}
          >
            <Card
              sx={{
                padding: "20px",
                borderRadius: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="d-flex">
                  <div
                    className="search-input-container"
                    style={{
                      paddingTop: "20px",
                      display: "flex",
                      float: "right",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                      }}
                    >
                      <TextField
                        size="small"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                        }}
                        type="text"
                        placeholder="Search..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        InputProps={{
                          endAdornment: <SearchIcon />,
                        }}
                      />
                      {/* <SearchIcon className="searchiconn" /> */}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Button
                      size="large"
                      className="emptybtn"
                      onClick={refreshPage}
                      endIcon={<CachedOutlinedIcon sx={{ color: "#d87943" }} />}
                    >
                      <span style={{ color: "#d87943", textTransform: "none" }}>
                        Refresh
                      </span>
                    </Button>
                    <Button
                      style={{
                        borderRadius: "10px",
                        border: "2px solid rgb(19, 115, 200)",
                        padding: "0px 10px",
                        color: "rgb(19, 115, 200)",
                      }}
                      variant="outlined"
                      className="redbtn add-emp"
                      onClick={() => handleNavigate()}
                    >
                      <AddIcon />
                      Add Employee
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "rgb(19, 115, 200)",
                        borderRadius: "20px",
                      }}
                      variant="contained"
                      className="outlinebtn"
                      startIcon={
                        <CloudUploadOutlinedIcon sx={{ color: "white" }} />
                      }
                    >
                      Upload
                    </Button>
                  </Stack>
                </div>
              </div>
              <div
                className="d-flex col-md-10 col-lg-12 col-sm-12"
                style={{ justifyContent: "flex-end" }}
              >
                <div
                  className="search-input-container"
                  style={{
                    paddingTop: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                ></div>
              </div>

              <div>
                <TableWithPagination
                  columns={[
                    {
                      id: "no",
                      label: "Emp Id",
                      minWidth: "auto",
                    },

                    {
                      id: "name",
                      label: "Name",
                      minWidth: "auto",
                    },

                    {
                      id: "location",
                      label: "Location",
                      minWidth: "auto",
                    },
                    {
                      id: "contact",
                      label: "Contact Details",
                      minWidth: "auto",
                    },
                    {
                      id: "property",
                      label: "Property",
                      minWidth: "auto",
                    },
                    {
                      id: "room_info",
                      label: "Room Info",
                      minWidth: "auto",
                    },

                    {
                      id: "room_no",
                      label: "Room No",
                      minWidth: "auto",
                    },
                    {
                      id: "Viewdouble",
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
            </Card>
          </Box>
        </div>
      </div>
    </>
  );
};

export default DataTable;

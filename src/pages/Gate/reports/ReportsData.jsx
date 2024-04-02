import { Box, Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import TableWithPagination from "../../../components/common/TableWithPagination";
import SearchIcon from "@mui/icons-material/Search";
import LogoutComponent from "../../../components/common/LogoutComponent";
import reportImg from "../../../../src/assests/images/Report View.png";

function ReportsData() {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");
  const imageUrl = { reportImg };

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
      building: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
    },
    {
      no: "2",
      date: "20/09/2023",
      building: "Race course",
      location: "india",
      last_inspection: "8/09/2022",
    },
    {
      no: "3",
      date: "20/09/2023",
      building: "Race course",
      location: "singapore",
      last_inspection: "8/09/2022",
    },
    {
      no: "4",
      date: "20/09/2023",
      building: "tom",
      location: "dubai",
      last_inspection: "8/09/2022",
    },
    {
      no: "5",
      date: "20/09/2023",
      building: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
    },
    {
      no: "6",
      date: "20/09/2023",
      building: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
    },
    {
      no: "7",
      date: "20/09/2023",
      building: "Race course",
      location: "dubai",
      last_inspection: "8/09/2022",
    },
    {
      no: "8",
      date: "20/09/2023",
      building: "Apartments",
      location: "dubai",
      last_inspection: "8/09/2022",
    },
    {
      no: "9",
      date: "20/09/2023",
      building: "Apartments",
      location: "dubai",
      last_inspection: "8/09/2022",
    },
  ];

  const filteredRows = valuesData?.filter((e) =>
    Object.values(e).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchFilter.toLowerCase())
    )
  );
  const buttonclick = (data, label) => {
    if (label === "View") {
      // window.open(reportImg, "_blank");
    }
  };
  return (
    <div>
      <div style={{}}>
        <div style={{}}>
          <LogoutComponent mainheading={"Reports"} />
        </div>
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
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    float: "left",
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
                </div>
              </div>
            </div>

            <div style={{ paddingTop: "1rem" }}>
              <TableWithPagination
                columns={[
                  {
                    id: "no",
                    label: "No",
                    minWidth: "auto",
                  },

                  {
                    id: "date",
                    label: "Date",
                    minWidth: "auto",
                  },
                  {
                    id: "building",
                    label: "Building",
                    minWidth: "auto",
                  },
                  {
                    id: "location",
                    label: "Location",
                    minWidth: "auto",
                  },
                  {
                    id: "rating",
                    label: "Rating",
                    minWidth: "auto",
                  },
                  {
                    id: "last_inspection",
                    label: "Last Inspection",
                    minWidth: "auto",
                  },
                  {
                    id: "View",
                    label: "View",
                    minWidth: "auto",
                  },
                ]}
                isReportsTable={true}
                buttonclick={buttonclick}
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
  );
}

export default ReportsData;

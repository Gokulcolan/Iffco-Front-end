import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import bt1 from "../../../assests/images/renewable.png";
import bt2 from "../../../assests/images/remove.png";
import bt3 from "../../../assests/images/editn.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./PropertyCard.scss";
import { useNavigate } from "react-router-dom";
import { adminSelector } from "../../../redux/slice/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { UilAngleDown } from "@iconscout/react-unicons";
import {
  AccomodationCardGetApi,
  accomodationFilterGetApi,
  countryGetApi,
  countryIdByLocationGetApi,
  getAllTerminatedApi,
  locationGetApi,
} from "../../../redux/action/adminAction";
import { Button, MenuItem, Pagination, TextField } from "@mui/material";
import Loader from "../../common/Loader";
import AccomodationSearchBox from "../common/AccomodationSearchBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../fields/feildstyle.scss";
import SearchIcon from "@mui/icons-material/Search";
import PropertyCardDeleteModal from "../../common/Modal/PropertyCardDeleteModal";
import CounterCardData from "../../../utils/constants/CounterCardData";

const PropertyCard = () => {
  const {
    accomCardInfo,
    accomoFilterInfo,
    handleAccomCardLoading,
    countryInfo,
    getAllTerminatedInfo,
    countryIdLocationInfo,
    terminatePropertyInfo,
  } = useSelector(adminSelector);

 

  const [mainCard, setMainCard] = useState();
  const [terminatedCard, setTerminatedCard] = useState();
  const [value, setValue] = useState("1");
  const [location, setLocation] = useState();
  const [country, setCountry] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [propId, setPropId] = useState();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editCard, setEditCard] = useState({
    no_of_airconditioners: "",
    no_of_restrooms: "",
    house_keeping_services: "",
    laundry_services: "",
    kitchen_appliances: "",
    furniture: "",
    address: "",
    city: "",
    property_code: "",
    property_name: "",
    property_area: "",
    no_of_floors: "",
    no_of_rooms: "",
    country: "",
    renewal_notice_days: "",
    category: "",
    type: "",
    location: "",
    status: "",
  });

  const pageSize = 8;
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const activeProperty =
    mainCard?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const terminatedProperty =
    terminatedCard?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const router = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEdit = (id, e) => {
    const filterData = accomCardInfo?.data?.filter((data, i) => data.id == id);
    setEditCard(e);
    navigate(`/editproperty`, {
      state: {
        editCard: filterData[0],
        action: "edit",
      },
    });
    sessionStorage.setItem("p_id", id);
  };

  const handleOpenRealEstate = () => {
    navigate(`/realestate`);
  };

  // this two useEffect for getting card info and showing in dashboard
  useEffect(() => {
    dispatch(AccomodationCardGetApi());
  }, []);

  useEffect(() => {
    setMainCard(accomCardInfo?.data);
  }, [accomCardInfo]);

  useEffect(() => {
    if (accomoFilterInfo?.data?.length > 0) {
      setMainCard(accomoFilterInfo?.data);
    }
  }, [accomoFilterInfo]);

  useEffect(() => {
    dispatch(getAllTerminatedApi());
  }, [value]);

  useEffect(() => {
    setTerminatedCard(getAllTerminatedInfo?.data);
  }, [getAllTerminatedInfo]);

  useEffect(() => {
    dispatch(countryGetApi());
  }, []);

  useEffect(() => {
    dispatch(accomodationFilterGetApi( country, searchFilter));
  }, [country, searchFilter]);

  useEffect(() => {
    dispatch(locationGetApi());
  }, []);

  // const handleLocation = (e) => {
  //   setLocation(e.target.value);
  //   dispatch(accomodationFilterGetApi(country, location, searchFilter));
  //   // setMainCard(location);
  // };

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
    // setMainCard(e.target.value);
    dispatch(accomodationFilterGetApi(country, location, searchFilter));
  };

  const handleCountry = (e) => {
    dispatch(countryIdByLocationGetApi(e.target.value));
    setCountry(e.target.value);
    // setMainCard(country);
    dispatch(accomodationFilterGetApi(country, searchFilter));
  };

  // useEffect(() => {
  //   dispatch(viewTerminatePropertyApi(location, country, searchFilter));
  // }, [location, country, searchFilter]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleAddNewProperty = () => {
    // sessionStorage.setItem("p_id", "");
    navigate("/editproperty");
  };

  const handleCompare = () => {
    navigate("/compare");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: "",
      landlord_or_company_name: "",
    },
    validationSchema: Yup.object({
      landlord_or_company_name: Yup.string().required(
        "Company Name is required"
      ),
    }),
    onSubmit: (values) => {
      formik.resetForm();
    },
  });

  const handleTerminate = (propid) => {
    setPropId(propid);
    setDeleteOpen(true);
  };

  return (
    <>
      <AccomodationSearchBox />
      <div>
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            // flexWrap: "wrap",
            paddingBottom: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div style={{ width: "380px" }}>
              <div className="formik-select-wrapper">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <label
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      paddingTop: "8px",
                    }}
                  >
                    Select Country
                  </label>
                  <TextField
                    select
                    margin="normal"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      handleCountry(e);
                    }}
                    value={formik.values.name}
                    variant="outlined"
                    sx={{
                      "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          padding: "9.5px",
                        },
                      "& .css-1wc848c-MuiFormHelperText-root ": {
                        marginTop: "0px",
                      },
                      mt: 0,
                      mb: 0,
                      width: "50%",
                      backgroundColor: "white",
                    }}
                    SelectProps={{
                      IconComponent: UilAngleDown,
                      MenuProps: {
                        PaperProps: {
                          style: {
                            maxHeight: "250px",
                          },
                        },
                      },
                    }}
                  >
                    {countryInfo?.data?.map((option, index) => (
                      <MenuItem key={option.id} value={index + 1}>
                        <div
                          className={
                            option.active ? "active-dot" : "non-active-dot"
                          }
                        ></div>

                        {option?.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
            </div>
          
            <div >
              {" "}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  sx={{
                    "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
                      padding: "0px",
                    },
                    backgroundColor: "white",
                  }}
                  type="text"
                  placeholder="Search..."
                  value={searchFilter}
                  onChange={(e) => handleSearch(e)}
                  InputProps={{
                    endAdornment: <SearchIcon />,
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {" "}
            <div>
              <Button
                onClick={handleAddNewProperty}
                style={{
                  textTransform: "none",
                  backgroundColor: "#1373c8",
                  borderRadius: "10px",
                }}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Add New Property
              </Button>
            </div>
            <div>
              <Button
                onClick={handleCompare}
                style={{
                  textTransform: "none",
                  backgroundColor: "orange",
                  borderRadius: "10px",
                }}
                variant="contained"
                startIcon={<CompareArrowsIcon />}
              >
                Compare Property
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CounterCardData />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList sx={{ pt: 2, pb: 1 }} onChange={handleChange}>
              <Tab className="color" label="Active Property" value="1" />

              <Tab className="color" label="Terminated Property" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {activeProperty?.map((productdatas, i) => {
                return (
                  <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                    <Card
                      className="accom-main-card"
                      sx={{
                        cursor: "pointer",
                        padding: "5px",
                        borderRadius: "8px",
                        // height: "48vh",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {productdatas ? (
                        <CardMedia
                          onClick={handleOpenRealEstate}
                          component="img"
                          sx={{
                            height: "20vh",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                          }}
                          src={productdatas.property_photo}
                          alt="icon"
                        />
                      ) : (
                        <Typography
                          onClick={handleOpenRealEstate}
                          sx={{
                            height: "20vh",
                            padding: "10px",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            color: "black",
                          }}
                          variant="body2"
                        >
                          No images Found...!
                        </Typography>
                      )}
                      <CardContent sx={{ flex: "1" }}>
                        <Typography
                          className="acconcard-h6"
                          sx={{ pb: 1, fontSize: "17px" }}
                          onClick={handleOpenRealEstate}
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          {productdatas.property_name}
                        </Typography>

                        <Stack direction="column" spacing={3}>
                          <div
                            // style={{ display: "flex", gap: "20px" }}
                            onClick={handleOpenRealEstate}
                          >
                            <div>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>No.of Rooms:</b> {productdatas?.no_of_rooms}
                              </Typography>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Occupied:</b>{" "}
                                {productdatas?.property_allocated}
                              </Typography>

                              <Typography variant="subtitle2" gutterBottom>
                                <b>Landloard:</b> {productdatas?.landlord_name}
                              </Typography>

                              <Typography variant="subtitle2" gutterBottom>
                                <b>Contract Date:</b>{" "}
                                {productdatas?.contract_start_date}
                              </Typography>

                              <Typography variant="subtitle2" gutterBottom>
                                <b>Age of Property:</b>{" "}
                                {productdatas?.age_of_property}
                              </Typography>
                            </div>
                            <div>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Type:</b> {productdatas?.type}
                              </Typography>{" "}
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Category:</b> {productdatas?.category}
                              </Typography>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Expiry Date:</b>{" "}
                                {productdatas?.contract_expiry_date}
                              </Typography>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Location:</b> {productdatas?.location}
                              </Typography>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Status:</b> {productdatas?.status}
                              </Typography>
                            </div>
                          </div>

                          <Stack
                            direction="row"
                            justifyContent="end"
                            spacing={1}
                          >
                            <Typography
                              onClick={() => handleEdit(productdatas?.id)}
                              variant="subtitle2"
                              gutterBottom
                            >
                              <Stack
                                direction="column"
                                alignItems="center"
                                spacing={0.2}
                              >
                                <img src={bt3} />
                                <b style={{ fontSize: "11px" }}> Edit/Update</b>
                              </Stack>
                            </Typography>
                            <Typography
                              onClick={() => {
                                handleTerminate(productdatas?.id);
                              }}
                              variant="subtitle2"
                              gutterBottom
                            >
                              <Stack
                                direction="column"
                                alignItems="center"
                                spacing={0.2}
                              >
                                <img src={bt2} />

                                <b style={{ fontSize: "11px" }}>Terminate</b>
                              </Stack>
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                              <Stack
                                direction="column"
                                alignItems="center"
                                spacing={0.2}
                              >
                                <img src={bt1} />

                                <b style={{ fontSize: "11px" }}>Renew</b>
                              </Stack>
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              sx={{
                pt: 3,
                marginLeft: "auto",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Pagination
                count={Math.ceil(mainCard?.length / pageSize)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
              />
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {terminatedProperty?.map((a, i) => {
                return (
                  <Grid key={i} item xs={3}>
                    <Card
                      className="inactive"
                      sx={{
                        // cursor: "pointer",
                        padding: "5px",
                        borderRadius: "8px",
                        // height: "48vh",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {a ? (
                        <CardMedia
                          component="img"
                          sx={{
                            height: "20vh",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                          }}
                          src={a?.property_photo}
                          alt="icon"
                        />
                      ) : (
                        <Typography
                          sx={{
                            height: "20vh",
                            padding: "10px",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            color: "black",
                          }}
                          variant="body2"
                        >
                          No images sorry...!
                        </Typography>
                      )}
                      <CardContent>
                        <Typography
                          sx={{ pb: 1 }}
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          {a?.property_name}
                        </Typography>

                        <Stack direction="column" spacing={3}>
                          <div style={{ gap: "20px" }}>
                            <div>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>No.of Rooms:</b> {a?.no_of_rooms}
                              </Typography>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Occupied:</b> {a.occupied}
                              </Typography>

                              <Typography variant="subtitle2" gutterBottom>
                                <b>Landloard:</b> {a?.landlord_name}
                              </Typography>

                              <Typography variant="subtitle2" gutterBottom>
                                <b>Contact Date:</b> {a?.contract_start_date}
                              </Typography>

                              <Typography variant="subtitle2" gutterBottom>
                                <b>Age of Property:</b> {a?.age_of_property}
                              </Typography>
                            </div>
                            <div>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Type:</b> {a?.type}
                              </Typography>{" "}
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Category:</b> {a?.category}
                              </Typography>
                              <Typography variant="subtitle2" gutterBottom>
                                <b>Expiry Date:</b> {a?.contract_expiry_date}
                              </Typography>
                              <Typography
                                sx={{ pt: 3 }}
                                variant="subtitle2"
                                gutterBottom
                              >
                                <b>Status:</b> {a?.status}
                              </Typography>
                            </div>
                          </div>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              sx={{
                pt: 3,
                marginLeft: "auto",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Pagination
                count={Math.ceil(getAllTerminatedInfo?.data?.length / pageSize)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
              />
            </Grid>
          </TabPanel>
        </TabContext>
        {handleAccomCardLoading && <Loader />}
      </Box>
      <PropertyCardDeleteModal
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        propId={propId}
      />
    </>
  );
};

export default PropertyCard;

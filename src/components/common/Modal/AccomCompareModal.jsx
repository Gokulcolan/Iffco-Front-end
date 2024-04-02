import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CommonSelect from "../../fields/CommonSelect";
import { adminSelector } from "../../../redux/slice/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  AccomodationCardGetApi,
  accomCompareGetApi,
  accomodationFilterGetApi,
  countryGetApi,
  countryIdByLocationGetApi,
} from "../../../redux/action/adminAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../common/Modal/AddRomm.css";
import { UilAngleDown } from "@iconscout/react-unicons";

function AccomCompareModal({ openAccom, setOpenAccom, onSubmit }) {
  const [countryName, setCountryName] = useState();
  const [searchFilter, setSearchFilter] = useState("");

  const dispatch = useDispatch();

  const { accomCardInfo, countryInfo, accomoFilterInfo } =
    useSelector(adminSelector);

  const handleClose = () => {
    setOpenAccom(false);
  };

  const handleCountry = (e) => {
    setCountryName(e.target.value);
    dispatch(countryIdByLocationGetApi(e.target.value));
  };

  useEffect(() => {
    dispatch(AccomodationCardGetApi());
    dispatch(countryGetApi());
  }, []);

  const getPropertyName = (propertyname) => {
    let id = accomCardInfo?.data.filter(
      (carddata) => carddata.property_name === propertyname
    )[0].id;
    return id;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      country: "",
      property_name: "",
    },
    validationSchema: Yup.object({
      country: Yup.string().required("property name is required"),
      property_name: Yup.string().required("property name is required"),
    }),
    onSubmit: (values) => {
      let val = {
        id: getPropertyName(values?.property_name),
      };
      // console.log("propertyDetailInfo", val);
      dispatch(accomCompareGetApi(val));
      handleClose();
      onSubmit();
      formik.resetForm();
    },
  });

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(accomodationFilterGetApi(countryName, searchFilter));
  }, [countryName, searchFilter]);

  return (
    <div>
      <Dialog
        open={openAccom}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          className="select_prop"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <h6 style={{ fontSize: "17px", paddingTop: "10px" }}>
            Select a Property to compare
          </h6>
          <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
        </div>
        <div className="digital">
          <DialogContent>
            <Grid item xs={6} md={6}>
              <div style={{}}>
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
                      "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root":
                        {
                          padding: "0px",
                        },
                      backgroundColor: "white",
                    }}
                    type="text"
                    placeholder="Search Property..."
                    value={searchFilter}
                    onChange={(e) => handleSearch(e)}
                    InputProps={{
                      endAdornment: <SearchIcon />,
                      backgroundColor: "white",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <div
              style={{
                //
                textAlign: "center",
                padding: "10px",
                fontWeight: "500",
              }}
            >
              <span>or</span>
            </div>

            <Grid item xs={6} md={6}>
              <div style={{ width: "400px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
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
                    fullWidth
                    select
                    margin="normal"
                    // name="country"
                    id="country"
                    value={countryName}
                    formik={formik}

                    // onChange={(e) => {
                    //   handleCountry(e);
                    // }}
                    // {...formik.getFieldProps('country')} // Bind the field to formik
                    
                    onChange={(e) => {
                      formik.handleChange(e); // Manually handle the change event
                      handleCountry(e); // Your custom function
                    }}

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
            </Grid>

            <Grid sx={{ pt: 2 }} item xs={6} md={6}>
              <CommonSelect
                id="property_name"
                label="Select Property"
                formik={formik}
                options={accomoFilterInfo}
              />
            </Grid>

            {/* <CommonSelectFormik
                id="city_name"
                label="Select Location"
                options={countryIdLocationInfo?.data}
                formik={formik}
              /> */}
            {/* <Grid sx={{ pt: 1 }} item xs={6} md={6}>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
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
                  Select Location
                </label>
                <TextField
                  fullWidth
                  select
                  margin="normal"
                  name="location"
                  value={locationName}
                  onChange={(e) => {
                    handleLocation(e);
                  }}
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
                  {countryIdLocationInfo?.data?.map((option, index) => (
                    <MenuItem key={option.id} value={index + 1}>
                      <div
                        className={
                          option.active ? "active-dot" : "non-active-dot"
                        }
                      ></div>

                      {option?.city_name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid> */}
          </DialogContent>
        </div>
        <DialogActions sx={{ placeContent: "center", pb: 3 }}>
          <Button
            style={{
              backgroundColor: "rgb(25, 118, 210)",
              textTransform: "none",
              padding: "7px 18px",
            }}
            variant="contained"
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AccomCompareModal;

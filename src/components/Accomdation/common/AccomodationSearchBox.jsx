import React, { useEffect, useState } from "react";
import CommonDropdownFields from "../../fields/CommonDropdownFields";
import CommonSearchbar from "../../common/CommonSearchbar";
import { Button, MenuItem, TextField, inputLabelClasses } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";
import { countryData, statusData } from "../../common/SelectOptions";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonAccomSelect from "../../fields/CommonAccomSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  accomodationFilterGetApi,
  locationGetApi,
} from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";
import SearchIcon from "@mui/icons-material/Search";
import { UilAngleDown } from "@iconscout/react-unicons";
// import "../fields/feildstyle.scss";

function AccomodationSearchBox() {
  // const { locationInfo } = useSelector(adminSelector);
  // const [searchFilter, setSearchFilter] = useState("");

  // const router = useNavigate();
  // const dispatch = useDispatch();
  // const handleAddNewProperty = () => {
  //   router("/editproperty");
  // };

  // const handleCompare = () => {
  //   router("/compare");
  // };
  // useEffect(() => {
  //   dispatch(locationGetApi());
  // }, []);
  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues: {
  //     id: "",
  //     landlord_or_company_name: "",
  //   },
  //   validationSchema: Yup.object({
  //     landlord_or_company_name: Yup.string().required(
  //       "Company Name is required"
  //     ),
  //   }),
  //   onSubmit: (values) => {
  //     formik.resetForm();
  //   },
  // });

  // const handleLocation = (e) => {
  //   console.log("log", e);
  //   dispatch(accomodationFilterGetApi(e.target.value));
  // };
  return (
    // <div>
    //   <div
    //     style={{
    //       paddingTop: "10px",
    //       display: "flex",
    //       justifyContent: "space-between",
    //       flexWrap: "wrap",
    //       paddingBottom: "25px",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         flexWrap: "wrap",
    //         gap: "10px",
    //       }}
    //     >
    //       <div style={{ width: "380px" }}>
    //         <div className="formik-select-wrapper">
    //           <div
    //             style={{
    //               display: "flex",
    //               flexDirection: "row",
    //               gap: "15px",
    //               flexWrap: "wrap",
    //             }}
    //           >
    //             <label
    //               style={{
    //                 fontSize: "15px",
    //                 fontWeight: "600",
    //                 paddingTop: "8px",
    //               }}
    //             >
    //               Select Location
    //             </label>
    //             <TextField
    //               select
    //               margin="normal"
    //               name="city_name"
    //               onBlur={formik.handleBlur}
    //               onChange={(e) => {
    //                 handleLocation(e);
    //               }}
    //               value={formik.values.city_name}
    //               variant="outlined"
    //               sx={{
    //                 "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
    //                   {
    //                     padding: "9.5px",
    //                   },
    //                 "& .css-1wc848c-MuiFormHelperText-root ": {
    //                   marginTop: "0px",
    //                 },
    //                 mt: 0,
    //                 mb: 0,
    //                 width: "50%",
    //                 backgroundColor: "white",
    //               }}
    //               SelectProps={{
    //                 IconComponent: UilAngleDown,
    //                 MenuProps: {
    //                   PaperProps: {
    //                     style: {
    //                       maxHeight: "250px",
    //                     },
    //                   },
    //                 },
    //               }}
    //             >
    //               {locationInfo?.data?.map((option, index) => (
    //                 <MenuItem key={option.id} value={index + 1}>
    //                   <div
    //                     className={
    //                       option.active ? "active-dot" : "non-active-dot"
    //                     }
    //                   ></div>

    //                   {option?.city_name}
    //                 </MenuItem>
    //               ))}
    //             </TextField>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{ width: "360px" }}>
    //         {" "}
    //         <div
    //           style={{
    //             position: "relative",
    //             display: "flex",
    //           }}
    //         >
    //           <TextField
    //             fullWidth
    //             size="small"
    //             sx={{
    //               "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
    //                 padding: "0px",
    //               },
    //               backgroundColor: "white",
    //             }}
    //             type="text"
    //             placeholder="Search..."
    //             value={searchFilter}
    //             onChange={(e) => setSearchFilter(e.target.value)}
    //             InputProps={{
    //               endAdornment: <SearchIcon />,
    //               backgroundColor: "white",
    //             }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         gap: "10px",
    //         alignItems: "center",
    //       }}
    //     >
    //       {" "}
    //       <div>
    //         <Button
    //           onClick={handleAddNewProperty}
    //           style={{
    //             textTransform: "none",
    //             backgroundColor: "#e22d2c",
    //             borderRadius: "10px",
    //           }}
    //           variant="contained"
    //           startIcon={<AddIcon />}
    //         >
    //           Add New Property
    //         </Button>
    //       </div>
    //       <div>
    //         <Button
    //           onClick={handleCompare}
    //           style={{
    //             textTransform: "none",
    //             backgroundColor: "orange",
    //             borderRadius: "10px",
    //           }}
    //           variant="contained"
    //           startIcon={<CompareArrowsIcon />}
    //         >
    //           Compare Property
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
}

export default AccomodationSearchBox;

import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "../../Accomdation/propertycard/PropertyCard.scss";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import AddRoomModal from "../Modal/AddRoomModal";
import PropertyTableData from "../../propertyTableData/PropertyTableData";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextsFormik from "../../fields/CommonTextsFormik";
import {
  countryGetApi,
  countryIdByLocationGetApi,
  getPropertyByIdApi,
  handlePropertyDetaildAPi,
  propertyCategoryGetApi,
  propertyDetailsEditApi,
  propertyStatusGetApi,
  propertyTypeGetApi,
  renewalNoticeGetApi,
} from "../../../redux/action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { adminSelector } from "../../../redux/slice/adminSlice";
import CommonSelectFormik from "../../fields/CommonSelectFormik";
import { useLocation, useNavigate } from "react-router-dom";

export const PropertyDetails = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { editCard } = location?.state || {};
  const propertyId = editCard?.id;
  let customStyles = { width: "30%" };

  const {
    countryIdLocationInfo,
    addRoomInfo,
    countryInfo,
    renewalInfo,
    propertyStatusInfo,
    getPropertyByIdInfo,
    propertyCategoryInfo,
  } = useSelector(adminSelector);

  const [addRoomOpen, setAddRoomOpen] = useState(false);
  const [countryName, setCountryName] = useState();
  const [baseImage, setBaseImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteRoom, setDeleteRoom] = useState(true);

  // const propid = sessionStorage.getItem("p_id");

  let roomIds = [addRoomInfo[0]?.room?.id];

  useEffect(() => {
    dispatch(countryGetApi());
    dispatch(renewalNoticeGetApi());
    dispatch(propertyStatusGetApi());
    dispatch(propertyTypeGetApi());
    dispatch(propertyCategoryGetApi());
    dispatch(getPropertyByIdApi(propertyId));
  }, [dispatch, propertyId]);

  const handleCountry = (e) => {
    setCountryName(e.target.value);
    dispatch(countryIdByLocationGetApi(e.target.value));
  };

  useEffect(() => {
    // Set initial country name and fetch country id by location
    if (getPropertyByIdInfo?.data?.location) {
      setCountryName(getPropertyByIdInfo.data.location.id);
      dispatch(countryIdByLocationGetApi(getPropertyByIdInfo.data.location.id));
    }
  }, [getPropertyByIdInfo, dispatch]);

  const handleFileChange = (e) => {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      reader.onload = () => {
        setBaseImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      setErrorMessage("");
    } else {
      setBaseImage("");
      setErrorMessage("Please select a valid image file.");
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      // Property Details
      property_code: getPropertyByIdInfo?.data?.property_code ?? "",
      property_name: getPropertyByIdInfo?.data?.property_name ?? "",
      category: getPropertyByIdInfo?.data?.category?.id ?? "",
      country: getPropertyByIdInfo?.data?.country?.id ?? "",
      // location: getPropertyByIdInfo?.data?.location?.id ?? "",
      location: "",

      property_area: getPropertyByIdInfo?.data?.property_area ?? "",
      no_of_floors: getPropertyByIdInfo?.data?.no_of_floors ?? "",
      no_of_rooms: getPropertyByIdInfo?.data?.no_of_rooms ?? "",
      renewal_notice_days:
        getPropertyByIdInfo?.data?.renewal_notice_days.id ?? "",
      address: getPropertyByIdInfo?.data?.address.address ?? "",

      // common Ammentities

      no_of_airconditioners:
        getPropertyByIdInfo?.data?.property_amneties_details[0]
          ?.no_of_airconditioners ?? "",
      no_of_restrooms:
        getPropertyByIdInfo?.data?.property_amneties_details[0]
          ?.no_of_restrooms ?? "",
      furniture:
        getPropertyByIdInfo?.data?.property_amneties_details[0]?.furniture ??
        "",
      house_keeping_services:
        getPropertyByIdInfo?.data?.property_amneties_details[0]
          ?.house_keeping_services ?? "",
      laundry_services:
        getPropertyByIdInfo?.data?.property_amneties_details[0]
          ?.laundry_services ?? "",
      kitchen_appliances:
        getPropertyByIdInfo?.data?.property_amneties_details[0]
          ?.kitchen_appliances ?? "",

      // Add Room
      room_no: getPropertyByIdInfo?.data?.room_no ?? "",
      no_of_residents: getPropertyByIdInfo?.data?.no_of_residents ?? "",
      bath_attached: getPropertyByIdInfo?.data?.bath_attached ?? "",
      room_type: getPropertyByIdInfo?.data?.room_type ?? "",
      room_status: getPropertyByIdInfo?.data?.room_status ?? "",
      room_amenitie: getPropertyByIdInfo?.data?.room_amenitie ?? "",

      // Room Status
      status: getPropertyByIdInfo?.data?.status?.id ?? "",
      image_data:
        getPropertyByIdInfo?.data?.property_photo[0]?.image_data ?? "",
    },
    validationSchema: Yup.object().shape({
      property_name: Yup.string().required("Property name is required"),
      category: Yup.string().required("Category is required"),
      property_code: Yup.number()
        .typeError("Property code must be a number")
        .required("Property code is required"),
      country: Yup.string().required("Country is required"),
      location: Yup.string().required("Location is required"),
      no_of_rooms: Yup.number()
        .typeError("No of rooms must be a number")
        .required("No of rooms is required"),
      no_of_floors: Yup.number()
        .typeError("No of floors must be a number")
        .required("No of floors is required"),
      property_area: Yup.number()
        .typeError("Property Sq.ft must be a number")
        .required("Property area is required"),
      renewal_notice_days: Yup.string().required(
        "Renewal notice days is required"
      ),
      address: Yup.string().required("Address is required"),

      no_of_airconditioners: Yup.number()
        .typeError("No of airconditioners must be a number")
        .required("Number of air conditioners is required"),
      no_of_restrooms: Yup.number()
        .typeError("No of restrooms must be a number")
        .required("Number of restrooms is required"),
      furniture: Yup.string().required("Furniture details are required"),
      house_keeping_services: Yup.string().required(
        "Housekeeping services are required"
      ),
      laundry_services: Yup.string().required("Laundry services are required"),
      kitchen_appliances: Yup.string().required(
        "Kitchen appliances are required"
      ),

      image_data: Yup.string().required("Image is required"),
      status: Yup.string().required("Property status is required"),
    }),

    onSubmit: (values) => {
      setDeleteRoom(false);
      let createVal = {
        property_amenities: {
          no_of_airconditioners: values?.no_of_airconditioners,
          no_of_restrooms: values?.no_of_restrooms,
          house_keeping_services: values?.house_keeping_services,
          laundry_services: values?.laundry_services,
          kitchen_appliances: values?.kitchen_appliances,
          furniture: values?.furniture,
        },
        address: {
          address: values?.address,
          city: values?.location,
        },
        property_details: {
          property_code: values?.property_code,
          property_name: values?.property_name,
          property_area: values?.property_area,
          no_of_floors: values?.no_of_floors,
          no_of_rooms: values?.no_of_rooms,
          terms_and_conditions: null,
          country: countryName,
          location: values?.location,
          renewal_notice_days: values?.renewal_notice_days,
          category: values?.category,
          type: "2",
          // city_name: values?.location,
          status: values?.status,
        },
        property_images: [
          {
            property: null,
            image_data: baseImage,
          },
        ],
        rooms: roomIds,
      };

      let editVal = {
        property_id: propertyId,
        property_amenities: {
          no_of_airconditioners: values?.no_of_airconditioners,
          no_of_restrooms: values?.no_of_restrooms,
          house_keeping_services: values?.house_keeping_services,
          laundry_services: values?.laundry_services,
          kitchen_appliances: values?.kitchen_appliances,
          furniture: values?.furniture,
        },
        address: {
          address: values?.address,
          city: values?.location,
        },
        property_details: {
          property_code: values?.property_code,
          property_name: values?.property_name,
          property_area: values?.property_area,
          no_of_floors: values?.no_of_floors,
          no_of_rooms: values?.no_of_rooms,
          terms_and_conditions: null,
          country: countryName,
          location: values?.location,
          renewal_notice_days: values?.renewal_notice_days,
          category: values?.category,
          type: "2",
          // city_name: values?.location,
          status: values?.status,
        },
        // property_images: [
        //   {
        //     property: null,
        //     image_data: baseImage,
        //   },
        // ],
        // rooms: roomIds,
      };

      {
        editCard
          ? dispatch(propertyDetailsEditApi(editVal))
          : dispatch(handlePropertyDetaildAPi(createVal, props));
      }
      // formik.resetForm();
    },
  });
  console.log(getPropertyByIdInfo?.data?.category?.category, "sdasd");
  return (
    <>
      <Typography sx={{ pb: 5, fontWeight: "500" }} variant="h5" gutterBottom>
        Property Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            id="property_code"
            label="Property Code"
            placeholder="pc-0000"
            formik={formik}
            customStyle={customStyles}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Property Name"
            placeholder=""
            id="property_name"
            formik={formik}
            customStyle={customStyles}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonSelectFormik
            id="category"
            label="Category"
            formik={formik}
            customStyle={customStyles}
            defaultValue={getPropertyByIdInfo?.data?.category?.category}
            options={propertyCategoryInfo?.data}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonSelectFormik
            id="country"
            label="Country"
            formik={formik}
            customChange={(e) => {
              handleCountry(e);
            }}
            // customStyle={customStyles}
            options={countryInfo?.data}
            // onChange={}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonSelectFormik
            id="location"
            label="Select Location"
            formik={formik}
            options={countryIdLocationInfo?.data}
            defaultValue={getPropertyByIdInfo?.data?.location?.city_name}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Property Area(Sq Ft)"
            placeholder=""
            id="property_area"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="No Of Floors"
            placeholder=""
            id="no_of_floors"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            id="no_of_rooms"
            label="No Of Rooms"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonSelectFormik
            label="Renewal Notice Days"
            id="renewal_notice_days"
            formik={formik}
            options={renewalInfo?.data}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik id="address" label="Address" formik={formik} />
        </Grid>
      </Grid>
      <Button
        onClick={() => setAddRoomOpen(true)}
        style={{
          backgroundColor: "rgb(25, 118, 210)",
          color: "white",
          margin: "2rem 0px",
        }}
      >
        {" "}
        + Add Room
      </Button>
      <div>
        <PropertyTableData />
      </div>
      <Typography sx={{ pb: 5, fontWeight: "500" }} variant="h5" gutterBottom>
        Common Amenities
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            id="no_of_airconditioners"
            label=" No Of Airconditioners"
            formik={formik}
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="No Of Restrooms"
            id="no_of_restrooms"
            formik={formik}
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik label="Furniture" id="furniture" formik={formik} />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="House Keeping Services"
            id="house_keeping_services"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            id="laundry_services"
            label="Laundry Services"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            id="kitchen_appliances"
            label="Kitchen Appliances"
            formik={formik}
          />
        </Grid>
      </Grid>
      <Typography
        sx={{ pb: 3, pt: 5, fontWeight: "500" }}
        variant="h5"
        gutterBottom
      >
        Property Status
      </Typography>
      <Grid container spacing={2}>
        {" "}
        <Grid item xs={6} md={6}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "600",
                width: "30%",
              }}
            >
              Choose File
            </label>
            <input
              style={{
                border: "1px solid silver",
                borderRadius: "5px",
                padding: "5px",
                width: "70%",
              }}
              accept=".jpg,.jpeg,.png"
              type="file"
              name="image_data"
              id="image_data"
              onChange={handleFileChange}
              required
              // defaultValue={getPropertyByIdInfo?.data?.property_photo[0]?.image_data}
              error={Boolean(
                formik.touched.image_data && formik.errors.image_data
              )}
              helperText={
                <>{formik.touched.image_data && formik.errors.image_data}</>
              }
            />
          </div>
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonSelectFormik
            label="Property Status"
            id="status"
            formik={formik}
            options={propertyStatusInfo?.data}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        {editCard ? (
          <Button
            style={{
              backgroundColor: "rgb(25, 118, 210)",
              color: "white",
              margin: "2rem 0px",
            }}
            variant="contained"
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        ) : (
          <Button
            style={{
              backgroundColor: "rgb(25, 118, 210)",
              color: "white",
              margin: "2rem 0px",
            }}
            variant="contained"
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        )}
      </div>
      <AddRoomModal open={addRoomOpen} setOpen={setAddRoomOpen} />
    </>
  );
};

import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonDatePicker from "../../fields/CommonDatePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  countryGetApi,
  countryIdByLocationGetApi,
  handleFetchLandlordApi,
  handleLandlordAPi,
  handleUpdateLandlordAPi,
  landlordModePaymentGetApi,
  landlordPaymentCycleGetApi,
} from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextsFormik from "../../fields/CommonTextsFormik";
import CommonSelectFormik from "../../fields/CommonSelectFormik";
import CommonEndDate from "../../fields/commonEndDate";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

const LandlordDetails = (props) => {
  const [countryName, setCountryName] = useState();
  const [dateRange, setDateRange] = useState({
    contract_start_date: dayjs(new Date()).format("YYYY-MM-DD"),
  });

  const location = useLocation();
  const { editCard } = location?.state || {};
  const landLordId = editCard?.id;

  const [endDate, setEndDate] = useState({
    expiry_data: dayjs(new Date()).format("YYYY-MM-DD"),
  });

  const {
    countryIdLocationInfo,
    countryInfo,
    propertyDetailInfo,
    landlordModePaymentInfo,
    landlordPaymentCycleInfo,
    fetchLandLordDetailInfo,
  } = useSelector(adminSelector);

  const dispatch = useDispatch();

  const propertyId = sessionStorage.getItem("propertyId");

  const handleCountry = (e) => {
    // console.log("count", e.target.value);
    setCountryName(e.target.value);
    dispatch(countryIdByLocationGetApi(e.target.value));
  };

  useEffect(() => {
    dispatch(landlordModePaymentGetApi());
    dispatch(landlordPaymentCycleGetApi());
    dispatch(handleFetchLandlordApi(landLordId));
  }, []);

  useEffect(() => {
    dispatch(countryGetApi());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: fetchLandLordDetailInfo?.data?.id ?? "",
      landlord_or_company_name:
        fetchLandLordDetailInfo?.data?.landlord_or_company_name ?? "",
      contract_period: fetchLandLordDetailInfo?.data?.contract_period ?? "",
      contract_start_date:
        fetchLandLordDetailInfo?.data?.contract_start_date ?? "",
      expiry_data: fetchLandLordDetailInfo?.data?.expiry_data ?? "",
      location: fetchLandLordDetailInfo?.data?.location ?? "",
      country: fetchLandLordDetailInfo?.data?.country ?? "",
      property_age: fetchLandLordDetailInfo?.data?.property_age ?? "",
      contact_number: fetchLandLordDetailInfo?.data?.contact_number ?? "",
      email_id: fetchLandLordDetailInfo?.data?.email_id ?? "",
      address: fetchLandLordDetailInfo?.data?.address ?? "",
      property: fetchLandLordDetailInfo?.data?.property ?? "",

      // Payment details

      payment_cycle:
        fetchLandLordDetailInfo?.data?.payment_details[0]?.payment_cycle ?? "",
      mode_of_payment:
        fetchLandLordDetailInfo?.data?.payment_details[0]?.mode_of_payment ??
        "",
      annual_lease_or_rent:
        fetchLandLordDetailInfo?.data?.payment_details[0]
          ?.annual_lease_or_rent ?? "",
      tax: fetchLandLordDetailInfo?.data?.payment_details[0]?.tax ?? "",
      ejari: fetchLandLordDetailInfo?.data?.payment_details[0]?.ejari ?? "",
      other_charges:
        fetchLandLordDetailInfo?.data?.payment_details[0]?.other_charges ?? "",
      refundable_deposite:
        fetchLandLordDetailInfo?.data?.payment_details[0]
          ?.refundable_deposite ?? "",
      payment_cycle:
        fetchLandLordDetailInfo?.data?.payment_details[0]?.payment_cycle ?? "",
      mode_of_payment:
        fetchLandLordDetailInfo?.data?.payment_details[0]?.mode_of_payment ??
        "",
      property: propertyDetailInfo?.details?.id,

      // bank details
      bank_name:
        fetchLandLordDetailInfo?.data?.bank_details[0]?.bank_name ?? "",
      account_number:
        fetchLandLordDetailInfo?.data?.bank_details[0]?.account_number ?? "",
      branch: fetchLandLordDetailInfo?.data?.bank_details[0]?.branch ?? "",
      switch_code:
        fetchLandLordDetailInfo?.data?.bank_details[0]?.switch_code ?? "",
    },
    validationSchema: Yup.object({
      landlord_or_company_name: Yup.string().required(
        "Company Name is required"
      ),
      property_age: Yup.number()
        .typeError("Property age must be a number")
        .required("Property age is required"),
      contract_period: Yup.number()
        .typeError("Contract Period must be a number")
        .required("Contract period is required"),
      contract_start_date: Yup.string().required(
        "Contract Start date is required"
      ),
      expiry_data: Yup.string().required("Contract expiry date is required"),
      country: Yup.string().required("Country is required"),
      location: Yup.string().required("Location is required"),
      contact_number: Yup.number()
        .typeError("Contact number must be a number")
        .required("Contact number is required"),
      email_id: Yup.string()
        .email("Invalid email format")
        .required("Email id is required"),
      address: Yup.string().required("address is required"),

      annual_lease_or_rent: Yup.number()
        .typeError("rent amount must be a number")
        .required("Annual lease or rent is required"),
      payment_cycle: Yup.string().required("Payment Cycle is required"),
      mode_of_payment: Yup.string().required("Mode of payment is required"),
      tax: Yup.number()
        .typeError("Tax amount must be a number")
        .required("Tax is required"),
      ejari: Yup.number()
        .typeError("Ejari must be a number")
        .required("Ejari is required"),
      other_charges: Yup.number()
        .typeError("Charges must be a number")
        .required("Other charges is required"),
      refundable_deposite: Yup.number()
        .typeError("refundable deposite must be a number")
        .required("Refundable deposite is required"),

      bank_name: Yup.string().required("Bank name is required"),
      account_number: Yup.number()
        .typeError("account number must be a number")
        .required("Account Number is required"),
      branch: Yup.string().required("Branch id is required"),
      switch_code: Yup.string().required("Switch code is required"),
    }),
    onSubmit: (values) => {
      let val = {
        property_id: propertyId ?? landLordId,
        landlord: {
          landlord_or_company_name: values?.landlord_or_company_name,
          contract_period: values?.contract_period,
          contract_start_date: dateRange?.contract_start_date,
          expiry_data: endDate?.expiry_data,
          property_age: values?.property_age,
          contact_number: values?.contact_number,
          email_id: values?.email_id,
          country: countryName,
          location: values?.city_name,
          location: values?.location,
          city_name: values?.city_name,
          address: values?.address,
          property: propertyId ?? landLordId,
        },
        payments: {
          annual_lease_or_rent: values?.annual_lease_or_rent,
          tax: values?.tax,
          ejari: values?.ejari,
          other_charges: values?.other_charges,
          refundable_deposite: values?.refundable_deposite,
          payment_cycle: values?.payment_cycle,
          mode_of_payment: values?.mode_of_payment,
          property: propertyId ?? landLordId,
        },
        bank_details: {
          bank_name: values?.bank_name,
          account_number: values?.account_number,
          branch: values?.branch,
          switch_code: values?.switch_code,
          landlord: null,
          property: propertyId ?? landLordId,
        },
      };
      {
        editCard
          ? dispatch(handleUpdateLandlordAPi(val))
          : dispatch(handleLandlordAPi(val, props));
      }
      // formik.resetForm();
      props.onNext();
    },
  });

  const dateRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setDateRange({ [name]: formattedDate });
  };

  const endDateRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setEndDate({ [name]: formattedDate });
  };

  return (
    <>
      <Typography sx={{ pb: 5, fontWeight: "500" }} variant="h5" gutterBottom>
        Landlord Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            id="landlord_or_company_name"
            label=" Landlord Name / Company"
            placeholder=""
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Property Age"
            placeholder=""
            id="property_age"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Contract Period"
            placeholder=""
            id="contract_period"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonDatePicker
            name="contract_start_date"
            id="contract_start_date"
            label="Contract Start Date"
            handler={(date) => dateRangeHandler("contract_start_date", date)}
            value={dateRange?.contract_start_date}
            formik={formik}
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonEndDate
            label="Expiry Date"
            name="expiry_data"
            id="expiry_data"
            dateHandler={(date) => endDateRangeHandler("expiry_data", date)}
            value={endDate?.expiry_data}
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonSelectFormik
            id="country"
            label="Country"
            formik={formik}
            customChange={(e) => {
              handleCountry(e);
              formik.setFieldValue("country", e.target.value); // Update formik state
            }}
            defaultValue={fetchLandLordDetailInfo?.data?.country}
            // customStyle={customStyles}
            options={countryInfo?.data}
            // onChange={}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonSelectFormik
            id="location"
            label="Select Location"
            options={countryIdLocationInfo?.data}
            formik={formik}
            defaultValue={fetchLandLordDetailInfo?.data?.location}

            // defaultValue={getPropertyByIdInfo?.data?.location?.city_name}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Contact Number"
            placeholder=""
            id="contact_number"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Email Id"
            placeholder=""
            id="email_id"
            formik={formik}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Address"
            placeholder=""
            id="address"
            formik={formik}
          />
        </Grid>
      </Grid>

      <div style={{ marginTop: "50px" }}>
        <Typography sx={{ pb: 5, fontWeight: "500" }} variant="h5" gutterBottom>
          Payments
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Annual lease or rent"
              placeholder=""
              id="annual_lease_or_rent"
              formik={formik}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <CommonSelectFormik
              label="Payment Cycle"
              id="payment_cycle"
              formik={formik}
              options={landlordPaymentCycleInfo?.data}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CommonSelectFormik
              label="Mode Of Payment"
              id="mode_of_payment"
              formik={formik}
              options={landlordModePaymentInfo?.data}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Tax"
              placeholder=""
              id="tax"
              formik={formik}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Ejari"
              placeholder=""
              id="ejari"
              formik={formik}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label=" Other Charges"
              placeholder=""
              id="other_charges"
              formik={formik}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Refundable Deposite"
              placeholder=""
              id="refundable_deposite"
              formik={formik}
            />
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Typography sx={{ pb: 5, fontWeight: "500" }} variant="h5" gutterBottom>
          Bank Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Bank Name"
              placeholder=""
              id="bank_name"
              formik={formik}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Account Number"
              placeholder=""
              id="account_number"
              formik={formik}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Branch"
              placeholder=""
              id="branch"
              formik={formik}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CommonTextsFormik
              label="Switch Code"
              placeholder=""
              id="switch_code"
              formik={formik}
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
              // onClick={handleSave}
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
      </div>
    </>
  );
};

export default LandlordDetails;

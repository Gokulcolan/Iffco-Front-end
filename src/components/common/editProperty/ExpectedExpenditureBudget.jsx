import { Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  expenditureServiceProviderApi,
  expenditureServiceProviderGetApi,
  getAllExpenditureApi,
  handleExpenditureAPi,
  updateExpenditureApi,
} from "../../../redux/action/adminAction";
import CommonTextsFormik from "../../fields/CommonTextsFormik";
import { adminSelector } from "../../../redux/slice/adminSlice";
import { useLocation } from "react-router-dom";

const ExpectedExpenditureBudget = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const propid = sessionStorage.getItem("p_id");

  const { editCard, action } = location?.state || {};

  const { serviceProviderInfo, getAllExpenditureInfo } =
    useSelector(adminSelector);

  useEffect(() => {
    dispatch(expenditureServiceProviderGetApi());
    dispatch(expenditureServiceProviderApi());
  }, []);

  const requiredfield = (fieldid) => {
    return Yup.string().when(`${fieldid}`, {
      is: (fieldid) => !fieldid || fieldid.length === 0,
      then: () =>
        Yup.string().required(
          "Either maintanence providers or asset service provider is required"
        ),
    });
  };

  useEffect(() => {
    let val = {
      property_id: propid,
    };

    dispatch(getAllExpenditureApi(val));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      eb: getAllExpenditureInfo?.data?.expenditure_or_budget?.eb || "",
      water: getAllExpenditureInfo?.data?.expenditure_or_budget?.water || "",
      laundry:
        getAllExpenditureInfo?.data?.expenditure_or_budget?.laundry || "",
      maintenance:
        getAllExpenditureInfo?.data?.expenditure_or_budget?.maintenance || "",
      asset_services:
        getAllExpenditureInfo?.data?.expenditure_or_budget?.asset_services ||
        "",
      furniture_cost:
        getAllExpenditureInfo?.data?.expenditure_or_budget?.furniture_cost ||
        "",
      food_and_beverages:
        getAllExpenditureInfo?.data?.expenditure_or_budget
          ?.food_and_beverages || "",
      house_keeping:
        getAllExpenditureInfo?.data?.expenditure_or_budget?.house_keeping || "",
      other_expenses:
        getAllExpenditureInfo?.data?.expenditure_or_budget?.other_expenses ||
        "",
      provider_name:
        getAllExpenditureInfo?.data?.service_provider?.[0]?.provider_name || "",
      email_id:
        getAllExpenditureInfo?.data?.service_provider?.[0]?.email_id || "",
      contact_person:
        getAllExpenditureInfo?.data?.service_provider?.[0]?.contact_person ||
        "",
      contact_no:
        getAllExpenditureInfo?.data?.service_provider?.[0]?.contact_no || "",
      address:
        getAllExpenditureInfo?.data?.service_provider?.[0]?.address || "",
      asset_provider_name:
        getAllExpenditureInfo?.data?.service_provider?.[1]
          ?.asset_provider_name || "",
      asset_email_id:
        getAllExpenditureInfo?.data?.service_provider?.[1]?.asset_email_id ||
        "",
      asset_contact_person:
        getAllExpenditureInfo?.data?.service_provider?.[1]
          ?.asset_contact_person || "",
      asset_contact_no:
        getAllExpenditureInfo?.data?.service_provider?.[1]?.asset_contact_no ||
        "",
      asset_address:
        getAllExpenditureInfo?.data?.service_provider?.[1]?.asset_address || "",
    },
    validationSchema: Yup.object().shape(
      {
        eb: Yup.number()
          .typeError("EB must be a number")
          .required("EB is required"),
        water: Yup.number()
          .typeError("Water must be a number")
          .required("Water is required"),
        laundry: Yup.number()
          .typeError("Laundry must be a number")
          .required("Laundry is required"),
        maintenance: Yup.number()
          .typeError("Maintenance must be a number")
          .required("Maintenance is required"),
        asset_services: Yup.number()
          .typeError("Asset services must be a number")
          .required("Asset_services is required"),
        furniture_cost: Yup.number()
          .typeError("Furniture cost must be a number")
          .required("Furniture_cost is required"),
        food_and_beverages: Yup.number()
          .typeError("Food and beverages must be a number")
          .required("Food_and_beverages is required"),
        house_keeping: Yup.number()
          .typeError("House Keeping must be a number")
          .required("House_Keeping is required"),
        other_expenses: Yup.number()
          .typeError("Other Expenses must be a number")
          .required("Other_Expenses is required"),

        //changedd
        provider_name: Yup.string().required("Provider Name is required"),
        email_id: Yup.string()
          .email("Invalid email format")
          .required("Email id is required"),
        contact_person: Yup.string().required("Contact Person is required"),
        contact_no: Yup.number()
          .typeError("Contacts must be a number")
          .required("Contact Person is required"),
        address: Yup.string().required("address is required"),

        asset_provider_name: Yup.string().required("provider name is required"),
        asset_email_id: Yup.string()
          .email("Invalid email format")
          .required("Email id is required"),
        asset_contact_person: Yup.string().required(
          "Contact person is required"
        ),
        asset_contact_no: Yup.number()
          .typeError("Contacts must be a number")
          .required("address is required"),
        asset_address: Yup.string().required("address is required"),
      },
      // [
      //   ["provider_name", "asset_provider_name"],
      //   ["contact_person", "asset_contact_person"],
      //   ["email_id", "asset_email_id"],
      //   ["address", "asset_address"],
      //   ["contact_no", "asset_contact_no"],
      // ]
    ),
    onSubmit: (values) => {
      let val = {
        property_id: propid,
        expenditure_or_budget: {
          eb: values.eb,
          water: values.water,
          laundry: values.laundry,
          maintenance: values.maintenance,
          asset_services: values.asset_services,
          furniture_cost: values.furniture_cost,
          food_and_beverages: values.food_and_beverages,
          house_keeping: values.house_keeping,
          other_expenses: values.other_expenses,
          property: propid,
        },
        service_provider: [
          {
            provider_name: values.provider_name,
            email_id: values.email_id,
            contact_person: values.contact_person,
            contact_no: values.contact_no,
            address: values.address,
            service_provider: serviceProviderInfo?.data?.[0]?.id,
            property: propid,
          },
          {
            provider_name: values.asset_provider_name,
            email_id: values.asset_email_id,
            contact_person: values.asset_contact_person,
            contact_no: values.asset_contact_no,
            address: values.asset_address,
            service_provider: serviceProviderInfo?.data?.[1]?.id,
            property: propid,
          },
        ],
      };

      // props.onNext();
      // dispatch(handleExpenditureAPi(val));
      {
        editCard
          ? dispatch(updateExpenditureApi(val))
          : dispatch(handleExpenditureAPi(val, props));
      }

      formik.resetForm();
    },
  });

  return (
    <>
      <Typography
        sx={{ pb: 5, pt: 3, fontWeight: "500" }}
        variant="h5"
        gutterBottom
      >
        Expected Expenditure Budget
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="EB (AED in month)"
            id="eb"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Water (AED in month)"
            id="water"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Laundry (If any)"
            id="laundry"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Maintenance (AED in month)"
            id="maintenance"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Asset Services (AED in month)"
            id="asset_services"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Furniture Cost (AED in month)"
            id="furniture_cost"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Food And Beverages (AED in month)"
            id="food_and_beverages"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="House Keeping (AED in month)"
            id="house_keeping"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Other Expenses (AED in month)"
            id="other_expenses"
            formik={formik}
            placeholder=""
          />
        </Grid>
      </Grid>
      <br />
      <Typography
        sx={{ pb: 5, pt: 4, fontWeight: "500" }}
        variant="h5"
        gutterBottom
      >
        Other Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="(i) Maintenance Provider"
            id="provider_name"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Email ID"
            id="email_id"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Contact Person"
            id="contact_person"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Contact No"
            id="contact_no"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Address"
            id="address"
            formik={formik}
            placeholder=""
          />
        </Grid>
      </Grid>
      <Grid sx={{ pt: 5 }} container spacing={2}>
        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="(ii) Asset Service Provider"
            id="asset_provider_name"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Email ID"
            id="asset_email_id"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Contact Person"
            id="asset_contact_person"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Contact No"
            id="asset_contact_no"
            formik={formik}
            placeholder=""
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <CommonTextsFormik
            label="Address"
            id="asset_address"
            formik={formik}
            placeholder=""
          />
        </Grid>
      </Grid>

      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        {action ? (
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
    </>
  );
};

export default ExpectedExpenditureBudget;

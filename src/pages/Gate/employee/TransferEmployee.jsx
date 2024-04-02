import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import LogoutComponent from "../../../components/common/LogoutComponent";
import {
  callOptionData,
  checkinstatus,
  countryData,
  RoomType,
  SelectLocation,
  SelectProperty,
} from "../../../components/common/SelectOptions";
import CommonDate from "../../../components/fields/CommonDate";
import CommonDropdownFields from "../../../components/fields/CommonDropdownFields";
import SelectWithFormik from "../../../components/fields/SelectWithFormik";
import CommonTextFieldstwo from "../../../components/fields/CommonTextFieldstwo";
import CommonSelectFormik from "../../../components/fields/CommonSelectFormik";
import { useFormik } from "formik";
import * as Yup from "yup";

const TransferEmployee = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      no_of_airconditioners: "",
    },
    validationSchema: Yup.object({
      // property_name: Yup.string().required("Property name is required"),
      // country: Yup.string().required("Country is required"),
    }),
    onSubmit: () => {
      formik.resetForm();
    },
  });
  return (
    <div>
      <div style={{}}>
        <LogoutComponent
          mainheading={"Transfer Employee"}
          ptag={"(Room to Room)"}
        />
        <Card sx={{ p: 3, borderRadius: "20px" }}>
          <CardContent>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {" "}
              <Grid item xs={4}>
                {" "}
                <CommonTextFieldstwo label={"Emp ID"} />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <CommonTextFieldstwo label={"Emp Name"} />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <CommonTextFieldstwo label={"Emp Contact"} />
              </Grid>
              <Grid item xs={12}>
                <h4 style={{ fontSize: "18px", fontWeight: "650" }}>
                  Transfer to:
                </h4>
              </Grid>
              <Grid item xs={4}>
                {" "}
                <SelectWithFormik
                  label={"Select Location"}
                  options={countryData}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <SelectWithFormik
                  label={"Select Property"}
                  options={SelectProperty}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <SelectWithFormik
                  label={"Room Type"}
                  options={RoomType}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <CommonTextFieldstwo label={"Room Number"} />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <CommonDate label={"Date of Transfer"} />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <SelectWithFormik
                  label={"Status"}
                  options={checkinstatus}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={8}>
                {" "}
                <CommonTextFieldstwo label={"Reason for Transfer"} />
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "50px",
              }}
            >
              <Button
                style={{ backgroundColor: "rgb(19, 115, 200)", textTransform: "none" }}
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransferEmployee;

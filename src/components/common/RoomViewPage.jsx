import React from "react";
import LogoutComponent from "./LogoutComponent";
import { Button, Card, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { countryData } from "./SelectOptions";
import CommonTextFieldstwo, {
  CommonSelecttwo,
} from "../fields/CommonTextFieldstwo";
import "../common/romm.css";
import { CommonDateFromToPicker } from "../fields/CommonFromToDate";

function RoomViewPage() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      emp_Id: "",
      employee_Name: "",
      emp_contact: "",
      select_location: "",
      select_property: "",
      select_room: "",
      room_number: "",
      status: "",
      // no_of_airconditioners: "",
    },
    validationSchema: Yup.object({
      emp_Id: Yup.string().required("Employee Id is required"),
      employee_Name: Yup.string().required("Employee Name is required"),
      emp_contact: Yup.string().required("Employee contact is required"),
      select_location: Yup.string().required("select location is required"),
      select_property: Yup.string().required("select property is required"),
      select_room: Yup.string().required("select room is required"),
      room_number: Yup.string().required("room number is required"),
      status: Yup.string().required("select is required"),
    }),
    onSubmit: (values) => {
      formik.resetForm();
    },
  });
  return (
    <div>
      <LogoutComponent mainheading={"Room Info"} />
      <div>
        <Card style={{ padding: "40px" }}>
          <div className="room-div">
            <Grid className="room-div" container spacing={3}>
              <Grid item xs={7} md={7}>
                <CommonTextFieldstwo
                  id="emp_Id"
                  label="Emp Id"
                  placeholder=""
                  formik={formik}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <CommonTextFieldstwo
                  id="employee_Name"
                  label="Emp Name"
                  placeholder=""
                  formik={formik}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <CommonTextFieldstwo
                  id="emp_contact"
                  label="Emp Contact"
                  placeholder=""
                  formik={formik}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <CommonSelecttwo
                  label="Select Location"
                  id="select_location"
                  formik={formik}
                  options={countryData}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <CommonSelecttwo
                  label="Select Property"
                  id="select_property"
                  formik={formik}
                  options={countryData}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <CommonSelecttwo
                  label="Select Room"
                  id="select_room"
                  formik={formik}
                  options={countryData}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <CommonTextFieldstwo
                  id="room_number"
                  label="Room Number"
                  placeholder=""
                  formik={formik}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <CommonSelecttwo
                  label="Status"
                  id="status"
                  formik={formik}
                  options={countryData}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                }}
                item
                xs={7}
                md={7}
              >
                <CommonDateFromToPicker label={"Check-in Date"} />
                <CommonDateFromToPicker label={"Check-Out Date"} />
              </Grid>
            </Grid>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
              }}
            >
    
              <Button
                style={{
                  backgroundColor: "rgb(19, 115, 200)",
                  textTransform: "none",
                  width: "58%",
                }}
                variant="contained"
                onClick={formik.handleSubmit}
              >
                Edit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default RoomViewPage;

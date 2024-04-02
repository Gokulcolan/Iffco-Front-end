import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CommonTextsFormik from "../../fields/CommonTextsFormik";
import { useFormik } from "formik";
import * as Yup from "yup";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import CommonDatePicker from "../../fields/CommonDatePicker";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  AccomodationCardGetApi,
  terminatePropertyApi,
} from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";

function PropertyCardDeleteModal({ deleteOpen, setDeleteOpen, propId }) {
  const { accomCardInfo } = useSelector(adminSelector);

  const dispatch = useDispatch();

  const [dateRange, setDateRange] = useState({
    contract_expiry_date: dayjs(new Date()).format("YYYY-MM-DD"),
  });

  const dateRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setDateRange({ [name]: formattedDate });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      property_id: "",
      contract_expiry_date: "",
      approved_by: "",
      reason_for_termination: "",
    },
    validationSchema: Yup.object({
      // room_no: Yup.string().required(" house_keeping_services is required"),
      contract_expiry_date: Yup.string().required(
        "Contract expiry date is required"
      ),
      reason_for_termination: Yup.string().required(
        "Termination reason is required"
      ),
      approved_by: Yup.string().required("Aproved Person is required"),
    }),

    onSubmit: (values) => {
      let val = {
        property_id: propId,
        contract_expiry_date: dateRange?.payment_date,
        reason_for_termination: values?.reason_for_termination,
        approved_by: values?.approved_by,
      };
      dispatch(terminatePropertyApi(val));
      formik.resetForm();
      setDeleteOpen(false);
    },
  });

  const handleClose = () => {
    setDeleteOpen(false);
  };

  return (
    <div>
      <Dialog
        sx={{
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            padding: "15px !important",
            borderRadius: "10px",
          },
        }}
        open={deleteOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DialogContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PowerSettingsNewIcon fontSize="large" />
            </div>
            <DialogContentText
              sx={{
                color: "black",
                fontSize: "17px",
                paddingTop: "20px",
                textAlign: "center",
              }}
              id="alert-dialog-description"
            >
              Are you sure, Do you want to terminate the property?
            </DialogContentText>
          </DialogContent>
          <CloseIcon
            onClick={handleClose}
            sx={{ fontSize: "28px", cursor: "pointer" }}
          />
        </div>
        <DialogContent sx={{ mt: 1 }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} md={12}>
              <CommonDatePicker
                id="contract_expiry_date"
                name="contract_expiry_date"
                label="Contract Expiry Date"
                handler={(date) => dateRangeHandler("payment_date", date)}
                value={dateRange?.payment_date}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <CommonTextsFormik
                id="reason_for_termination"
                label="Reason for Termination"
                formik={formik}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <CommonTextsFormik
                id="approved_by"
                label="Approved By"
                formik={formik}
              />
            </Grid>
          </Grid>{" "}
        </DialogContent>

        <DialogActions sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <Button
            onClick={formik.handleSubmit}
            style={{
              backgroundColor: "rgb(25, 118, 210)",
              color: "white",
              textTransform: "none",
            }}
          >
            {" "}
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PropertyCardDeleteModal;

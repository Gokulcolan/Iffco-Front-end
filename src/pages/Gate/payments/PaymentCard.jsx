import { Button, Card, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TableWithPagination from "../../../components/common/TableWithPagination";
import CommonTextsFormik from "../../../components/fields/CommonTextsFormik";
import CommonDatePicker from "../../../components/fields/CommonDatePicker";
import PaymentTableDeleteModal from "../../../components/common/Modal/PaymentTableDeleteModal";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  paymentDetailsCreateApi,
  paymentDetailsEditApi,
  paymentDetailsGetApi,
} from "../../../redux/action/adminAction";
import dayjs from "dayjs";
import { adminSelector } from "../../../redux/slice/adminSlice";
import CommonSelectFormik from "../../../components/fields/CommonSelectFormik";
import { ModeOfPayment } from "../../../utils/constants/ProductCardData";

function PaymentCard() {
  const [dateRange, setDateRange] = useState({
    payment_date: dayjs(new Date()).format("YYYY-MM-DD"),
  });
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");
  const [fileName, setFileName] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [toEdit, setToEdit] = useState();

  console.log(toEdit, "toEdit");

  const dispatch = useDispatch();

  const { getPaymentDetailsInfo, createPaymentDetailsInfo } =
    useSelector(adminSelector);
  console.log(getPaymentDetailsInfo, "getPaymentDetailsInfo");

  const handleFileChange = (e) => {
    setFileName(e.target.value);
    formik.setFieldValue("proof", e.target.files[0]);
  };

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(paymentDetailsGetApi());
  }, [createPaymentDetailsInfo]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      voucher_number: toEdit?.voucher_number ?? "",
      property: toEdit?.property ?? "",
      payment_date: toEdit?.payment_date ?? "",
      payment_amount: toEdit?.payment_amount ?? "",
      payment_mode: toEdit?.payment_mode ?? "",
      comments: toEdit?.comments ?? "",
      proof: null,
    },
    validationSchema: Yup.object({
      voucher_number: Yup.number()
        .typeError("Voucher number must be a number")
        .required("voucher number is required"),
      property: Yup.number()
        .typeError("Property Code must be a number")
        .required("property code is required"),
      payment_date: Yup.string().required("date of payment is required"),
      payment_amount: Yup.number()
        .typeError("Payment amount  must be a number")
        .required("payment amount is required"),
      comments: Yup.string().required("comments is required"),
      payment_mode: Yup.string().required("Mode of Payment is required"),
      // proof: Yup.string().required("upload proof is required"),
    }),
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("voucher_number", values?.voucher_number);
      formData.append("payment_date", dateRange?.payment_date);
      formData.append("payment_amount", values?.payment_amount);
      formData.append("comments", values?.comments);
      formData.append("proof", values?.proof);
      formData.append("property", values?.property);
      formData.append("payment_mode", values?.payment_mode);
      formik.resetForm();
      {
        toEdit
          ? dispatch(paymentDetailsEditApi(formData))
          : dispatch(paymentDetailsCreateApi(formData));
      }
    },
  });

  const buttonclick = (label) => {
    if (label === "Actions") {
      setOpenDelete(true);
    }
  };

  const editPaymentValue = (editValue) => {
    // console.log(filteredRows, "rowdata for id");
    setToEdit(editValue);
  };

  // const filteredRows = getPaymentDetailsInfo?.filter((e) =>
  //   Object.values(e).some(
  //     (value) =>
  //       value &&
  //       value.toString().toLowerCase().includes(searchFilter.toLowerCase())
  //   )
  // )

  const filteredRows = getPaymentDetailsInfo?.data?.filter((e) =>
    Object.values(e).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchFilter.toLowerCase())
    )
  );

  console.log(filteredRows, "filteredRows");

  const dateRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setDateRange({ [name]: formattedDate });
  };

  // const clickCount = (e) => {
  //   console.log(e.target.value, "count");
  //   setCount(e);
  // };

  return (
    <>
      <div>
        <Card
          sx={{
            padding: "25px",
            borderRadius: "30px",
          }}
        >
          <h4>Payment Details</h4>
         
          <Grid sx={{ pt: 4, pb: 5 }} container spacing={2}>
            <Grid item xs={6} md={6}>
              <CommonTextsFormik
                id="voucher_number"
                label=" Voucher Number"
                placeholder=""
                formik={formik}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <CommonTextsFormik
                id="property"
                label=" Property Code"
                placeholder=""
                formik={formik}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <CommonDatePicker
                id="payment_date"
                name="payment_date"
                label="Payment Date"
                handler={(date) => dateRangeHandler("payment_date", date)}
                value={dateRange?.payment_date}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <CommonTextsFormik
                label="Payment Amount"
                id="payment_amount"
                formik={formik}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <CommonSelectFormik
                label="Mode Of Payment"
                id="payment_mode"
                formik={formik}
                options={ModeOfPayment}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <CommonTextsFormik
                id="comments"
                label="Comments"
                formik={formik}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Grid item xs={12} md={12}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                    accept=".jpg,.jpeg,.png,.pdf"
                    type="file"
                    name="room_photo"
                    id="room_photo"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          {toEdit ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <Button
                onClick={formik.handleSubmit}
                variant="contained"
                style={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#1f76ce",
                }}
              >
                Update
              </Button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <Button
                onClick={formik.handleSubmit}
                variant="contained"
                style={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#1f76ce",
                }}
              >
                Submit
              </Button>
            </div>
          )}
        </Card>
      </div>

      <Card
        sx={{
          padding: "25px",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>List Of Payments</h4>
          <div
            style={{
              position: "relative",
              display: "flex",
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
        <div
          className="d-flex col-md-10 col-lg-12 col-sm-12"
          style={{ justifyContent: "flex-end" }}
        ></div>

        <div style={{ paddingTop: "20px" }}>
          <TableWithPagination
            columns={[
              {
                id: "voucher_number",
                label: "Voucher",
                minWidth: "auto",
              },
              {
                id: "property",
                label: "Property",
                minWidth: "auto",
              },
              {
                id: "payment_date",
                label: "Date",
                minWidth: "auto",
              },
              {
                id: "payment_amount",
                label: "Amount",
                minWidth: "auto",
              },
              {
                id: "payment_mode",
                label: "Mode",
                minWidth: "auto",
              },
              {
                id: "proof",
                label: "Doc Name",
                minWidth: "auto",
              },

              {
                id: "comments",
                label: "Comments",
                minWidth: "auto",
              },
              {
                id: "ThreeActions",
                label: "Actions",
                minWidth: "auto",
              },
            ]}
            rows={filteredRows}
            buttonclick={buttonclick}
            editPaymentValue={editPaymentValue}
            paginationStatus={true}
            rowsPerPageOptions={paginationRowsOptions}
            page={page}
            size={size}
            handleChangePage={handlePageChange}
            handleChangeRowsPerPage={handlePerRowsChange}
          />
          <PaymentTableDeleteModal
            openDelete={openDelete}
            setOpenDelete={setOpenDelete}
          />
        </div>
      </Card>
    </>
  );
}

export default PaymentCard;

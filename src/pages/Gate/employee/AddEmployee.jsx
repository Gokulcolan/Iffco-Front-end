import { Button, Card, CardContent, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import RedCardTitle, {
  FriendsTitle,
  ResidentTitle,
} from "../../../components/common/RedCardTitle";
import CommonDatePicker from "../../../components/fields/CommonDatePicker";
import CommonTextsFormik from "../../../components/fields/CommonTextsFormik";
import LogoutComponent from "../../../components/common/LogoutComponent";
import CommonDate from "../../../components/fields/CommonDate";
import CommonUploadField from "../../../components/fields/CommonUploadField";
import CommonUploadlabel from "../../../components/fields/CommonUploadlabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addEmployeeApi } from "../../../redux/action/adminAction";
import dayjs from "dayjs";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const customStyle = { width: "100%" };
  const [dateRange, setDateRange] = useState({
    date_of_birth: dayjs(new Date()).format("YYYY-MM-DD"),
  });
  const [entryDate, setEntryDate] = useState({
    date_of_entry: dayjs(new Date()).format("YYYY-MM-DD"),
  });
  const [passportDate, setPassportDate] = useState({
    passport_expiry_date: dayjs(new Date()).format("YYYY-MM-DD"),
  });
  const [visaDate, setVisaDate] = useState({
    residence_visa_expiry_date: dayjs(new Date()).format("YYYY-MM-DD"),
  });
  const [emiratesDate, setEmiratesDate] = useState({
    emirates_id_expiry_date: dayjs(new Date()).format("YYYY-MM-DD"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      employee_code: "",
      name: "",
      place_of_birth: "",
      present_nationality: "",
      alias: "",
      date_of_birth: "",
      previous_nationality: "",
      sect: "",
      port_of_entry: "",
      religion: "",
      date_of_entry: "",
      sponsor_on_entry: "",
      present_sponsor: "",
      profession: "",
      bank: "",
      office_tel: "",
      salary: "",
      company_registration_no: "",
      emirates_id_no: "",
      emirates_id_expiry_date: "",
      passport_no: "",
      passport_expiry_date: "",
      residence_visa_no: "",
      residence_visa_expiry_date: "",
      zone: "",
      proprietor: "",
      floor: "",
      tel: "",
      email: "",
      reason: "",
      street: "",
      house_building_no: "",
      flat_no: "",
      mobile: "",
      po_box: "",
      nationality: "",
      name_of_employer: "",
      employer_name: "",
      relative_nationality: "",
      relative_name: "",
      contact: "",
      relative_type: "",
      friend_employer_name: "",
      friend_nationality: "",
      friend_name: "",
      friend_contact: "",
      friend_type: "",
      image: "",
      Supporting_documents: "",
    },
    validationSchema: Yup.object().shape({
      employee_code: Yup.number()
        .typeError("Employee code must be a number")
        .required("Employee code is required"),
      name: Yup.string().required("Name is required"),
      place_of_birth: Yup.string().required("place of birth is required"),
      present_nationality: Yup.string().required(
        "present nationality is required"
      ),
      alias: Yup.string().required("alias is required"),
      date_of_birth: Yup.string().required("Date of birth is required"),
      previous_nationality: Yup.string().required("Date of birth is required"),
      sect: Yup.string().required("sect is required"),
      port_of_entry: Yup.string().required("port_of_entry is required"),
      religion: Yup.string().required("religion is required"),
      date_of_entry: Yup.string().required("date_of_entry is required"),
      sponsor_on_entry: Yup.string().required("sponsor_on_entry is required"),
      present_sponsor: Yup.string().required("present_sponsor is required"),
      profession: Yup.string().required("profession is required"),
      bank: Yup.string().required("bank is required"),
      office_tel: Yup.number()
        .typeError("Telephone must be a number")
        .required("Telephone is required"),
      salary: Yup.number()
        .typeError("Salary must be a number")
        .required("Salary is required"),
      company_registration_no: Yup.number()
        .typeError("Company Registration must be a number")
        .required("Company Registration is required"),
      emirates_id_no: Yup.number()
        .typeError("emirates id must be a number")
        .required("emirates id is required"),
      emirates_id_expiry_date: Yup.string().required(
        "Emirates expiry date is required"
      ),
      passport_no: Yup.number()
        .typeError("passport number must be a number")
        .required("passport number is required"),
      passport_expiry_date: Yup.string().required(
        "passport expiry date is required"
      ),
      residence_visa_no: Yup.string().required("residence visa is required"),
      residence_visa_expiry_date: Yup.string().required(
        "residence visa expiry date is required"
      ),
      zone: Yup.string().required("zone is required"),
      proprietor: Yup.string().required("proprietor is required"),
      floor: Yup.string().required("floor is required"),
      tel: Yup.number()
        .typeError("telephone must be a number")
        .required("tel is required"),
      email: Yup.string().required("email is required"),
      reason: Yup.string().required("reason is required"),
      street: Yup.string().required("street is required"),
      house_building_no: Yup.number()
        .typeError("Building must be a number")
        .required("house_building_no is required"),
      flat_no: Yup.number()
        .typeError("Flat No must be a number")
        .required("flat no is required"),
      mobile: Yup.number()
        .typeError("Mobile must be a number")
        .required("mobile is required"),
      po_box: Yup.string().required("po box is required"),
      nationality: Yup.string().required("nationality is required"),
      name_of_employer: Yup.string().required("name of_employer is required"),
      employer_name: Yup.string().required("employer name is required"),
      relative_nationality: Yup.string().required(
        "relative nationality is required"
      ),
      relative_name: Yup.string().required("relative name is required"),
      contact: Yup.string().required("contact is required"),
      relative_type: Yup.string().required("relative type is required"),
      friend_employer_name: Yup.string().required(
        "friend employer name is required"
      ),
      friend_nationality: Yup.string().required(
        "friend nationality is required"
      ),
      friend_name: Yup.string().required("friend name is required"),
      friend_contact: Yup.string().required("friend contact is required"),
      friend_type: Yup.string().required("friend type is required"),
      image: Yup.string().required("image is required"),
      Supporting_documents: Yup.string().required(
        "Supporting Documents is required"
      ),
    }),
    onSubmit: (values) => {
      let val = {
        employee: {
          employee_code: values?.employee_code,
          name: values?.name,
          place_of_birth: values?.place_of_birth,
          present_nationality: values?.present_nationality,
          alias: values?.alias,
          date_of_birth: dateRange?.date_of_birth,
          previous_nationality: values?.previous_nationality,
          sect: values?.sect,
          port_of_entry: values?.port_of_entry,
          religion: values?.religion,
          date_of_entry: entryDate?.date_of_entry,
          sponsor_on_entry: values?.sponsor_on_entry,
          present_sponsor: values?.present_sponsor,
          profession: values?.profession,
          bank: values?.bank,
          office_tel: values?.office_tel,
          salary: values?.salary,
          company_registration_no: values?.company_registration_no,
        },
        passport_residence_details: {
          emirates_id_no: values?.emirates_id_no,
          emirates_id_expiry_date: emiratesDate?.emirates_id_expiry_date,
          passport_no: values?.passport_no,
          passport_expiry_date: passportDate?.passport_expiry_date,
          residence_visa_no: values?.residence_visa_no,
          residence_visa_expiry_date: visaDate?.residence_visa_expiry_date,
          zone: values?.zone,
          proprietor: values?.proprietor,
          floor: values?.floor,
          tel: values?.tel,
          email: values?.email,
          reason: values?.reason,
        },
        residence_details: {
          street: values?.street,
          house_building_no: values?.house_building_no,
          flat_no: values?.flat_no,
          mobile: values?.mobile,
          po_box: values?.po_box,
          nationality: values?.nationality,
          name_of_employer: values?.name_of_employer,
        },
        employer: [
          {
            employer_name: values?.employer_name,
            nationality: values?.relative_nationality,
            name: values?.relative_name,
            contact: values?.contact,
            relative_type: "Relative",
          },
          {
            employer_name: values?.friend_employer_name,
            nationality: values?.friend_nationality,
            name: values?.friend_name,
            contact: values?.friend_contact,
            friend_type: "Friend",
          },
        ],
      };
      formik.resetForm();
      dispatch(addEmployeeApi(val));
    },
  });

  const addempdetail = [
    {
      data: [
        {
          title: "Employee code",
          label: "Employee Code",
          textfield: true,
          id: "employee_code",
        },
        { title: "Name", label: "Name ", textfield: true, id: "name" },
        {
          title: "Place of Birth",
          label: " Place of Birth ",
          textfield: true,
          id: "place_of_birth",
        },
        {
          title: "Present Nationality",
          label: " Present Nationality ",
          textfield: true,
          id: "present_nationality",
        },
        {
          title: "Alias",
          label: " Alias ",
          textfield: true,
          id: "alias",
        },
        {
          title: "Date of Birth",
          label: "Date of Birth",
          dateofbirth: true,
          id: " date_of_birth",
        },
        {
          title: "Previous Nationality",
          label: "Previous Nationality",
          textfield: true,
          id: "previous_nationality",
        },
        { title: "Sect", label: "Sect", textfield: true, id: "sect" },
        {
          title: "Port of Entry",
          label: "Port of Entry",
          textfield: true,
          id: "port_of_entry",
        },
        {
          title: "Religion",
          label: "Religion",
          textfield: true,
          id: "religion",
        },
        {
          title: "Date of Entry",
          label: "Date of Entry",
          dateofentry: true,
          id: "date_of_entry",
        },
        {
          title: "Sponsor On Entry",
          label: "Sponsor On Entry",
          textfield: true,
          id: "sponsor_on_entry",
        },
        {
          title: "Present Sponsor",
          label: "Present Sponsor",
          textfield: true,
          id: "present_sponsor",
        },
        {
          title: "Profession",
          label: "Profession",
          textfield: true,
          id: "profession",
        },
        { title: "Bank", label: "Bank", textfield: true, id: "bank" },
        {
          title: "Office Tel#",
          label: "Office Telephone",
          textfield: true,
          id: "office_tel",
        },
        { title: "Salary", label: "Salary", textfield: true, id: "salary" },
        {
          title: "Company Registration No.",
          label: "Company Registration No.",
          textfield: true,
          id: "company_registration_no",
        },
      ],
    },
    {
      redtitle: "Passport & Residence Details",
      data: [
        {
          title: "Emirates Id No",
          label: "Emirates Id No",
          textfield: true,
          id: "emirates_id_no",
        },
        {
          title: "date of birth",
          label: "emirates_id_expiry_date",
          emiratesdate: true,
          id: "emirates_id_expiry_date",
        },
        {
          title: "Passport No",
          label: "Passport No ",

          textfield: true,
          id: "passport_no",
        },
        {
          title: "date of expiry",
          label: "Date of Expiry ",
          passportdate: true,
          id: "passport_expiry_date",
        },

        {
          title: "Residence Visa No",
          label: "Residence Visa No ",
          textfield: true,
          id: "residence_visa_no",
        },
        {
          title: "date of expiry",
          label: "Date of Expiry ",
          id: " residence_visa_expiry_date",
          visadate: true,
        },
        {
          title: "Zone",
          label: "Zone ",
          textfield: true,
          id: "zone",
        },
        {
          title: "Proprietor",
          label: "Proprietor ",
          textfield: true,
          id: "proprietor",
        },
        {
          title: "Floor",
          label: "Floor",
          textfield: true,
          id: "floor",
        },
        {
          title: "Tel",
          label: "Tel",
          textfield: true,
          id: "tel",
        },
        {
          title: "Email",
          label: "Email",
          textfield: true,
          id: "email",
        },
        {
          title: "Reason",
          label: "Reason",
          textfield: true,
          id: "reason",
        },
      ],
    },
    {
      residenttitle: "Residence Details",
      data: [
        {
          title: "Street",
          label: "Street",
          textfield: true,
          id: "street",
        },
        {
          title: "House/Buiding No",
          label: "House/Buiding No",
          textfield: true,
          id: "house_building_no",
        },
        {
          title: "Flat#",
          label: "Flat",
          textfield: true,
          id: "flat_no",
        },
        {
          title: "Mobile#",
          label: "Mobile",
          textfield: true,
          id: "mobile",
        },
        {
          title: "Po Box#",
          label: "Po Box",
          textfield: true,
          id: "po_box",
        },
        {
          title: "Nationality",
          label: "Nationality",
          textfield: true,
          id: "nationality",
        },
        {
          title: "Name Of Employer",
          label: "Name Of Employer",
          textfield: true,
          id: "name_of_employer",
        },
      ],
    },
    {
      relativestitle: "Relatives",
      data: [
        {
          title: "Employer",
          label: "Employer",
          textfield: true,
          id: "employer_name",
        },
        {
          title: "Nationality",
          label: "Nationality",
          textfield: true,
          id: "relative_nationality",
        },
        {
          title: "Name",
          label: "Name",
          textfield: true,
          id: "relative_name",
        },
        {
          title: "Contact",
          label: "Contact",
          textfield: true,
          id: "contact",
        },
      ],
    },
    {
      friendtitle: "Friends",
      data: [
        {
          title: "Employer",
          label: "Employer",
          textfield: true,
          id: "friend_employer_name",
        },
        {
          title: "Nationality",
          label: "Nationality",
          textfield: true,
          id: "friend_nationality",
        },
        {
          title: "Name",
          label: "Name",
          textfield: true,
          id: "friend_name",
        },
        {
          title: "Contact",
          label: "Contact",
          textfield: true,
          id: "friend_contact",
        },
      ],
    },
    {
      uploaddocumenttitle: "Upload Documents",
      data: [
        {
          title: "Photo",
          label: "Photo",
          upload: true,
          id: "image",
        },
        {
          title: "Supporting documents",
          label: "Supporting documents",
          upload: true,
          id: "Supporting_documents",
        },
        {
          title: "Photo",
          label: "Photo",
          upload: true,
          id: "image",
        },
        // {
        //   title: "Company Stamp",
        //   label: "Company Stamp",
        //   upload: true,
        // },
      ],
    },
  ];

  const dateRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setDateRange({ [name]: formattedDate });
  };

  const emiratesDateRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setEmiratesDate({ [name]: formattedDate });
  };

  const entryRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setEntryDate({ [name]: formattedDate });
  };

  const visaRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setVisaDate({ [name]: formattedDate });
  };

  const passportRangeHandler = (name, date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setPassportDate({ [name]: formattedDate });
  };

  return (
    <>
      <div style={{}}>
        <LogoutComponent mainheading={"Add Employees"} />
      </div>
      <Card sx={{ p: 3, borderRadius: "20px" }}>
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {addempdetail?.map((value) => {
              return (
                <>
                  {value.redtitle && (
                    <Grid sx={{ p: 2 }} item xs={12}>
                      <RedCardTitle title={value.redtitle} />
                    </Grid>
                  )}
                  {value.residenttitle && (
                    <Grid sx={{ p: 2 }} item xs={12}>
                      <ResidentTitle title={value.residenttitle} />
                    </Grid>
                  )}
                  {value.relativestitle && (
                    <Grid sx={{ p: 2 }} item xs={12}>
                      <FriendsTitle title={value.relativestitle} />
                    </Grid>
                  )}
                  {value.friendtitle && (
                    <Grid sx={{ p: 2 }} item xs={12}>
                      <FriendsTitle title={value.friendtitle} />
                    </Grid>
                  )}
                  {value.uploaddocumenttitle && (
                    <Grid sx={{ p: 2 }} item xs={12}>
                      <FriendsTitle title={value.uploaddocumenttitle} />
                    </Grid>
                  )}
                  {value.data.map((cardvalue) => {
                    return (
                      <>
                        <Grid item xs={12} sm={6} md={4} xl={2}>
                          {cardvalue.textfield ? (
                            <CommonTextsFormik
                              title={cardvalue.title}
                              label={cardvalue.label}
                              id={cardvalue.id}
                              formik={formik}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          ) : cardvalue.upload ? (
                            <CommonUploadlabel
                              title={cardvalue.title}
                              label={cardvalue.label}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          ) : cardvalue.dateofbirth ? (
                            <CommonDatePicker
                              name="date_of_birth"
                              label="Date of birth"
                              handler={(date) =>
                                dateRangeHandler("date_of_birth", date)
                              }
                              value={dateRange?.date_of_birth}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          ) : cardvalue.dateofentry ? (
                            <CommonDatePicker
                              name="date_of_entry"
                              label="Date of Entry"
                              handler={(date) =>
                                entryRangeHandler("date_of_entry", date)
                              }
                              value={entryDate?.date_of_entry}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          ) : cardvalue.emiratesdate ? (
                            <CommonDatePicker
                              name="emirates_id_expiry_date"
                              label="emirates Expiry Date"
                              handler={(date) =>
                                emiratesDateRangeHandler(
                                  "emirates_id_expiry_date",
                                  date
                                )
                              }
                              value={emiratesDate?.emirates_id_expiry_date}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          ) : cardvalue.passportdate ? (
                            <CommonDatePicker
                              name="passport_expiry_date"
                              label="Passport Expiry Date"
                              handler={(date) =>
                                passportRangeHandler(
                                  "passport_expiry_date",
                                  date
                                )
                              }
                              value={passportDate?.passport_expiry_date}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          ) : cardvalue.visadate ? (
                            <CommonDatePicker
                              name="residence_visa_expiry_date"
                              label="Residence Visa Expiry Date"
                              handler={(date) =>
                                visaRangeHandler(
                                  "residence_visa_expiry_date",
                                  date
                                )
                              }
                              value={visaDate?.residence_visa_expiry_date}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          ) : (
                            <CommonDatePicker
                              name="residence_visa_expiry_date"
                              label="Residence Visa Expiry Date"
                              handler={(date) =>
                                visaRangeHandler(
                                  "residence_visa_expiry_date",
                                  date
                                )
                              }
                              value={visaDate?.residence_visa_expiry_date}
                              customStyles={customStyle}
                              module="AddEmployee"
                            />
                          )}
                        </Grid>
                      </>
                    );
                  })}
                </>
              );
            })}
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "50px",
            }}
          >
            <Button
              onClick={formik.handleSubmit}
              style={{ backgroundColor: "#1373c8", textTransform: "none" }}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AddEmployee;

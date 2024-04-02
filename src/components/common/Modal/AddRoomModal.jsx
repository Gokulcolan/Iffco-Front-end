import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../Modal/AddRomm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Select,
} from "@mui/material";
import CommonCheckBox from "../../fields/CommonCheckBox";
import CommonTextsFormik from "../../fields/CommonTextsFormik";
import CloseIcon from "@mui/icons-material/Close";
import { ResidentsData, bathData } from "../SelectOptions";
import { useDispatch, useSelector } from "react-redux";
import {
  addRoomAmnetiesGetApi,
  addRoomStatusGetApi,
  addRoomTypeGetApi,
  editAddRoomApi,
  handleAddRoomAPi,
  propertyStatusGetApi,
} from "../../../redux/action/adminAction";
import {
  adminSelector,
  deleteAddedRoomReducer,
} from "../../../redux/slice/adminSlice";
import CommonIndexSelect from "../../fields/CommonIndexSelect";
import CommonSelectFormik from "../../fields/CommonSelectFormik";

const AddRoomModal = (props) => {
  const { open, setOpen, editData, propertyId } = props;
  const dispatch = useDispatch();
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const { addRoomTypeInfo, addRoomAmnetiesInfo, addRoomStatusInfo } =
    useSelector(adminSelector);

  const handleClose = () => {
    setSelectedIndexes([]);
    setOpen(false);
  };

  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

  const handleFileChange = (event) => {
    const files = event.target.files;
    const updatedSelectedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file && allowedFileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64String = event.target.result;
          updatedSelectedFiles.push({ file, base64String });
          setSelectedFiles([...updatedSelectedFiles]);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  useEffect(() => {
    if (editData?.amenities) {
      setSelectedIndexes(
        editData.amenities?.map((ameniti) => ameniti.room_amenitie)
      );
    }
  }, [editData?.amenities]);

  // const initialCheckboxes = addRoomAmnetiesInfo?.data
  //   ? addRoomAmnetiesInfo.data.map((amenity) => ({
  //       label: amenity.amneties,
  //       index: amenity.id,
  //     }))
  //   : [];

  // ======
  // let amenitiesarr = [];
  // let ammenity_id = 0;
  // const initialCheckboxes = addRoomAmnetiesInfo?.data
  //   ? addRoomAmnetiesInfo.data.map((amenity) => {
  //     if(editData?.amenities){
  //       editData?.amenities?.map((data)=>{
  //         console.log("amineititie",ammenity_id);
  //         if(data.room_amenitie === amenity.id ){
  //           if(ammenity_id !== data.room_amenitie){
  //             ammenity_id  = data.room_amenitie
  //             amenitiesarr.push({
  //               label: amenity.amneties,
  //              index: amenity.id,
  //               checked:true
  //             })
  //           }

  //         }
  //         else{
  //           if(ammenity_id !== data.room_amenitie){
  //           amenitiesarr.push ({
  //             label: amenity.amneties,
  //            index: amenity.id,
  //           checked:false
  //           })}
  //         }

  //       })
  //     }
  //     else {
  //       amenitiesarr.push( {
  //               label: amenity.amneties,
  //               index: amenity.id,
  //             })
  //     }
  //   })
  //   : [];

  const initialCheckboxes = addRoomAmnetiesInfo?.data?.map((amenity) => {
    // Check if the amenity ID exists in the selected data array
    if (editData?.amenities) {
      const isSelected = editData.amenities.some(
        (selectedItem) => selectedItem.room_amenitie === amenity.id
      );
      return {
        label: amenity.amneties,
        index: amenity.id,
        checked: isSelected,
      };
    } else {
      return {
        label: amenity.amneties,
        index: amenity.id,
      };
    }
  });

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (index) => (event) => {
    const updatedCheckboxes = initialCheckboxes?.map((checkbox) =>
      checkbox?.index === index
        ? { ...checkbox, checked: event.target.checked }
        : checkbox
    );

    setCheckboxes(updatedCheckboxes);
    if (event.target.checked) {
      setSelectedIndexes(() => [...selectedIndexes, index]);
      dispatch(deleteAddedRoomReducer());
    } else {
      setSelectedIndexes((prevIndexes) =>
        prevIndexes.filter((i) => i !== index)
      );
    }
  };

  useEffect(() => {
    dispatch(propertyStatusGetApi());
    dispatch(addRoomTypeGetApi());
    dispatch(addRoomStatusGetApi());
    dispatch(addRoomAmnetiesGetApi());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      room_no: editData?.room?.room_no ?? "",
      room_type: editData?.room?.room_type ?? "",
      no_of_residents: editData?.room?.no_of_residents ?? "",
      bath_attached: editData?.room?.bath_attached ?? "",
      room_status: editData?.room?.room_status ?? "",
      property: "",
      amneities_pk: editData?.amenities?.room_amenitie ?? "",
      room_photo: editData?.roomphoto?.room_photo ?? "",
    },
    validationSchema: Yup.object({
      room_no: Yup.number()
        .typeError("Room Number must be a number")
        .required(" Room Number is required"),
      room_type: Yup.number().required(" Room Type is required"),
      no_of_residents: Yup.number().required(" Room Type is required"),
      bath_attached: Yup.number().required(" Room Type is required"),
      room_status: Yup.number().required(" Room Status is required"),
    }),
    onSubmit: (values) => {
      const val = {
        room: {
          room_no: values?.room_no,
          no_of_residents: values?.no_of_residents,
          bath_attached: values?.bath_attached,
          room_type: values?.room_type,
          room_status: values?.room_status,
          property: null,
        },
        amneities_pk: [selectedIndexes]?.[0],
        roomphoto: {
          room_photo: selectedFiles?.[0]?.base64String,
        },
      };
      dispatch(handleAddRoomAPi(val));
      formik.resetForm();
      setOpen(false);
    },
  });

  const handleUpdate = () => {
    let values = formik.values;
    let body = {
      room: {
        room_no: values?.room_no,
        no_of_residents: values?.no_of_residents,
        bath_attached: values?.bath_attached,
        room_type: values?.room_type,
        room_status: values?.room_status,
        property: null,
      },
      amneities_pk: [selectedIndexes]?.[0],
      roomphoto: {
        room_photo: selectedFiles?.[0]?.base64String,
      },
    };

    dispatch(editAddRoomApi(propertyId, body));
    formik.resetForm();
  };

  return (
    <div>
      <Dialog
        sx={{
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            maxWidth: "860px !important",
            padding: "15px !important",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle
            sx={{ pt: 1, fontWeight: "550" }}
            id="alert-dialog-title"
            variant="h6"
          >
            Add Room
          </DialogTitle>
          <CloseIcon
            onClick={handleClose}
            sx={{ fontSize: "28px", cursor: "pointer" }}
          />
        </div>
        <DialogContent sx={{ mt: 1 }}>
          <Grid container spacing={1.5}>
            <Grid item xs={6} md={6}>
              <CommonTextsFormik
                id="room_no"
                label="Room No"
                placeholder=""
                formik={formik}
              />
            </Grid>

            <Grid item xs={6} md={6}>
              <CommonIndexSelect
                id="room_type"
                label="Room Type"
                // defaultValue="country"
                formik={formik}
                options={addRoomTypeInfo?.data}
              />
            </Grid>

            <Grid item xs={6} md={6}>
              <CommonSelectFormik
                label="No of Residents"
                id="no_of_residents"
                formik={formik}
                options={ResidentsData}
                // defaultValue={}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <CommonSelectFormik
                label="Bath Attached"
                id="bath_attached"
                formik={formik}
                options={bathData}
              />
            </Grid>
          </Grid>{" "}
        </DialogContent>
        <DialogTitle
          sx={{ pt: 2, fontWeight: "550" }}
          id="alert-dialog-title"
          variant="h6"
        >
          Amneties
        </DialogTitle>
        <DialogContent sx={{ mt: 0 }}>
          <Grid container spacing={0}>
            {initialCheckboxes?.map((checkbox) => (
              <Grid item xs={3} md={3}>
                {" "}
                <CommonCheckBox
                  label={checkbox.label}
                  onChange={handleCheckboxChange(checkbox.index)}
                  checked={checkbox.checked}
                />
              </Grid>
            ))}
          </Grid>{" "}
        </DialogContent>
        <DialogTitle
          sx={{ pt: 1, fontWeight: "550" }}
          id="alert-dialog-title"
          variant="h6"
        >
          Add Photos
        </DialogTitle>
        <DialogContent>
          <Grid item xs={12} md={12}>
            <input
              style={{
                border: "1px solid silver",
                borderRadius: "5px",
                padding: "5px",
              }}
              accept=".jpg,.jpeg,.png"
              type="file"
              name="room_photo"
              id="room_photo"
              onChange={handleFileChange}
              multiple
            />
          </Grid>
        </DialogContent>
        <DialogTitle
          sx={{ pt: 1, fontWeight: "550" }}
          id="alert-dialog-title"
          variant="h6"
        >
          Room Status
        </DialogTitle>

        <DialogContent>
          <Grid item xs={8} md={8}>
            <CommonIndexSelect
              label="Property Status"
              id="room_status"
              formik={formik}
              options={addRoomStatusInfo?.data}
            />
          </Grid>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          {editData ? (
            <Button
              onClick={handleUpdate}
              style={{
                backgroundColor: "#e33133",
                color: "white",
                textTransform: "none",
              }}
            >
              Update
            </Button>
          ) : (
            <Button
              onClick={formik.handleSubmit}
              style={{
                backgroundColor: "#1976d2",
                color: "white",
                textTransform: "none",
              }}
            >
              Add Room
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddRoomModal;

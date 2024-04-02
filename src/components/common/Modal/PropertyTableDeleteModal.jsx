import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "../Modal/LogoutModal.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteAddRoomApi } from "../../../redux/action/adminAction";

function PropertyTableDeleteModal({ openModal, setOpenModal, delid }) {
  const dispatch = useDispatch();

  const handleCloseDelete = (dataid) => {
    dispatch(deleteAddRoomApi(dataid));
    setOpenModal(false);
  };
  return (
    <div>
      <Dialog
        open={openModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ marginLeft: "auto" }}>
          {" "}
          <CloseIcon
            onClick={handleCloseDelete}
            sx={{ cursor: "pointer", fontSize: "30px", margin: "10px" }}
          />
        </div>

        <div style={{ padding: "10px" }}>
          <DialogContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ErrorOutlineIcon fontSize="large" />
            </div>
            <DialogContentText
              sx={{ color: "black", fontSize: "18px", paddingTop: "20px" }}
              id="alert-dialog-description"
            >
              Are you sure,Do you want to Delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => {
                handleCloseDelete(delid);
              }}
              className="acpt-btn"
              style={{ textTransform: "none", backgroundColor: "#dc3545" }}
              variant="contained"
            >
              Delete
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default PropertyTableDeleteModal;

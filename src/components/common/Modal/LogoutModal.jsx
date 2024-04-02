import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "../Modal/LogoutModal.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function LogoutModal({ openLogout, setOpenLogout }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenLogout(false);
  };

  const handleLogoutAction = () => {
    sessionStorage.clear();
    navigate("/");
    setOpenLogout(false);
  };
  return (
    <div>
      <Dialog
        open={openLogout}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ marginLeft: "auto", padding: "2px" }}>
          {" "}
          <CloseIcon
            onClick={handleClose}
            sx={{ cursor: "pointer", fontSize: "30px" }}
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
              <PowerSettingsNewIcon fontSize="large" />
            </div>
            <DialogContentText
              sx={{ color: "black", fontSize: "18px", pt: 2 }}
              id="alert-dialog-description"
            >
              Are you sure, you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "center", gap: "30px" }}
          >
            <Button
              className="acpt-btn"
              style={{ textTransform: "none", backgroundColor: "#dc3545" }}
              variant="contained"
              onClick={handleLogoutAction}
            >
              Yes
            </Button>

            <Button
              className="close-btn"
              style={{ textTransform: "none", backgroundColor: "#628684" }}
              variant="contained"
              onClick={handleClose}
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default LogoutModal;

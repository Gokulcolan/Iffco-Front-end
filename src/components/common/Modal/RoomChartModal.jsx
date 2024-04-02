import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CommonDropdownFields from '../../fields/CommonDropdownFields';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CommonTextFields from '../../fields/CommonTextFields';
import warning from "../../../assests/images/warning ico.png"


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function RoomChartModal({ openRoom, setOpenRoom, RoomNumber }) {

    //   const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpenRoom(false);
    };

    return (
        <React.Fragment>
            {RoomNumber !== "R02" && RoomNumber !== "R05" ? (
                // Model For Success
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={openRoom}
                >
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <div style={{ padding: "1rem 1rem", width: "250px" }}>
                        <DialogTitle id="customized-dialog-title" sx={{ padding: "16px 0px !important " }}>
                            Room Status
                        </DialogTitle>
                        <CommonDropdownFields  />
                        <DialogTitle id="customized-dialog-title" sx={{ padding: "16px 0px !important " }}>
                            Employees
                        </DialogTitle>
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.5)" }} >
                            Osman <DeleteOutlineIcon sx={{ color: "red", float: "right" }} />
                        </Typography>
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.5)" }}>
                            Syed Abrar <DeleteOutlineIcon sx={{ color: "red", float: "right" }} />
                        </Typography>
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.5)" }}>
                            Kousar Tabriz <DeleteOutlineIcon sx={{ color: "red", float: "right" }} />
                        </Typography>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} sx={{ backgroundColor: "rgba(76, 175, 80, 1)", color: "white", borderRadius: "5px", marginTop: "1rem", width: "100%" }}>
                                Update
                            </Button>
                        </DialogActions>
                    </div>
                </BootstrapDialog>
            )
                : RoomNumber === "R05" ? (
                    // Model For warning
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={openRoom}
                        
                    >
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <div className='model-box' style={{ padding: "2rem" }}>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <div style={{ borderRight: "1px solid black" }} >
                                        <div style={{paddingRight:"2rem"}}>
                                            <div >
                                                <CommonDropdownFields label="Select Employee :" />
                                            </div>
                                            <br />
                                            <div >
                                                <CommonDropdownFields label="Select Status :" />
                                            </div>
                                            <br />
                                            <div >
                                                <CommonTextFields label="Stay Period :" />
                                            </div>
                                            <br />
                                            <div >
                                                <CommonDropdownFields label="Room Status :" />
                                            </div>

                                            <DialogActions>
                                                <Button autoFocus className='maintainence-btn' onClick={handleClose} sx={{ backgroundColor: "rgba(76, 175, 80, 1)", color: "white", borderRadius: "5px", marginTop: "1rem", width: "100%" }}>
                                                    Submit
                                                </Button>
                                            </DialogActions>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-5'>
                                    <DialogTitle id="customized-dialog-title">
                                        Employees
                                    </DialogTitle>
                                    <Typography >
                                        Osman 12-09-2023 <DeleteOutlineIcon sx={{ color: "red" }} />
                                    </Typography>
                                    <Typography >
                                        Osman 12-09-2023 <DeleteOutlineIcon sx={{ color: "red" }} />
                                    </Typography>
                                    <Typography >
                                        Osman 12-09-2023 <DeleteOutlineIcon sx={{ color: "red" }} />
                                    </Typography>
                                    <Typography >
                                        Osman 12-09-2023 <DeleteOutlineIcon sx={{ color: "red" }} />
                                    </Typography>
                                </div>


                            </div>
                        </div>

                    </BootstrapDialog>
                ) : RoomNumber === "R02" ? (
                    // Model For Error
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={openRoom}
                    >

                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <div style={{ padding: "1rem 2rem" }}>
                            <img src={warning} alt="" style={{ display: "flex", margin: "auto" }} />
                            <DialogTitle id="customized-dialog-title">
                                Room Status
                            </DialogTitle>
                            <CommonDropdownFields />


                            <DialogActions>
                                <Button autoFocus onClick={handleClose} sx={{ backgroundColor: "rgba(76, 175, 80, 1)", color: "white", borderRadius: "5px", marginTop: "1rem", width: "100%" }}>
                                    Update
                                </Button>
                            </DialogActions>
                        </div>
                    </BootstrapDialog>
                )
                    : "No data found"
            }
        </React.Fragment>
    );
}
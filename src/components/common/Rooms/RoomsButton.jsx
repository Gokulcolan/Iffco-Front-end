import React from 'react';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Looks5Icon from '@mui/icons-material/Looks5';
import RoomChartModal from '../Modal/RoomChartModal';
import { useState } from 'react';

const RoomButton = ({ val }) => {
    const [openRoom, setOpenRoom] = useState(false);
    const [RoomNo, setRoomNo] = useState()

    const handleRoomOpen = (e,val) => {
        setOpenRoom(true);
        setRoomNo(e.target.innerText)
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {val.map((buttonValue) => {
                return (
                    <>
                        <Button
                            sx={{
                                position: 'relative',
                                border: 'solid 1px #f1f1f2',
                                borderRadius: '10px',
                                marginRight: "40px",
                                backgroundColor: "#f9fbff",
                                marginBottom: "20px"
                            }}
                            onClick={(e) => { handleRoomOpen(e,buttonValue?.Value)  }}
                        >
                            {buttonValue?.Value}
                            {buttonValue?.Value === "R02" ? (
                                <ErrorIcon
                                    sx={{
                                        color: "red",
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        transform: 'translateY(-50%)',
                                        zIndex: 1,
                                    }}
                                />
                            )
                                : buttonValue?.Value === "R05" ?
                                    (
                                        <Looks5Icon sx={{
                                            color: "#ffb536",
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            transform: 'translateY(-50%)',
                                            zIndex: 1,
                                        }} />
                                    )
                                    : (
                                        <CheckCircleIcon
                                            sx={{
                                                color: "green",
                                                position: 'absolute',
                                                top: '0',
                                                right: '0',
                                                transform: 'translateY(-50%)',
                                                zIndex: 1,
                                            }}
                                        />
                                    )}
                        </Button>
                    </>
                )
            })}
            {val.map((buttonValue) => {
                return (
                    <>
                        <Button
                            sx={{
                                position: 'relative',
                                padding: '10px 20px',
                                border: 'solid 1px #f1f1f2',
                                padding: '5px',
                                borderRadius: '10px',
                                marginRight: "40px",
                                backgroundColor: "#f9fbff",
                                marginBottom: "20px"

                            }}
                            onClick={(e) => { handleRoomOpen(e,buttonValue?.Value)  }}
                        >
                            {buttonValue?.Value}
                            {buttonValue?.Value === "R02" ? (
                                <ErrorIcon
                                    sx={{
                                        color: "red",
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        transform: 'translateY(-50%)',
                                        zIndex: 1,
                                    }}
                                />
                            )
                                : buttonValue?.Value === "R05" ?
                                    (
                                        <Looks5Icon sx={{
                                            color: "#ffb536",
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            transform: 'translateY(-50%)',
                                            zIndex: 1,
                                        }} />
                                    )
                                    : (
                                        <CheckCircleIcon
                                            sx={{
                                                color: "green",
                                                position: 'absolute',
                                                top: '0',
                                                right: '0',
                                                transform: 'translateY(-50%)',
                                                zIndex: 1,
                                            }}
                                        />
                                    )}
                        </Button>
                    </>
                )
            })}
            {val.map((buttonValue) => {
                return (
                    <>
                        <Button
                            sx={{
                                position: 'relative',
                                padding: '10px 20px',
                                border: 'solid 1px #f1f1f2',
                                padding: '5px',
                                borderRadius: '10px',
                                marginRight: "40px",
                                backgroundColor: "#f9fbff",
                                marginBottom: "20px"

                            }}
                            onClick={(e) => { handleRoomOpen(e,buttonValue?.Value)  }}
                        >
                            {buttonValue?.Value}
                            {buttonValue?.Value === "R02" ? (
                                <ErrorIcon
                                    sx={{
                                        color: "red",
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        transform: 'translateY(-50%)',
                                        zIndex: 1,
                                    }}
                                />
                            )
                                : buttonValue?.Value === "R05" ?
                                    (
                                        <Looks5Icon sx={{
                                            color: "#ffb536",
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            transform: 'translateY(-50%)',
                                            zIndex: 1,
                                        }} />
                                    )
                                    : (
                                        <CheckCircleIcon
                                            sx={{
                                                color: "green",
                                                position: 'absolute',
                                                top: '0',
                                                right: '0',
                                                transform: 'translateY(-50%)',
                                                zIndex: 1,
                                            }}
                                        />
                                    )}
                        </Button>
                    </>
                )
            })}
            {val.map((buttonValue) => {
                return (
                    <>
                        <Button
                            sx={{
                                position: 'relative',
                                padding: '10px 20px',
                                border: 'solid 1px #f1f1f2',
                                padding: '5px',
                                borderRadius: '10px',
                                marginRight: "40px",
                                backgroundColor: "#f9fbff",
                                marginBottom: "20px"

                            }}
                            onClick={(e) => { handleRoomOpen(e,buttonValue?.Value)  }}
                        >
                            {buttonValue?.Value}
                            {buttonValue?.Value === "R02" ? (
                                <ErrorIcon
                                    sx={{
                                        color: "red",
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        transform: 'translateY(-50%)',
                                        zIndex: 1,
                                    }}
                                />
                            )
                                : buttonValue?.Value === "R05" ?
                                    (
                                        <Looks5Icon sx={{
                                            color: "#ffb536",
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            transform: 'translateY(-50%)',
                                            zIndex: 1,
                                        }} />
                                    )
                                    : (
                                        <CheckCircleIcon
                                            sx={{
                                                color: "green",
                                                position: 'absolute',
                                                top: '0',
                                                right: '0',
                                                transform: 'translateY(-50%)',
                                                zIndex: 1,
                                            }}
                                        />
                                    )}
                        </Button>
                    </>
                )
            })}
            {val.map((buttonValue) => {
                return (
                    <>
                        <Button
                            sx={{
                                position: 'relative',
                                padding: '10px 20px',
                                border: 'solid 1px #f1f1f2',
                                padding: '5px',
                                borderRadius: '10px',
                                marginRight: "40px",
                                backgroundColor: "#f9fbff",
                                marginBottom: "20px"

                            }}
                            onClick={(e) => { handleRoomOpen(e,buttonValue?.Value)  }}
                        >
                            {buttonValue?.Value}
                            {buttonValue?.Value === "R02" ? (
                                <ErrorIcon
                                    sx={{
                                        color: "red",
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        transform: 'translateY(-50%)',
                                        zIndex: 1,
                                    }}
                                />
                            )
                                : buttonValue?.Value === "R05" ?
                                    (
                                        <Looks5Icon sx={{
                                            color: "#ffb536",
                                            position: 'absolute',
                                            top: '0',
                                            right: '0',
                                            transform: 'translateY(-50%)',
                                            zIndex: 1,
                                        }} />
                                    )
                                    : (
                                        <CheckCircleIcon
                                            sx={{
                                                color: "green",
                                                position: 'absolute',
                                                top: '0',
                                                right: '0',
                                                transform: 'translateY(-50%)',
                                                zIndex: 1,
                                            }}
                                        />
                                    )}
                        </Button>
                    </>
                )
            })}
            <RoomChartModal openRoom={openRoom} setOpenRoom={setOpenRoom} RoomNumber={RoomNo} />
        </div>
    );
};

export default RoomButton;

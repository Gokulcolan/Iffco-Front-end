import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import room from "../../assests/images/room.png";
import room2 from "../../assests/images/room2.png";
import room3 from "../../assests/images/vacant.png";
import room4 from "../../assests/images/Employess.png";
import room5 from "../../assests/images/Ellipse 58.png";
import room6 from "../../assests/images/Ellipse 59.png";
import room7 from "../../assests/images/Ellipse 60.png";
import room8 from "../../assests/images/Ellipse 61.png";
import room9 from "../../assests/images/Ellipse 62.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useDispatch, useSelector } from "react-redux";
import { employeeDasboardGetApi } from "../../redux/action/adminAction";
import { adminSelector } from "../../redux/slice/adminSlice";

const activeimages = [
  { smallimage: room5 },
  { smallimage: room6 },
  { smallimage: room7 },
  { smallimage: room8 },
  { smallimage: room9 },
];

const EmployeeCounters = () => {
  const { employeeDashboardInfo } = useSelector(adminSelector);
  const employeedetails = [
    {
      title: "Total Rooms",
      count: employeeDashboardInfo?.total_rooms,
      icon: room,
      collageImage: false,
    },
    {
      title: "Occupied Rooms",
      count: employeeDashboardInfo?.occupied_rooms,
      icon: room2,
      collageImage: false,
    },
    {
      title: "Vacant",
      count: employeeDashboardInfo?.vacant_rooms,
      icon: room3,
      collageImage: false,
    },
    {
      title: "Active Employees",
      count: employeeDashboardInfo?.active_employees,
      icon: room4,
      collageImage: true,
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employeeDasboardGetApi());
  }, []);

  return (
    <>
      <Card sx={{ minWidth: 275, borderRadius: "30px", mb: 2 }}>
        <div className="cardbody" style={{ height: "130px" }}>
          {employeedetails.map((val) => {
            return (
              <CardContent>
                <div className="dflex-space-even">
                  <div className="dflex-gap">
                    <img style={{ width: "23%" }} src={val.icon} alt=""></img>
                    <div className="dflex-direction">
                      <Typography sx={{ color: "gray", fontSize: "14.5px" }}>
                        {val.title}
                      </Typography>
                      <Typography sx={{ fontWeight: "550" }} variant="h4">
                        {val.count}
                      </Typography>
                      {val.collageImage ? (
                        <>
                          <AvatarGroup max={5}>
                            {activeimages.map((images) => {
                              return (
                                <Avatar
                                  sx={{ width: 30, height: 30 }}
                                  src={images.smallimage}
                                />
                              );
                            })}
                          </AvatarGroup>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default EmployeeCounters;

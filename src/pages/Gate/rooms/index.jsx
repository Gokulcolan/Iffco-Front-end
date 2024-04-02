import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Card, CardContent } from "@mui/material";
import LogoutComponent from "../../../components/common/LogoutComponent";
import EditRooms from "../../../components/common/Rooms/EditRooms";
import RoomChart from "../../../components/common/Rooms/RoomChart";
import RoomInfo from "../../../components/common/Rooms/RoomInfo";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      sx={{
        "&.Mui-selected": {
          backgroundColor: "#e33133",
          color: "white",
          borderRadius: "33px",
        },
      }}
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      {...props}
    />
  );
}

const Rooms = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return <RoomInfo />;
      case 1:
        return <RoomChart />;
      case 2:
        return <EditRooms />;
      default:
        return null;
    }
  };

  return (
    <>
      <LogoutComponent mainheading={"Property/Rooms Status"} />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Room Info" className="room-tab" />
          <LinkTab label="Room Charts" className="room-tab" />
          <LinkTab label="Edit Rooms" className="room-tab" />
        </Tabs>
      </Box>
      <Card>
        <CardContent>
          <CardContent>{renderTabContent()}</CardContent>
        </CardContent>
      </Card>
    </>
  );
};

export default Rooms;

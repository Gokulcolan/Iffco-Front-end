import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { PropertyDetails } from "../../../../components/common/editProperty/PropertyDetails";
import { Card, CardContent } from "@mui/material";
import LandlordDetails from "../../../../components/common/editProperty/LandlordDetails";
import LegalDocuments from "../../../../components/common/editProperty/LegalDocuments";
import ExpectedExpenditureBudget from "../../../../components/common/editProperty/ExpectedExpenditureBudget";
import LogoutComponent from "../../../../components/common/LogoutComponent";
import { adminSelector } from "../../../../redux/slice/adminSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

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

const EditProperty = () => {
  const { propertyDetailInfo } = useSelector(adminSelector);

  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const { editCard } = location?.state || {};

  

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const handleRedirect = () => {
    navigate("/accomodations");
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return <PropertyDetails onNext={() => handleTabChange(1)} />;
      // return <PropertyDetails onClick={handleChange} />;
      case 1:
        return <LandlordDetails onNext={() => handleTabChange(2)} />;
      // return <LandlordDetails onClick={handleChange} />;

      case 2:
        return <ExpectedExpenditureBudget onNext={() => handleTabChange(3)} />;
      // return <ExpectedExpenditureBudget onClick={handleChange} />;

      case 3:
        return <LegalDocuments onNext={() => handleRedirect()} />;
      default:
        return null;
    }
  };

  return (
    <>
      <LogoutComponent mainheading={"Add New Property"} />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
        onChange={editCard !== undefined? handleChange:()=>{}}
          aria-label="nav tabs example"
        >
          <LinkTab label="Property Details" />
          <LinkTab label="Landlord Details" />
          <LinkTab label="Expected Expenditure / Budget" />
          <LinkTab label="Legal Document / Terms & Conditions" />
        </Tabs>
      </Box>
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <CardContent>{renderTabContent()}</CardContent>
        </CardContent>
      </Card>
    </>
  );
};

export default EditProperty;

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Box from "@mui/material/Box";

import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./previewFile.scss";
const PreviewFile = () => {
  const location = useLocation();
  let previewFile = location.state.file;
  const [src, setSrc] = useState(URL.createObjectURL(previewFile));
  const [value, setValue] = useState('1');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderColor: "divider" }}>
        <TabList onChange={handleChange}>
          <Tab className="color borderleft" label="License Info" value="1" />
          <span className="borderline"></span>
          <Tab label="Landlord Details" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <div className="land">
          <div className="imgContainer">
            {previewFile.type.split("/").includes("image") ? (
              <img width="100%" src={src}></img>
            ) : (
              <iframe width="1600px" height="1000px" src={src}></iframe>
            )}
          </div>
        </div>
      </TabPanel>
    </TabContext>
  );
};
export default PreviewFile;

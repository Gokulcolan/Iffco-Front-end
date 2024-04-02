import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageMap from "../../../components/loginComponent/ImageMap";
import Section1 from "../../../components/loginComponent/Section1";
import Section2 from "../../../components/loginComponent/Section2";
import Section3 from "../../../components/loginComponent/Section3";
import Section4 from "../../../components/loginComponent/Section4";
import Section5 from "../../../components/loginComponent/Section5";

const Login = () => {
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   sessionStorage.setItem("ur", 1);
  //   navigate("/dashboard/superadmin");
  // };
  const [activeSection, setActiveSection] = useState(null);

  const handleRegionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };
  return (
    <div className="mainflex">
      <div
        style={{ flex: activeSection === 0.5 ? 0.5 : 1 }}
      >
        <ImageMap onRegionClick={handleRegionClick} />
      </div>
      {activeSection === 1 && (
        <div style={{ flex: 1 }}>
          <Section1 />
        </div>
      )}
      {activeSection === 2 && (
        <div style={{ flex: 1 }}>
          <Section2 />
        </div>
      )}
      {activeSection === 3 && (
        <div style={{ flex: 1 }}>
          <Section3 />
        </div>
      )}
      {activeSection === 4 && (
        <div style={{ flex: 1 }}>
          <Section4 />
        </div>
      )}
      {activeSection === 5 && (
        <div style={{ flex: 1 }}>
          <Section5 />
        </div>
      )}
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import backgroundImage from "../../assests/images/background.png";
import { IconButton, TextField, backdropClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginApi } from "../../redux/action/authAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import '../loginComponent/Loginpage.css'


function CommonSections({ heading, bgColour, btnborder, h4color }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState("password");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      // username: Yup.string()
      //   .required("Email address is required")
      //   .matches(
      //     /^[a-zA-Z0-9_.\-]+\@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,3}$/,
      //     "Invalid email address"
      //   ),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      const req = {
        username: values?.username,
        password: values?.password,
      };
      dispatch(LoginApi(req, navigate));
    },
  });
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
       className="second-sec"
      >
        <h4
          style={{
            color: h4color,
          }}
          className="heading"
        >
          {heading}
        </h4>
        <h3
        className="welcomeback"
        >
          Welcome back !
        </h3>
        <form>
          <label style={labelStyle}>
            Select your role
            <select style={inputStyle}>
              <option value="hr">HR</option>
              <option value="gateInspector">Gate Inspector</option>
            </select>
          </label>

          <TextField
            id="outlined-basic"
            label="Email"
            size="small"
            fullWidth
            name="username"
            multiline={false}
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
            error={Boolean(formik.touched.username && formik.errors.username)}
            helperText={
              <>{formik.touched.username && formik.errors.username}</>
            }
            variant="outlined"
            sx={{ width: "100%", mt: 1, backgroundColor: "white" }}
          />
          <TextField
            size="small"
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            fullWidth
            id="outlined-basic"
            label="Password"
            type={showPassword}
            sx={{ width: "100%", mt: 2, backgroundColor: "white" }}
            variant="outlined"
            InputProps={{
              endAdornment:
                showPassword === "text" ? (
                  <IconButton onClick={() => setShowPassword("password")}>
                    <Visibility
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setShowPassword("text")}>
                    <VisibilityOff
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>
                ),
            }}
          />
          <button
            onClick={formik.handleSubmit}
            type="submit"
            style={{
              backgroundColor: bgColour,
              border: btnborder,
              color: "white",
              padding: "8px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              marginTop: "15px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
const labelStyle = {
  display: "block",
  margin: "10px 0",
  color: "#000",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
export default CommonSections;

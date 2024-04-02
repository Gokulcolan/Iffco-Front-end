import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

const CommonUploadField = ({ label }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const imageArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...imageArray]);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div>
        {" "}
        <label style={{ fontSize: "14px", fontWeight: "600" }}>{label}</label>
      </div>
      <input
        style={{
          border: "1px solid silver",
          padding: "6px",
          borderRadius: "5px",
          width: "70%",
        }}
        type="file"
        onChange={handleImageChange}
        multiple
      />
      {images.length > 0 && (
        <div>
          <label style={{ paddingTop: "20px" }}>Uploaded Images</label>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded ${index + 1}`}
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                marginRight: "10px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonUploadField;

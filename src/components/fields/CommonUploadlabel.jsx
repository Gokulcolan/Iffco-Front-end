import React from "react";
import { Stack } from "@mui/system";

import { useState } from "react";

const CommonUploadlabel = ({ label }) => {
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
    <>
      <Stack spacing={0.5}>
        <label style={{fontWeight:"550",fontSize:"14px"}}>{label}</label>
        <input
          style={{
            border: "1px solid silver",
            padding: "6px",
            borderRadius: "10px",
            
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
      </Stack>
    </>
  );
};

export default CommonUploadlabel;

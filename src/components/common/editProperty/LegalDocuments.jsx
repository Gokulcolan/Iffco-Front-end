import { Button, Grid, Tooltip, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import TaskIcon from "@mui/icons-material/Task";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { handleLegalFileUploadAPi } from "../../../redux/action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { adminSelector } from "../../../redux/slice/adminSlice";
import "../../common/editProperty/common.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom/dist";

const LegalDocuments = (props) => {
  const { propertyDetailInfo } = useSelector(adminSelector);
  const terms = [
    {
      s: "1. The tenant has inspected the premises and agreed to lease the unit on its current condition",
    },
    {
      s: "2. Tenant undertakes to use the premises for designated purpose, tenant has no rights to transfer or relinquish the tenancy contract either with or without counterpart to any without landlord written approval. Also tenant is not allowed to sublease the premises or any part thereof to third party in whole or in part unless it is legally permitted.",
    },
    {
      s: "3. The tenant undertakes not to make any amemdments, modifications or addendums to the premises subject of the contract without obtaining the landlord written approval, tenant shall be liable for any damages or failure due to that.",
    },
    {
      s: "4. The tenant shall be responsible for payment of all electricity, water, cooling and gas charges resulting of occupying leased unit unless other condition agreed in written.",
    },
  ];
  const selectedFileName = "";
  const fileInputRef = useRef(null);
  const selectedFile = null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pushFiles, setPushFiles] = useState([]);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const handleFileChange = (event) => {
    const files = event.target.files;

    const selectedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png" ||
        file.type === "application/pdf"
      ) {
        if (file.size <= MAX_FILE_SIZE) {
          selectedFiles.push(file);
          setPushFiles(selectedFiles);
        } else {
          console.log(
            `File ${file.name} exceeds the 10MB limit and won't be selected.`
          );
        }
      } else {
        console.log(
          `File ${file.name} is not a valid file type and won't be selected.`
        );
      }
    }

    console.log("Selected Files:", pushFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;
    const validFiles = [];

    for (let i = 0; i < droppedFiles.length; i++) {
      const file = droppedFiles[i];
      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png" ||
        file.type === "application/pdf"
      ) {
        validFiles.push(file);
      } else {
        console.log(
          `File ${file.name} is not a valid file type and won't be selected.`
        );
      }
    }

    setPushFiles(validFiles);
  };

  const handlePreview = (file) => {
    if (file) {
      if (file.type.includes("image") || file.type === "application/pdf") {
        const fileUrl = URL.createObjectURL(file);
        window.open(fileUrl, "_blank");
      } else {
        console.log("Preview not available for this file type.");
      }
    } else {
      console.log("No file selected for preview.");
    }
  };

  const View = () => {
    if (selectedFile) {
      if (
        selectedFile.type.includes("image") ||
        selectedFile.type === "application/pdf"
      ) {
        const fileUrl = URL.createObjectURL(selectedFile);
        window.open(fileUrl, "_blank");
      } else {
        console.log("Preview not available for this file type.");
      }
    } else {
      console.log("No file selected for preview.");
    }
  };

  const formatFileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileSubmit = () => {
    const formData = new FormData();

    for (let i = 0; i < pushFiles.length; i++) {
      const file = pushFiles[i];

      if (file.type.includes("image")) {
        formData.append("document_files", file);
      } else if (file.type === "application/pdf") {
        formData.append("document_files", file);
      }
    }

    formData.append("property_id", propertyDetailInfo?.details?.id);

    dispatch(handleLegalFileUploadAPi(formData,props));
  };

  const handleDelete = (del) => {
    const deletedata = pushFiles.filter((d, i) => i !== del);
    setPushFiles(deletedata);
    console.log("dayaaaa", deletedata);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
    "edit",
  ];

  const handleProcedureContentChange = (content, delta, source, editor) => {};
  
  return (
    <>
      <div className="legal-h3">
        <h3>Legal Documents</h3>
        <h5 className="legal-h5">Please verify your identity</h5>
        <p className="select-p">
          Select relavant documents to complete your kyc
        </p>
      </div>
      <div className="main-drop">
        <div
          className="dropfile-div"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div style={{ cursor: "pointer" }} onClick={handleFileSelect}>
            <CloudUploadIcon sx={{ fontSize: "40px" }} />

            <div>
              <span>upload</span>
            </div>
          </div>
          <div>
            <h6 className="h6-drag">Select a file or drag and drop here</h6>
            <p className="filesize-p">
              JPG, PNG, or PDF, file size no more than 10MB
            </p>

            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept=".jpg,.jpeg,.png,.pdf"
              multiple
              onChange={handleFileChange}
            />
          </div>

          <div>
            <Button
              style={{
                border: "1px solid #E22D2C",
                color: "#E22D2c",
                textTransform: "none",
              }}
              variant="outlined"
              onClick={handleFileSelect}
            >
              Select File
            </Button>
          </div>
        </div>
      </div>
      <div className="mainfilediv">
        <div className="subfilediv">
          {pushFiles.length > 0 &&
            pushFiles.map((file, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
                key={index}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  {" "}
                  <p>
                    {" "}
                    <Tooltip title="File uploaded" arrow>
                      <TaskIcon />
                    </Tooltip>
                    {file.name}
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Tooltip title="View file" arrow>
                      <p
                        className="preview-p"
                        onClick={() => handlePreview(file)}
                      >
                        Preview
                      </p>
                    </Tooltip>
                    <Tooltip title="Delete file" arrow>
                      {" "}
                      <DeleteIcon
                        sx={{ cursor: "pointer", color: "#E22D2C" }}
                        onClick={() => handleDelete(index)}
                      />
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <span>
                    <b>File Size:</b>
                    {""}
                    <span style={{ paddingLeft: "3px" }}>
                      {" "}
                      {formatFileSize(file.size)}
                    </span>
                  </span>
                </div>
              </div>
            ))}
        </div>
        {selectedFileName && (
          <p>
            {" "}
            <TaskIcon />
            {selectedFileName}
          </p>
        )}

        <p>
          {selectedFile && `File Size: ${formatFileSize(selectedFile.size)}`}
        </p>
        {selectedFileName && (
          <p className="preview-div" onClick={View}>
            Preview
          </p>
        )}
      </div>
      <div className="term-div">
        <h3>Terms & Conditions with Landlord</h3>
      </div>
      {/* <div className="points-div">
        {terms?.map((a) => {
          return <p>{a?.s}</p>;
        })}
        
      </div> */}
      <div className="points-div">
        {" "}
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={terms?.map((a) => a?.s).join("")}
          onChange={handleProcedureContentChange}
        />
      </div>

      <div className="legal-btn-div">
        <Button className="cancel-btn" variant="contained">
          Cancel
        </Button>
        <Button
          className="submit-btn"
          onClick={() => handleFileSubmit()}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default LegalDocuments;

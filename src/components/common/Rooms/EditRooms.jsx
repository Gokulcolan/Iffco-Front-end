import React from "react";
import CommonDropdownFields from "../../fields/CommonDropdownFields";
import CommonTextFields from "../../fields/CommonTextFields";
import EditRoomTable from "./EditRoomTable";

const EditRooms = () => {
  return (
    <div>
      <div>
        <h4 style={{ marginBottom: "40px" }}>Edit Rooms</h4>
      </div>
      <div
        style={{
          border: "solid 1px #dee2e6",
          borderRadius: "10px",
          padding: "40px 20px 20px 40px",
        }}
      >
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-lg-3">
            <CommonTextFields
              label="Property Name"
              placeholder="property Name"
            />
          </div>
          <div className="col-lg-3">
            <CommonTextFields label="Room Number" placeholder="Room Number" />
          </div>
          <div className="col-lg-3">
            <CommonTextFields label="Person" placeholder="Person" />
          </div>
          <div className="col-lg-3">
            <CommonDropdownFields label="Status" placeholder="status" />
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <button
            style={{
              backgroundColor: "rgb(19, 115, 200)",
              borderRadius: "10px",
              padding: "10px 15px",
              border: "none",
              color: "white",
              margin: "10px 0px 2rem 0px",
            }}
          >
            Submit
          </button>
        </div>
        <EditRoomTable />
      </div>
    </div>
  );
};

export default EditRooms;

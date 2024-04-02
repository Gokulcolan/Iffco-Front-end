import React, { useEffect, useState } from "react";
import { Box, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { accomPropertyDetailsGetApi } from "../../redux/action/adminAction";
import { adminSelector, deleteAddedRoomReducer } from "../../redux/slice/adminSlice";
import CommonTableWithPagination from "../common/CommonTableWithPagination";
import PropertyTableDeleteModal from "../common/Modal/PropertyTableDeleteModal";
import AddRoomModal from "../common/Modal/AddRoomModal";
import { useLocation } from "react-router-dom";

function PropertyTableData() {
  const { addRoomInfo, accomPropertyTableInfo } = useSelector(adminSelector);
  const location = useLocation();
  const { editCard } = location?.state || {};
  const propertyId = editCard?.id;
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [tableData, setTableData] = useState([]);
  // const [roominfo, setRoominfo] = useState({});
  const [editData, setEditData] = useState();

  const dispatch = useDispatch();
  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (addRoomInfo.length > 0) {
      setTableData([...tableData, ...addRoomInfo]);
      dispatch(deleteAddedRoomReducer())
    } else if (accomPropertyTableInfo?.data?.length > 0) {
      setTableData([...tableData, ...accomPropertyTableInfo?.data]);
    }
  }, [addRoomInfo, accomPropertyTableInfo?.data]);

  // console.log("roominfooooooooo", roominfo);

  useEffect(() => {
    const queryParams = {
      property_id: propertyId,
    };
    dispatch(accomPropertyDetailsGetApi(queryParams));
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [addRoomOpen, setAddRoomOpen] = useState(false);
  const [delid, setDelid] = useState();

  const deleteTable = (dataa, label) => {
    setDelid(dataa?.id);
    if (label === "Action") {
      setOpenModal(true);
    }
  };

  const editTable = (data, label) => {
    if (label === "Action") {
      setAddRoomOpen(true);
      setEditData(data);
    }
  };

  return (
    <div>
      <div style={{}}>
        <Box
          sx={{
            m: "auto",
            width: "100%",
            padding: "10px",
          }}
        >
          <div
            className="d-flex col-md-10 col-lg-12 col-sm-12"
            style={{ justifyContent: "flex-end" }}
          ></div>

          <div style={{ padding: "10px 0px 20px 0px" }}>
            <CommonTableWithPagination
              columns={[
                {
                  id: "S.No",
                  label: "S.No",
                  minWidth: "auto",
                  from: "Room",
                },
                {
                  id: "room_no",
                  label: "Room No",
                  minWidth: "auto",
                  from: "Room",
                },
                {
                  id: "room_type",
                  label: "Room Type",
                  minWidth: "auto",
                  from: "Room",
                },
                {
                  id: "no_of_residents",
                  label: "No of Residents",
                  minWidth: "auto",
                  from: "Room",
                },
                {
                  id: "bath_attached",
                  label: "Bathroom Attached",
                  minWidth: "auto",
                  from: "Room",
                },
                {
                  id: "amneities_pk",
                  label: "Amenities",
                  minWidth: "auto",
                  from: "Room",
                },
                {
                  id: "room_status",
                  label: "Status",
                  minWidth: "auto",
                  from: "Room",
                },
                {
                  id: "EditDelete",
                  label: "Action",
                  minWidth: "auto",
                  from: "Room",
                },
              ]}
              // rows={valuesData}
              deleteTable={deleteTable}
              editTable={editTable}
              // rows={editCard ? accomPropertyTableInfo?.data : addRoomInfo}
              rows={tableData}
              // rows={ addRoomInfo }
              paginationStatus={true}
              rowsPerPageOptions={paginationRowsOptions}
              page={page}
              size={size}
              handleChangePage={handlePageChange}
              handleChangeRowsPerPage={handlePerRowsChange}
            />
          </div>
        </Box>
      </div>
      <PropertyTableDeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        delid={delid}
      />
      <AddRoomModal
        open={addRoomOpen}
        setOpen={setAddRoomOpen}
        editData={editData}
        propertyId={propertyId}
      />
    </div>
  );
}

export default PropertyTableData;

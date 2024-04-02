import React, { useEffect, useState } from "react";
import "../../common/card.scss";
import { useDispatch, useSelector } from "react-redux";

import { adminSelector } from "../../../redux/slice/adminSlice";
function AccomTableComonent() {



  // const { accomCompareInfo, propertyDetailInfo } = useSelector(adminSelector);
  const {
  
    accomCompareInfo = [],
  } = useSelector(adminSelector);


  const paginationRowsOptions = [5, 10, 20, 50, 100];

  // const handlePerRowsChange = async (event) => {
  //   setPage(+event.target.value);
  //   setSize(0);
  // };

  // const handlePageChange = async (event, newPage) => {
  //   setPage(newPage);
  // };


  const generatePropertyRows = (propertyKey,propertyvalue) => {
    return (
      <>
        <tr key={propertyKey}>
          <th>{propertyKey}</th>
          {accomCompareInfo?.map((property, index) => (
            <td key={index}>{property.data[propertyvalue]}</td>
          ))}
        </tr>
      </>
    );
  };

  return (
    <div>
      <table style={{ width: "100%" }}>
        <>
          {generatePropertyRows("Property Category","category")}
          {generatePropertyRows("Property Type","type")}
          {generatePropertyRows("Property Area (Sq Ft)","property_area")}
          {generatePropertyRows("No of Floors","no_of_floors")}
          {generatePropertyRows("No of Rooms","no_of_rooms")}
          {generatePropertyRows("Country","country")}
          {generatePropertyRows("Location","address")}
        </>
      </table>
    </div>
  );
}

export default AccomTableComonent;

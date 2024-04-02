import React, { useEffect, useState } from "react";
import "../../common/card.scss";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { adminSelector } from "../../../redux/slice/adminSlice";

function AccomTable({ tabledata }) {
  const { accomCompareInfo = [] } = useSelector(adminSelector);


  const generatePropertyRows = (propertyKey, propertyvalue) => {
    return (
      <>
        <tr className="comp_tr" key={propertyKey}>
          <th className="comp_th">{propertyKey}</th>
          {accomCompareInfo?.map((property, index) => (
            <td className="comp_td" key={index}>
              {property?.data[propertyvalue][propertyvalue]
                ? property?.data[propertyvalue][propertyvalue]
                : property?.data[propertyvalue]}
              {/* {property?.data[propertyvalue]} */}
            </td>
          ))}
        </tr>
      </>
    );
  };

  return (
    <div>
      <table className="table_comapre" style={{ width: "100%" }}>
        <>
          {tabledata?.map(({ label, id }) => {
            return generatePropertyRows(label, id);
          })}
        </>
      </table>
    </div>
  );
}

export default AccomTable;

export const AccordionComp = ({ children, tabledata }) => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        sx={{ backgroundColor: "#e7f1ff", color: "#0c63e4" }}
        expandIcon={<ExpandMoreIcon sx={{ color: "#0c63e4" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{children}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AccomTable tabledata={tabledata} />
      </AccordionDetails>
    </Accordion>
  );
};

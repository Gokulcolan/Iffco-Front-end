import React from "react";

import {AccordionComp} from "../accordioncomp"
import {
  amenitiescomparisontabledata,
  Expenditurecomparisontabledata,
  pricecomparisontabledata,
  propertytabledata,
} from "../../../utils/constants/accordionData";

function AccomCompareTable() {
  return (
    <div>
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          sx={{ backgroundColor: "#e7f1ff", color: "#0c63e4" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#0c63e4" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Property wise Comparison</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccomTableComonent />
        </AccordionDetails>
      </Accordion> */}

      {/* <Accordion defaultExpanded>
        <AccordionSummary
          sx={{ backgroundColor: "#e7f1ff", color: "#0c63e4" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#0c63e4" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Price Comparison</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion> */}
{/* 
      <AccordionComp tabledata={propertytabledata}>
        Property wise Comparison
      </AccordionComp> */}
      
      <AccordionComp tabledata={pricecomparisontabledata}>
        Price Comparison
      </AccordionComp>
      {/* <AccordionComp tabledata={Expenditurecomparisontabledata}>
        Expenditure Comparison
      </AccordionComp>
      <AccordionComp tabledata={amenitiescomparisontabledata}>
        Amenities Comparison
      </AccordionComp> */}

      {/* <Accordion defaultExpanded>
        <AccordionSummary
          sx={{ backgroundColor: "#e7f1ff", color: "#0c63e4" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#0c63e4" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Expenditure Comparison</Typography>
        </AccordionSummary>
      </Accordion> */}
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          sx={{ backgroundColor: "#e7f1ff", color: "#0c63e4" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#0c63e4" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Amenities Comparison</Typography>
        </AccordionSummary>
        
      </Accordion> */}
    </div>
  );
}

export default AccomCompareTable;

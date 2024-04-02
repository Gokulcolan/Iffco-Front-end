import React, { useState } from "react";
import AccomCompareModal from "../../common/Modal/AccomCompareModal";
import "../../common/Modal/AddRomm.css";

function AccomCompareCard({ homeimage, setAccordionDisplay }) {
  const [openAccom, setOpenAccom] = useState(false);

  const handleCompareAccom = () => {
    setOpenAccom(true);
  };

  const handleModalSubmit = () => {
    setAccordionDisplay(true);
    setOpenAccom(false);
  };
  
  return (
    <div
      className="comparecards"
      style={{ display: "flex", paddingTop: "30px" }}
    >
      <div style={{ display: "flex", cursor: "pointer" }}>
        <div
          onClick={handleCompareAccom}
          style={{
            border: "1px solid silver",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <div className="w-100" style={{}}>
              <img
                style={{
                  width: "25%",
                }}
                src={homeimage}
              />
            </div>
            <div style={{ paddingTop: "50px" }}>
              {" "}
              <span style={{ color: "gray", fontSize: "15px" }}>
                Select Property
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="vs">
        <div
          style={{
            width: "100%",

            backgroundColor: "#E22D2C",
            padding: "4px 7px",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "550",
              fontSize: "14px",
            }}
          >
            VS
          </span>
        </div>
      </div>
      <div style={{ display: "flex", cursor: "pointer" }}>
        <div
          onClick={handleCompareAccom}
          style={{
            border: "1px solid silver",
            borderRadius: "10px",

            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <div className="w-100" style={{}}>
              <img
                style={{
                  width: "25%",
                }}
                src={homeimage}
              />
            </div>
            <div style={{ paddingTop: "50px" }}>
              {" "}
              <span style={{ color: "gray", fontSize: "15px" }}>
                Select Property
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="vs">
        <div
          style={{
            width: "100%",
            backgroundColor: "#E22D2C",
            padding: "4px 7px",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "550",
              fontSize: "14px",
            }}
          >
            VS
          </span>
        </div>
      </div>
      <div
        onClick={handleCompareAccom}
        style={{
          border: "1px solid silver",
          borderRadius: "10px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4px",
          }}
        >
          <div className="w-100" style={{}}>
            <img
              style={{
                width: "25%",
              }}
              src={homeimage}
            />
          </div>
          <div style={{ paddingTop: "50px" }}>
            {" "}
            <span style={{ color: "gray", fontSize: "15px" }}>
              Select Property
            </span>
          </div>
        </div>
      </div>

      <AccomCompareModal
        openAccom={openAccom}
        setOpenAccom={setOpenAccom}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}

export default AccomCompareCard;

// export const AccomVsCard = ({ homeimage, setAccordionDisplay }) => {
//   const [openAccom, setOpenAccom] = useState(false);

//   const handleCompareAccom = () => {
//     setOpenAccom(true);
//   };
//   const handleModalSubmit = () => {
//     setAccordionDisplay(true);
//     setOpenAccom(false);
//   };
//   return (
//     <div style={{ paddingTop: "30px", cursor: "pointer" }}>
//       <div
//         onClick={handleCompareAccom}
//         style={{
//           border: "1px solid silver",
//           borderRadius: "10px",
//
//           textAlign: "center",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             paddingTop: "5rem",
//           }}
//         >
//           <div className="w-100">
//             <img
//               style={{
//                 width: "25%",
//               }}
//               src={homeimage}
//             />
//           </div>
//           <div style={{ paddingTop: "50px" }}>
//             {" "}
//             <span style={{ color: "gray", fontSize: "15px" }}>
//               Select Property
//             </span>
//           </div>
//         </div>
//       </div>
//       <AccomCompareModal
//         openAccom={openAccom}
//         setOpenAccom={setOpenAccom}
//         onSubmit={handleModalSubmit}
//       />
//     </div>
//   );
// };

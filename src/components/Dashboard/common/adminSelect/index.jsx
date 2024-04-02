
import "./adminSelect.scss"
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function AdminSelect({menuItemArr=[]}) {
//   const [data, setData] = React.useState('');

//   const handleChange = (event) => {
//     setData(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">{data}</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={data}
//           label="Bu-hR"
//           onChange={handleChange}
//         >
//             {menuItemArr.map((menuItem,index)=>{
//                 return <MenuItem value={menuItem.value}>{menuItem.item}</MenuItem>
//             })}
         
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

const AdminSelect = ({menuItemArr})=>{
    const selectData = [
        {
          item: "BU – HR",
          value: "bu-hr",
        },
        {
          item: "International Foodstuffs Co L.L.C, Sharjah",
          value: "bu-hr",
        },
        {
          item: "Shama Food Industries LLC",
          value: "bu-hr",
        },
        {
          item: "Awal Chemicals FZE",
          value: "bu-hr",
        },
      ];
    return(
        <div style={{display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: "20px"}}>
            <label>Select a BU-HR:</label>
            <select className="adminSelectContainer">
                {selectData.map((menuitem)=>{
                    return <option value={menuitem.value}>{menuitem.item}</option>
                })}
            </select>

       

        </div>
    )
}

export default AdminSelect;
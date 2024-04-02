import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomTable = ({ th, td }) => {

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {th.map((val, i) => {
                                return (
                                    <TableCell key={i} >{val.label}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {td.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))} */}
                        {td.map((val, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        {val.sno}
                                    </TableCell>
                                    <TableCell>
                                        {val.RoomNo}
                                    </TableCell>
                                    <TableCell>
                                        {val.RoomType}
                                    </TableCell>
                                    <TableCell>
                                        {val.NoofResidents}
                                    </TableCell>
                                    <TableCell>
                                        {val.BathroomAttatched}
                                    </TableCell>
                                    <TableCell>
                                        {val.Amenities}
                                    </TableCell>
                                    <TableCell>
                                        {val.Status}
                                    </TableCell>
                                    <TableCell>
                                        {val.Action}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CustomTable
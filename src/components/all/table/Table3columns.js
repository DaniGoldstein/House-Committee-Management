


import { useState, useEffect } from 'react';


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Table3columns({th1,th2,th3,arrContent}) {
  // var valuesArray= Object.values(arrContent);
  // console.log(valuesArray);
  return (
    <div>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead >
            <TableRow>
              <StyledTableCell align="center">{th1}</StyledTableCell>
              <StyledTableCell align="center">{th2}</StyledTableCell>
              <StyledTableCell align="center">{th3}</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody >
            {arrContent && arrContent.length > 0 && arrContent.map((row) => (
            <>   
              <StyledTableRow >
                <StyledTableCell align="center">
                   {Object.values(row)[0]}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                {Object.values(row)[1]}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                {Object.values(row)[2] && Object.values(row)[2]}
                </StyledTableCell>
              </StyledTableRow></>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

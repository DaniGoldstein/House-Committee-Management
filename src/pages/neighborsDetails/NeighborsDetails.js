
import buildings from '../../data/buildings.json';
import style from './style.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

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




export default function NeighborsDetails() {

  const [{ neighbors }] = buildings;


  useEffect(() => {
    getAllNeighborsDetails();
  }, []);

  const [neighborsDetails, setNeighborsDetails] = useState([]);

  async function getAllNeighborsDetails() {
   
    // var element =  Cookies.set('token', "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG4iLCJpYXQiOjE3MDc3NDI3OTR9.SPpSz9MSn4N0yxD0A44fTqr0h5hxLqTU8OS5X-C2gGQ", { expires: 7, secure: true });
    // console.log(Cookies.get('token'));
    try {

      const response = await axios.get('http://localhost:3535/building/neighborsDetails', {
        headers: {authtoken:Cookies.get('token') }


      });
      setNeighborsDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching neighbors details:", error);
    }
  }

  // async function getAllNeighborsDetails(){

  //   await axios.get('http://localhost:3535/neighbors',
  //   {headers:{"buildingPassword":"3a"}}).then((data)=>console.log(data)).catch(err=>console.log(err))}


  return (
    <div >
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead >
            <TableRow>
              <StyledTableCell align="center">שם</StyledTableCell>
              <StyledTableCell align="center">טלפון</StyledTableCell>
              <StyledTableCell align="center">אימייל</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody >
            {neighborsDetails.length > 0 && neighborsDetails.map((row) => (
              <StyledTableRow >
                <StyledTableCell align="center">
                  {row.fName + " " + row.lName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.phone}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.email && row.email}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

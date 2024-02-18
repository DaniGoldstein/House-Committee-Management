
import style from './style.module.css';
import { useState, useEffect,useContext,createContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Table3columns from '../../components/all/table/Table3columns';
import allBuildingContext from '../../BuildingContext'




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

  
const {allBuildingDetails} = useContext(allBuildingContext);
console.log(allBuildingDetails,"Building");

//  const [neighborsDetails, setNeighborsDetails] = useState();

//   const { neighbors } = allBuildingDetails;
//   setNeighborsDetails(neighbors);


  // useEffect(() => {
  //   allBuildingDetails && setNeighborsDetails(allBuildingDetails.neighbors);
   
  //  console.log(neighborsDetails ,1234); 
   
  // }, []);



  // async function getAllNeighborsDetails() {

  //   // var element =  Cookies.set('token', "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG4iLCJpYXQiOjE3MDc3NDI3OTR9.SPpSz9MSn4N0yxD0A44fTqr0h5hxLqTU8OS5X-C2gGQ", { expires: 7, secure: true });
  //   // console.log(Cookies.get('token'));
  //   try {

  //     const response = await axios.get('http://localhost:3535/building/neighborsDetails', {
  //       headers: { authtoken: Cookies.get('token') }


  //     });

  //     setNeighborsDetails(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching neighbors details:", error);
  //   }
  // }

 


  return (
    <div >
      <Table3columns th1={"שם"} th2={"טלפון"} th3={"אמייל"}
       arrContent={allBuildingDetails && allBuildingDetails.neighbors}/>
    </div>
  );
}

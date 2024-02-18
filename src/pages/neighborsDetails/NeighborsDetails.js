
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

  const [neighborsDetails, setNeighborsDetails] = useState();


  useEffect(() => {
    allBuildingDetails && setNeighborsDetails(allBuildingDetails.neighbors);  
   
  }, [allBuildingDetails]);




  return (
    <div >
      <Table3columns th1={"שם"} th2={"טלפון"} th3={"אמייל"}
       arrContent={ neighborsDetails}/>
    </div>
  );
}

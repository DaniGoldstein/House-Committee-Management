
import buildings from '../../data/buildings.json'
import neighbors from '../../data/neighbors.json'
import style from './style.module.css'
import Table3columns from '../../components/all/table/Table3columns';
import allBuildingContext from '../../BuildingContext';
import { useContext,useState,useEffect } from 'react';

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




export default function NeighborsMessages() {

 const {allBuildingDetails,setAllBuildingDetails} = useContext(allBuildingContext);
console.log(allBuildingDetails,"Building");

  const [neighborsMessages, setNeighborsMessages] = useState();


  useEffect(() => {
    allBuildingDetails && setNeighborsMessages(allBuildingDetails.neighborsMessages
        );  
   
  }, [allBuildingDetails]);
    return (
        <div>
            <Table3columns th1={"שם"} th2={"הודעה"} th3={"תאריך"} arrContent={neighborsMessages}/>
            {/* <TableContainer component={Paper}  */}
            {/* // style={{width:"100%", overflowX:"auto",}}  */}
          
                {/* <Table sx={{ minWidth: 300 }} aria-label="customized table">
                    <TableHead >
                        <TableRow>
                            <StyledTableCell align="center">שם</StyledTableCell>
                            <StyledTableCell align="center">הודעה</StyledTableCell>
                            <StyledTableCell align="center">תאריך</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody >
                        {buildings[0].neighbors && buildings[0].neighbors.map((neighbor) => (<>
                            {neighbor.messages.length > 0 && neighbor.messages.map((message)=><>
                                <StyledTableRow > <StyledTableCell align="center">
                                {neighbor.fName + " " + neighbor.lName}
                            </StyledTableCell>


                                <StyledTableCell component="th" scope="row" align="center">
                                    {message.title}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {message.date}
                                </StyledTableCell>
                            </StyledTableRow> </>)
                            
                            }</>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}

            {/* {buildings[0] && buildings[0].neighbors.map((neighbor, index) => (
                <div key={index}>
                    {neighbor.messages.length > 0 && <> <div >{neighbor.fName} {neighbor.lName}</div>
                        <div>{neighbor.messages.map((message) => <div></div>)}</div>
                        <div>{neighbor.messages.join(', ')}</div> </>}

                </div>
            ))} */}
        </div>
    )
}

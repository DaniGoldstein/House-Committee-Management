
import style from './style.module.css';
import { useState, useEffect,useContext,createContext } from 'react';
import Table3columns from '../../components/all/table/Table3columns';
import allBuildingContext from '../../BuildingContext'









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

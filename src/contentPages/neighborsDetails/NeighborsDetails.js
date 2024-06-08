
import style from './style.module.css';
import { useState, useEffect, useContext, createContext } from 'react';
import Table3columns from '../../components/table/Table3columns';
import allBuildingContext from '../../BuildingContext'









export default function NeighborsDetails() {


  const { allBuildingDetails } = useContext(allBuildingContext);
  console.log(allBuildingDetails, "Building");

  const [neighborsDetails, setNeighborsDetails] = useState();


  useEffect(() => {
    allBuildingDetails && setNeighborsDetails(allBuildingDetails.neighbors);

  }, [allBuildingDetails]);




  return (
    <div >
      <h1 class=" text-2xl font-semibold">   פרטי דיירים</h1>

      <Table3columns th1={"שם"} th2={"טלפון"} th3={"אמייל"}
        arrContent={neighborsDetails} />
    </div>
  );
}

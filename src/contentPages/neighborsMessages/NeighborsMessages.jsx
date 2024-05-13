
import style from './style.module.css'
import Table3columns from '../../components/all/table/Table3columns';
import allBuildingContext from '../../BuildingContext';
import { useContext,useState,useEffect } from 'react';




export default function NeighborsMessages() {

const {allBuildingDetails,setAllBuildingDetails} = useContext(allBuildingContext);


  const [neighborsMessages, setNeighborsMessages] = useState();


  useEffect(() => {
    allBuildingDetails && setNeighborsMessages(allBuildingDetails.neighborsMessages);
          
   
  }, [allBuildingDetails]);
    return (
        <div>
                      <h1 class=" text-2xl font-semibold">   הודעות שכנים</h1>

            <Table3columns th1={"שם"} th2={"הודעה"} th3={"תאריך"} arrContent={neighborsMessages}/>
           
        </div>
    )
}

import React from 'react';
import AdminNavbar from './adminNavbar/AdminNavbar';
import AdminContent from './adminContent/AdminContent';
import allBuildingContext from '../../BuildingContext';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function AdminLayuot() {

  const fetchAllData = async () => {
    console.log(Cookies.get('token'));
    try {
      const response = await axios.get('http://localhost:3535/homePortal/neighborsDetails', {
        headers: { authtoken: Cookies.get('Token') }

      });


      setAllBuildingDetails(response.data);
      console.log(response.data, "from App",);
    } catch (error) {
      console.error("Error fetching neighbors details:", error);
    }
  };


useEffect(() => {
 

  fetchAllData();

}, []);

  const [allBuildingDetails, setAllBuildingDetails] = useState();
  return (
   <>
   <allBuildingContext.Provider value={{ allBuildingDetails, setAllBuildingDetails,fetchAllData}}>
   <AdminNavbar/>
   <AdminContent/>
   </allBuildingContext.Provider>
   </>
  )
}

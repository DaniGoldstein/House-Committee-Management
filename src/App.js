import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { useState,  useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import allBuildingContext from './BuildingContext';

import Layout from './layout';



function App() {


const [allBuildingDetails,setAllBuildingDetails]=useState();
 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3535/building/neighborsDetails', {
        headers: { authtoken: Cookies.get('token') }
      });

      setAllBuildingDetails(response.data);
      console.log(response.data, "from App");
    } catch (error) {
      console.error("Error fetching neighbors details:", error);
    }
  };

  fetchData(); 

}, []);

  return (
    <div>
      <allBuildingContext.Provider value={{allBuildingDetails,setAllBuildingDetails}}>
      <Routes>
        <Route path='/homePortal/*' element={<Layout />}></Route>
      </Routes>
      </allBuildingContext.Provider>
    </div>
  );
}

export default App;

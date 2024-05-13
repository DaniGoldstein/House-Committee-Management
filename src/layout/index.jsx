import { useEffect, useState } from 'react'
import allBuildingContext from '../BuildingContext';
import axios from 'axios';
import Cookies from 'js-cookie';

import Header from './header/Header'
import Content from './content/Content';
import Navbar from './navbar/Navbar';





function Layout() {


  const [allBuildingDetails, setAllBuildingDetails] = useState();
 
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


  return (

    <>
      <allBuildingContext.Provider value={{ allBuildingDetails, setAllBuildingDetails, fetchAllData }}>
        <Header />
        <Content />
        <Navbar />
      </allBuildingContext.Provider>
    </>
  )
}

export default Layout

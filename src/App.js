import { Route, Routes} from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import allBuildingContext from './BuildingContext';
import Login from './login/Login';
import Layout from './layout';



function App() {


  // const [allBuildingDetails, setAllBuildingDetails] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(Cookies.get('token'));
  //     try {
  //       const response = await axios.get('http://localhost:3535/building/neighborsDetails', {
  //         headers: { authtoken: Cookies.get('token') }

  //       });


  //       setAllBuildingDetails(response.data);
  //       console.log(response.data, "from App",);
  //     } catch (error) {
  //       console.error("Error fetching neighbors details:", error);
  //     }
  //   };

  //   fetchData();

  // }, []);

  return (
    <div>
        <Routes>
        <Route path='/homePortal' element={<Login/>}></Route>
          <Route path='/homePortal/*' element={<Layout />}></Route>
        </Routes>
    
    </div>
  );
}

export default App;

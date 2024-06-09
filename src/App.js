import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import UserRegistration from './login/userRegistration/UserRegistration';
import BuildingRegistration from './login/buildingRegistration/BuildingRegistration';
import Login from './login/login/Login';
import Layout from './layout';
import AdminLayout from'./admin/adminLayout'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/homePortal/signUp' element={<UserRegistration />}></Route>
        <Route path='/homePortal/signBuilding' element={<BuildingRegistration />}></Route>
        <Route path='/homePortal/*' element={<Layout />}></Route>
        <Route path='/adminPage/*' element={<AdminLayout/>}></Route>
      </Routes>

    </div>
  );
}

export default App;

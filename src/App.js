import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import UserRegistration from './login/userRegistration/UserRegistration';
import Login from './login/Login';
import Layout from './layout';



function App() {

  return (
    <div>
      <Routes>
        <Route path='/homePortal/login' element={<Login />}></Route>
        <Route path='/homePortal/signUp' element={<UserRegistration />}></Route>
        <Route path='/homePortal/*' element={<Layout />}></Route>
      </Routes>

    </div>
  );
}

export default App;

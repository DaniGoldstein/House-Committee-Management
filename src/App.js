import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Layout from './layout';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/homePortal/*' element={<Layout />}></Route>
      </Routes>

    </div>
  );
}

export default App;

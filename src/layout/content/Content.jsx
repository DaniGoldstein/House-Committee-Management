import React from 'react'
import style  from './style.module.css'
import { Route, Routes } from 'react-router'
import Messages from '../../pages/messages/Messages'
import PaymentDetails from '../../pages/paymentDetails/PaymentDetails'
import NeighborsDetails from '../../pages/neighborsDetails/NeighborsDetails'
import NeighborsMessages from '../../pages/neighborsMessages/NeighborsMessages'
export default function Content() {
  return (<>
       
       
   

          <div className={style.contentContainer}>
      <div className={style.contentBox}>
       <h1>test branch</h1>
        <p className={style.contentText}>
        <Routes>
<Route path='homePortal/messages' element={<Messages/>}>   </Route>
<Route path='homePortal/neighborsMessages' element={<NeighborsMessages/>}>   </Route>
<Route path='homePortal/paymentDetails' element={<PaymentDetails/> }></Route>
/* <Route path='homePortal/neighborsDetails' element={<NeighborsDetails/> }></Route> */
          </Routes>
          
        </p>
      </div>
    </div>
    </>
  )
}

import React from 'react'
import style from './style.module.css'
import { Route, Routes } from 'react-router'
import MainMessages from '../../contentPages/mainMessages/MainMessages'
import PaymentDetails from '../../contentPages/paymentDetails/PaymentDetails'
import NeighborsDetails from '../../contentPages/neighborsDetails/NeighborsDetails'
import NeighborsMessages from '../../contentPages/neighborsMessages/NeighborsMessages'
import NewMessage from '../../contentPages/newMessage/NewMessage'
import DeleteMessage from '../../contentPages/deleteMessages/DeleteMessage'
export default function Content() {

<<<<<<< HEAD
          <div className={style.contentContainer}>
      <div className={style.contentBox}>
       <h1>test branch</h1>
        <p className={style.contentText}>
        <Routes>
<Route path='homePortal/messages' element={<Messages/>}>   </Route>
<Route path='homePortal/neighborsMessages' element={<NeighborsMessages/>}>   </Route>
<Route path='homePortal/paymentDetails' element={<PaymentDetails/> }></Route>
/* <Route path='homePortal/neighborsDetails' element={<NeighborsDetails/> }></Route> */
=======




  return (<>




    <div className={style.contentContainer}>
       <div className={style.contentBox}>

       <p className={style.contentText}> 
          <Routes>
            <Route path='/' element={<MainMessages />}>   </Route>
            <Route path='/neighborsMessages' element={<NeighborsMessages />}>   </Route>
            <Route path='/paymentDetails' element={<PaymentDetails />}></Route>
            <Route path='/neighborsDetails' element={<NeighborsDetails />}></Route>
            <Route path='/newMessage' element={<NewMessage/>}></Route>
            <Route path='/deleteMessage' element={<DeleteMessage/>}></Route>
>>>>>>> 0d7517a62f32b871079dac9e195e225e640e0ae4
          </Routes>

        </p>
       </div> 
    </div>
  </>
  )
}

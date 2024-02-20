import React from 'react'
import style from './style.module.css'
import { Route, Routes } from 'react-router'
import MainMessages from '../../pages/mainMessages/MainMessages'
import PaymentDetails from '../../pages/paymentDetails/PaymentDetails'
import NeighborsDetails from '../../pages/neighborsDetails/NeighborsDetails'
import NeighborsMessages from '../../pages/neighborsMessages/NeighborsMessages'
import NewMessage from '../../pages/newMessage/NewMessage'
export default function Content() {





  return (<>




    <div className={style.contentContainer}>
      <div className={style.contentBox}>

        <p className={style.contentText}>
          <Routes>
            <Route path='/mainMessages' element={<MainMessages />}>   </Route>
            <Route path='/neighborsMessages' element={<NeighborsMessages />}>   </Route>
            <Route path='/paymentDetails' element={<PaymentDetails />}></Route>
            <Route path='/neighborsDetails' element={<NeighborsDetails />}></Route>
            <Route path='/newMessage' element={<NewMessage/>}></Route>
          </Routes>

        </p>
      </div>
    </div>
  </>
  )
}

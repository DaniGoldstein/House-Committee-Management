import React from 'react'
import style from './style.module.css'
import { Route, Routes } from 'react-router'
import NewMainMessage from '../../adminContentPages/newMainMessage/NewMainMessage'
import DeleteMainMessages from '../../adminContentPages/deleteMainMessages/DeleteMainMessages'
export default function AdminContent() {






  return (<>




    <div className={style.contentContainer}>
       <div className={style.contentBox}>

       <p className={style.contentText}> 
          <Routes> 
            <Route path='newMainMessage' element={<NewMainMessage/>}>   </Route>
            <Route path='deleteMainMessage' element={<DeleteMainMessages/>}>   </Route>
          </Routes>

        </p>
       </div> 
    </div>
  </>
  )
}

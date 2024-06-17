import React from 'react'
import style from './style.module.css'
import { Route, Routes } from 'react-router'
import NewMainMessage from '../../adminContentPages/newMainMessage/NewMainMessage'
export default function AdminContent() {






  return (<>




    <div className={style.contentContainer}>
       <div className={style.contentBox}>

       <p className={style.contentText}> 
          <Routes> 
            <Route path='newMainMessage' element={<NewMainMessage/>}>   </Route>
        
          </Routes>

        </p>
       </div> 
    </div>
  </>
  )
}

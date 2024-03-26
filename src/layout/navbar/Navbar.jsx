import React, { useState } from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom';





export default function Navbar() {

  const [displayMessageNav, setDisplayMessageNav] = useState("none");
  return (


    <div className={style.sidebar}>
      <ul>
        <li>
          <Link to="messages" className={style.mainSidebar}>הודעות    ועד-הבית</Link>
        </li>
        <li>
          <Link to="neighborsMessages" className={style.mainSidebar}>הודעות דיירים</Link>
        </li>
        <div onMouseEnter={() => setDisplayMessageNav("block")}
             onMouseLeave={() => setDisplayMessageNav("none")}>
          <li className={style.mainSidebar} >
            ההודעות שלי
            <ul style={{ display: displayMessageNav }}>

              <li>
                <Link to="newMessage" className={style.subSidebar}>  צור הודעה חדשה </Link>
              </li>
              <li>
                <Link to="deleteMessage" className={style.subSidebar}>  מחק הודעה קיימת</Link>
              </li>
            </ul>
          </li>
        </div>
        <li>
          <Link to="/about" className={style.mainSidebar}>דוחו"ת כספיים</Link>
        </li>

        <li>
          <Link to="/about" className={style.mainSidebar}>    פירוט תשלומים </Link>
        </li>
        <li>
          <Link to="neighborsDetails" className={style.mainSidebar}>    פרטי דיירים</Link>
        </li>
        <li>
          <Link to="/about" className={style.mainSidebar}>    עדכן פרטי תשלום</Link>
        </li>
      </ul>
    </div>
  );

};



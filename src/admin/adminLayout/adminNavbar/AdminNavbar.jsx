import React from 'react'
import { Link } from 'react-router-dom';
import style from './style.module.css'

export default function AdminNavbar() {
  return (
    <div className={style.sidebar}>
    <ul>
      <li>
        <Link to="newMainMessage" className={style.mainSidebar}>צור הודעת ועד-הבית</Link>
      </li>
      <li>
        <Link to="deleteMainMessage" className={style.mainSidebar}>מחק הודעות וועד בית </Link>
      </li>
    
      <li>
        <Link to="/about" className={style.mainSidebar}>מחק הודעות דיירים </Link>
      </li>

      <li>
        <Link to="/about" className={style.mainSidebar}>   הסר דייר </Link>
      </li>
      <li>
        <Link to="neighborsDetails" className={style.mainSidebar}>    העבר הרשאת מנהל </Link>
      </li>
      <li>
        <Link to="/about" className={style.mainSidebar}>      </Link>
      </li>
    </ul>
  </div>
  )
}

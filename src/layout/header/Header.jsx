import React, { useContext } from 'react'
import style from './style.module.css'
import allBuildingContext from '../../BuildingContext'


export default function Header() {

  const {allBuildingDetails} =useContext(allBuildingContext);
  console.log(allBuildingDetails);
  return (
    <div className={style.header}>
 {allBuildingDetails&&allBuildingDetails.address.city+"  "
 +allBuildingDetails.address.st+"  "
 +allBuildingDetails.address.houseNumber}
    </div>
  )
}

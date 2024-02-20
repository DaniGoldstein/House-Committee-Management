import React, { useState } from 'react'
import axios from 'axios';
// import { useContext } from 'react'

import buildings from '../../data/buildings.json';



export default function MainMessages() {

  const [messages,setMessages]=useState('');

   async function getMainMessages () {
    const response= await axios.get()
   };
  




  return (

    <div>
  {buildings[0] && buildings[0].neighbors.map((neighbor, index) => (
    <div key={index}>
      <div className="">{neighbor.fName} {neighbor.lName}</div>
      <div>{buildings[0].date}</div>
      <div>
        {neighbor.messages.map((message, msgIndex) => (
          <div key={msgIndex}>{message.title}</div>
        ))}
      </div>
    </div>
  ))}
</div>

  );
}

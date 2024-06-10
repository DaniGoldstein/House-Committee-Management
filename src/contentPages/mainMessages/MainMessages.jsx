import React, { useState, useContext, useEffect } from 'react'

import allBuildingContext from '../../BuildingContext';
import Table3columns from '../../components/table/Table3columns';
import Message from '../../components/message/Message';




export default function MainMessages() {

  const { allBuildingDetails } = useContext(allBuildingContext);

  const [messages, setMessages] = useState();


 
  useEffect(() => {console.log("useEffect in mainMessages");
    allBuildingDetails && console.log(allBuildingDetails.generalMessages,"from main messages");
    allBuildingDetails && setMessages(allBuildingDetails.generalMessages);
   
  },[allBuildingDetails])







  return (

    <div>
            <h1 class=" text-2xl font-semibold"> הודעות וועד הבית</h1>
      {messages && messages.length == 0 ? "אין הודעות" :
      
      
      messages && messages.map((message)=>   <div>
        <Message name="ועד הבית" date={message.date.slice(0,10)} content={message.title}/> <br></br>
        </div> )}

    </div>

  );
}

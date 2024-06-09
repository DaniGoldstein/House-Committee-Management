import React, { useState, useContext, useEffect } from 'react'

import allBuildingContext from '../../BuildingContext';
import Table3columns from '../../components/table/Table3columns';




export default function MainMessages() {

  const { allBuildingDetails } = useContext(allBuildingContext);

  const [messages, setMessages] = useState('');

  useEffect(() => {
    console.log("messages");
    allBuildingDetails && setMessages(allBuildingDetails.generalMessages);
   
  },[])







  return (

    <div>
            <h1 class=" text-2xl font-semibold"> הודעות וועד הבית</h1>
      {messages.length == 0 ? "אין הודעות" :
        <Table3columns th2={"הודעה"} th3={"תאריך"} arrContent={messages} />
      }

    </div>

  );
}

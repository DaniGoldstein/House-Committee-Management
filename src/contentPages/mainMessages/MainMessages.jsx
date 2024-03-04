import React, { useState, useContext, useEffect } from 'react'

import allBuildingContext from '../../BuildingContext';
import Table3columns from '../../components/all/table/Table3columns';




export default function MainMessages() {

  const { allBuildingDetails } = useContext(allBuildingContext);

  const [messages, setMessages] = useState('');

  useEffect(() => { setMessages(allBuildingDetails.generalMessages); }, [allBuildingContext])







  return (

    <div>
      {messages.length == 0 ? "אין הודעות" :
        <Table3columns th2={"הודעה"} th3={"תאריך"} arrContent={messages} />
      }

    </div>

  );
}

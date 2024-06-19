import React from 'react'
import { useState, useEffect, useContext } from 'react'
import adminContext from '../../AdminContext'
import axios from 'axios';

export default function DeleteMainMessages() {

  const { allBuildingDetails, setAllBuildingDetails, fetchAllData } = useContext(adminContext);
  const [generalMessage, setGeneralMessage] = useState();

  useEffect(() => {
    console.log(allBuildingDetails && allBuildingDetails.generalMessages, "use effect called");
    const mainMessages = allBuildingDetails && allBuildingDetails.generalMessages
      && allBuildingDetails.generalMessages

    setGeneralMessage(mainMessages)


    console.log(mainMessages, "main message");
  }, [allBuildingDetails]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let values = [];
    for (let pair of formData.entries()) {
      values.push(pair[1]);
    }
    console.log('Form values:', values);

sendDeletes(values);

  }

  const sendDeletes = async (deletesId) => {
console.log(deletesId,"deletes");
}




  return (
    <div>
      <form onSubmit={handleSubmit}>
        {allBuildingDetails &&
          allBuildingDetails.generalMessages &&


          allBuildingDetails.generalMessages.map((message) =>
            <div style={{ padding: '15px' }}>

              <input
                type="checkbox"
                value={message._id}
                name={`message_${message._Id}`}
              />
              <span style={{ padding: '15px' }}>{message.title}</span>

            </div>
          )}
        <button type="submit">מחק</button>
      </form>
    </div>
  )
}

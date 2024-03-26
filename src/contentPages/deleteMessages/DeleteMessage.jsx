import axios from 'axios';
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import allBuildingContext from '../../BuildingContext';
import style from './style.module.css';







export default function DeleteMessage() {
  const { allBuildingDetails, setAllBuildingDetails } = useContext(allBuildingContext);
  const [neighborMessages, setNeighborsMessages] = useState()

  let messagesToDelete = [];

  useEffect(() => {
    const filterUserMessages = allBuildingDetails &&
      allBuildingDetails.neighborsMessages.filter((message, key) => { return message.username === allBuildingDetails.userName })

    setNeighborsMessages(filterUserMessages)


    console.log(neighborMessages);
  }, [allBuildingDetails]);

  //   const handleDeleteMessage=(e) => {
  // messagesToDelete.push(e.target.value);
  // console.log(e.target.value);
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let values = [];
    for (let pair of formData.entries()) {
      values.push(pair[1]);
    }
    console.log('Form values:', values);
    sendDeletes(values);


  };

  const sendDeletes = async (messages) => {
    try {
      console.log(messages);
      axios.delete(`http://localhost:3535/homePortal/deleteMessages/${allBuildingDetails.userName}`, {
        messagesId: messages},
        { headers: { authtoken: Cookies.get('Token') } })
        
    }


    catch (error) {
      console.error("Error fetching neighbors details:", error);
    }


  }




  return (
    <div className={style.formContainer}>
      <h2>בחר הודעות למחיקה</h2>
      <form
        onSubmit={handleSubmit}
      >
        {neighborMessages && neighborMessages.map((message, key) =>
          <label>
            <input
              type="checkbox"
              value={message.messageId}
              name={`message_${message.messageId}`}
            />
            {message.title}
          </label>
        )}

        <button type="submit">מחק</button>
      </form>
    </div>
  )
}



import axios from 'axios';
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import allBuildingContext from '../../BuildingContext';
import style from './style.module.css';







export default function DeleteMessage() {
  const { allBuildingDetails, setAllBuildingDetails, fetchAllData } = useContext(allBuildingContext);
  const [neighborMessages, setNeighborsMessages] = useState()



  useEffect(() => {
    console.log("use effect called");
    const filterUserMessages = allBuildingDetails &&
      allBuildingDetails.neighborsMessages.filter((message, key) => { return message.username === allBuildingDetails.userName })

    setNeighborsMessages(filterUserMessages)


    console.log(neighborMessages);
  }, [allBuildingDetails]);

  //   const handleDeleteMessage=(e) => {
  // messagesToDelete.push(e.target.value);
  // console.log(e.target.value);
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let values = [];
    for (let pair of formData.entries()) {
      values.push(pair[1]);
    }
    console.log('Form values:', values);
    await sendDeletes(values);
    fetchAllData();
    console.log(allBuildingDetails);


  };

  const sendDeletes = async (messages) => {
    try {
      console.log(messages);
      const result = await axios.delete(`http://localhost:3535/homePortal/deleteMessages/${allBuildingDetails.userName}`,
        {
          headers: { authtoken: Cookies.get('Token') },
          data: { messagesId: messages }
        })

    }


    catch (error) {
      console.error("Error fetching neighbors details:", error);
    }


  }




  return (
    <div className={style.formContainer}>

      {neighborMessages && neighborMessages.length > 0 ?
        <h1 class=" text-2xl font-semibold">   בחר הודעות למחיקה</h1>
        : <h1 class=" text-2xl font-semibold">   אין לך הודעות</h1>

      }  <br></br> 
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

        {neighborMessages && neighborMessages.length > 0 && <button type="submit">מחק</button>
        }      </form>
    </div>
  )
}



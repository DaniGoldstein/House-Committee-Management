
import axios from 'axios';
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import allBuildingContext from '../../BuildingContext';
import styles from './style.module.css';







export default function DeleteMessage() {
  const { allBuildingDetails, setAllBuildingDetails, fetchAllData } = useContext(allBuildingContext);
  const [neighborMessages, setNeighborsMessages] = useState()



  useEffect(() => {
    console.log("use effect called");
    const filterUserMessages = allBuildingDetails &&
      allBuildingDetails.neighborsMessages.filter((message, key) => { return message.username === allBuildingDetails.userName })

    setNeighborsMessages(filterUserMessages)


    console.log(filterUserMessages);
  }, [allBuildingDetails]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let values = [];
    for (let pair of formData.entries()) {
      values.push(pair[1]);
    }
    console.log('Form values:', values);
    const deletes = await sendDeletes(values);
    console.log(deletes,"delete");
    await fetchAllData();
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
return result.data;
    }


    catch (error) {
      console.error("Error fetching neighbors details:", error);
    }
    

  }




  return (
    <div className={styles.formContainer}>
    {neighborMessages && neighborMessages.length > 0 ? (
        <h1 className="text-2xl font-semibold">בחר הודעות למחיקה</h1>
    ) : (
        <h1 className="text-2xl font-semibold">אין לך הודעות</h1>
    )}
    <br />
    <form onSubmit={handleSubmit} className={styles.form}>
        {neighborMessages && neighborMessages.map((message) => (
            <div key={message.messageId} className={styles.label}>
                <input
                    type="checkbox"
                    value={message.messageId}
                    name={`message_${message.messageId}`}
                    className={styles.checkbox}
                />
                <span>{message.title}</span>
            </div>
        ))}
        {neighborMessages && neighborMessages.length > 0 && (
            <button type="submit" className={styles.button}>מחק</button>
        )}
    </form>
</div>
  )
}



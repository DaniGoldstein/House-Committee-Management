import styles from './style.module.css';
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import adminContext from '../../AdminContext'
import axios from 'axios';
import Cookies from 'js-cookie';

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

    const deletes = await sendDeletes(values);
    fetchAllData();

  }

  const sendDeletes = async (deletesId) => {
    console.log(deletesId, "deletes");
    const response = await axios.delete(`http://localhost:3535/homePortal/deleteAdminMessages`,
      {
        headers: { authtoken: Cookies.get('Token') },
        data: { messagesId: deletesId }
      })

  }



  return (<>
    {  
    
        <div className={styles.container}>
         { allBuildingDetails && allBuildingDetails.generalMessages.length < 1 ?
          (            <h1 className="text-2xl font-semibold">אין לך הודעות</h1>

        ) : (            <h1 className="text-2xl font-semibold">בחר הודעות למחיקה</h1>

        )}

        {   allBuildingDetails && allBuildingDetails.generalMessages.length >= 1 ?
          (
          <form onSubmit={handleSubmit} className={styles.form}>
            {allBuildingDetails &&
              allBuildingDetails.generalMessages &&
              allBuildingDetails.generalMessages.map((message) => (
                <div key={message._id} className={styles.label}>
                  <input
                    type="checkbox"
                    value={message._id}
                    name={`message_${message._id}`}
                    className={styles.checkbox}
                  />
                  <span>{message.title}</span>
                </div>
              )
              )}
            <button type="submit" className={styles.button}>מחק</button>
          </form>):null}
        </div>}
  </>
  )
}

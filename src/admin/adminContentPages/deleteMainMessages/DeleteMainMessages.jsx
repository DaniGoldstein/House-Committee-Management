import React from 'react'
import { useState, useEffect, useContext } from 'react'
import adminContext from '../../AdminContext'

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

    // console.log(allBuildingDetails.generalMessages);
    return (
        <div><form>
            {allBuildingDetails &&
                allBuildingDetails.generalMessages &&

                
                allBuildingDetails.generalMessages.map((message) => 
                    <div style={{ padding: '15px' }}>
                    
                <input
                  type="checkbox"
                  value={message.messageId}
                  name={`message_${message.messageId}`}
                />
               <span style={{ padding: '15px' }}>{message.title}</span> 
              
              </div>
                )}
                </form>
        </div>
    )
}

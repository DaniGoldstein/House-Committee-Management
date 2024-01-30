import React from 'react'
// import { useContext } from 'react'

import buildings from '../../data/buildings.json';
// export default function Messages() {

//   // const { messages } = useContext(dataContext)


//   return (
//     <div> 
//        {buildings[0] && Object.values(buildings[0]).neighbors.map((neighbors,key) =>
      
//         <div>
//           <div className="">{neighbors.fName}</div>
//           <div className="">{neighbors.lName}</div>

//           <div>{buildings.date}</div> </div>)}
//     </div>
//   )
// }console.log(buildings[0]);


export default function Messages() {
  // const firstBuilding = buildings[0];

  return (
    <div>
      {buildings[0] && buildings[0].neighbors.map((neighbor, index) => (
        <div key={index}>
          <div className="">{neighbor.fName} {neighbor.lName}</div>
          <div>{buildings[0].date}</div>
          <div>{neighbor.messages.join(', ')}</div>
        </div>
      ))}
    </div>
  );
}

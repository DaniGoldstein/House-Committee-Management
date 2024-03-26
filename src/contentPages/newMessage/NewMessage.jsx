
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function NewMessage () {
  const [open, setOpen] = React.useState(false);
  const [inputErrors, setInputErrors] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  let message='';

  const handleClose = () => {
   
    if(message.length===0){
    setInputErrors("לא נרשמה הודעה")  
    setTimeout(() => {
      setInputErrors('')
      setOpen(false)
   }, 1000);
    }
      else { setOpen(false);}}

  

  const changeMessage = (e) => {
    const newMessage = e.target.value;
    console.log(newMessage.length);
    message = newMessage;
    console.log(message.length);
    if (newMessage.length >= 150) {
      setInputErrors(" עברת את ה-150 תווים");
      
    } else {
      setInputErrors('');
    
      
    }
  }
  

  async function sendMessageToServer(){
    if(message.length==0){
      return;};
    
    try{
       let result=axios.post('http://localhost:3535/building/neighborMessage',
       {title:message.substring(0,150)},
       {headers:{ authtoken: Cookies.get('Token')}});console.log(result.data);}

   catch(err){console.log(err);}
  }
    return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} style={{color:"black", borderColor:"black"}}>
            צור הודעה
      </Button>
      <Dialog
        open={open}
           onClose={handleClose}
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
      >
    
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <p style={{color:"red"}} id='lengthError'>{inputErrors}</p>
            <div>
              <textarea rows="4" cols="50" placeholder='ניתן לרשום עד 150 תווים' 
              onChange={changeMessage}></textarea>
           </div>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClose();sendMessageToServer()}}>שלח</Button>
         
         
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}



// export default function NewMessage () {
//   return (
//     <div>
     
//       <input type='text'></input>
//       <input type="submit"/>
//     </div>
//   )
// }

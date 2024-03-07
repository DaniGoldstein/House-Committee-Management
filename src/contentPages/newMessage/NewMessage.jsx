
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let message='';

  async function sendMessageToServer(){
    
    try{
   let result=axios.post('http://localhost:3535/building/neighborMessage',
   {title:message},
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
          <div>
            <textarea rows="4" cols="50" onChange={(e)=>{message=e.target.value; console.log(message);}}> </textarea>
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClose();sendMessageToServer()}}>Disagree</Button>
         
         
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

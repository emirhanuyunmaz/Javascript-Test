import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from 'react';
import { Fab } from '@mui/material';
import { apiContext } from '../../../context/apiContext';

export default function FormDialog({show=false}) {
  const {addData} = useContext(apiContext)

  const [open, setOpen] = useState(show);
  const [text,setText] = useState("")
  
  const handlerClickAdd = async () => {
    await addData({text:text,done:false})
    setText("")
  } 
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setText("")
    setOpen(false);
  };

  return (
    <div className='relative max-w-3xl'>
    <Fab onClick={handleClickOpen} color="primary" aria-label="add" className='!fixed bottom-10 md:right-1/4'>
        +
    </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent className='min-w-96'>
          
          <TextField
            autoFocus
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            margin="dense"
            id="name"
            name="Text"
            label="Text"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlerClickAdd} type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}